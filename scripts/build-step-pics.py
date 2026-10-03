#!/usr/bin/env python3
"""Copy step pictures into public/ and write src/data/step-pics.ts.

Images stay static files. The module only stores their public URLs.
"""

import json
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "step-pics"
DATA_OUT = ROOT / "src" / "data" / "step-pics.ts"
MANIFEST_OUT = ROOT / "scripts" / "step-pics" / "manifest.json"
VIDEO = "https://youtu.be/d6YOJxTfIeQ"


def clock_seconds(label: str) -> int:
    parts = [int(part) for part in label.split(":")]
    if len(parts) == 2:
        return parts[0] * 60 + parts[1]
    if len(parts) == 3:
        return parts[0] * 3600 + parts[1] * 60 + parts[2]
    raise SystemExit(f"bad video time: {label}")


def youtube_at(label: str) -> str:
    return f"{VIDEO}?t={clock_seconds(label)}"


def frame(
    image_name: str,
    caption: str,
    video_time: str,
    confidence: str,
    link: str,
    kind: str | None = None,
) -> dict:
    if confidence not in {"high", "medium"}:
        raise SystemExit(f"unexpected confidence: {confidence}")
    body = {
        "image": f"/step-pics/{image_name}",
        "caption": caption,
        "videoTime": video_time,
        "youtube_link": link,
        "confidence": confidence,
    }
    if kind:
        if kind == "fight":
            kind = "battle"
        if kind not in {"travel", "battle"}:
            raise SystemExit(f"unexpected extra kind: {kind}")
        body["kind"] = kind
    return body


def main() -> None:
    zip_path = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    if zip_path:
        with zipfile.ZipFile(zip_path) as archive:
            manifest = json.loads(archive.read("manifest.json"))
            OUT_DIR.mkdir(parents=True, exist_ok=True)
            for name in archive.namelist():
                if not name.startswith("pictures/") or not name.endswith(".jpg"):
                    continue
                dest = OUT_DIR / Path(name).name
                dest.write_bytes(archive.read(name))
        MANIFEST_OUT.parent.mkdir(parents=True, exist_ok=True)
        MANIFEST_OUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    else:
        manifest = json.loads(MANIFEST_OUT.read_text(encoding="utf-8"))

    route_text = (ROOT / "src" / "data" / "route.ts").read_text(encoding="utf-8")
    skipped = []
    pictures = []
    for step_id, item in manifest.items():
        if f'"id": "{step_id}"' not in route_text:
            skipped.append(step_id)
            continue
        kind = item["kind"]
        if kind == "fight":
            kind = "battle"
        if kind not in {"travel", "battle"}:
            raise SystemExit(f"{step_id}: unexpected kind {item['kind']}")
        if item["confidence"] not in {"high", "medium"}:
            raise SystemExit(f"{step_id}: unexpected confidence")
        image_name = Path(item["imagePath"]).name
        if not (OUT_DIR / image_name).is_file():
            raise SystemExit(f"missing image {image_name}")
        extras = []
        for extra in item.get("extraImages") or []:
            extra_name = Path(extra["imagePath"]).name
            if not (OUT_DIR / extra_name).is_file():
                raise SystemExit(f"missing extra image {extra_name}")
            extras.append(
                frame(
                    extra_name,
                    extra["caption"],
                    extra["videoTime"],
                    extra["confidence"],
                    youtube_at(extra["videoTime"]),
                    extra.get("kind"),
                )
            )
        pictures.append(
            {
                "stepId": step_id,
                "image": f"/step-pics/{image_name}",
                "caption": item["caption"],
                "kind": kind,
                "videoTime": item["videoTime"],
                "youtube_link": item["youtube_link"],
                "confidence": item["confidence"],
                "order": item["order"],
                **({"extraImages": extras} if extras else {}),
            }
        )

    pictures.sort(key=lambda picture: (picture["order"], picture["stepId"]))
    payload = {}
    for picture in pictures:
        step_id = picture["stepId"]
        body = {key: picture[key] for key in ("stepId", "image", "caption", "kind", "videoTime", "youtube_link", "confidence")}
        if picture.get("extraImages"):
            body["extraImages"] = picture["extraImages"]
        payload[step_id] = body

    DATA_OUT.write_text(
        "/** Generated from scripts/step-pics/manifest.json. Do not hand-edit. */\n"
        "export type PictureConfidence = \"high\" | \"medium\";\n"
        "export type PictureKind = \"travel\" | \"battle\";\n"
        "export type StepPictureFrame = {\n"
        "  image: string;\n"
        "  caption: string;\n"
        "  videoTime: string;\n"
        "  youtube_link: string;\n"
        "  confidence: PictureConfidence;\n"
        "  kind?: PictureKind;\n"
        "};\n"
        "export type StepPicture = {\n"
        "  stepId: string;\n"
        "  image: string;\n"
        "  caption: string;\n"
        "  kind: PictureKind;\n"
        "  videoTime: string;\n"
        "  youtube_link: string;\n"
        "  confidence: PictureConfidence;\n"
        "  extraImages?: StepPictureFrame[];\n"
        "};\n"
        "export const stepPics: Record<string, StepPicture> = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"pictures={len(payload)} skipped={len(skipped)} files={len(list(OUT_DIR.glob('*.jpg')))}")
    if skipped:
        print("skipped ids:")
        for step_id in skipped:
            print(" ", step_id)


if __name__ == "__main__":
    main()
