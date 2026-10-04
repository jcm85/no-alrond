/** Generated from scripts/step-pics/manifest.json. Do not hand-edit. */
export type PictureConfidence = "high" | "medium" | "low";
export type PictureKind = "travel" | "battle";
export type StepPictureFrame = {
  image: string;
  caption: string;
  videoTime: string;
  youtube_link: string;
  confidence: PictureConfidence;
  kind?: PictureKind;
};
export type StepPicture = {
  stepId: string;
  image: string;
  caption: string;
  kind: PictureKind;
  videoTime: string;
  youtube_link: string;
  confidence: PictureConfidence;
  /** Quiet "Approx. moment" tag. Curated jpg frames leave this unset. */
  approx?: boolean;
  /** Manifest source. "text-evidence" plus high confidence keeps a weak step untagged. */
  source?: string;
  extraImages?: StepPictureFrame[];
};
export const stepPics: Record<string, StepPicture> = {
  "throne-ch-1-1-84df79": {
    "stepId": "throne-ch-1-1-84df79",
    "image": "/step-pics/throne-ch-1-1-84df79.jpg",
    "caption": "Boss: Pirro. The fight starts here; in the guide it is the step \"Turn 1 — Darkest Night\" (Pirro block). Last area banner before it: \"Brightlands / New Delsta\". This frame is from the first seconds of the battle (video 0:04:34).",
    "kind": "battle",
    "videoTime": "0:04:34",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=271",
    "confidence": "medium"
  },
  "throne-ch-1-1-76aaab": {
    "stepId": "throne-ch-1-1-76aaab",
    "image": "/step-pics/throne-ch-1-1-76aaab.jpg",
    "caption": "Entering Cape Cold: the area-name banner \"Winterlands / Cape Cold\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:07:21",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=438",
    "confidence": "medium"
  },
  "throne-ch-1-1-6f1b3c": {
    "stepId": "throne-ch-1-1-6f1b3c",
    "image": "/step-pics/throne-ch-1-1-6f1b3c.jpg",
    "caption": "Fast travel: open the world map and select New Delsta Harbour: Anchorage; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "0:08:27",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=505",
    "confidence": "medium"
  },
  "throne-ch-1-1-55eed8": {
    "stepId": "throne-ch-1-1-55eed8",
    "image": "/step-pics/throne-ch-1-1-55eed8.jpg",
    "caption": "Entering Western Tropu'hopu Traverse: the area-name banner \"Toto'haha / WesternTropu'hopu Travers\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:09:08",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=546",
    "confidence": "medium"
  },
  "throne-ch-1-1-f06d87": {
    "stepId": "throne-ch-1-1-f06d87",
    "image": "/step-pics/throne-ch-1-1-f06d87.jpg",
    "caption": "Fast travel: open the world map and select Beasting Bay: Anchorage; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "0:10:41",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=639",
    "confidence": "medium"
  },
  "throne-ch-1-1-22b194": {
    "stepId": "throne-ch-1-1-22b194",
    "image": "/step-pics/throne-ch-1-1-22b194.jpg",
    "caption": "Entering Cavern of Waves: the area-name banner \"Totohaha / Cavern of Waves\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:11:15",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=672",
    "confidence": "medium"
  },
  "throne-ch-1-1-a8a066": {
    "stepId": "throne-ch-1-1-a8a066",
    "image": "/step-pics/throne-ch-1-1-a8a066.jpg",
    "caption": "Entering Cropdale: the area-name banner \"Leaflands / Cropdale\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:12:42",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=759",
    "confidence": "medium"
  },
  "throne-ch-1-1-752857": {
    "stepId": "throne-ch-1-1-752857",
    "image": "/step-pics/throne-ch-1-1-752857.jpg",
    "caption": "Entering Oresrush: the area-name banner \"Wildlands / Oresrush\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:13:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=826",
    "confidence": "medium"
  },
  "throne-ch-1-1-8b95b8": {
    "stepId": "throne-ch-1-1-8b95b8",
    "image": "/step-pics/throne-ch-1-1-8b95b8.jpg",
    "caption": "Entering Ryu: the area-name banner \"Hinoeuma / Ryu\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:14:53",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=891",
    "confidence": "medium"
  },
  "throne-ch-1-1-b2f9ba": {
    "stepId": "throne-ch-1-1-b2f9ba",
    "image": "/step-pics/throne-ch-1-1-b2f9ba.jpg",
    "caption": "Entering Northern Conning Creek Coast: the area-name banner \"Harborlands / Northern Conning Creek Coa\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:16:12",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=970",
    "confidence": "medium"
  },
  "throne-ch-1-1-48b7f2": {
    "stepId": "throne-ch-1-1-48b7f2",
    "image": "/step-pics/throne-ch-1-1-48b7f2.jpg",
    "caption": "Entering Western Conning Creek Coast: the area-name banner \"Harborlands / WesternConningCreekCoa\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:16:39",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=997",
    "confidence": "medium"
  },
  "throne-ch-1-1-2fbe54": {
    "stepId": "throne-ch-1-1-2fbe54",
    "image": "/step-pics/throne-ch-1-1-2fbe54.jpg",
    "caption": "Entering Conning Creek: the area-name banner \"Harborlands / Conning Creek\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:17:12",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1030",
    "confidence": "medium"
  },
  "partitio-ch-2-1-9fbb5f": {
    "stepId": "partitio-ch-2-1-9fbb5f",
    "image": "/step-pics/partitio-ch-2-1-9fbb5f.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Oresrush (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:22:01",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1319",
    "confidence": "high"
  },
  "partitio-ch-2-1-d84c2b": {
    "stepId": "partitio-ch-2-1-d84c2b",
    "image": "/step-pics/partitio-ch-2-1-d84c2b.jpg",
    "caption": "Entering Southern Crackridge Wilds: the area-name banner \"Wildlands / Southern Crackridge Wilds\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:23:25",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1402",
    "confidence": "medium"
  },
  "partitio-ch-2-1-6c0536": {
    "stepId": "partitio-ch-2-1-6c0536",
    "image": "/step-pics/partitio-ch-2-1-6c0536.jpg",
    "caption": "Entering Western Crackridge Wilds: the area-name banner \"Wildlands / WesternCrackridge Wilds\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:24:35",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1472",
    "confidence": "medium"
  },
  "partitio-ch-2-1-04c7d7": {
    "stepId": "partitio-ch-2-1-04c7d7",
    "image": "/step-pics/partitio-ch-2-1-04c7d7.jpg",
    "caption": "Cross the wooden bridge heading right (east) to enter Crackridge; the \"Wildlands / Crackridge\" banner appears as you arrive.",
    "kind": "travel",
    "videoTime": "0:25:35",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1532",
    "confidence": "high"
  },
  "partitio-ch-2-1-d6adbe": {
    "stepId": "partitio-ch-2-1-d6adbe",
    "image": "/step-pics/partitio-ch-2-1-d6adbe.jpg",
    "caption": "Boss: Garnet. The fight starts here; in the guide it is the step \"Fight Garnet in the day.\" (Garnet block). Last area banner before it: \"Phys. Def. / $ Accuracy / * Critical\". This frame is from the first seconds of the battle (video 0:27:53).",
    "kind": "battle",
    "videoTime": "0:27:53",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1670",
    "confidence": "medium"
  },
  "partitio-ch-2-1-3e9c1b": {
    "stepId": "partitio-ch-2-1-3e9c1b",
    "image": "/step-pics/partitio-ch-2-1-3e9c1b.jpg",
    "caption": "Entering Borderfall: the area-name banner \"Crestlands / Borderfall\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:30:05",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1803",
    "confidence": "medium"
  },
  "partitio-ch-2-1-350fb1": {
    "stepId": "partitio-ch-2-1-350fb1",
    "image": "/step-pics/partitio-ch-2-1-350fb1.jpg",
    "caption": "Entering Montwise from Western Montwise Pass: climb the wide stone steps toward the upper right; the \"Crestlands / Montwise\" banner appears about a second later.",
    "kind": "travel",
    "videoTime": "0:31:37",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1895",
    "confidence": "medium"
  },
  "hikari-ch-2-1-8336ac": {
    "stepId": "hikari-ch-2-1-8336ac",
    "image": "/step-pics/hikari-ch-2-1-8336ac.jpg",
    "caption": "Entering Montwise: Underground Arena: the area-name banner \"Crestlands / Montwise: Underground Are\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:31:53",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1910",
    "confidence": "medium"
  },
  "hikari-ch-2-1-b939d4": {
    "stepId": "hikari-ch-2-1-b939d4",
    "image": "/step-pics/hikari-ch-2-1-b939d4.jpg",
    "caption": "Arena challenge: Gladiator. The fight starts here; in the guide it is the step \"Turn 1 — Spear x3\" (Gladiator block). Last area banner before it: \"Crestlands / Montwise: Underground Are\". This frame is from the first seconds of the battle (video 0:32:06).",
    "kind": "battle",
    "videoTime": "0:32:06",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1923",
    "confidence": "medium"
  },
  "hikari-ch-2-1-b35c33": {
    "stepId": "hikari-ch-2-1-b35c33",
    "image": "/step-pics/hikari-ch-2-1-b35c33.jpg",
    "caption": "Arena challenge: Gladiators. The fight starts here; in the guide it is the step \"Turn 1 — Ice Soulstone (M)\" (Gladiators block). Last area banner before it: \"Crestlands / Montwise: Underground Arel\". This frame is from the first seconds of the battle (video 0:32:48).",
    "kind": "battle",
    "videoTime": "0:32:48",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1965",
    "confidence": "medium"
  },
  "hikari-ch-2-1-461d0f": {
    "stepId": "hikari-ch-2-1-461d0f",
    "image": "/step-pics/hikari-ch-2-1-461d0f.jpg",
    "caption": "Arena challenge: Zeto the Butcher. The fight starts here; in the guide it is the step \"Turn 1 — Sword x3\" (Zeto the Butcher block). Last area banner before it: \"Crestlands / Montwise: Underground Arel\". This frame is from the first seconds of the battle (video 0:33:20).",
    "kind": "battle",
    "videoTime": "0:33:20",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=1997",
    "confidence": "medium"
  },
  "hikari-ch-2-1-0d325a": {
    "stepId": "hikari-ch-2-1-0d325a",
    "image": "/step-pics/hikari-ch-2-1-0d325a.jpg",
    "caption": "Arena challenge: Bandelam the Reaper (challenge). The fight starts here; in the guide it is the step \"Turn 1 — Slowing Sweep/Spear (if first on turn 2)\" (Bandelam the Reaper block). Last area banner before it: \"Crestlands / Montwise:UndergroundArel\". This frame is from the first seconds of the battle (video 0:34:10).",
    "kind": "battle",
    "videoTime": "0:34:10",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2047",
    "confidence": "medium"
  },
  "hikari-ch-2-1-d31835": {
    "stepId": "hikari-ch-2-1-d31835",
    "image": "/step-pics/hikari-ch-2-1-d31835.jpg",
    "caption": "Boss: Bandelam the Reaper. The fight starts here; in the guide it is the step \"Throne — Armour Corrosive\" (Bandelam the Reaper block). Last area banner before it: \"Crestlands / Montwise:UndergroundArel\". This frame is from the first seconds of the battle (video 0:34:36).",
    "kind": "battle",
    "videoTime": "0:34:36",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2073",
    "confidence": "high"
  },
  "hikari-ch-2-1-625d41": {
    "stepId": "hikari-ch-2-1-625d41",
    "image": "/step-pics/hikari-ch-2-1-625d41.jpg",
    "caption": "Required ambush: Yurinas. The fight starts here; in the guide it is the step \"Ambush the Fainthearted Youth.\" (Yurinas block). Last area banner before it: \"Crestlands / Montwise: Underground Are\". This frame is from the first seconds of the battle (video 0:35:22).",
    "kind": "battle",
    "videoTime": "0:35:22",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2119",
    "confidence": "medium"
  },
  "hikari-ch-2-1-b8a3c0": {
    "stepId": "hikari-ch-2-1-b8a3c0",
    "image": "/step-pics/hikari-ch-2-1-b8a3c0.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Flamechurch (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:35:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2146",
    "confidence": "high"
  },
  "recruit-temenos-1-6fad35": {
    "stepId": "recruit-temenos-1-6fad35",
    "image": "/step-pics/recruit-temenos-1-6fad35.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Conning Creek (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:36:26",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2183",
    "confidence": "high"
  },
  "recruit-temenos-1-dbbae3": {
    "stepId": "recruit-temenos-1-dbbae3",
    "image": "/step-pics/recruit-temenos-1-dbbae3.jpg",
    "caption": "Leaving Conning Creek to the east toward the Outskirts; the \"Conning Creek: Outskirts\" banner appears at this moment.",
    "kind": "travel",
    "videoTime": "0:36:34",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2191",
    "confidence": "high"
  },
  "throne-ch-2-mother-s-route-1-9c7ff7": {
    "stepId": "throne-ch-2-mother-s-route-1-9c7ff7",
    "image": "/step-pics/throne-ch-2-mother-s-route-1-9c7ff7.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Conning Creek (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:38:19",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2296",
    "confidence": "high"
  },
  "osvald-ch-3-1-a91bcd": {
    "stepId": "osvald-ch-3-1-a91bcd",
    "image": "/step-pics/osvald-ch-3-1-a91bcd.jpg",
    "caption": "Required encounter: Guards at the outpost. The fight starts here; in the guide it is the step \"Fight the encounter during the day.\" (Guards block). Last area banner before it: \"Harborlands / Guard Outpost\". This frame is from the first seconds of the battle (video 0:38:59).",
    "kind": "battle",
    "videoTime": "0:38:59",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2336",
    "confidence": "medium",
    "extraImages": [
      {
        "image": "/step-pics/osvald-ch-3-1-a91bcd-outpost-door.jpg",
        "caption": "Before the fight: climb the stairs and go in through the Guard Outpost doors; the guaranteed guard encounter happens inside.",
        "videoTime": "0:38:42",
        "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2319",
        "confidence": "medium",
        "kind": "travel"
      }
    ]
  },
  "osvald-ch-3-1-79f386": {
    "stepId": "osvald-ch-3-1-79f386",
    "image": "/step-pics/osvald-ch-3-1-79f386.jpg",
    "caption": "Boss: Stenvar. The fight starts here; in the guide it is the step \"Fight Stenvar at night.\" (Stenvar block). Last area banner before it: \"VLNERABUE\". This frame is from the first seconds of the battle (video 0:39:39).",
    "kind": "battle",
    "videoTime": "0:39:39",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2376",
    "confidence": "high"
  },
  "osvald-ch-4-1-135b77": {
    "stepId": "osvald-ch-4-1-135b77",
    "image": "/step-pics/osvald-ch-4-1-135b77.jpg",
    "caption": "The first thing in this chapter happens in the Montwise Library: walk up the steps and in through the big front doors (the \"Make for the library\" objective and the \"Crestlands / Montwise: Library\" banner appear here).",
    "kind": "travel",
    "videoTime": "0:40:29",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2426",
    "confidence": "medium"
  },
  "osvald-ch-4-1-480890": {
    "stepId": "osvald-ch-4-1-480890",
    "image": "/step-pics/osvald-ch-4-1-480890.jpg",
    "caption": "Boss: Grieving Golem. The fight starts here; in the guide it is the step \"Fight Grieving Golem at night.\" (Grieving Golem block). Last area banner before it: \"Crestlands / Underground Laboratory\". This frame is from the first seconds of the battle (video 0:42:05).",
    "kind": "battle",
    "videoTime": "0:42:05",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2522",
    "confidence": "medium"
  },
  "osvald-ch-4-1-f06d87": {
    "stepId": "osvald-ch-4-1-f06d87",
    "image": "/step-pics/osvald-ch-4-1-f06d87.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Beasting Bay: Anchorage (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:42:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2566",
    "confidence": "high"
  },
  "osvald-ch-4-1-aa683e": {
    "stepId": "osvald-ch-4-1-aa683e",
    "image": "/step-pics/osvald-ch-4-1-aa683e.jpg",
    "caption": "Entering Beasting Village: the area-name banner \"Toto'haha / Beasting Village\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:43:45",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2623",
    "confidence": "medium"
  },
  "osvald-ch-4-1-6fad35": {
    "stepId": "osvald-ch-4-1-6fad35",
    "image": "/step-pics/osvald-ch-4-1-6fad35.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Conning Creek (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:44:12",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2649",
    "confidence": "high"
  },
  "osvald-ch-4-1-619773": {
    "stepId": "osvald-ch-4-1-619773",
    "image": "/step-pics/osvald-ch-4-1-619773.jpg",
    "caption": "Entering Eastern Wellgrove Trail: the area-name banner \"Leaflands / Eastern Wellgrove Trail\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:45:56",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2753",
    "confidence": "medium"
  },
  "osvald-ch-4-1-a91bcd": {
    "stepId": "osvald-ch-4-1-a91bcd",
    "image": "/step-pics/osvald-ch-4-1-a91bcd.jpg",
    "caption": "Required encounter: Woodland Birdian IV. The fight starts here; in the guide it is the step \"Fight the encounter during the day.\" (Woodland Birdian IV block). Last area banner before it: \"Leaflands / Eastern Wellgrove Trail\". This frame is from the first seconds of the battle (video 0:46:13).",
    "kind": "battle",
    "videoTime": "0:46:13",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2770",
    "confidence": "high"
  },
  "osvald-ch-4-1-9b47b9": {
    "stepId": "osvald-ch-4-1-9b47b9",
    "image": "/step-pics/osvald-ch-4-1-9b47b9.jpg",
    "caption": "Entering Western Winterbloom Snows: the area-name banner \"Winterlands / Western WinterbloomSnow\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:48:58",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=2935",
    "confidence": "medium"
  },
  "osvald-ch-4-1-353efb": {
    "stepId": "osvald-ch-4-1-353efb",
    "image": "/step-pics/osvald-ch-4-1-353efb.jpg",
    "caption": "Entering Winterbloom: the area-name banner \"Winterlands / Winterbloom\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:50:10",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3007",
    "confidence": "medium"
  },
  "osvald-ch-4-1-8b8ac4": {
    "stepId": "osvald-ch-4-1-8b8ac4",
    "image": "/step-pics/osvald-ch-4-1-8b8ac4.jpg",
    "caption": "Boss: Bergomi. The fight starts here; in the guide it is the step \"Fight Bergomi during the day.\" (Bergomi block). Last area banner before it: \"Winterlands / Snowhares'Den\". This frame is from the first seconds of the battle (video 0:52:05).",
    "kind": "battle",
    "videoTime": "0:52:05",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3122",
    "confidence": "high"
  },
  "osvald-ch-4-1-fa04b8": {
    "stepId": "osvald-ch-4-1-fa04b8",
    "image": "/step-pics/osvald-ch-4-1-fa04b8.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Wellgrove (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "0:52:31",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3148",
    "confidence": "high"
  },
  "osvald-ch-4-1-db2f8a": {
    "stepId": "osvald-ch-4-1-db2f8a",
    "image": "/step-pics/osvald-ch-4-1-db2f8a.jpg",
    "caption": "Entering Northern Wellgrove Trail: the area-name banner \"Leaflands / Northern Wellgrove Trail\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:52:57",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3175",
    "confidence": "medium"
  },
  "osvald-ch-4-1-be1f4d": {
    "stepId": "osvald-ch-4-1-be1f4d",
    "image": "/step-pics/osvald-ch-4-1-be1f4d.jpg",
    "caption": "Entering Altar of the Lady of Grace: the area-name banner \"Leaflands / Altar of the Lady of Grace\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:53:13",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3190",
    "confidence": "medium"
  },
  "osvald-ch-4-1-d1b14e": {
    "stepId": "osvald-ch-4-1-d1b14e",
    "image": "/step-pics/osvald-ch-4-1-d1b14e.jpg",
    "caption": "Entering Timberain: the area-name banner \"\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:54:45",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3282",
    "confidence": "medium"
  },
  "osvald-ch-4-1-b1c3e6": {
    "stepId": "osvald-ch-4-1-b1c3e6",
    "image": "/step-pics/osvald-ch-4-1-b1c3e6.jpg",
    "caption": "Entering Western Gravell Wilds: the area-name banner \"Wildlands / Western Gravell Wilds\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:55:59",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3356",
    "confidence": "medium"
  },
  "osvald-ch-4-1-eea48e": {
    "stepId": "osvald-ch-4-1-eea48e",
    "image": "/step-pics/osvald-ch-4-1-eea48e.jpg",
    "caption": "Entering Gravell: the area-name banner \"Wildlands / Gravell\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "0:56:27",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3384",
    "confidence": "medium"
  },
  "osvald-ch-4-2-fa04b8": {
    "stepId": "osvald-ch-4-2-fa04b8",
    "image": "/step-pics/osvald-ch-4-2-fa04b8.jpg",
    "caption": "Fast travel: open the world map and select Wellgrove; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "1:00:10",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3608",
    "confidence": "medium"
  },
  "partitio-ch-3-1-c4c07a": {
    "stepId": "partitio-ch-3-1-c4c07a",
    "image": "/step-pics/partitio-ch-3-1-c4c07a.jpg",
    "caption": "Entering Shipwreck of the Empress: the area-name banner \"ShipwreckoftheEmpress\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:03:20",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3797",
    "confidence": "medium"
  },
  "partitio-ch-3-1-6f1b3c": {
    "stepId": "partitio-ch-3-1-6f1b3c",
    "image": "/step-pics/partitio-ch-3-1-6f1b3c.jpg",
    "caption": "You arrive at New Delsta Harbour: Anchorage after the warp; the banner \"Brightlands / New Delsta Harbor: Anchora\" shows on arrival.",
    "kind": "travel",
    "videoTime": "1:04:28",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3865",
    "confidence": "medium"
  },
  "partitio-ch-3-1-fa04b8": {
    "stepId": "partitio-ch-3-1-fa04b8",
    "image": "/step-pics/partitio-ch-3-1-fa04b8.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Wellgrove (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:04:55",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3893",
    "confidence": "high"
  },
  "partitio-ch-3-1-84ddac": {
    "stepId": "partitio-ch-3-1-84ddac",
    "image": "/step-pics/partitio-ch-3-1-84ddac.jpg",
    "caption": "Boss: Thurston. The fight starts here; in the guide it is the step \"Fight Thurston during the day.\" (Thurston block). Last area banner before it: \"Leaflands / Wellgrove:Alrond's Estate\". This frame is from the first seconds of the battle (video 1:06:57).",
    "kind": "battle",
    "videoTime": "1:06:57",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4014",
    "confidence": "high"
  },
  "partitio-ch-3-2-fa04b8": {
    "stepId": "partitio-ch-3-2-fa04b8",
    "image": "/step-pics/partitio-ch-3-2-fa04b8.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Wellgrove (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:08:08",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4085",
    "confidence": "high"
  },
  "hikari-ch-3-1-b5b153": {
    "stepId": "hikari-ch-3-1-b5b153",
    "image": "/step-pics/hikari-ch-3-1-b5b153.jpg",
    "caption": "Boss: General Rou. The fight starts here; in the guide it is the step \"Turn 1 — Defend\" (General Rou block). Last area banner before it: \"Leaflands / SecretForest\". This frame is from the first seconds of the battle (video 1:09:37).",
    "kind": "battle",
    "videoTime": "1:09:37",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4174",
    "confidence": "medium"
  },
  "castti-ch-2-sai-route-1-655e3d": {
    "stepId": "castti-ch-2-sai-route-1-655e3d",
    "image": "/step-pics/castti-ch-2-sai-route-1-655e3d.jpg",
    "caption": "Boss: Sand Lion. The fight starts here, right after the short cutscene inside Sand Lion's Den; in the guide it is the step \"Fight the Sand Lion during the day.\" (Sand Lion block). Last area banner before it: \"Hinoeuma / Sand Lion's Den\". This frame is from the first seconds of the battle (video 1:02:09).",
    "kind": "battle",
    "videoTime": "1:02:09",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=3726",
    "confidence": "high"
  },
  "castti-ch-2-sai-route-1-93d74f": {
    "stepId": "castti-ch-2-sai-route-1-93d74f",
    "image": "/step-pics/castti-ch-2-sai-route-1-93d74f.jpg",
    "caption": "Required fight: Foreign Assassins. This step is the lead-in line for the Foreign Assassins fight block (the next steps are Throne - Critical Scope etc.), so it shows the same battle as foreign-assassins-1-b8556e (video 1:10:33).",
    "kind": "battle",
    "videoTime": "1:10:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4230",
    "confidence": "high"
  },
  "foreign-assassins-1-b8556e": {
    "stepId": "foreign-assassins-1-b8556e",
    "image": "/step-pics/foreign-assassins-1-b8556e.jpg",
    "caption": "Required fight: Foreign Assassins. The fight starts here; in the guide it is the step \"Throne — Critical Scope → Back\" (Foreign Assassins block). Last area banner before it: \"Crestlands / Western Merry Hills Pass\". This frame is from the first seconds of the battle (video 1:10:33).",
    "kind": "battle",
    "videoTime": "1:10:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4230",
    "confidence": "high"
  },
  "foreign-assassins-1-56ad29": {
    "stepId": "foreign-assassins-1-56ad29",
    "image": "/step-pics/foreign-assassins-1-56ad29.jpg",
    "caption": "Entering Ivory Ravine: the area-name banner \"Wildlands / Ivory Ravine\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:13:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4427",
    "confidence": "medium"
  },
  "foreign-assassins-1-fc1038": {
    "stepId": "foreign-assassins-1-fc1038",
    "image": "/step-pics/foreign-assassins-1-fc1038.jpg",
    "caption": "Entering Southern Stormhail Snows: the area-name banner \"Winterlands / SouthernStormhail Snows\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:15:37",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4535",
    "confidence": "medium"
  },
  "foreign-assassins-1-b9e216": {
    "stepId": "foreign-assassins-1-b9e216",
    "image": "/step-pics/foreign-assassins-1-b9e216.jpg",
    "caption": "Entering Stormhail: the area-name banner \"Winterlands / Stormhail\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:16:27",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4584",
    "confidence": "medium"
  },
  "hikari-ch-4-1-30cf28": {
    "stepId": "hikari-ch-4-1-30cf28",
    "image": "/step-pics/hikari-ch-4-1-30cf28.jpg",
    "caption": "Boss (duel): Jin Mei. The fight starts here; in the guide it is the step \"Turn 1 — Sword\" (Jin Mei block). Last area banner before it: \"VUUNERABLE\". This frame is from the first seconds of the battle (video 1:17:59).",
    "kind": "battle",
    "videoTime": "1:17:59",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4676",
    "confidence": "high"
  },
  "hikari-ch-4-1-8001eb": {
    "stepId": "hikari-ch-4-1-8001eb",
    "image": "/step-pics/hikari-ch-4-1-8001eb.jpg",
    "caption": "Boss: Rai Mei. The fight starts here; in the guide it is the step \"Fight Rai Mei at night.\" (Rai Mei block). Last area banner before it: \"Winterlands / Castle Mei: Gallows\". This frame is from the first seconds of the battle (video 1:19:51).",
    "kind": "battle",
    "videoTime": "1:19:51",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4788",
    "confidence": "high"
  },
  "hikari-ch-4-1-9974b8": {
    "stepId": "hikari-ch-4-1-9974b8",
    "image": "/step-pics/hikari-ch-4-1-9974b8.jpg",
    "caption": "Boss: Gigantes. Frame from the first seconds of the real fight (video 1:12:32); in the guide it is the step \"Fight Gigantes at night.\".",
    "kind": "battle",
    "videoTime": "1:12:32",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4349",
    "confidence": "high"
  },
  "hikari-ch-5-1-2bb7f3": {
    "stepId": "hikari-ch-5-1-2bb7f3",
    "image": "/step-pics/hikari-ch-5-1-2bb7f3.jpg",
    "caption": "Boss: Ritsu. The fight starts here; in the guide it is the step \"Fight Ritsu at night.\" (Ritsu block). Last area banner before it: \"Castle Ku:Entran\". This frame is from the first seconds of the battle (video 1:23:13).",
    "kind": "battle",
    "videoTime": "1:23:13",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=4990",
    "confidence": "medium"
  },
  "hikari-ch-5-1-eb49dd": {
    "stepId": "hikari-ch-5-1-eb49dd",
    "image": "/step-pics/hikari-ch-5-1-eb49dd.jpg",
    "caption": "Boss: Mugen. The fight starts here; in the guide it is the step \"Throne — Spear x3 [<]\" (Mugen block). Last area banner before it: \"Castle Ku:Entran\". This frame is from the first seconds of the battle (video 1:23:59).",
    "kind": "battle",
    "videoTime": "1:23:59",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5036",
    "confidence": "high"
  },
  "hikari-ch-5-1-8ec5fe": {
    "stepId": "hikari-ch-5-1-8ec5fe",
    "image": "/step-pics/hikari-ch-5-1-8ec5fe.jpg",
    "caption": "Boss: \"Hikari\" (shadow Hikari). The fight starts here; in the guide it is the step \"Turn 1 — Aggressive Slash x2\" (\"Hikari\" block). Last area banner before it: \"Castle Ku:Entran\". This frame is from the first seconds of the battle (video 1:24:39).",
    "kind": "battle",
    "videoTime": "1:24:39",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5076",
    "confidence": "high"
  },
  "hikari-ch-5-1-ee054c": {
    "stepId": "hikari-ch-5-1-ee054c",
    "image": "/step-pics/hikari-ch-5-1-ee054c.jpg",
    "caption": "Boss: Enshrouded King. The fight starts here; in the guide it is the step \"Throne — Spear / Bow x3\" (Enshrouded King block). Last area banner before it: \"Castle Ku:Entran\". This frame is from the first seconds of the battle (video 1:25:45).",
    "kind": "battle",
    "videoTime": "1:25:45",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5142",
    "confidence": "medium"
  },
  "castti-ch-2-winterbloom-route-1-a92679": {
    "stepId": "castti-ch-2-winterbloom-route-1-a92679",
    "image": "/step-pics/castti-ch-2-winterbloom-route-1-a92679.jpg",
    "caption": "Boss: Plukk. The fight starts here; in the guide it is the step \"Fight Plukk at night.\" (Plukk block). Last area banner before it: \"Winterlands / Winterbloom:Thieves'Quar\". This frame is from the first seconds of the battle (video 1:29:42).",
    "kind": "battle",
    "videoTime": "1:29:42",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5379",
    "confidence": "medium"
  },
  "castti-ch-2-winterbloom-route-1-d45c83": {
    "stepId": "castti-ch-2-winterbloom-route-1-d45c83",
    "image": "/step-pics/castti-ch-2-winterbloom-route-1-d45c83.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Abandoned Village (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:30:38",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5435",
    "confidence": "high"
  },
  "castti-ch-3-1-45cc3c": {
    "stepId": "castti-ch-3-1-45cc3c",
    "image": "/step-pics/castti-ch-3-1-45cc3c.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Timberain (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:32:58",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5576",
    "confidence": "high"
  },
  "castti-ch-4-1-c79d17": {
    "stepId": "castti-ch-4-1-c79d17",
    "image": "/step-pics/castti-ch-4-1-c79d17.jpg",
    "caption": "Boss: Trousseau. The fight starts here; in the guide it is the step \"Fight Trousseau at night.\" (Trousseau block). Last area banner before it: \"TimberainCastle:Roof\". This frame is from the first seconds of the battle (video 1:35:29).",
    "kind": "battle",
    "videoTime": "1:35:29",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5726",
    "confidence": "medium"
  },
  "agnea-ch-2-1-ebc766": {
    "stepId": "agnea-ch-2-1-ebc766",
    "image": "/step-pics/agnea-ch-2-1-ebc766.jpg",
    "caption": "Fast travel: open the world map and select Beasting Bay: Anchorage; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "1:37:07",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5825",
    "confidence": "medium"
  },
  "agnea-ch-2-1-baf3e6": {
    "stepId": "agnea-ch-2-1-baf3e6",
    "image": "/step-pics/agnea-ch-2-1-baf3e6.jpg",
    "caption": "Entering Curious Nest: the area-name banner \"Curious Nest\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:37:41",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5859",
    "confidence": "medium"
  },
  "agnea-ch-2-1-3b79ec": {
    "stepId": "agnea-ch-2-1-3b79ec",
    "image": "/step-pics/agnea-ch-2-1-3b79ec.jpg",
    "caption": "Boss: Battle-Worn Shark. The fight starts here; in the guide it is the step \"Fight the Battle-Worn Shark at night.\" (Battle-Worn Shark block). Last area banner before it: \"The Sundering Sea / On the Water\". This frame is from the first seconds of the battle (video 1:37:26).",
    "kind": "battle",
    "videoTime": "1:37:26",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5843",
    "confidence": "medium"
  },
  "agnea-ch-2-1-8f3c27": {
    "stepId": "agnea-ch-2-1-8f3c27",
    "image": "/step-pics/agnea-ch-2-1-8f3c27.jpg",
    "caption": "Boss: Tyrannodrake. Frame from the first seconds of the real fight (video 1:38:06); in the guide it is the step \"Fight Tyrannodrake at night.\".",
    "kind": "battle",
    "videoTime": "1:38:06",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5883",
    "confidence": "high"
  },
  "agnea-ch-2-1-2041b2": {
    "stepId": "agnea-ch-2-1-2041b2",
    "image": "/step-pics/agnea-ch-2-1-2041b2.jpg",
    "caption": "Boss: Scourge of the Sea. The fight starts here; in the guide it is the step \"Fight the Scourge of the Sea at night.\" (Scourge of the Sea block). Last area banner before it: \"On the Water\". This frame is from the first seconds of the battle (video 1:39:09).",
    "kind": "battle",
    "videoTime": "1:39:09",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=5946",
    "confidence": "high"
  },
  "agnea-ch-2-1-f4fcfe": {
    "stepId": "agnea-ch-2-1-f4fcfe",
    "image": "/step-pics/agnea-ch-2-1-f4fcfe.jpg",
    "caption": "Fast travel: open the world map, move the cursor to New Delsta (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:41:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6090",
    "confidence": "high"
  },
  "agnea-ch-2-1-1dfd88": {
    "stepId": "agnea-ch-2-1-1dfd88",
    "image": "/step-pics/agnea-ch-2-1-1dfd88.jpg",
    "caption": "Boss: La'mani. Frame from the first seconds of the real fight (video 1:43:27); in the guide it is the step \"Fight La'mani in the day.\".",
    "kind": "battle",
    "videoTime": "1:43:27",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6204",
    "confidence": "high"
  },
  "agnea-ch-2-1-ddcaac": {
    "stepId": "agnea-ch-2-1-ddcaac",
    "image": "/step-pics/agnea-ch-2-1-ddcaac.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Tropu'hopu (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:44:04",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6242",
    "confidence": "high"
  },
  "throne-ch-3-father-s-route-1-e04c85": {
    "stepId": "throne-ch-3-father-s-route-1-e04c85",
    "image": "/step-pics/throne-ch-3-father-s-route-1-e04c85.jpg",
    "caption": "Boss: Father. The fight starts here; in the guide it is the step \"Fight Father at night.\" (Father block). Last area banner before it: \"Crestlands / Abandoned Church\". This frame is from the first seconds of the battle (video 1:46:13).",
    "kind": "battle",
    "videoTime": "1:46:13",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6370",
    "confidence": "high"
  },
  "throne-ch-3-father-s-route-1-ddcaac": {
    "stepId": "throne-ch-3-father-s-route-1-ddcaac",
    "image": "/step-pics/throne-ch-3-father-s-route-1-ddcaac.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Tropu'hopu (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:46:44",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6402",
    "confidence": "high"
  },
  "agnea-ch-3-1-1cf256": {
    "stepId": "agnea-ch-3-1-1cf256",
    "image": "/step-pics/agnea-ch-3-1-1cf256.jpg",
    "caption": "You arrive at Sai after the warp; the banner \"Hinoeuma / Sai\" shows on arrival.",
    "kind": "travel",
    "videoTime": "1:48:15",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6492",
    "confidence": "medium"
  },
  "agnea-ch-4-1-13e654": {
    "stepId": "agnea-ch-4-1-13e654",
    "image": "/step-pics/agnea-ch-4-1-13e654.jpg",
    "caption": "Boss: Veronica. The fight starts here; in the guide it is the step \"Fight Veronica at night.\" (Veronica block). Last area banner before it: \"Hinoeuma / Dragonridge\". This frame is from the first seconds of the battle (video 1:49:37).",
    "kind": "battle",
    "videoTime": "1:49:37",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6574",
    "confidence": "high"
  },
  "agnea-ch-4-1-7605c9": {
    "stepId": "agnea-ch-4-1-7605c9",
    "image": "/step-pics/agnea-ch-4-1-7605c9.jpg",
    "caption": "You arrive at Roque Island after the warp; the banner \"Harborlands / Roque Island\" shows on arrival.",
    "kind": "travel",
    "videoTime": "1:51:27",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6685",
    "confidence": "medium"
  },
  "partitio-ch-4-1-dc278c": {
    "stepId": "partitio-ch-4-1-dc278c",
    "image": "/step-pics/partitio-ch-4-1-dc278c.jpg",
    "caption": "Boss: Steam Tank Obsidian. The fight starts here; in the guide it is the step \"Fight the Steam Tank at night.\" (Steam Tank Obsidian block). Last area banner before it: \"Harborlands / Roque Island: Headquarters\". This frame is from the first seconds of the battle (video 1:53:41).",
    "kind": "battle",
    "videoTime": "1:53:41",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6818",
    "confidence": "medium"
  },
  "partitio-ch-4-1-9fbb5f": {
    "stepId": "partitio-ch-4-1-9fbb5f",
    "image": "/step-pics/partitio-ch-4-1-9fbb5f.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Oresrush (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "1:54:32",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6870",
    "confidence": "high"
  },
  "ochette-ch-2-cateracta-s-route-1-08a97c": {
    "stepId": "ochette-ch-2-cateracta-s-route-1-08a97c",
    "image": "/step-pics/ochette-ch-2-cateracta-s-route-1-08a97c.jpg",
    "caption": "Required fight: Alpione. The fight starts here; in the guide it is the step \"Turn 1 — Soulstone (M)\" (Alpione block). Last area banner before it: \"Harborlands / Conning Creek: Harbor\". This frame is from the first seconds of the battle (video 1:55:33).",
    "kind": "battle",
    "videoTime": "1:55:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=6930",
    "confidence": "high"
  },
  "ochette-ch-2-cateracta-s-route-1-9cac78": {
    "stepId": "ochette-ch-2-cateracta-s-route-1-9cac78",
    "image": "/step-pics/ochette-ch-2-cateracta-s-route-1-9cac78.jpg",
    "caption": "You arrive at Crackridge after the warp; the banner \"Wildlands / Crackridge\" shows on arrival.",
    "kind": "travel",
    "videoTime": "1:57:24",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7041",
    "confidence": "medium"
  },
  "ochette-ch-2-cateracta-s-route-1-cea8bc": {
    "stepId": "ochette-ch-2-cateracta-s-route-1-cea8bc",
    "image": "/step-pics/ochette-ch-2-cateracta-s-route-1-cea8bc.jpg",
    "caption": "Required fight: Buttermeep. The fight starts here; in the guide it is the step \"Anyone — Attack (Hikari uses spear)\" (Buttermeep block). Last area banner before it: \"Wildlands / qrackridge\". This frame is from the first seconds of the battle (video 1:57:07).",
    "kind": "battle",
    "videoTime": "1:57:07",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7024",
    "confidence": "medium"
  },
  "ochette-ch-2-cateracta-s-route-1-18f49b": {
    "stepId": "ochette-ch-2-cateracta-s-route-1-18f49b",
    "image": "/step-pics/ochette-ch-2-cateracta-s-route-1-18f49b.jpg",
    "caption": "You arrive at Crackridge after the warp; the banner \"Wildlands / Crackridge\" shows on arrival.",
    "kind": "travel",
    "videoTime": "1:57:32",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7050",
    "confidence": "medium"
  },
  "ochette-ch-2-tera-s-route-1-f2882a": {
    "stepId": "ochette-ch-2-tera-s-route-1-f2882a",
    "image": "/step-pics/ochette-ch-2-tera-s-route-1-f2882a.jpg",
    "caption": "Entering Bed of the Titan: the area-name banner \"Wildlands / Bed of the Titan\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "1:59:01",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7139",
    "confidence": "medium"
  },
  "ochette-ch-2-tera-s-route-1-8fa4b7": {
    "stepId": "ochette-ch-2-tera-s-route-1-8fa4b7",
    "image": "/step-pics/ochette-ch-2-tera-s-route-1-8fa4b7.jpg",
    "caption": "Boss: Tera. The fight starts here; in the guide it is the step \"Fight Tera at night.\" (Tera block). Last area banner before it: \"Wildlands / Bed of the Titan\". This frame is from the first seconds of the battle (video 1:59:15).",
    "kind": "battle",
    "videoTime": "1:59:15",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7152",
    "confidence": "high"
  },
  "ochette-ch-2-glacis-s-route-1-b89570": {
    "stepId": "ochette-ch-2-glacis-s-route-1-b89570",
    "image": "/step-pics/ochette-ch-2-glacis-s-route-1-b89570.jpg",
    "caption": "Required fight: Sanctum Knight (Glacis's Route). The fight starts here; in the guide it is the step \"Turn 1 — Thunder Soulstone (L) (if you still have it) or Soulstone (M)\" (Ochette Ch. 2: Glacis's Route block). Last area banner before it: \"Winterlands / Stormhail: Bridge\". This frame is from the first seconds of the battle (video 2:00:19).",
    "kind": "battle",
    "videoTime": "2:00:19",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7216",
    "confidence": "high"
  },
  "ochette-ch-2-glacis-s-route-1-3639da": {
    "stepId": "ochette-ch-2-glacis-s-route-1-3639da",
    "image": "/step-pics/ochette-ch-2-glacis-s-route-1-3639da.jpg",
    "caption": "Boss: Glacis. The fight starts here; in the guide it is the step \"Fight Glacis at night.\" (Glacis block). Last area banner before it: \"Winterlands / Stormhail: Bridge\". This frame is from the first seconds of the battle (video 2:01:23).",
    "kind": "battle",
    "videoTime": "2:01:23",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7280",
    "confidence": "high"
  },
  "ochette-ch-2-glacis-s-route-1-c29678": {
    "stepId": "ochette-ch-2-glacis-s-route-1-c29678",
    "image": "/step-pics/ochette-ch-2-glacis-s-route-1-c29678.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Beasting Village (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:01:55",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7313",
    "confidence": "high"
  },
  "ochette-ch-3-1-8de399": {
    "stepId": "ochette-ch-3-1-8de399",
    "image": "/step-pics/ochette-ch-3-1-8de399.jpg",
    "caption": "Boss: Lajackal of the Sorrowful Moon. Frame from the first seconds of the real fight (video 2:05:18); in the guide it is the step \"Throne — Latent Power + Armour Corrosive\".",
    "kind": "battle",
    "videoTime": "2:05:18",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7515",
    "confidence": "high"
  },
  "ochette-ch-3-1-c05ffc": {
    "stepId": "ochette-ch-3-1-c05ffc",
    "image": "/step-pics/ochette-ch-3-1-c05ffc.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Cropdale (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:06:37",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7594",
    "confidence": "high"
  },
  "the-apothecary-hunter-part-1-1-c05ffc": {
    "stepId": "the-apothecary-hunter-part-1-1-c05ffc",
    "image": "/step-pics/the-apothecary-hunter-part-1-1-c05ffc.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Cropdale (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:07:51",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7668",
    "confidence": "high"
  },
  "the-apothecary-hunter-part-2-1-9f4c40": {
    "stepId": "the-apothecary-hunter-part-2-1-9f4c40",
    "image": "/step-pics/the-apothecary-hunter-part-2-1-9f4c40.jpg",
    "caption": "Required fight: Apothecary & Hunter Part 2 fight. The fight starts here; in the guide it is the step \"Turn 1 — Wind Soulstone (L)\" (The Apothecary & Hunter, Part 2 block). Last area banner before it: \"Leaflands / Animal Trail\". This frame is from the first seconds of the battle (video 2:08:33).",
    "kind": "battle",
    "videoTime": "2:08:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7710",
    "confidence": "medium"
  },
  "the-apothecary-hunter-part-2-1-d31835": {
    "stepId": "the-apothecary-hunter-part-2-1-d31835",
    "image": "/step-pics/the-apothecary-hunter-part-2-1-d31835.jpg",
    "caption": "Boss: Creeping Shadow. The fight starts here; in the guide it is the step \"Throne — Armour Corrosive\" (Creeping Shadow block). Last area banner before it: \"Loafianns / Dark Night\". This frame is from the first seconds of the battle (video 2:09:21).",
    "kind": "battle",
    "videoTime": "2:09:21",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7758",
    "confidence": "medium"
  },
  "the-apothecary-hunter-part-2-1-fa04b8": {
    "stepId": "the-apothecary-hunter-part-2-1-fa04b8",
    "image": "/step-pics/the-apothecary-hunter-part-2-1-fa04b8.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Wellgrove (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:10:22",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7820",
    "confidence": "high"
  },
  "the-apothecary-hunter-part-2-1-d0802b": {
    "stepId": "the-apothecary-hunter-part-2-1-d0802b",
    "image": "/step-pics/the-apothecary-hunter-part-2-1-d0802b.jpg",
    "caption": "Entering library: the area-name banner \"Crestlands / Montwise:Library\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:12:56",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=7973",
    "confidence": "medium"
  },
  "the-apothecary-hunter-part-2-1-f06d87": {
    "stepId": "the-apothecary-hunter-part-2-1-f06d87",
    "image": "/step-pics/the-apothecary-hunter-part-2-1-f06d87.jpg",
    "caption": "Fast travel: open the world map and select Beasting Bay: Anchorage; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "2:13:24",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8002",
    "confidence": "medium"
  },
  "galdera-1-95ea15": {
    "stepId": "galdera-1-95ea15",
    "image": "/step-pics/galdera-1-95ea15.jpg",
    "caption": "Superboss: Omniscient Eye (Galdera, first part). The fight starts here; in the guide it is the step \"Hikari — Peacock Strut x2 → Castti\" (Omniscient Eye block). Last area banner before it: \"Divide your heroes into tuo parties of four\". This frame is from the first seconds of the battle (video 2:15:12).",
    "kind": "battle",
    "videoTime": "2:15:12",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8109",
    "confidence": "high"
  },
  "galdera-1-107476": {
    "stepId": "galdera-1-107476",
    "image": "/step-pics/galdera-1-107476.jpg",
    "caption": "Superboss: Galdera, the Fallen. The fight starts here; in the guide it is the step \"Throne — Latent Power + Rejuvenating Jam → Self\" (Galdera, the Fallen block). Last area banner before it: \"Divide your heroes into tuo parties of four\". This frame is from the first seconds of the battle (video 2:18:06).",
    "kind": "battle",
    "videoTime": "2:18:06",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8283",
    "confidence": "high"
  },
  "galdera-1-b5cb4a": {
    "stepId": "galdera-1-b5cb4a",
    "image": "/step-pics/galdera-1-b5cb4a.jpg",
    "caption": "Entering Lost Isle: the area-name banner \"The Sundering Sea / The Lost Isle\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:20:07",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8405",
    "confidence": "medium"
  },
  "agnea-ch-5-1-e653d6": {
    "stepId": "agnea-ch-5-1-e653d6",
    "image": "/step-pics/agnea-ch-5-1-e653d6.jpg",
    "caption": "Boss: Dolcinaea. The fight starts here; in the guide it is the step \"Fight Dolcinaea at night.\" (Dolcinaea block). Last area banner before it: \"Crestlands / Stage of the Moon and Sun\". This frame is from the first seconds of the battle (video 2:22:35).",
    "kind": "battle",
    "videoTime": "2:22:35",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8552",
    "confidence": "high"
  },
  "agnea-ch-5-1-fa04b8": {
    "stepId": "agnea-ch-5-1-fa04b8",
    "image": "/step-pics/agnea-ch-5-1-fa04b8.jpg",
    "caption": "Fast travel: open the world map and select Wellgrove; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "2:23:25",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8602",
    "confidence": "medium"
  },
  "throne-ch-3-mother-s-route-1-676baa": {
    "stepId": "throne-ch-3-mother-s-route-1-676baa",
    "image": "/step-pics/throne-ch-3-mother-s-route-1-676baa.jpg",
    "caption": "Boss: Mother. The fight starts here; in the guide it is the step \"Fight Mother at night.\" (Mother block). Last area banner before it: \"Leaflands / Mother's Garden\". This frame is from the first seconds of the battle (video 2:24:51).",
    "kind": "battle",
    "videoTime": "2:24:51",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8688",
    "confidence": "medium"
  },
  "throne-ch-4-1-2087a9": {
    "stepId": "throne-ch-4-1-2087a9",
    "image": "/step-pics/throne-ch-4-1-2087a9.jpg",
    "caption": "Entering Lostseed: the area-name banner \"Brightlands / Lostseed\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:26:58",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8815",
    "confidence": "medium"
  },
  "throne-ch-4-1-89d69d": {
    "stepId": "throne-ch-4-1-89d69d",
    "image": "/step-pics/throne-ch-4-1-89d69d.jpg",
    "caption": "Boss: Claude. The fight starts here; in the guide it is the step \"Fight Claude at night.\" (Claude block). Last area banner before it: \"Brightlands / Lostseed Castle:Upper Leve\". This frame is from the first seconds of the battle (video 2:28:11).",
    "kind": "battle",
    "videoTime": "2:28:11",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8888",
    "confidence": "high"
  },
  "the-dancer-warrior-part-2-1-d651b9": {
    "stepId": "the-dancer-warrior-part-2-1-d651b9",
    "image": "/step-pics/the-dancer-warrior-part-2-1-d651b9.jpg",
    "caption": "Entering East District: the area-name banner \"Hinoeuma / Sai:East District\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:29:22",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=8959",
    "confidence": "medium"
  },
  "the-dancer-warrior-part-2-1-5cb913": {
    "stepId": "the-dancer-warrior-part-2-1-5cb913",
    "image": "/step-pics/the-dancer-warrior-part-2-1-5cb913.jpg",
    "caption": "Entering Tranquil Grotto: the area-name banner \"Hinoeuma / Tranquil Grotto\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:30:39",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=9036",
    "confidence": "medium"
  },
  "the-scholar-merchant-part-2-1-ed7567": {
    "stepId": "the-scholar-merchant-part-2-1-ed7567",
    "image": "/step-pics/the-scholar-merchant-part-2-1-ed7567.jpg",
    "caption": "Boss: Moneylender. The fight starts here; in the guide it is the step \"Turn 1 — Latent Power + Fireball x3\" (Moneylender block). Last area banner before it: \"CrossedPaths\". This frame is from the first seconds of the battle (video 2:38:49).",
    "kind": "battle",
    "videoTime": "2:38:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=9526",
    "confidence": "medium"
  },
  "the-scholar-merchant-part-2-1-6b5522": {
    "stepId": "the-scholar-merchant-part-2-1-6b5522",
    "image": "/step-pics/the-scholar-merchant-part-2-1-6b5522.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Canalbrine (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:39:08",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=9546",
    "confidence": "high"
  },
  "temenos-ch-3-stormhail-route-1-fd890f": {
    "stepId": "temenos-ch-3-stormhail-route-1-fd890f",
    "image": "/step-pics/temenos-ch-3-stormhail-route-1-fd890f.jpg",
    "caption": "Entering Nameless Village: the area-name banner \"Toto'haha / Nameless Village\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:47:05",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10023",
    "confidence": "medium"
  },
  "temenos-ch-4-1-f0a251": {
    "stepId": "temenos-ch-4-1-f0a251",
    "image": "/step-pics/temenos-ch-4-1-f0a251.jpg",
    "caption": "Boss: Kaldena. The fight starts here; in the guide it is the step \"Fight Kaldena at night.\" (Kaldena block). Last area banner before it: \"Toto'haha / RiftedRock\". This frame is from the first seconds of the battle (video 2:49:15).",
    "kind": "battle",
    "videoTime": "2:49:15",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10152",
    "confidence": "medium"
  },
  "the-cleric-thief-part-1-1-9c7ff7": {
    "stepId": "the-cleric-thief-part-1-1-9c7ff7",
    "image": "/step-pics/the-cleric-thief-part-1-1-9c7ff7.jpg",
    "caption": "Fast travel: open the world map, move the cursor to Conning Creek (the green town icon the arrow points to; its name shows in the box next to it) and confirm. The screen fades out about a second later.",
    "kind": "travel",
    "videoTime": "2:51:40",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10298",
    "confidence": "high"
  },
  "the-cleric-thief-part-2-1-421d51": {
    "stepId": "the-cleric-thief-part-2-1-421d51",
    "image": "/step-pics/the-cleric-thief-part-2-1-421d51.jpg",
    "caption": "Entering Cavern of the Moon and Sun: the area-name banner \"Harborlands / CavernoftheMoonandSun\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:52:47",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10365",
    "confidence": "medium"
  },
  "the-cleric-thief-part-2-1-72039b": {
    "stepId": "the-cleric-thief-part-2-1-72039b",
    "image": "/step-pics/the-cleric-thief-part-2-1-72039b.jpg",
    "caption": "Required fight: Vagrant Frogkings. The fight starts here; in the guide it is the step \"Fight the encounter in the day.\" (Vagrant Frogkings I block). Last area banner before it: \"Cu Phys. Def. / Accuracy / Critical\". This frame is from the first seconds of the battle (video 2:53:41).",
    "kind": "battle",
    "videoTime": "2:53:41",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10418",
    "confidence": "high"
  },
  "the-cleric-thief-part-2-1-1db9dd": {
    "stepId": "the-cleric-thief-part-2-1-1db9dd",
    "image": "/step-pics/the-cleric-thief-part-2-1-1db9dd.jpg",
    "caption": "Entering Southern Cropdale Trail: the area-name banner \"Leaflands / Southern Cropdale Trail\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:54:33",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10470",
    "confidence": "medium"
  },
  "journey-for-the-dawn-1-2389b1": {
    "stepId": "journey-for-the-dawn-1-2389b1",
    "image": "/step-pics/journey-for-the-dawn-1-2389b1.jpg",
    "caption": "Entering Flamechurch: Cathedral Entrance: the area-name banner \"Crestlands / Flamechurch:CathedralEnt\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:57:21",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10638",
    "confidence": "medium"
  },
  "journey-for-the-dawn-1-5311e3": {
    "stepId": "journey-for-the-dawn-1-5311e3",
    "image": "/step-pics/journey-for-the-dawn-1-5311e3.jpg",
    "caption": "Entering Tombs of the Wardenbeasts: the area-name banner \"Toto'haha / Tombs of theWardenbeasts\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "2:58:20",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10698",
    "confidence": "medium"
  },
  "journey-for-the-dawn-1-5cb913": {
    "stepId": "journey-for-the-dawn-1-5cb913",
    "image": "/step-pics/journey-for-the-dawn-1-5cb913.jpg",
    "caption": "Entering Tranquil Grotto: the area-name banner \"Hinoeuma / Tranquil Grotto\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "3:00:53",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10850",
    "confidence": "medium"
  },
  "journey-for-the-dawn-1-c1274d": {
    "stepId": "journey-for-the-dawn-1-c1274d",
    "image": "/step-pics/journey-for-the-dawn-1-c1274d.jpg",
    "caption": "Entering Fellsun Ruins: the area-name banner \"Wildlands / FellsunRuins\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "3:02:04",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10922",
    "confidence": "medium"
  },
  "journey-for-the-dawn-1-607742": {
    "stepId": "journey-for-the-dawn-1-607742",
    "image": "/step-pics/journey-for-the-dawn-1-607742.jpg",
    "caption": "Entering Vidania: the area-name banner \"The Sundering Sea / Vidania\" pops up as you cross into the new area, which is the moment this step is done.",
    "kind": "travel",
    "videoTime": "3:02:52",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=10969",
    "confidence": "medium"
  },
  "vide-the-wicked-1-ada0f5": {
    "stepId": "vide-the-wicked-1-ada0f5",
    "image": "/step-pics/vide-the-wicked-1-ada0f5.jpg",
    "caption": "Final boss: Vide, the Wicked. The fight starts here; in the guide it is the step \"Castti — Defend\" (Vide, the Wicked block). Last area banner before it: \"The Sundering Sea / Castle Vidania\". This frame is from the first seconds of the battle (video 3:03:56).",
    "kind": "battle",
    "videoTime": "3:03:56",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11033",
    "confidence": "high"
  },
  "vide-the-wicked-1-6fad35": {
    "stepId": "vide-the-wicked-1-6fad35",
    "image": "/step-pics/vide-the-wicked-1-6fad35.jpg",
    "caption": "Fast travel: open the world map and select Conning Creek; the selected town's name is shown in the box on the map. Confirm and the screen fades out.",
    "kind": "travel",
    "videoTime": "3:05:31",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11128",
    "confidence": "medium"
  },
  "majestic-mysterious-travellers-1-476306": {
    "stepId": "majestic-mysterious-travellers-1-476306",
    "image": "/step-pics/majestic-mysterious-travellers-1-476306.jpg",
    "caption": "Superboss (Extra Battle): Majestic Mysterious Travellers. The fight starts here; in the guide it is the step \"Throne — Latent Power + Reinforcing Jam → Self\" (Majestic Mysterious Travellers block). Last area banner before it: \"Merry Hills\". This frame is from the first seconds of the battle (video 3:05:53).",
    "kind": "battle",
    "videoTime": "3:05:53",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11150",
    "confidence": "high"
  },
  "masterly-mysterious-travellers-1-476306": {
    "stepId": "masterly-mysterious-travellers-1-476306",
    "image": "/step-pics/masterly-mysterious-travellers-1-476306.jpg",
    "caption": "Superboss (Extra Battle): Masterly Mysterious Travellers. Frame from the first seconds of the real fight (video 3:07:35); in the guide it is the step \"Throne — Latent Power + Reinforcing Jam → Self\".",
    "kind": "battle",
    "videoTime": "3:07:35",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11252",
    "confidence": "medium"
  },
  "true-vide-phase-1-1-0625d2": {
    "stepId": "true-vide-phase-1-1-0625d2",
    "image": "/step-pics/true-vide-phase-1-1-0625d2.jpg",
    "caption": "Superboss (Extra Battle): True Vide (Phase 1). Frame from the first seconds of the real fight (video 3:09:44); in the guide it is the step \"Throne — Energising Pomegranate (L) → Hikari\".",
    "kind": "battle",
    "videoTime": "3:09:44",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11381",
    "confidence": "high"
  },
  "true-vide-phase-2-1-9517f0": {
    "stepId": "true-vide-phase-2-1-9517f0",
    "image": "/step-pics/true-vide-phase-2-1-9517f0.jpg",
    "caption": "Superboss (Extra Battle): True Vide (Phase 2). Frame from the first seconds of the real fight (video 3:11:49); in the guide it is the step \"Temenos — Aelfric's Blessing → Castti\".",
    "kind": "battle",
    "videoTime": "3:11:49",
    "youtube_link": "https://youtu.be/d6YOJxTfIeQ?t=11506",
    "confidence": "high"
  }
};
