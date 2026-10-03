# No Alrond

A checklist for the Octopath Traveler II all-superbosses speedrun, following Chewy's No Alrond route. Check off steps as you play. Your progress stays in this browser.

## What you need

- [Node.js](https://nodejs.org/) **22.12 or newer**. The version in `.nvmrc` is `22.12.0`. On Windows, the installer from nodejs.org is enough. If you use nvm-windows, run `nvm install` and `nvm use` in this folder.
- npm, which comes with Node.js.
- Python 3, only if you want to regenerate the route from the spreadsheet. You do not need it to run the checklist.

## Run it

1. Clone this repository.
2. Open a terminal in the project folder (Command Prompt or PowerShell on Windows).
3. Install dependencies:

```
npm install
```

4. Start the app:

```
npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080).

The dev server listens on `0.0.0.0:8080`, so `http://localhost:8080` is the address to open. Leave that terminal running while you use the app.

## Build and test

```
npm test
npm run typecheck
npm run build
```

`npm run build` also runs a database migration step. This checklist does not use a database. If `DATABASE_URL` is not set, that step prints that it is skipping and the build still succeeds. Progress is stored in the browser.

## Route data

The checklist is generated from Chewy's sheet, saved in this repo as `scripts/sheets/no-alrond.csv` (the No Alrond tab only).

```
npm run route:build
```

That runs `python3 scripts/build-route.py` and rewrites `src/data/route.ts`, `src/data/changelog.ts`, and `src/data/fight-notes.ts`. On Windows, if `python3` is not found, run `py -3 scripts/build-route.py` instead.

The sheet is still the route. Frame-confirmed extra steps, the Flee rename, and weakness notes come from `scripts/overlays/merged-fights.json`, applied by `scripts/apply_overlay.py` after the sheet ids are assigned. New steps get new ids. Existing ids stay, so an older save still matches the steps that remain. Steps that were not in that save are simply not marked done.

Some steps include a snapshot from the run, in `public/step-pics/`. Those files are ordinary images. They are not part of the JavaScript bundle. `npm run pics:build` rewrites `src/data/step-pics.ts` from `scripts/step-pics/manifest.json` after the images are already in `public/step-pics/`.

`meta.rev` in `src/data/route.ts` is a hash of the step ids. A save from an older revision is carried over by id when those step ids still exist. Marks for ids that are gone are dropped, and the previous save is kept as a backup. The app only shows "can't be carried over safely" when none of the saved ids exist anymore. `src/data/legacy-ids.ts` still maps the oldest ids by chapter and text.

The checklist went from 1,166 checkable steps to 1,164 when two chapter-name rows that were not instructions were removed, then to 1,204 when 40 frame-confirmed steps were added, then to 1,205 when the Timberain half of that town step was split onto its own id. Hear a Tale is its own setup step. Step ids that remain are unchanged, so progress from an older revision carries over onto the current `meta.rev`. New steps stay unchecked. Now continues after the last step you had finished, and a note offers to jump past the new ones or review them. About, and a How combat works button on Now, explain the chips. A fight shows only the types that enemy is weak to. "?" means the weakness is unverified. Done stays on screen; long notes scroll inside the card.

## `startup.sh`

`startup.sh` restarts the dev server in the hosted preview. It is not needed for `npm run dev` on your own machine. It does not assume a fixed folder path.
