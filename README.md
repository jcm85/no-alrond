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

That runs `python3 scripts/build-route.py` and rewrites `src/data/route.ts` and `src/data/changelog.ts`. On Windows, if `python3` is not found, run `py -3 scripts/build-route.py` instead.

`meta.rev` in `src/data/route.ts` is a hash of the step ids. When that hash changes, the app shows a one-time migration banner so an older save is not applied blindly. `src/data/legacy-ids.ts` maps older ids, and a step that still has the same chapter and text can be carried over.

## `startup.sh`

`startup.sh` restarts the dev server in the hosted preview. It is not needed for `npm run dev` on your own machine. It does not assume a fixed folder path.
