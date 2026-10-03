/** Generated from Chewy's published route sheet and scripts/overlays/merged-fights.json. Do not hand-edit. */
export type Step = {
  id: string;
  text: string;
  check: boolean;
  kind: "do" | "fight" | "shop" | "menu" | "party" | "note";
  lines?: string[];
  note?: string;
  warn?: boolean;
  optional?: boolean;
  lead?: string;
  ctx?: string;
  /** Sheet wording kept when the visible text was clarified. */
  sheet?: string;
  /** YouTube t= seconds. Already 3 seconds before the frame. */
  watch?: number;
};
export type Block = {
  id: string;
  title: string;
  kind: "travel" | "fight" | "menu" | "shop" | "setup";
  when?: string;
  foes?: string[];
  solo?: boolean;
  steps: Step[];
};
export type Chapter = {
  id: string;
  title: string;
  mark?: string;
  seconds?: number;
  videoSeconds?: number;
  orderNote?: string;
  blocks: Block[];
};
export type Act = { id: string; title: string; chapters: Chapter[] };
export type RouteData = {
  meta: {
    game: string;
    category: string;
    runner: string;
    video: string;
    sheetDate: string;
    steps: number;
    foes: number;
    rev: string;
    note: string;
  };
  acts: Act[];
};
export const route: RouteData = {
  "meta": {
    "game": "Octopath Traveler II",
    "category": "All superbosses, no Alrond",
    "runner": "chewythebigblackdog",
    "video": "https://youtu.be/d6YOJxTfIeQ",
    "sheetDate": "2026-07-04",
    "steps": 1205,
    "foes": 3,
    "rev": "6ce74051ed6f76bb",
    "note": "Chewy's current No Alrond (more consistent) sheet tab; video uploaded 2025-06-08; sheet revised through 7/4/2026"
  },
  "acts": [
    {
      "id": "prologue",
      "title": "Prologue",
      "chapters": [
        {
          "id": "throne-ch-1",
          "title": "Throne Ch.1",
          "mark": "0:00:00",
          "seconds": 0,
          "blocks": [
            {
              "id": "throne-ch-1-b1",
              "title": "Throne Ch.1",
              "kind": "fight",
              "foes": [
                "Pursuer #1 — Turn 1: Darkest Night · Turn 2: Axe x3",
                "Pursuer #2 — Turn 1: Axe · Turn 2: Slice x3",
                "Pursuer Leader — Turn 1: Pierce Through · Turn 2: Darkest Night x3"
              ],
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-900-ca73a5",
                  "text": "Win the tutorial fight: Attack until the Pursuers break, then boost and finish them. (No route turns; just win.)",
                  "check": true,
                  "kind": "fight",
                  "watch": 67
                },
                {
                  "id": "throne-ch-1-900-5d721c",
                  "text": "Skip the cutscene. Close the Basic Controls popup.",
                  "check": true,
                  "kind": "do",
                  "watch": 85
                },
                {
                  "id": "throne-ch-1-900-88f5ed",
                  "text": "Head for the sewer exit: go down the stairs to the ladder.",
                  "check": true,
                  "kind": "do",
                  "watch": 88
                },
                {
                  "id": "throne-ch-1-900-de7ac1",
                  "text": "Climb up the ladder.",
                  "check": true,
                  "kind": "do",
                  "watch": 98
                },
                {
                  "id": "throne-ch-1-900-d0f2b7",
                  "text": "Cross the walkway to the other side.",
                  "check": true,
                  "kind": "do",
                  "watch": 100
                },
                {
                  "id": "throne-ch-1-900-bd473a",
                  "text": "Climb down the ladder (you land behind the guard).",
                  "check": true,
                  "kind": "do",
                  "watch": 101
                },
                {
                  "id": "throne-ch-1-900-31bcfe",
                  "text": "Ambush the Lookout guard (Throne’s path action: Ambush → Yes).",
                  "check": true,
                  "kind": "do",
                  "watch": 104
                },
                {
                  "id": "throne-ch-1-900-274973",
                  "text": "Skip the cutscene.",
                  "check": true,
                  "kind": "do",
                  "watch": 107
                },
                {
                  "id": "throne-ch-1-900-4aece1",
                  "text": "Head for the sewer exit: follow the corridor and the stone bridge to the gate (fight starts).",
                  "check": true,
                  "kind": "fight",
                  "watch": 110
                },
                {
                  "id": "throne-ch-1-1-df6557",
                  "text": "1st Person — Dagger / Axe x2 → Pursuer #1",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-1-1-f77d8e",
                  "text": "2nd Person — Dagger / Axe → Pursuer #2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-1-1-3c172c",
                  "text": "3rd Person — Dagger / Axe → Pursuer #2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-1-1-987a9f",
                  "text": "Everyone — Dagger / Axe x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-1-900-18f4e4",
                  "text": "Skip the cutscenes.",
                  "check": true,
                  "kind": "do",
                  "watch": 143
                },
                {
                  "id": "throne-ch-1-900-8af22b",
                  "text": "Make for the thieves’ hideout: go up the stairs and follow the streets to the Game Parlor.",
                  "check": true,
                  "kind": "do",
                  "watch": 149
                },
                {
                  "id": "throne-ch-1-900-34e5f1",
                  "text": "Enter the Game Parlor. Choose Yes at “Wait until Mother comes?”. Skip the cutscene.",
                  "check": true,
                  "kind": "do",
                  "watch": 161
                },
                {
                  "id": "throne-ch-1-900-b9ed62",
                  "text": "Run to the edge of the roof and climb down the ladder. Walk past the guard in the alley.",
                  "check": true,
                  "kind": "do",
                  "watch": 170
                },
                {
                  "id": "throne-ch-1-900-ef5c10",
                  "text": "Cross the market, go up the stairs and enter the gate. Skip the cutscene. Exit to the top of the stairs.",
                  "check": true,
                  "kind": "do",
                  "watch": 177
                }
              ]
            },
            {
              "id": "throne-ch-1-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-acd678",
                  "text": "Steal the Brothel Girl's Clothes.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-ff15c6",
                  "text": "Steal the Shadow Soulstone from the boy at the bottom left side of the screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-253a85",
                  "text": "Go south to the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-daedf8",
                  "text": "Steal the Ice Soulstone, Wind Soulstone and Light Soulstone from the old man south of the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b3",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-3b4661",
                  "text": "Buy Unerring Earring",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-c03e95",
                  "text": "Make for Diamante’s estate: climb the central staircase and cross the plaza to the gold gate. Skip the cutscene.",
                  "check": true,
                  "kind": "do",
                  "watch": 199
                },
                {
                  "id": "throne-ch-1-900-87e22b",
                  "text": "Ambush the Lookout guard (Throne: Ambush → Yes).",
                  "check": true,
                  "kind": "do",
                  "watch": 234
                },
                {
                  "id": "throne-ch-1-900-eaf252",
                  "text": "Run up the grand staircase. Win the forced Guard fight (break and kill).",
                  "check": true,
                  "kind": "fight",
                  "watch": 241
                },
                {
                  "id": "throne-ch-1-900-2fb868",
                  "text": "Follow the gallery to the balcony. Skip the cutscene.",
                  "check": true,
                  "kind": "do",
                  "watch": 255
                }
              ]
            },
            {
              "id": "throne-ch-1-b4",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-b4fc5d",
                  "text": "Heal to full before Pirro if you are under 210 HP.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b5",
              "title": "Pirro",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-84df79",
                  "text": "Turn 1 — Darkest Night",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "note": "Flee is not available in boss fights."
                },
                {
                  "id": "throne-ch-1-1-3fcd03",
                  "text": "Turn 2 — Darkest Night",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-14d1fd",
                  "text": "Turn 3 — Darkest Night x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-8eebe3",
                  "text": "Turn 4 — Sword",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-92eaeb",
                  "text": "Turn 5 — Sword",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-47005d",
                  "text": "Turn 6 — Shadow Soulstone",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-460fb6",
                  "text": "Turn 7 — Light Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Healing Grape",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-acb87f",
                  "text": "Turn 8 — Sword x4",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Light Soulstone",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-90e8dd",
                  "text": "Turn 9 — Latent Power + Wind Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Latent Power + Sword x4",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-7e2f52",
                  "text": "Then — Ice Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Wind Soulstone",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-0ccf3c",
                  "text": "Turn 10 — Sword",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Ice Soulstone · Sword",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-e015d0",
                  "text": "Skip the cutscene. Leave the estate. At the signpost crossroads, accept the Traveler’s Bag quest (girl with the backpack).",
                  "check": true,
                  "kind": "do",
                  "watch": 321
                }
              ]
            },
            {
              "id": "throne-ch-1-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-00d1fd",
                  "text": "Tag New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "note": "Break it (hit its weakness), then Flee (Chewy: a broken enemy always lets you flee)"
                },
                {
                  "id": "throne-ch-1-1-5536ab",
                  "text": "Tag Abandoned Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-219361",
                  "text": "Recruit Osvald.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-76aaab",
                  "text": "Go to Cape Cold.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "note": "Flee (repeat until it works)"
                },
                {
                  "id": "throne-ch-1-1-57ffa0",
                  "text": "Mug the man on the left.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b7",
              "title": "Man",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-db0eeb",
                  "text": "Osvald: Icewind",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 1 — Icewind"
                },
                {
                  "id": "throne-ch-1-1-79e189",
                  "text": "Osvald: Fireball x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 2 — Fireball x3"
                },
                {
                  "id": "throne-ch-1-1-e70eb9",
                  "text": "Turn 3 — Staff (if needed)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b8",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-0890e2",
                  "text": "Get the 2,000 leaves in the house behind the inn.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-8426d9",
                  "text": "Warp to Abandoned Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-793e04",
                  "text": "Get the Herb of Serenity up the ladder near the Black Market.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-0ca638",
                  "text": "Reset the night market by toggling between day and night until you get clerics.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b9",
              "title": "Black Market",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-bb847a",
                  "text": "Sell Old Locket",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-bc3419",
                  "text": "Sell Heavy Coin Pouch",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-96220c",
                  "text": "Sell Gold Pocket Watch",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-08a933",
                  "text": "Sell Herb of Serenity",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-427455",
                  "text": "Buy 2 Ice Soulstone",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-69fd2a",
                  "text": "Buy 1 Thunder Soulstone",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-36b5cb",
                  "text": "Buy 1 Ice Soulstone (M)",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-bca5ca",
                  "text": "Buy 7 Light Soulstone (M)",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b10",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-6f1b3c",
                  "text": "Warp to New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-0f1a6d",
                  "text": "Take the ship to Toto'haha Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-55eed8",
                  "text": "Go to Western Tropu'hopu Traverse.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-e35f5f",
                  "text": "Kill an encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-aa8862",
                  "text": "Optionally save (guarantees good second encounter if you die).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": true
                },
                {
                  "id": "throne-ch-1-1-a7ba3d",
                  "text": "Get the Hunter Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-9ed6aa",
                  "text": "Kill another encounter with a Light Soulstone (M). If Osvald does not have at least 130 JP, get the Light Soulstone (M) up the stairs to the right and kill another encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b11",
              "title": "Menu",
              "kind": "menu",
              "when": "After killing the encounter",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-9ec165",
                  "text": "Throne — HP Thief",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "throne-ch-1-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "throne-ch-1-1-5195c6",
                  "text": "Osvald — First 2 Scholar skills",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "throne-ch-1-1-17dc80",
                  "text": "Osvald — Evasive Manoeuvres → Slot 1",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "throne-ch-1-b12",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-bafc51",
                  "text": "Go to Tropu'hopu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-8730aa",
                  "text": "Run along the beach and take the rowboat to the Cavern of Waves island.",
                  "check": true,
                  "kind": "do",
                  "watch": 638
                },
                {
                  "id": "throne-ch-1-1-22b194",
                  "text": "Go to the Cavern of Waves.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-a0b2d7",
                  "text": "Optionally save and quit to title to reset step count. Walk and get the JP Augmentor from the red chest.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": true
                },
                {
                  "id": "throne-ch-1-2-6f1b3c",
                  "text": "Warp to New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b13",
              "title": "Menu",
              "kind": "menu",
              "when": "After getting the JP Augmentor",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-d0bf54",
                  "text": "Give JP Augmentor to Throne (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "throne-ch-1-b14",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-2c77c2",
                  "text": "Take the ship to Western Continent Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-a8a066",
                  "text": "Go to Cropdale.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-a792df",
                  "text": "Recruit Agnea.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-c1c127",
                  "text": "Get the Slumber Sage outside.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-752857",
                  "text": "Go to Oresrush.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-3e44a2",
                  "text": "Start Throne Ch. 2: Mother's Route.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-9a9d02",
                  "text": "Recruit Partitio.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-8b95b8",
                  "text": "Go to Ryu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-533e07",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b15",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-78b0f7",
                  "text": "Buy Blusterbloom x11",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b16",
              "title": "Recruit Hikari.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "throne-ch-1-1-e2ea13",
                  "text": "Recruit Hikari.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b17",
              "title": "Ruffian Soldiers",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-2fdf48",
                  "text": "Throne: Ice Soulstone",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Anyone — Ice Soulstone"
                },
                {
                  "id": "throne-ch-1-1-28e4f5",
                  "text": "Osvald: Attack (weapon unclear)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Anyone — Attack"
                }
              ]
            },
            {
              "id": "throne-ch-1-b18",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-830589",
                  "text": "Do not add Hikari to the party.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-b2f9ba",
                  "text": "Go to Northern Conning Creek Coast.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-e70239",
                  "text": "Kill the encounter at night with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-48b7f2",
                  "text": "Go to Western Conning Creek Coast.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-2-e70239",
                  "text": "Kill the encounter at night with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-2fbe54",
                  "text": "Go to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-feb720",
                  "text": "Start Osvald Ch. 3.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-c813e8",
                  "text": "Go north to the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-ccae97",
                  "text": "Steal the Wind Soulstone (L) from the woman outside the house.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-2fa6ec",
                  "text": "Get the Rainbow Glass Bottle on the shore.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-2-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-a0459f",
                  "text": "Take the ship to Western Continent Canalbrine.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-2fc023",
                  "text": "Recruit Castti, but do not add her to the party.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-cdb568",
                  "text": "Recruit Castti: choose No at “Hear the beginning of Castti’s tale?”.",
                  "check": true,
                  "kind": "do",
                  "watch": 1077
                },
                {
                  "id": "throne-ch-1-2-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b19",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-84a466",
                  "text": "Buy Critical Earring",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b20",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-f4fcfe",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-80d227",
                  "text": "Do not start Agnea Ch. 2.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-c5d88e",
                  "text": "Entreat the Fire Soulstone (M) from the man on the right near the entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-263edd",
                  "text": "Go to the covered wagon on the Eastern New Delsta Highroad (night). Take the bag back (Yes), then fight the brigand.",
                  "check": true,
                  "kind": "do",
                  "watch": 1127
                },
                {
                  "id": "throne-ch-1-1-f37a8d",
                  "text": "Go to the brigand.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b21",
              "title": "Brigand",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-0c70df",
                  "text": "Throne — HP Thief x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-1-b22",
              "title": "Talk to Arkar to get the Proof of the Inventor.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-1-1-1b1fc8",
                  "text": "Craft Elemental Bomb Bottle and Critical Scope.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-1-dc062b",
                  "text": "Sail to Clockbank.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-1-900-f44214",
                  "text": "Look around town, make for the Roque Company factory, find the boiler materials, deliver the Clockite to Floyd, escort the clockmaker to Floyd.",
                  "check": true,
                  "kind": "do",
                  "watch": 1233
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "west",
      "title": "Westbound",
      "chapters": [
        {
          "id": "partitio-ch-2",
          "title": "Partitio Ch. 2",
          "mark": "0:20:00",
          "seconds": 1200,
          "blocks": [
            {
              "id": "partitio-ch-2-b1",
              "title": "Partitio Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-213477",
                  "text": "After delivering the Clockite, get the Thief Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-3acf7f",
                  "text": "Entreat the Dazzling Artwork and Gold Pocket Watch from the boy.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-9fbb5f",
                  "text": "Warp to Oresrush.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-4d3498",
                  "text": "After the cutscene at the saddlery, hire the Peddler near the east exit.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b2",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-ac4258",
                  "text": "Sell Dazzling Artwork",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-96220c",
                  "text": "Sell Gold Pocket Watch",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-0cd0de",
                  "text": "Purchase the Sturdy Pickaxe and Forget-Me-Do from the man in the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-f86179",
                  "text": "After stealing the coin, speak to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b4",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-112406",
                  "text": "Set Slot 1 to Hikari. Set Slot 3 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-481bc4",
                  "text": "Warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b6",
              "title": "Menu",
              "kind": "menu",
              "when": "After warping to Crackridge Harbour",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-a5e392",
                  "text": "Throne — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills",
                  "note": "Anyone: Flee (free first turn from A Step Ahead; if it fails, Flee again next turn)"
                },
                {
                  "id": "partitio-ch-2-1-cdb868",
                  "text": "Osvald — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-aa999c",
                  "text": "Hikari — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-a400fc",
                  "text": "Partitio — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "partitio-ch-2-b7",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-d84c2b",
                  "text": "Go to Southern Crackridge Wilds.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-2283e2",
                  "text": "Break the Armour Eater with Sword/Axe/Staff and kill the encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-6c0536",
                  "text": "Go to Western Crackridge Wilds.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-2-2283e2",
                  "text": "Break the Armour Eater with Sword/Axe/Staff and kill the encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-378e7b",
                  "text": "Get the Merchant Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-2f75dd",
                  "text": "Get the Thunder Soulstone (M) beside the nearby merchant.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-1d25ed",
                  "text": "Challenge the Merchant and flee.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-04c7d7",
                  "text": "Run until the stairs outside Crackridge, then walk into Crackridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-c2bf5f",
                  "text": "Warp to Clockbank.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-4761fe",
                  "text": "Purchase the Wind Soulstone (M) and Fire Soulstone (M) from the old lady.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-a54b5d",
                  "text": "Hire the Clockmaker in the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-220c20",
                  "text": "Switch to day before going back to the factory.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-900-588054",
                  "text": "Enter the factory, climb the metal stairs and make for the back of the factory.",
                  "check": true,
                  "kind": "do",
                  "watch": 1577
                }
              ]
            },
            {
              "id": "partitio-ch-2-b8",
              "title": "Guards",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-333eee",
                  "text": "Throne: Thunder Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Anyone — Thunder Soulstone (M)"
                }
              ]
            },
            {
              "id": "partitio-ch-2-b9",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-5d467d",
                  "text": "Get the 7 000 leaves from the red chest outside.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-20657b",
                  "text": "Kill the encounter with a Fire Soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b10",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Garnet",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-a26fd0",
                  "text": "Osvald — Merchant: First 3 Merchant skills [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-701640",
                  "text": "Osvald — Inventor [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-fab868",
                  "text": "Partitio — Merchant: First 2 Merchant skills, Hired Help",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-a98237",
                  "text": "Throne — Merchant: First 2 Merchant skills [^1], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-86dacb",
                  "text": "Throne — Equip Grows on Trees (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-46963e",
                  "text": "Throne — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-fb6262",
                  "text": "Osvald — Equip Grows on Trees (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-353055",
                  "text": "Osvald — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-50aede",
                  "text": "Partitio — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "partitio-ch-2-b11",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-d6adbe",
                  "text": "Fight Garnet in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-2-b12",
              "title": "Garnet",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-2-1-684b4c",
                  "text": "Osvald — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-2-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-2-1-047bfe",
                  "text": "Partitio — Spear",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-2-1-40a7e1",
                  "text": "Osvald — Axe x4 [<]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "partitio-ch-2-1-734f9a",
                  "text": "Hikari — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "partitio-ch-2-1-fe6045",
                  "text": "1st Merchant — Collect x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "partitio-ch-2-1-8bbdbd",
                  "text": "2nd Merchant — HHG x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "partitio-ch-2-b13",
              "title": "Menu",
              "kind": "menu",
              "when": "After Garnet",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-bf583c",
                  "text": "Osvald — Thief [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-4126f6",
                  "text": "Hikari — Merchant: 2 Merchant skills [v1], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-21ee71",
                  "text": "Partitio — Inventor [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-898644",
                  "text": "Throne — Merchant [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-2-1-b0617b",
                  "text": "Hikari — Equip Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "partitio-ch-2-1-b00161",
                  "text": "Hikari — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "partitio-ch-2-b14",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-2-1-2cd59b",
                  "text": "Tag Flamechurch.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-3e9c1b",
                  "text": "Go to Borderfall.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-c3e350",
                  "text": "Get the Cleric Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-2dd00e",
                  "text": "Get the Thunder Soulstone (M) before the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-2-1-350fb1",
                  "text": "Go to Montwise.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "east",
      "title": "The East",
      "chapters": [
        {
          "id": "hikari-ch-2",
          "title": "Hikari Ch. 2",
          "mark": "0:31:00",
          "seconds": 1860,
          "blocks": [
            {
              "id": "hikari-ch-2-b1",
              "title": "Hikari Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-9921ce",
                  "text": "Rest at the inn if Throne does not have Latent Power.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-c94091",
                  "text": "Purchase the Wind Soulstone (M) from the man on the bench.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-8336ac",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b2",
              "title": "Gladiator",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-b939d4",
                  "text": "Turn 1 — Spear x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-506c3a",
                  "text": "Hikari: Light Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 2 — Light Soulstone (M)"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-2-8336ac",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b4",
              "title": "Gladiators",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-b35c33",
                  "text": "Hikari: Ice Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 1 — Ice Soulstone (M)"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b5",
              "title": "Zeto the Butcher",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-461d0f",
                  "text": "Turn 1 — Sword x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-e6bf56",
                  "text": "Turn 2 — Thunder Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-427c1f",
                  "text": "Turn 3 — Fire Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-d1d344",
                  "text": "Learn Slowing Sweep after the fight.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-3-8336ac",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b7",
              "title": "Bandelam the Reaper",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-0d325a",
                  "text": "Hikari: Slowing Sweep/Spear (if first on turn 2)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 1 — Slowing Sweep/Spear (if first on turn 2)"
                },
                {
                  "id": "hikari-ch-2-1-a58594",
                  "text": "Turn 2 — Spear x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-0a69a4",
                  "text": "Hikari: Wind Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 3 — Wind Soulstone (L)"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b8",
              "title": "Bandelam the Reaper",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-2-1-005e5f",
                  "text": "Osvald — Dagger x3 [<]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-2-1-734f9a",
                  "text": "Hikari — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-2-1-cb44c6",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-2-1-95b746",
                  "text": "Partitio — HHG x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b9",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-4-8336ac",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-625d41",
                  "text": "Ambush the Fainthearted Youth.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b10",
              "title": "Yurinas",
              "kind": "fight",
              "when": "Requires Latent Power on Throne",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-7791d7",
                  "text": "Throne after Yurinas on T2",
                  "check": true,
                  "kind": "do",
                  "note": "Throne before Yurinas on T2",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-b5b153",
                  "text": "Turn 1 — Defend",
                  "check": true,
                  "kind": "do",
                  "note": "Branch: T1 — Armour Corrosive",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-2-1-09d6da",
                  "text": "Throne: Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "do",
                  "note": "Branch: T2 — HHV x4",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 2 — Latent Power + Armour Corrosive"
                },
                {
                  "id": "hikari-ch-2-1-640754",
                  "text": "Throne after Yurinas on T2 — HHV x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b11",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-b8a3c0",
                  "text": "Warp to Flamechurch.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b12",
              "title": "Menu",
              "kind": "menu",
              "when": "Before recruiting Temenos",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-87d8b4",
                  "text": "Give Reinforcing Jam (if no latent) to Throne",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "hikari-ch-2-1-e08682",
                  "text": "Then — Champion's Belt (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "hikari-ch-2-b13",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-9a6e6c",
                  "text": "Recruit Temenos at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-2-b14",
              "title": "Insurgent",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-2-1-05fde0",
                  "text": "Throne — Dagger x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "recruit-temenos",
          "title": "Recruit Temenos",
          "mark": "0:36:00",
          "seconds": 2160,
          "blocks": [
            {
              "id": "recruit-temenos-b1",
              "title": "Recruit Temenos",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "recruit-temenos-1-292b73",
                  "text": "Set Slot 3 to Temenos. Set Slot 3 to Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "recruit-temenos-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "recruit-temenos-1-d2d7c6",
                  "text": "Purchase the Herb of Serenity from the woman to the north.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "recruit-temenos-1-6fad35",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "recruit-temenos-1-dbbae3",
                  "text": "Go to Conning Creek: Outskirts.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "recruit-temenos-1-5f60ef",
                  "text": "After the cutscene, get the Fire Soulstone (M) from the nearby chest.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "recruit-temenos-1-925b73",
                  "text": "Fight Lady Clarissa at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "recruit-temenos-b3",
              "title": "Lady Clarissa",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "recruit-temenos-1-d51a23",
                  "text": "Merchant — HHG x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "recruit-temenos-b4",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "recruit-temenos-1-9fbb5f",
                  "text": "Warp to Oresrush.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "recruit-temenos-900-f6686a",
                  "text": "Speak to the townsfolk; make for the foundry; deal with the pursuer in the alley; steal the mask off the boy’s face; go back to the foundry and sit at Death’s Table.",
                  "check": true,
                  "kind": "do",
                  "watch": 2217
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-2-mother-s-route",
          "title": "Throne Ch. 2: Mother's Route",
          "mark": "0:37:00",
          "seconds": 2220,
          "blocks": [
            {
              "id": "throne-ch-2-mother-s-route-b1",
              "title": "Throne Ch. 2: Mother's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-2-mother-s-route-1-9c7ff7",
                  "text": "After finishing the chapter, warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-3",
          "title": "Osvald Ch. 3",
          "mark": "0:38:30",
          "seconds": 2310,
          "blocks": [
            {
              "id": "osvald-ch-3-b1",
              "title": "Osvald Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-3-1-a91bcd",
                  "text": "Fight the encounter during the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Guard Outpost"
                }
              ]
            },
            {
              "id": "osvald-ch-3-b2",
              "title": "Guards",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-3-1-cb44c6",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-3-1-876b4e",
                  "text": "Osvald: Wind Soulstone (M)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1",
                  "sheet": "Anyone — Wind Soulstone (M)"
                },
                {
                  "id": "osvald-ch-3-1-d85c79",
                  "text": "Partitio — HHM x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2+"
                },
                {
                  "id": "osvald-ch-3-1-8c99a5",
                  "text": "Throne — Latent Power + Steal → Any",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2+"
                },
                {
                  "id": "osvald-ch-3-1-01fcfb",
                  "text": "Throne — Steal → Different",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2+"
                },
                {
                  "id": "osvald-ch-3-1-a6c898",
                  "text": "Osvald — Steal → Different",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2+"
                },
                {
                  "id": "osvald-ch-3-1-b7b530",
                  "text": "Anyone — Flee",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2+",
                  "sheet": "Anyone — Run"
                }
              ]
            },
            {
              "id": "osvald-ch-3-b3",
              "title": "Fight Stenvar at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "osvald-ch-3-1-79f386",
                  "text": "Fight Stenvar at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-3-b4",
              "title": "Stenvar",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-3-1-4c0b71",
                  "text": "Merchants — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-3-1-0d0310",
                  "text": "1st Merchant — Collect x4 → Stenvar",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-3-1-bbc69f",
                  "text": "2nd Merchant — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "osvald-ch-3-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-3-1-27ebaa",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-4",
          "title": "Osvald Ch. 4",
          "mark": "0:40:00",
          "seconds": 2400,
          "blocks": [
            {
              "id": "osvald-ch-4-b1",
              "title": "Osvald Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-135b77",
                  "text": "Purchase the Herb of Serenity from the NPC up the stairs in the library. If you got zero medicinal concoct ingredients as drops, purchase the Grape Leaf from him too.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-a62bba",
                  "text": "Infinite tries when scrutinising in the library.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-900-826ea8",
                  "text": "Scrutinize the Scholar in the library, find the hidden room, climb down the ladder and make for Harvey’s laboratory.",
                  "check": true,
                  "kind": "do",
                  "watch": 2419
                }
              ]
            },
            {
              "id": "osvald-ch-4-b2",
              "title": "Underground Laboratory",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-bd5059",
                  "text": "If you missed the collect on Stenvar, walk and grab the 14 000 leaves in the chest to the right.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-5417c8",
                  "text": "Hear the travel banter at the third door in the long corridor (at first door if you grabbed the chest).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-2b3571",
                  "text": "Switch to night before entering the room after the save point.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b3",
              "title": "Harvey's Creatures",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-9448f9",
                  "text": "Partitio — HHG x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-f8b87e",
                  "text": "If Partitio has Latent Power, you can kill with Throne.",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b4",
              "title": "Menu",
              "kind": "menu",
              "when": "After the fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-acec68",
                  "text": "Temenos — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b5",
              "title": "Fight Grieving Golem at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "osvald-ch-4-1-480890",
                  "text": "Fight Grieving Golem at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b6",
              "title": "Grieving Golem",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-2fddbd",
                  "text": "Throne — Spear",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-dce425",
                  "text": "Osvald — Staff x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-27f40f",
                  "text": "Temenos — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-89e965",
                  "text": "Partitio — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-df4ae0",
                  "text": "Merchant 1 — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-4-1-0355d7",
                  "text": "Merchant 2 — HHG x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-4-1-d018b8",
                  "text": "Osvald — Wind Soulstone (M)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-4-1-a4daf9",
                  "text": "Temenos — Staff x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b7",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving town",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-6fc7f1",
                  "text": "Partitio — Cleric: 4 Cleric skills [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-4-1-3824bd",
                  "text": "Partitio — Equip Evil Ward (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b8",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-d186ec",
                  "text": "Go to Western Merry Hills Pass.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-bf6b54",
                  "text": "Get the Herb of Serenity outside Merry Hills.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-21b813",
                  "text": "Enter Merry Hills.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-aa683e",
                  "text": "Go to Beasting Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-aefd8e",
                  "text": "Recruit Ochette.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-f630c6",
                  "text": "Pick Mahina.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-02f165",
                  "text": "Recruit Ochette",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-a4bc32",
                  "text": "Set Slot 4 to Ochette. Set Slot 3 to Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b9",
              "title": "Steal Dispatches from Beastling Island from the NPC to the left.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-6fad35",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-479669",
                  "text": "Do not start Ochette ch. 2: Cateracta's Route.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b10",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving Conning Creek",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-2a3351",
                  "text": "Ochette — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b11",
              "title": "Tag Sai.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-619773",
                  "text": "Go to Eastern Wellgrove Trail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-a91bcd",
                  "text": "Fight the encounter during the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b12",
              "title": "Woodland Birdian IV",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-10131c",
                  "text": "Throne — HP Thief x2 → Woodland Birdian IV",
                  "check": true,
                  "kind": "fight",
                  "note": "min roll w/o crits is 602 damage, max roll with crits is 784 damage",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-ab0547",
                  "text": "Anyone — Fire Soulstone / Fireball x2 (if already broken)",
                  "check": true,
                  "kind": "fight",
                  "note": "either way it drops below 25% HP when combined with a soulstone or fireball (and never dies)",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-cbebe9",
                  "text": "Ochette — Defend / Capture → Woodland Birdian IV",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-573056",
                  "text": "Ochette — Capture (if not done already)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-4-1-f9e6ad",
                  "text": "Anyone — Flee",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "osvald-ch-4-1-244d34",
                  "text": "Need soulstone OR fireball, don't use both. If it's already in red HP, don't need fireball at all.",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b13",
              "title": "Go to Wellgrove.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-355c37",
                  "text": "Start Partitio Ch. 3.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-ce2bc2",
                  "text": "Warp to Cape Cold.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-9b47b9",
                  "text": "Go to Western Winterbloom Snows.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-78ced9",
                  "text": "Use a Fire Soulstone (M) on the first encounter, then capture the Snow Yak.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-cc232c",
                  "text": "Get the Scholar Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-353efb",
                  "text": "Go to Winterbloom.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b14",
              "title": "Menu",
              "kind": "menu",
              "when": "Before entering Winterbloom",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-b773e6",
                  "text": "Partitio — Scholar: 2 Scholar skills",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-4-1-a0fcb8",
                  "text": "Partitio — Thief Armour Corrosive",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-4-1-447ff4",
                  "text": "Partitio — Equip Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-4-1-2fd4a6",
                  "text": "Osvald — Unequip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-4-1-2e83e0",
                  "text": "Throne Ch. 2: Father's Route",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-4-1-49bb35",
                  "text": "If Osvald is below 765 HP, heal him with Partitio (or a grape).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b15",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-bbf16c",
                  "text": "Set Slot 1 to Agnea. Set Slot 2 to Osvald",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-bc5cc0",
                  "text": "Set Slot 2 to Castti. Set Slot 3 to Ochette",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b16",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-131c4d",
                  "text": "Talk to the Troubled Woman to complete \"The Sword in the Stone\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-900-195535",
                  "text": "Make for the Snowhares’ Den. Ambush the Lackey guard (Throne: Ambush → Yes). Find the Snowhares’ boss.",
                  "check": true,
                  "kind": "do",
                  "watch": 3015
                },
                {
                  "id": "osvald-ch-4-1-8b8ac4",
                  "text": "Fight Bergomi during the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b17",
              "title": "Bergomi",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-5255f7",
                  "text": "1st Merchant — Armour Corrosive → Bergomi",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-4-1-e582f7",
                  "text": "2nd Merchant — HHB x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "osvald-ch-4-b18",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-db2f8a",
                  "text": "Go to Northern Wellgrove Trail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-be1f4d",
                  "text": "Go to the Altar of the Lady of Grace.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-dd36be",
                  "text": "Learn Windy Refrain.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-d1b14e",
                  "text": "Go to Timberain.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-63e9e6",
                  "text": "Steal the Wind Soulstone (L) and Light Soulstone (L) from the lady near the entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-64c465",
                  "text": "Go to the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-d96f1e",
                  "text": "Purchase the Ancient Circlet from the quest NPC.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-3cd4f6",
                  "text": "Soothe the Elderly Soldier.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-5a465b",
                  "text": "Get the Rusty Polearm at the end.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-901ee6",
                  "text": "Warp to Crackridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-b1c3e6",
                  "text": "Go to Western Gravell Wilds.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-cbcc31",
                  "text": "Grab the Thunder Soulstone (L) from the brown chest before the stairs to the first bridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-eea48e",
                  "text": "Go to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-ad140b",
                  "text": "Soothe the Debt Collector.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-d7c001",
                  "text": "Talk to the Retired Blacksmith to get Proof of the Armsmaster, Conqueror's Sword and Warlord's Spear.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-533e07",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b19",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-15eda2",
                  "text": "Sell Warlord's Spear",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-4-b20",
              "title": "Purchase the Herb of Serenity from the lady in the provisioner.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-4-1-ddcaac",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-e4e920",
                  "text": "Entreat the Marksman's Bow and Light Nut (L) from the beastling.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-9723ae",
                  "text": "Purchase the boat.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-f25573",
                  "text": "Tag Roque Island.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-194d30",
                  "text": "Soothe the man guarding the house.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-1-a120d8",
                  "text": "Get the Empowering Lychee (L), 39,800 leaves, 3 Rejuvenating Jams and Magic Nut (L) inside.",
                  "check": true,
                  "kind": "do",
                  "note": "skip lychee (rightmost chest) if Agnea has more than half latent",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "osvald-ch-4-2-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "boat",
      "title": "The Boat",
      "chapters": [
        {
          "id": "partitio-ch-3",
          "title": "Partitio Ch. 3",
          "mark": "0:58:00",
          "seconds": 3480,
          "blocks": [
            {
              "id": "partitio-ch-3-b1",
              "title": "Partitio Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-3-1-b4d6a9",
                  "text": "After telling Alrond about the ship, speak to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-3-1-9830d2",
                  "text": "Set Slot 3 to Hikari. Set Slot 2 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-b3c2a1",
                  "text": "After the cutscene at the department store, warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-c4c07a",
                  "text": "Go to Shipwreck of the Empress.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-e7a7cf",
                  "text": "Get the Rusty Dagger at the end.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-6f1b3c",
                  "text": "Warp to New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-a3e409",
                  "text": "Get the EXP Augmentor.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-1-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "partitio-ch-3-900-53627e",
                  "text": "Hire the merchants (Partitio: Hire), purchase the required goods (coffee beans, pocket watches, silverwork…), then make for Alrond’s estate and Alrond’s room.",
                  "check": true,
                  "kind": "do",
                  "watch": 3902
                }
              ]
            },
            {
              "id": "partitio-ch-3-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Thurston",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-3-1-2d66c9",
                  "text": "Weapons — Conqueror's Sword → Hikari",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "partitio-ch-3-1-6c3b2d",
                  "text": "Accessories — EXP Augmentor → Slot 1",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "partitio-ch-3-1-734816",
                  "text": "Accessories — Unequip Champion's Belt",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "partitio-ch-3-1-f6a55e",
                  "text": "Accessories — Champion's Belt (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "partitio-ch-3-1-f198e9",
                  "text": "Throne — Inventor [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "partitio-ch-3-1-d19de5",
                  "text": "Hikari — Merchant [v2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                }
              ]
            },
            {
              "id": "partitio-ch-3-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-3-1-84ddac",
                  "text": "Fight Thurston during the day.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (12/03/2025): no early Royal Guard's Helm; Thurston → Hikari 3 → Sand Lion.",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-3-b4",
              "title": "Thurston",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-3-1-8d6297",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-3-1-a5bee4",
                  "text": "1st Merchant — Defend (if before Throne) / Attack",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-3-1-e582f7",
                  "text": "2nd Merchant — HHB x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-3-1-33f63f",
                  "text": "Throne — Sword x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "partitio-ch-3-1-21cca9",
                  "text": "Merchant — HHV x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "partitio-ch-3-b5",
              "title": "Wellgrove",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-3-1-47c095",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-3-1-3da05e",
                  "text": "Talk to Porta to get the Dancer's Blade.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-3-2-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "mid",
      "title": "Midgame",
      "chapters": [
        {
          "id": "hikari-ch-3",
          "title": "Hikari Ch. 3",
          "mark": "1:09:47",
          "seconds": 4187,
          "blocks": [
            {
              "id": "hikari-ch-3-b1",
              "title": "Hikari Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-3-b2",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-a76e19",
                  "text": "Sell Dancer's Blade",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-511b34",
                  "text": "Sell Axe of Avarice",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-31d2db",
                  "text": "Sell Marksman's Bow",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-3-b3",
              "title": "Steal 2 Energising Pomegranate (M) from the lady by the provisioner.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-5966cd",
                  "text": "Purchase the Sharp Nut (L) from the man in the inn.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-7f3c7d",
                  "text": "Hear the travel banter before crossing the bridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-f7de09",
                  "text": "Fight the Ku Soldiers in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-3-b4",
              "title": "Ku Soldiers",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-0990c5",
                  "text": "Hikari: Light Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Anyone — Light Soulstone (L)"
                }
              ]
            },
            {
              "id": "hikari-ch-3-b5",
              "title": "General Rou",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-b5b153",
                  "text": "Turn 1 — Defend",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-35af3c",
                  "text": "Turn 2 — HHB x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-324180",
                  "text": "Turn 3 — Hienka",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-1-ec53f5",
                  "text": "Learn Divine Dual-Edge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "hikari-ch-3-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-3-1-2bb37b",
                  "text": "Warp to Sai.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-3-900-1d4537",
                  "text": "Make for the hospital, then the camp, then the Sand Lion’s den.",
                  "check": true,
                  "kind": "do",
                  "watch": 3607
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-2-sai-route",
          "title": "Castti Ch.2: Sai Route",
          "mark": "1:10:00",
          "seconds": 4200,
          "videoSeconds": 3720,
          "orderNote": "order differs from the video (Sand Lion is at 1:02:00)",
          "blocks": [
            {
              "id": "castti-ch-2-sai-route-b1",
              "title": "Castti Ch.2: Sai Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-sai-route-1-655e3d",
                  "text": "Fight the Sand Lion during the day.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (12/03/2025): video does Sand Lion first (~1:02:00); sheet order is Thurston, then Hikari 3, then Sand Lion.",
                  "warn": false,
                  "optional": false,
                  "watch": 3726
                }
              ]
            },
            {
              "id": "castti-ch-2-sai-route-b2",
              "title": "Sand Lion",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-sai-route-1-1e4df1",
                  "text": "Thief — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-2-sai-route-1-177f53",
                  "text": "Merchant — HHV x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "castti-ch-2-sai-route-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-sai-route-1-69b9a5",
                  "text": "Get the Warrior Licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-2-sai-route-1-dcc20e",
                  "text": "Warp to Merry Hills.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-2-sai-route-b4",
              "title": "Menu",
              "kind": "menu",
              "when": "Before the Foreign Assassins",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-sai-route-1-576e5f",
                  "text": "Throne — Thief 3 Thief skills",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "castti-ch-2-sai-route-1-4bef57",
                  "text": "Throne — Equip Life in the Shadows (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "castti-ch-2-sai-route-1-37871e",
                  "text": "Hikari — Equip Peak Performance (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "castti-ch-2-sai-route-b5",
              "title": "Fight the Foreign Assassins at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "castti-ch-2-sai-route-1-93d74f",
                  "text": "Fight the Foreign Assassins at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "foreign-assassins",
          "title": "Foreign Assassins",
          "mark": "1:10:30",
          "seconds": 4230,
          "orderNote": "order differs from the video",
          "blocks": [
            {
              "id": "foreign-assassins-b1",
              "title": "Foreign Assassins",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "foreign-assassins-1-b8556e",
                  "text": "Throne — Critical Scope → Back",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "foreign-assassins-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "foreign-assassins-1-f672a6",
                  "text": "Partitio — HHM",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "foreign-assassins-1-c74d9c",
                  "text": "Hikari — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "foreign-assassins-1-67722a",
                  "text": "Partitio — HHV x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "foreign-assassins-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "foreign-assassins-1-47c095",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-56ad29",
                  "text": "Go to Ivory Ravine.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-066df2",
                  "text": "Get the Giant's Club.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-27ebaa",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-08ea8b",
                  "text": "Start Throne Ch. 3: Father's Route.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-803a68",
                  "text": "Reset reputation if needed.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-dc65e2",
                  "text": "Leave town to the west.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-fc1038",
                  "text": "Go to Southern Stormhail Snows.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-0b1174",
                  "text": "Purchase The Curious Legend of the Great Wall.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-27e199",
                  "text": "Steal the Mighty Leaf, Energising Pomegranate (M), and Energising Pomegranate (L) from the woman near the ladder.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (09/17/2025): no shaggy aurochs; mighty leaf and rotten meat instead.",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "foreign-assassins-1-b9e216",
                  "text": "Go to Stormhail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-4",
          "title": "Hikari Ch. 4",
          "mark": "1:18:00",
          "seconds": 4680,
          "blocks": [
            {
              "id": "hikari-ch-4-b1",
              "title": "Hikari Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b2",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-b1d637",
                  "text": "Set Slot 4 to Temenos. Set Slot 4 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b3",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Kunzo",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-710ec6",
                  "text": "Throne — Cleric: 4 Cleric skills [v2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-67f158",
                  "text": "Temenos — Merchant: 3 Merchant skills [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-add85c",
                  "text": "Temenos — Inventor [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-aa91c8",
                  "text": "Castti — Scholar: 4 Scholar skills [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-bd80a5",
                  "text": "Castti — Merchant 3 Merchant skills [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-b05a5b",
                  "text": "Castti — Hunter Abating Orb [v4]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-673d15",
                  "text": "Hikari — Armsmaster [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-138027",
                  "text": "Throne — Merchant [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "hikari-ch-4-1-20d09b",
                  "text": "Throne — Equip Evil Ward over Grows on Trees (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-88d2d3",
                  "text": "Castti — Equip Evasive Manoeuvres (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-4ab1f0",
                  "text": "Castti — Equip Extra Experience (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-7e219e",
                  "text": "Castti — Equip Boost-Start (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-312e4d",
                  "text": "Castti — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-e330aa",
                  "text": "Temenos — Equip Grows on Trees (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-9fb339",
                  "text": "Temenos — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "hikari-ch-4-1-caeb1b",
                  "text": "Give Giant's Club to Hikari",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "hikari-ch-4-1-0b66dc",
                  "text": "Temenos — Fortifying Nut (L)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "hikari-ch-4-1-c1711a",
                  "text": "If Hikari is not at full health, use a refreshing jam on him (right above the fortifying nut L in the menu)",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "hikari-ch-4-b4",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-2b0283",
                  "text": "Steal the Sharp Nut and Warding Leaf from the girl in the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-3b6c9f",
                  "text": "Fight Kunzo at night.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (12/03/2025): no Critical Scope; the video sets Critical Scope here.",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b5",
              "title": "Kunzo",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-76173e",
                  "text": "First — Dagger / Axe x3 → Kunzo",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-53f239",
                  "text": "Second — Dagger / Axe x2 → Kunzo",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-34de72",
                  "text": "Hikari — Divine Dual-Edge x3 (when broken)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b6",
              "title": "Jin Mei",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-30cf28",
                  "text": "Turn 1 — Sword",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-bb4fc4",
                  "text": "Turn 2 — Sword",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-b59915",
                  "text": "Turn 3 — Defend",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-bb6c10",
                  "text": "Turn 4 — Wild Cut x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-c62409",
                  "text": "Turn 5 — Wild Cut x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b7",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-c07ee3",
                  "text": "Get the Thunderstorm Amulet in the tower to the left before the save point (right before the boss).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-8001eb",
                  "text": "Fight Rai Mei at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b8",
              "title": "Rai Mei",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-1b4577",
                  "text": "Throne — HHB x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-44abb9",
                  "text": "Hikari — Energising Pomegranate (L) → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-27f40f",
                  "text": "Temenos — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-7b2502",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-4-1-23056b",
                  "text": "Hikari — Divine Dual-Edge x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-4-1-b2c082",
                  "text": "Temenos — Staff x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "hikari-ch-4-b9",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b10",
              "title": "Menu",
              "kind": "menu",
              "when": "Before fighting Gigantes",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-94ad7d",
                  "text": "Hikari — 5 Warrior skills",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "hikari-ch-4-1-0c8a59",
                  "text": "Hikari — Equip Deal More Damage over Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "hikari-ch-4-b11",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-b11e00",
                  "text": "Go to the Nameless Isle.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-9974b8",
                  "text": "Fight Gigantes at night.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (08/13/2025): video shows Gigantes at ~1:12:35, before Hikari Ch.4; the sheet delays this fight until after Rai Mei.",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-4-b12",
              "title": "Gigantes",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-add45d",
                  "text": "Throne — Bow x3 [>]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-a0d4ee",
                  "text": "Castti — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-8a70a1",
                  "text": "Temenos — Sword x3 [>]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-4-1-f79474",
                  "text": "Hikari — Conqueror's Sword x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "hikari-ch-4-b13",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-4-1-116f01",
                  "text": "Get the Finisher's Claws from the red chest.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (08/13/2025): Finisher's Claws were delayed until after Rai Mei.",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-0c87b8",
                  "text": "Inquire Georges Lazuli.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-2bb37b",
                  "text": "Warp to Sai.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-1-19d801",
                  "text": "Go to Ku.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-4-900-dbc1f4",
                  "text": "Make for the Hall of Heroes in Ku Castle Town.",
                  "check": true,
                  "kind": "do",
                  "watch": 4923
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-5",
          "title": "Hikari Ch. 5",
          "mark": "1:21:53",
          "seconds": 4913,
          "blocks": [
            {
              "id": "hikari-ch-5-b1",
              "title": "Hikari Ch. 5",
              "kind": "menu",
              "when": "Before fighting Ritsu",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-ada6e6",
                  "text": "Give Finisher's Claws to Hikari (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "note": "whichever slot the champion's belt isn't in",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "hikari-ch-5-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-14e367",
                  "text": "Rest at the inn if Hikari died since the assassins fight (you'll know he died if his LP bar isn't near full)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-2bb7f3",
                  "text": "Fight Ritsu at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-5-b3",
              "title": "Ritsu",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-8d6297",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-a0d4ee",
                  "text": "Castti — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-cfe886",
                  "text": "Temenos — Critical Scope [<]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-a0359c",
                  "text": "Throne — Spear / Bow x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-1-f79474",
                  "text": "Hikari — Conqueror's Sword x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-1-eddb33",
                  "text": "Castti — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "hikari-ch-5-b4",
              "title": "Mugen",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-eb49dd",
                  "text": "Throne — Spear x3 [<]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-2-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-7b0e9d",
                  "text": "Castti — Axe x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-b975db",
                  "text": "Temenos — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-2-f79474",
                  "text": "Hikari — Conqueror's Sword x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-2-eddb33",
                  "text": "Castti — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "hikari-ch-5-b5",
              "title": "\"Hikari\"",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-8ec5fe",
                  "text": "Turn 1 — Aggressive Slash x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-327e3b",
                  "text": "Turn 2 — Defend",
                  "check": true,
                  "kind": "do",
                  "note": "using slowing sweep here raises the odds of getting a hienka crit to 93.75%",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-e30026",
                  "text": "Turn 3 — Aggressive Slash",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-d99259",
                  "text": "Turn 4 — Hienka x4 (non crit is 8k damage, crit is 15k)",
                  "check": true,
                  "kind": "do",
                  "note": "75% chance to get at least 1 crit",
                  "warn": true,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-a9175c",
                  "text": "T4-a — Thunder Soulstone (L) / Defend (if you got a Hienka crit)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-7c1a39",
                  "text": "Turn 5 — Sword x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "hikari-ch-5-b6",
              "title": "Enshrouded King",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-ee054c",
                  "text": "Throne — Spear / Bow x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-3-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-832da9",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-a4daf9",
                  "text": "Temenos — Staff x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "hikari-ch-5-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-3-f79474",
                  "text": "Hikari — Conqueror's Sword x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-1-e7ac11",
                  "text": "Castti — Concoct → Hikari",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Weeds",
                    "Mighty Leaf"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-2-b975db",
                  "text": "Temenos — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "hikari-ch-5-1-0aa391",
                  "text": "In place of weeds, can use anything that isn't the warding leaf to remove it from the concoct inventory. You need to leave 1 \"junk\" item for galdy, which is usually the grape leaf. This is completely optional.",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "hikari-ch-5-b7",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "hikari-ch-5-1-8b44fc",
                  "text": "Steal 2 Whimsical Leaves and a Light Soulstone (M) from the merchant to the right.",
                  "check": true,
                  "kind": "do",
                  "note": "skip the soulstone if you didn't need to use the thunder L",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-bbcf89",
                  "text": "Steal the Fortifying Nut and Magic Nut from the man on the right blocking the alley.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-a33c33",
                  "text": "Steal the Unerring Bracelet from the quest NPC outside the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "hikari-ch-5-1-250c37",
                  "text": "Set Slot 4 to Partitio. Set Slot 4 to Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "hikari-ch-5-1-481bc4",
                  "text": "Warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "hikari-ch-5-1-cb5697",
                  "text": "Steal the Giant Shield and purchase the Battle-Tested Blade from Bandelam.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "hikari-ch-5-1-de5388",
                  "text": "Warp to Winterbloom.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-2-winterbloom-route",
          "title": "Castti Ch. 2: Winterbloom Route",
          "mark": "1:29:00",
          "seconds": 5340,
          "blocks": [
            {
              "id": "castti-ch-2-winterbloom-route-b1",
              "title": "Castti Ch. 2: Winterbloom Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-winterbloom-route-1-720e3b",
                  "text": "Inquire the man in blue in the tavern for \"Easier Inquiries\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Winterbloom"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-900-754275",
                  "text": "Make for Rosa’s manor. Gather the herbs from the herb garden. Return to Rosa and soothe her. Make for the Thieves’ Quarter.",
                  "check": true,
                  "kind": "do",
                  "watch": 5277
                }
              ]
            },
            {
              "id": "castti-ch-2-winterbloom-route-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Plukk",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-winterbloom-route-1-353005",
                  "text": "Give Battle-Tested Blade to Hikari",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-d220cf",
                  "text": "Then — 2 Fortifying Nuts",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-3556f9",
                  "text": "Castti — Inventor [v2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-3d75a7",
                  "text": "Throne — Merchant: 2 Merchant skills",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-7dccd0",
                  "text": "Throne — Hunter Take Aim [v3], Abating Orb",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-4f6930",
                  "text": "Throne — Equip Full Power over Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "castti-ch-2-winterbloom-route-b3",
              "title": "Winterbloom: Thieves' Quarters",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-winterbloom-route-1-8a853e",
                  "text": "Inquire the man guarding the door in the Thieves' Quarters for \"Thieving Tips and Tricks\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-2-winterbloom-route-1-a92679",
                  "text": "Fight Plukk at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-2-winterbloom-route-b4",
              "title": "Plukk",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-winterbloom-route-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "castti-ch-2-winterbloom-route-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-2-winterbloom-route-1-d45c83",
                  "text": "After finishing the chapter, warp to Abandoned Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-2-winterbloom-route-900-187be4",
                  "text": "Inquire around town, find Malaya, investigate the smoke, and make for the summit.",
                  "check": true,
                  "kind": "do",
                  "watch": 5435
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-3",
          "title": "Castti Ch. 3",
          "mark": "1:31:00",
          "seconds": 5460,
          "blocks": [
            {
              "id": "castti-ch-3-b1",
              "title": "Castti Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-3-1-45cc3c",
                  "text": "After finishing the chapter, warp to Timberain.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-3-900-a3c458",
                  "text": "In Timberain, look around town and follow Edmund to the castle.",
                  "check": true,
                  "kind": "do",
                  "watch": 5576
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-4",
          "title": "Castti Ch. 4",
          "mark": "1:33:00",
          "seconds": 5580,
          "blocks": [
            {
              "id": "castti-ch-4-b1",
              "title": "Castti Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-35129d",
                  "text": "Bribe the soldier with a helmet near the entrance to town on the way to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-5e5df7",
                  "text": "After it starts raining, go to the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-4-b2",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-b404b5",
                  "text": "Sell Conqueror's Sword",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-14c4d2",
                  "text": "Sell Drifting Dagger",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-940b35",
                  "text": "Sell Bow of Carnage",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-5dc68b",
                  "text": "Buy 7 Strengthening Serum",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-c8d2e2",
                  "text": "Buy 1 Diffusing Serum",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-4-b3",
              "title": "Go to the armourer.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "castti-ch-4-1-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-4-b4",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-edfea1",
                  "text": "Buy 4 Empowering Bracelet",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-c6a4a3",
                  "text": "Buy 2 Royal Guard's Mail",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-2123a3",
                  "text": "Buy Royal Guard's Helm",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-4-b5",
              "title": "Purchase the Blessed Vestments from the judge in the inn.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-1c50a0",
                  "text": "Get the Wind Soulstone (L) from the chest to the left of the castle entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "castti-ch-4-1-c79d17",
                  "text": "Fight Trousseau at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "castti-ch-4-b6",
              "title": "Trousseau",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-4-1-dd4ac4",
                  "text": "Throne — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-4-1-ea2633",
                  "text": "Hikari — Slowing Sweep",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-4-1-4b9af3",
                  "text": "Castti — Axe x3 / Defend (need at least one defend)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-4-1-25d233",
                  "text": "Partitio — Spear x3 / Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "castti-ch-4-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "castti-ch-4-1-0a311c",
                  "text": "Castti / Partitio — Axe / Spear x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "castti-ch-4-1-f2de05",
                  "text": "After finishing the chapter, warp to New Delsta.",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "castti-ch-4-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "castti-ch-4-1-78ad47",
                  "text": "Set Slot 3 to Agnea. Set Slot 4 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                }
              ]
            },
            {
              "id": "castti-ch-4-b7",
              "title": "Hear a Tale",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "castti-ch-4-1-509d99",
                  "text": "Hear a Tale",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-2",
          "title": "Agnea Ch. 2",
          "mark": "1:42:00",
          "seconds": 6120,
          "blocks": [
            {
              "id": "agnea-ch-2-b1",
              "title": "Agnea Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-ebc766",
                  "text": "After the cutscene outside the theatre, warp to Beasting Bay: Anchorage..",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-08cfd3",
                  "text": "Get the Fortune Wand from the chest to the north.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-baf3e6",
                  "text": "Go to Curious Nest.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-3b79ec",
                  "text": "Fight the Battle-Worn Shark at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-2-b2",
              "title": "Battle-Worn Shark",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-2-b3",
              "title": "Fight Tyrannodrake at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "agnea-ch-2-1-8f3c27",
                  "text": "Fight Tyrannodrake at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-2-b4",
              "title": "Tyrannodrake",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-8d6297",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-0dfafc",
                  "text": "Hikari — Sixfold Strike",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-f6a5d4",
                  "text": "Castti — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-8fa5c4",
                  "text": "Throne — Precise Shot x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "agnea-ch-2-2-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-2-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-aa0e83",
                  "text": "Get the 2 Decaying Dragon's Essences, Fang of Ferocity and Tornado Glaive.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-ee9a04",
                  "text": "Get the Reinforcing Jam on the way to Scourge of the Sea.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-2041b2",
                  "text": "Fight the Scourge of the Sea at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-2-b6",
              "title": "Scourge of the Sea",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-2-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-2-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-2-f6a5d4",
                  "text": "Castti — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-3-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-2-b7",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-f4fcfe",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-1f6365",
                  "text": "Entreat the Theatre Ticket.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-2e1196",
                  "text": "Entreat the Fortifying Nut (M) and Nourishing Nut (M) from the man near the tavern entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-d9ec4f",
                  "text": "After alluring both NPCs on the second screen to Gil, warp to Winterbloom.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-391752",
                  "text": "Entreat the Fortifying Nut (L) from the soldier.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-98dff4",
                  "text": "Steal the Lightning Amulet and Dazzling Artwork from Greg up the stairs.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-ac054e",
                  "text": "Steal the Thick Tome and Brooch of Joy from Melia. (brooch should be 55%, else you forgot to inquire thieving tips and tricks)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-2-b8",
              "title": "Menu",
              "kind": "menu",
              "when": "Before La'mani",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-91407d",
                  "text": "Give Brooch of Joy to Castti (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "agnea-ch-2-1-773aa2",
                  "text": "Then — Fortifying Nut (L)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "agnea-ch-2-1-980641",
                  "text": "Castti — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "agnea-ch-2-b9",
              "title": "Warp to New Delsta.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-31d793",
                  "text": "Steal the Sprightly Ring from the topmost of the trio of 3 NPCs near the entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-f1edab",
                  "text": "Allure the woman on the way back to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-8edcaf",
                  "text": "Get the Lightning Amulet in the top floor on the first screen in the theatre.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-1dfd88",
                  "text": "Fight La'mani in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-2-b10",
              "title": "La'mani",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-2-1-2971e0",
                  "text": "Hikari — Shinjumonjigiri x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-2-1-c82f3a",
                  "text": "Talk to Al to complete \"The Traveler's Bag\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-ddcaac",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-30ef95",
                  "text": "Start Agnea Ch. 3.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-1-e0591e",
                  "text": "After the cutscene on the next screen, warp to Montwise.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-2-900-ab4879",
                  "text": "Make for the abandoned church (Canalbrine → Crestlands path). Enter, climb the stairs and confront Father.",
                  "check": true,
                  "kind": "do",
                  "watch": 6241
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-3-father-s-route",
          "title": "Throne Ch. 3: Father's Route",
          "mark": "1:46:00",
          "seconds": 6360,
          "blocks": [
            {
              "id": "throne-ch-3-father-s-route-b1",
              "title": "Throne Ch. 3: Father's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-father-s-route-1-e04c85",
                  "text": "Fight Father at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Abandoned Church"
                }
              ]
            },
            {
              "id": "throne-ch-3-father-s-route-b2",
              "title": "Father",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-father-s-route-1-e434e0",
                  "text": "Throne — Latent Power + Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-3-father-s-route-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-3-father-s-route-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-3-father-s-route-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "throne-ch-3-father-s-route-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-father-s-route-1-ddcaac",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-3-father-s-route-900-ab4fc6",
                  "text": "Allure Giselle, take her to the stage at the Floating Theater.",
                  "check": true,
                  "kind": "do",
                  "watch": 6401
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-3",
          "title": "Agnea Ch. 3",
          "mark": "1:47:00",
          "seconds": 6420,
          "blocks": [
            {
              "id": "agnea-ch-3-b1",
              "title": "Agnea Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-3-1-1cf256",
                  "text": "After finishing the chapter, warp to Sai.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-4",
          "title": "Agnea Ch. 4",
          "mark": "1:49:00",
          "seconds": 6540,
          "blocks": [
            {
              "id": "agnea-ch-4-b1",
              "title": "Agnea Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-2810c6",
                  "text": "Steal the Reinforcing Jam from the lady down the stairs if you needed to use one after Yurinas.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-6094e6",
                  "text": "Grab the Wind Whisperer from the first red chest.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-13e654",
                  "text": "Fight Veronica at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-4-b2",
              "title": "Veronica",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-4-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-4-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-4-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-a6526f",
                  "text": "After finishing the chapter, warp to Ryu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-5b187f",
                  "text": "The Dancer & Warrior, Part 1",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-900-10cc50",
                  "text": "Bribe Yomi. Wait until the following night. Make for the hill where the moon is visible.",
                  "check": true,
                  "kind": "do",
                  "watch": 6607
                },
                {
                  "id": "agnea-ch-4-1-0e83e6",
                  "text": "While waiting for the next day, go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-4-b4",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-51dd5d",
                  "text": "Set Slot 3 to Partitio. Set Slot 3 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-4-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-533e07",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-4-b6",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-4-1-1ccffd",
                  "text": "Buy Blusterbloom x22",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-72ed62",
                  "text": "Sell Thick Tome",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-ac4258",
                  "text": "Sell Dazzling Artwork",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-4-1-d593f1",
                  "text": "Sell Lost Tribe's Blade",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-4-b7",
              "title": "After finishing the chapter, warp to Roque Island.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "agnea-ch-4-1-7605c9",
                  "text": "After finishing the chapter, warp to Roque Island.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "partitio-ch-4",
          "title": "Partitio Ch. 4",
          "mark": "1:50:00",
          "seconds": 6600,
          "blocks": [
            {
              "id": "partitio-ch-4-b1",
              "title": "Partitio Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-cdd66b",
                  "text": "After the cutscene on the next screen, steal the Energising Pomegranate (M), Energising Pomegranate (L), and Wind Soulstone (M) from the man outside the inn.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Roque Island"
                },
                {
                  "id": "partitio-ch-4-1-818454",
                  "text": "Rest at the inn if Partitio doesn't have latent power.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Roque Island"
                },
                {
                  "id": "partitio-ch-4-1-45241f",
                  "text": "Bribe the man on the right northeast of the statue.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Roque Island"
                },
                {
                  "id": "partitio-ch-4-1-a12603",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Roque Island"
                }
              ]
            },
            {
              "id": "partitio-ch-4-b2",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-0f92a5",
                  "text": "Set Slot 3 to Castti. Set Slot 4 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-4-b3",
              "title": "Get the Critical Nut (L).",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-6e3e82",
                  "text": "In the East Tower, hear travel banter just before going down the stairs to the floor with the books.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-dc278c",
                  "text": "Fight the Steam Tank at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "partitio-ch-4-b4",
              "title": "Steam Tank Obsidian",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-7f54f6",
                  "text": "Throne — Latent Power + Abating Orb → Steam Tank",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-4-1-108a46",
                  "text": "Throne — Take Aim",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-4-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-4-1-1a6f51",
                  "text": "Partitio — HHR x2",
                  "check": true,
                  "kind": "fight",
                  "note": "debuffing the parts gets overkill",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "partitio-ch-4-1-43fc5b",
                  "text": "Hikari — Shinjumonjigiri x4 → Steam Tank",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "partitio-ch-4-b5",
              "title": "Clockbank",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-8c8056",
                  "text": "After finishing the chapter, steal the Light Nut (M) from the man near the entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-9fbb5f",
                  "text": "Warp to Oresrush.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-52f067",
                  "text": "Purchase the Battle-Tested Staff from Roque.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-6fad35",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-00e1ac",
                  "text": "Steal the Critical Nut (L) from the old man in the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-2-a12603",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "partitio-ch-4-1-1953f2",
                  "text": "Set Slot 2 to Ochette. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                }
              ]
            },
            {
              "id": "partitio-ch-4-b6",
              "title": "Hear a Tale",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "partitio-ch-4-1-509d99",
                  "text": "Hear a Tale",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-cateracta-s-route",
          "title": "Ochette Ch. 2: Cateracta's Route",
          "mark": "1:55:00",
          "seconds": 6900,
          "blocks": [
            {
              "id": "ochette-ch-2-cateracta-s-route-b1",
              "title": "Ochette Ch. 2: Cateracta's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-63dd2f",
                  "text": "Steal the Sharp Nut and Light Nut from the lady to the right on the way to Alpione.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Conning Creek: Harbour"
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b2",
              "title": "Alpione",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-08a97c",
                  "text": "Turn 1 — Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b3",
              "title": "Conning Creek: Harbour",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-9cac78",
                  "text": "After finishing the chapter, warp to Crackridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-63a4dc",
                  "text": "Start Ochette Ch. 2: Tera's Route.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b4",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving Crackridge",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-2b3a18",
                  "text": "Hikari — Scholar [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-b37d60",
                  "text": "Ochette — Armsmaster [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-e12509",
                  "text": "Castti — Unequip Evasive Manoeuvres (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b5",
              "title": "Leave town to the west and hunt for Buttermeep at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-010387",
                  "text": "Leave town to the west and hunt for Buttermeep at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b6",
              "title": "Buttermeep",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-cea8bc",
                  "text": "Anyone — Attack (Hikari uses spear)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-0ee040",
                  "text": "Ochette — Defend / Capture",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-f9e6ad",
                  "text": "Anyone — Flee",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b7",
              "title": "Menu",
              "kind": "menu",
              "when": "After capturing the Buttermeep",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-03b4cd",
                  "text": "Ochette — Optimize",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips Wind Whisperer, Tornado Glaive, Royal Guard's Mail",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-eab8fd",
                  "text": "Castti — Equip Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b8",
              "title": "Ochette: Monster Roster",
              "kind": "setup",
              "when": "Before returning to Crackridge",
              "solo": false,
              "steps": []
            },
            {
              "id": "ochette-ch-2-cateracta-s-route-b9",
              "title": "After catching the Buttermeep, warp to Crackridge (can also walk back if close enough).",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "ochette-ch-2-cateracta-s-route-1-18f49b",
                  "text": "After catching the Buttermeep, warp to Crackridge (can also walk back if close enough).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-tera-s-route",
          "title": "Ochette Ch. 2: Tera's Route",
          "mark": "2:00:00",
          "seconds": 7200,
          "blocks": [
            {
              "id": "ochette-ch-2-tera-s-route-b1",
              "title": "Ochette Ch. 2: Tera's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-tera-s-route-1-1d1495",
                  "text": "Before going to the Bed of the Titan, challenge the old lady near the east exit.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Crackridge"
                }
              ]
            },
            {
              "id": "ochette-ch-2-tera-s-route-b2",
              "title": "Elderly Woman",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-tera-s-route-1-97c621",
                  "text": "Hikari — Sword",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-tera-s-route-b3",
              "title": "Learn Vacant Stare.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-tera-s-route-1-06c94b",
                  "text": "Ambush the scholar at the bottom right of the town.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-2-tera-s-route-1-a4c132",
                  "text": "Get From the Far Reaches of Hell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-2-tera-s-route-1-f2882a",
                  "text": "Go to Bed of the Titan.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-2-tera-s-route-1-8fa4b7",
                  "text": "Fight Tera at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-tera-s-route-b4",
              "title": "Tera",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-tera-s-route-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-tera-s-route-1-bceb68",
                  "text": "Hikari — Defend / Shinjumonjigiri x3 (if after Throne)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-tera-s-route-1-78d939",
                  "text": "Hikari — Shinjumonjigiri x3 (if not done already)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "ochette-ch-2-tera-s-route-b5",
              "title": "After finishing the chapter, warp to Stormhail.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "ochette-ch-2-tera-s-route-1-6bc564",
                  "text": "After finishing the chapter, warp to Stormhail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-glacis-s-route",
          "title": "Ochette Ch. 2: Glacis's Route",
          "mark": "2:05:00",
          "seconds": 7500,
          "blocks": [
            {
              "id": "ochette-ch-2-glacis-s-route-b1",
              "title": "Ochette Ch. 2: Glacis's Route",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-glacis-s-route-1-b89570",
                  "text": "Turn 1 — Thunder Soulstone (L) (if you still have it) or Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Sanctum Knight"
                },
                {
                  "id": "ochette-ch-2-glacis-s-route-1-327e3b",
                  "text": "Turn 2 — Defend",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Sanctum Knight"
                },
                {
                  "id": "ochette-ch-2-glacis-s-route-1-2232c1",
                  "text": "Turn 3 — Tera",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Sanctum Knight"
                }
              ]
            },
            {
              "id": "ochette-ch-2-glacis-s-route-b2",
              "title": "Fight Glacis at night.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "ochette-ch-2-glacis-s-route-1-3639da",
                  "text": "Fight Glacis at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-2-glacis-s-route-b3",
              "title": "Glacis",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-2-glacis-s-route-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-glacis-s-route-1-bceb68",
                  "text": "Hikari — Defend / Shinjumonjigiri x3 (if after Throne)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-2-glacis-s-route-1-78d939",
                  "text": "Hikari — Shinjumonjigiri x3 (if not done already)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "ochette-ch-2-glacis-s-route-b4",
              "title": "After finishing the chapter, warp to Beasting Village.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "ochette-ch-2-glacis-s-route-1-c29678",
                  "text": "After finishing the chapter, warp to Beasting Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-3",
          "title": "Ochette Ch. 3",
          "mark": "2:08:00",
          "seconds": 7680,
          "blocks": [
            {
              "id": "ochette-ch-3-b1",
              "title": "Ochette Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-876766",
                  "text": "On the way to Juvah, steal the Fortifying Nut from the beastling guarding the house.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-3-1-c63de8",
                  "text": "Fight the Shadowy Monsters during the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-3-b2",
              "title": "Shadowy Monsters",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-3-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-2b5959",
                  "text": "Get the Tornado Bow after crossing the bridge at Stormy Cape.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-3-1-301023",
                  "text": "Kill the encounter in the day with Divine Dual-Edge x3.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "ochette-ch-3-1-6c5fe5",
                  "text": "Switch to night before fighting Lajackal.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "ochette-ch-3-b4",
              "title": "Menu",
              "kind": "menu",
              "when": "Before fighting Lajackal",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-d4df45",
                  "text": "Give Tornado Bow to Ochette",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "ochette-ch-3-1-bf976a",
                  "text": "Throne — Thief Aeber's Reckoning",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "ochette-ch-3-1-611a9b",
                  "text": "Ochette — Hunter Leghold Trap",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Learn Skills"
                },
                {
                  "id": "ochette-ch-3-1-696bcb",
                  "text": "Castti — Equip A Step Ahead over Boost-Start (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "ochette-ch-3-b5",
              "title": "Lajackal of the Sorrowful Moon",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-3-1-dd4ac4",
                  "text": "Throne — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-3-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-3-1-f6a5d4",
                  "text": "Castti — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "ochette-ch-3-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "ochette-ch-3-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "ochette-ch-3-1-c05ffc",
                  "text": "After finishing the chapter, warp to Cropdale.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "the-apothecary-hunter-part-1",
          "title": "The Apothecary & Hunter, Part 1",
          "mark": "2:11:00",
          "seconds": 7860,
          "blocks": [
            {
              "id": "the-apothecary-hunter-part-1-b1",
              "title": "The Apothecary & Hunter, Part 1",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-1-1-38a592",
                  "text": "Fight the Dire Duorduor during the day.",
                  "check": true,
                  "kind": "do",
                  "note": "skip lychee if Agnea has full latent",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-1-b2",
              "title": "Dire Duorduor",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-1-1-e74ce0",
                  "text": "Hikari — Sword x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-1-1-c05ffc",
                  "text": "After finishing the chapter, warp to Cropdale.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "the-apothecary-hunter-part-2",
          "title": "The Apothecary & Hunter, Part 2",
          "mark": "2:12:30",
          "seconds": 7950,
          "blocks": [
            {
              "id": "the-apothecary-hunter-part-2-b1",
              "title": "The Apothecary & Hunter, Part 2",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-9f4c40",
                  "text": "Turn 1 — Wind Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Wriggling Shadow"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-e64400",
                  "text": "Turn 2 — Wind Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Wriggling Shadow"
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b2",
              "title": "Creeping Shadow",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-65dfd3",
                  "text": "After finishing the chapter, warp to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-98899d",
                  "text": "Inquire/Bribe the hunter outside.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-47c095",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-27e9fb",
                  "text": "Steal the Empowering Lychee (L) and Sharp Nut (L) from the old man.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-a8e886",
                  "text": "Steal the Tough Nut (L) from Alpione.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-30a9d1",
                  "text": "Talk to Alpione twice to complete \"Alpione's Next Chapter\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-dcc20e",
                  "text": "Warp to Merry Hills.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-7ae1ac",
                  "text": "Steal the Quick Cloak from the lady in blue.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-24c832",
                  "text": "Bribe the merchant in the provisioner.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-02e1b4",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b4",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-0ade86",
                  "text": "Buy Breaker's Blade",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-0e58a6",
                  "text": "Buy Swift Shield",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b5",
              "title": "Steal the Magic Nut (L) from the person under the bridge.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-b27701",
                  "text": "Start Throne ch.3: Mother's Route.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-221140",
                  "text": "Steal the Habit.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b6",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-7117af",
                  "text": "Set Slot 3 to Agnea. Set Slot 3 to Ochette",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b7",
              "title": "Entreat the Nourishing Nut (M) and Magic Nut (L) from the merchant outside the department store.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-460792",
                  "text": "Get the dancer licence.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b8",
              "title": "Menu",
              "kind": "menu",
              "when": "After getting the Dancer Licence",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-90b4f2",
                  "text": "Castti — Dancer: 5 Dancer skills, Sealticge's Seduction [v3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-844c73",
                  "text": "Castti — Warrior 5 Warrior skills [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-170f1b",
                  "text": "Castti — Armsmaster [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-36752e",
                  "text": "Agnea — Dancer: Peacock Strut",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-912196",
                  "text": "Agnea — Inventor [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-1abefe",
                  "text": "Hikari — Thief: 5 Thief skills [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-5cbbaa",
                  "text": "Hikari — Dancer 5 Dancer skills, Sealticge's Seduction [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-3d2444",
                  "text": "Throne — Warrior: 5 Warrior skills [v3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-3aedbe",
                  "text": "Throne — Scholar [v4]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b9",
              "title": "Get 2 more dancer licences.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-27ebaa",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-9bff70",
                  "text": "Steal the Magic Nut (M) from the merchant.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-2-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-263b64",
                  "text": "Set Slot 4 to Temenos. Set Slot 4 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-11ee44",
                  "text": "Set Slot 2 to Partitio. Set Slot 3 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-108088",
                  "text": "Ochette — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-5e6297",
                  "text": "Castti — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips tornado glaive, wind whisperer, tornado bow, battle-tested staff, giant shield, ancient circlet, and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-2bc1fd",
                  "text": "Castti — Equip Alpione's Amulet",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-4d5bc2",
                  "text": "Castti — Equip Fang of Ferocity",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-d1671e",
                  "text": "Castti — Equip Blessed Vestments",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-4181c0",
                  "text": "Osvald — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips fortune wand and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-aa1466",
                  "text": "Osvald — Equip Sprightly Ring",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-b92759",
                  "text": "Agnea — Equip EXP Augmentor",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-81c8a3",
                  "text": "Partitio — Equip Unerring Bracelet",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-6f3bca",
                  "text": "Hikari — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-c9ec05",
                  "text": "Hikari — Equip Brooch of Joy",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-311fec",
                  "text": "Throne — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips Battle-Tested Blade, Royal Guard's Helm, and Royal Guard's Mail",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-123ad2",
                  "text": "Throne — Equip Finisher's Claws",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-9ef3f5",
                  "text": "Throne — Equip Champion's Belt",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-acf2f4",
                  "text": "Throne — Equip Quick Cloak",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-f5edf5",
                  "text": "Throne — Equip Giant's Club",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern",
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b10",
              "title": "Menu",
              "kind": "menu",
              "when": "After swapping in Temenos",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-03df8f",
                  "text": "Temenos — Dancer: Stimulate",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-59c928",
                  "text": "Partitio — Dancer: 1 Dancer skill, Stimulate",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-9edf7c",
                  "text": "Partitio — Cleric 1 Cleric skill, Aelfric's Blessing",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-bc4fda",
                  "text": "Partitio — Equip The Show Goes On over Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b11",
              "title": "Talk to the tavern keeper again.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-a6f159",
                  "text": "Talk to the tavern keeper again.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b12",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-c0743e",
                  "text": "Set Slot 4 to Castti. Set Slot 4 to Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-9affd7",
                  "text": "Set Slot 2 to Agnea. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b13",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-d0802b",
                  "text": "Enter the library.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-c2511b",
                  "text": "Talk to the Unusual Tome Specialist (quest NPC on the left) to complete \"Procuring Peculiar Tomes\".",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-d25cb2",
                  "text": "Talk to Al on the right side of the library to complete \"From the Far Reaches of Hell\". You may need to switch time to make him show up (also ensure you completed \"The Traveller's Bag\")",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-f06d87",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-4e2957",
                  "text": "Sail slowly to the Gate of Finis.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-apothecary-hunter-part-2-b14",
              "title": "Menu",
              "kind": "menu",
              "when": "After reaching the Gate of Finis",
              "solo": false,
              "steps": [
                {
                  "id": "the-apothecary-hunter-part-2-1-454a0f",
                  "text": "Items — up to 2 Empowering Lychee (L) → Agnea",
                  "check": true,
                  "kind": "menu",
                  "note": "to fill latent",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-4611cc",
                  "text": "Items — Nourishing Nut (L) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-6a3d82",
                  "text": "Items — 2 Nourishing Nut (M) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "note": "DO NOT USE ALL 3",
                  "warn": true,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-3da3c4",
                  "text": "Items — Fortifying Nut (M) + Fortifying Nut (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-664c31",
                  "text": "Items — Tough Nut (L) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-839bba",
                  "text": "Items — All Magic Nuts (2S + 1M + 3L) (Castti)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-265887",
                  "text": "Items — Resistant Nut (M) (Hikari)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-e80a78",
                  "text": "Items — All Sharp Nuts (2L + 2S) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-bd98fc",
                  "text": "Items — All Critical Nuts (2L) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-18f004",
                  "text": "Items — All Light Nuts (2S + 1M + 1L) (Throne)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-639afc",
                  "text": "Throne — Unequip Life in the Shadows (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-ee515b",
                  "text": "Throne — Equip Full Power (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-d732a1",
                  "text": "Throne — Equip Peak Performance over Evil Ward (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-8eff13",
                  "text": "Throne — Equip Deal More Damage (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-c0cd80",
                  "text": "Throne — Equip Summon Strength (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-265d99",
                  "text": "Hikari — Unequip Peak Performance (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-836d25",
                  "text": "Hikari — Equip Life in the Shadows over Deal More Damage (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-10c47c",
                  "text": "Hikari — Equip The Show Goes On (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-d0a41c",
                  "text": "Agnea — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-792fba",
                  "text": "Castti — Equip Deal More Damage over Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "the-apothecary-hunter-part-2-1-74dddc",
                  "text": "Castti — Equip Elemental Augmentation (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "galdera",
      "title": "Galdera",
      "chapters": [
        {
          "id": "galdera",
          "title": "Galdera",
          "mark": "2:14:42",
          "seconds": 8082,
          "blocks": [
            {
              "id": "galdera-b1",
              "title": "Switch to night before fighting Galdera.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "galdera-1-0c1141",
                  "text": "Switch to night before fighting Galdera.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "galdera-b2",
              "title": "Galdera Party Setup",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "galdera-1-6e6d7a",
                  "text": "Swap Throne with Osvald",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-888fe4",
                  "text": "Primary party: Osvald",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-87c5c1",
                  "text": "Secondary party: Throne",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-c8dc4b",
                  "text": "Primary party: Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-127a17",
                  "text": "Secondary party: Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-845970",
                  "text": "Primary party: Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-0be4e4",
                  "text": "Secondary party: Ochette",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-78beb0",
                  "text": "Primary party: Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-14e5b0",
                  "text": "Secondary party: Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "galdera-b3",
              "title": "Omniscient Eye",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "galdera-1-95ea15",
                  "text": "Hikari — Peacock Strut x2 → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-8a2047",
                  "text": "Agnea — Latent Power + Springy Boots",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-da2c91",
                  "text": "Castti — Concoct → Self",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Grape Leaf (or anything else that isn't weeds)"
                  ],
                  "note": "weeds can give a speed buff, which messes up the strat · Changed since the video (07/04/2026): omniscient eye: 8 Concoct hits.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-6684e4",
                  "text": "Whimsical Leaf (skip if Castti already acts last)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": true,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-7488e9",
                  "text": "Osvald/Agnea — Snowy Stew (whoever is first) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-0ab8c9",
                  "text": "Osvald/Agnea — Forbidden Elixir (whoever is second) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-d1cac8",
                  "text": "Hikari — Vacant Stare",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-b65c41",
                  "text": "Castti — Latent Power + Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Diffusing Serum",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-4cd35b",
                  "text": "Turn order from this point onwards is fixed",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-30e750",
                  "text": "Osvald — Analyse x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-b04892",
                  "text": "Agnea — Elemental Bomb Bottle x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-b73092",
                  "text": "Hikari — Vacant Stare x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-cb14be",
                  "text": "Anyone — Energising Pomegranate (L) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "galdera-2-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "note": "Changed since the video (07/04/2026): omniscient eye: 8 Concoct hits.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "galdera-1-d7a05f",
                  "text": "Anyone — Energising Pomegranate (M) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                },
                {
                  "id": "galdera-3-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "note": "Changed since the video (07/04/2026): omniscient eye: 8 Concoct hits.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                }
              ]
            },
            {
              "id": "galdera-b4",
              "title": "Galdera, the Fallen",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "galdera-1-107476",
                  "text": "Throne — Latent Power + Rejuvenating Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-48b742",
                  "text": "Partitio — Latent Power (if needed) + Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-e2e548",
                  "text": "Ochette — Energising Pomegranate (L) → Partitio",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-27f40f",
                  "text": "Temenos — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "galdera-1-476306",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "galdera-2-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "galdera-1-568595",
                  "text": "Throne — Latent Power + Energising Pomegranate (M) → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-3-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-eb43c3",
                  "text": "Partitio — Latent Power (if needed) + Aelfric's Blessing → Ochette",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-61fbfe",
                  "text": "Ochette — Rejuvenating Jam → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-73f0dd",
                  "text": "Temenos — Stimulate x4 → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "galdera-1-dc7e4b",
                  "text": "Ochette — Leghold Trap",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "galdera-1-05fde0",
                  "text": "Throne — Dagger x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "galdera-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-305c9a",
                  "text": "Throne — Dagger x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-09853b",
                  "text": "Partitio — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-da936c",
                  "text": "Ochette — Provoke Beasts x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-61b1b2",
                  "text": "Ochette — Woodland Birdian IV x6",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-1-1b8814",
                  "text": "Temenos — Lion Dance → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "galdera-2-61fbfe",
                  "text": "Ochette — Rejuvenating Jam → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                },
                {
                  "id": "galdera-4-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                },
                {
                  "id": "galdera-2-568595",
                  "text": "Throne — Latent Power + Energising Pomegranate (M) → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "galdera-5-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "galdera-1-131109",
                  "text": "Ochette — Energising Pomegranate (M) → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4 - Aelfric's"
                },
                {
                  "id": "galdera-6-688285",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4 - Aelfric's"
                }
              ]
            },
            {
              "id": "galdera-b5",
              "title": "Menu",
              "kind": "menu",
              "when": "After Galdera",
              "solo": false,
              "steps": [
                {
                  "id": "galdera-1-4c8bd2",
                  "text": "Hikari — Scholar [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "galdera-1-ebc9f2",
                  "text": "Throne — Hunter [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "galdera-1-daa83e",
                  "text": "Throne — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-12b30e",
                  "text": "Hikari — Optimize",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-4ca373",
                  "text": "Hikari — Equip Finisher's Claws (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-585560",
                  "text": "Agnea — Unequip EXP Augmentor (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-4f65aa",
                  "text": "Castti — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-c295ec",
                  "text": "Castti — Equip EXP Augmentor (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-f52934",
                  "text": "Throne — Equip Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-67d55d",
                  "text": "Throne — Equip Brooch of Joy (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-dedec9",
                  "text": "Hikari — Equip Champion's Belt (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-835e28",
                  "text": "Hikari — Unequip Royal Guard's Mail (Body)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-c56616",
                  "text": "Hikari — Equip Giant's Club (Staff)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-4ddcd4",
                  "text": "Agnea — Equip Giant Shield (Shield)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "galdera-1-40889f",
                  "text": "Throne — Unequip Summon Strength (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-8eff13",
                  "text": "Throne — Equip Deal More Damage (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-ef5033",
                  "text": "Throne — Equip Life in the Shadows over Peak Performance (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-46963e",
                  "text": "Throne — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-e95192",
                  "text": "Throne — Equip Full Power (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-430511",
                  "text": "Hikari — Unequip The Show Goes On (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-7f10a0",
                  "text": "Hikari — Equip Peak Performance over Life in the Shadows (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-c81262",
                  "text": "Hikari — Equip Deal More Damage (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-2e449d",
                  "text": "Agnea — Unequip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "galdera-1-df473d",
                  "text": "Castti — Equip Grows on Trees over A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "galdera-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "galdera-1-169668",
                  "text": "Board the ship.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-b5cb4a",
                  "text": "Go to the Lost Isle.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-7fcb33",
                  "text": "Get the Proof of the Arcanist.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-992803",
                  "text": "Get the 2 Ancient Cursed Talismans on the right.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "galdera-1-dcc20e",
                  "text": "Warp to Merry Hills.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stories",
      "title": "After Galdera",
      "chapters": [
        {
          "id": "agnea-ch-5",
          "title": "Agnea Ch. 5",
          "mark": "2:20:57",
          "seconds": 8457,
          "blocks": [
            {
              "id": "agnea-ch-5-b1",
              "title": "Agnea Ch. 5",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-5-1-9d180a",
                  "text": "Hikari — Divine Dual-Edge x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Hired Men"
                }
              ]
            },
            {
              "id": "agnea-ch-5-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-5-1-dd0bd6",
                  "text": "After alluring Gil, entreat the Magic Nut (M) from the lady in blue to the south.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-5-1-e6280f",
                  "text": "Get the Empowering Necklace from the chest at the upper right corner of the screen.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (06/30/2026): still in the checklist; nothing equips it.",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-5-1-e653d6",
                  "text": "Fight Dolcinaea at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "agnea-ch-5-b3",
              "title": "Dolcinaea",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-5-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-5-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-5-b4",
              "title": "Dolcinaea the Star",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-5-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-5-2-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "agnea-ch-5-2-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "agnea-ch-5-b5",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "agnea-ch-5-1-fa04b8",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "agnea-ch-5-900-fe34db",
                  "text": "Make for Mother’s Garden. Steal the key from Morozov (the priest in the orphanage hall). Walk the garden to Mother.",
                  "check": true,
                  "kind": "do",
                  "watch": 8602
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-3-mother-s-route",
          "title": "Throne Ch. 3: Mother's Route",
          "mark": "2:24:00",
          "seconds": 8640,
          "blocks": [
            {
              "id": "throne-ch-3-mother-s-route-b1",
              "title": "Throne Ch. 3: Mother's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-mother-s-route-1-676baa",
                  "text": "Fight Mother at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Mother's Garden"
                }
              ]
            },
            {
              "id": "throne-ch-3-mother-s-route-b2",
              "title": "Mother",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-mother-s-route-1-683b59",
                  "text": "Throne — Abating Orb → Mother",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-3-mother-s-route-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-3-mother-s-route-1-90bf7a",
                  "text": "Hikari — Shinjumonjigiri x4 → Mother",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "throne-ch-3-mother-s-route-b3",
              "title": "Warp to New Delsta.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "throne-ch-3-mother-s-route-1-f4fcfe",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-3-mother-s-route-b4",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Claude",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-3-mother-s-route-1-358399",
                  "text": "Agnea — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-4",
          "title": "Throne Ch. 4",
          "mark": "2:26:15",
          "seconds": 8775,
          "blocks": [
            {
              "id": "throne-ch-4-b1",
              "title": "Throne Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-4-1-7f75f6",
                  "text": "Talk to Veronica before entering the sewers.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-4-900-b455bf",
                  "text": "Make for the cemetery. Ambush the Snake. Climb down into the sewers; go through the door, down the abandoned road; ride the ropeway to Lostseed.",
                  "check": true,
                  "kind": "do",
                  "watch": 8731
                },
                {
                  "id": "throne-ch-4-1-2087a9",
                  "text": "Go to Lostseed.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-4-1-bcd14f",
                  "text": "Steal the Forbidden Elixir from the girl guarding the house.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-4-1-bf844d",
                  "text": "Steal a Rotten Meat from the NPC up the stairs.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (09/17/2025): no shaggy aurochs; mighty leaf and rotten meat instead.",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-4-1-b210f9",
                  "text": "Steal the Almighty Olive from the man before the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "throne-ch-4-1-89d69d",
                  "text": "Fight Claude at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "throne-ch-4-b2",
              "title": "Claude",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "throne-ch-4-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-4-1-dd4ac4",
                  "text": "Throne — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-4-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-4-1-160340",
                  "text": "Agnea — Critical Scope",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "throne-ch-4-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "throne-ch-4-b3",
              "title": "Warp to Ku.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "throne-ch-4-1-1fefbc",
                  "text": "Warp to Ku.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "the-dancer-warrior-part-2",
          "title": "The Dancer & Warrior, Part 2",
          "mark": "2:28:00",
          "seconds": 8880,
          "blocks": [
            {
              "id": "the-dancer-warrior-part-2-b1",
              "title": "The Dancer & Warrior, Part 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-dancer-warrior-part-2-1-8e5f4e",
                  "text": "Entreat the Magic Nut (M) and Dancer's Mask on the next screen.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-2bb37b",
                  "text": "Warp to Sai.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-d651b9",
                  "text": "Go to the East District.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-072aa8",
                  "text": "Entreat the Elemental Augmentor from the man in the straw hat.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-5929bd",
                  "text": "Bribe Platt's Wife in the house to the north (inquire also works, but she's slightly further away).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-1fefbc",
                  "text": "Warp to Ku.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-1e1592",
                  "text": "Entreat the Sacred Wood.",
                  "check": true,
                  "kind": "do",
                  "note": "Don't get the platinum hatchet (if you do, make sure to sell it)",
                  "warn": true,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-fb5ff1",
                  "text": "Entreat the Wine Offering.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-3811e3",
                  "text": "Talk to Benkei.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-5cb913",
                  "text": "Go to Tranquil Grotto.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-dancer-warrior-part-2-b2",
              "title": "Yomi",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-dancer-warrior-part-2-1-a7f33b",
                  "text": "Hikari — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-29976a",
                  "text": "Do not learn Forlorn Requiem.",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "the-dancer-warrior-part-2-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-dancer-warrior-part-2-1-ac3826",
                  "text": "Entreat the Fortifying Nut (M) from the soldier in the house.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-47c095",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-b6b638",
                  "text": "Entreat the Aegis Shield from the soldier near the entrance.",
                  "check": true,
                  "kind": "do",
                  "note": "Changed since the video (06/30/2026): Coat of Arms + Aegis Shield replace Empowering Necklace.",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-046aca",
                  "text": "Inquire the girl in the trio of children.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-0d0600",
                  "text": "Get the Magic Nut (M) you just inquired.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-a12603",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-dancer-warrior-part-2-1-7c4557",
                  "text": "Set Slot 4 to Osvald. Set Slot 4 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "the-dancer-warrior-part-2-1-094e1c",
                  "text": "Set Slot 1 to Partitio. Set Slot 3 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                }
              ]
            },
            {
              "id": "the-dancer-warrior-part-2-b4",
              "title": "Hear a Tale",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-dancer-warrior-part-2-1-509d99",
                  "text": "Hear a Tale",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-5",
          "title": "Osvald Ch. 5",
          "mark": "2:31:37",
          "seconds": 9097,
          "blocks": [
            {
              "id": "osvald-ch-5-b1",
              "title": "Osvald Ch. 5",
              "kind": "menu",
              "when": "Before the mugs",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-eb7caa",
                  "text": "Give Aegis Shield to Throne",
                  "check": true,
                  "kind": "menu",
                  "note": "Changed since the video (06/30/2026): Coat of Arms + Aegis Shield replace Empowering Necklace.",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "osvald-ch-5-1-ff6a39",
                  "text": "Then — Fortifying Nut (M) (Hikari)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "osvald-ch-5-1-b4bf52",
                  "text": "Osvald — Merchant: 2 Merchant skills [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-5-1-cdfe00",
                  "text": "Osvald — Warrior 5 Warrior skills [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-5-1-d7ab4e",
                  "text": "Osvald — Armsmaster [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "osvald-ch-5-1-56c15d",
                  "text": "Osvald — Optimize",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips guardian's iceblade, battle-tested staff, ancient circlet, and blessed vestments",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "osvald-ch-5-1-7f9fa9",
                  "text": "Osvald — Equip Fang of Ferocity",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "osvald-ch-5-1-ca84ad",
                  "text": "Osvald — Equip Elemental Augmentor",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "osvald-ch-5-1-aaa441",
                  "text": "Osvald — Unequip Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-5-1-21ca0a",
                  "text": "Osvald — Equip Full Power over Grows on Trees (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-5-1-a1bd9f",
                  "text": "Osvald — Equip Deal More Damage (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-5-1-ee45c3",
                  "text": "Osvald — Equip Peak Performance (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "osvald-ch-5-1-7ba23e",
                  "text": "Partitio — Unequip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "osvald-ch-5-b2",
              "title": "Mugs",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-f405b2",
                  "text": "Osvald: Latent Power + Icewind x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#1 — Latent Power + Icewind x3"
                },
                {
                  "id": "osvald-ch-5-1-fbbe36",
                  "text": "Osvald: Latent Power + Icewind x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#2 — Latent Power + Icewind x3"
                },
                {
                  "id": "osvald-ch-5-1-47ae28",
                  "text": "Osvald: Latent Power + Fireball x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#3 — Latent Power + Fireball x3"
                },
                {
                  "id": "osvald-ch-5-1-c46741",
                  "text": "Osvald: Latent Power + Fireball x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#4 — Latent Power + Fireball x2"
                },
                {
                  "id": "osvald-ch-5-1-85c903",
                  "text": "Osvald: Latent Power + Icewind x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#5 — Latent Power + Icewind x3"
                }
              ]
            },
            {
              "id": "osvald-ch-5-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-2111bb",
                  "text": "Fight Harvey at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-5-b4",
              "title": "Small Golems",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "osvald-ch-5-b5",
              "title": "Professor Harvey",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-8de399",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-5-1-dd4ac4",
                  "text": "Throne — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-5-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "osvald-ch-5-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "osvald-ch-5-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "osvald-ch-5-1-f4fcfe",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "the-scholar-merchant-part-1",
          "title": "The Scholar & Merchant, Part 1",
          "mark": "2:34:00",
          "seconds": 9240,
          "blocks": [
            {
              "id": "the-scholar-merchant-part-1-b1",
              "title": "The Scholar & Merchant, Part 1",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-1-1-416444",
                  "text": "Before buying the first part, talk to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-scholar-merchant-part-1-1-b23b4a",
                  "text": "Set Slot 3 to Temenos. Set Slot 1 to Throne",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "the-scholar-merchant-part-1-1-8274b4",
                  "text": "After buying all 3 components, talk to Veronica to finish \"Veronica's Next Chapter\".",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "the-scholar-merchant-part-1-1-e52e3d",
                  "text": "After finishing the chapter, warp to Montwise.",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                }
              ]
            }
          ]
        },
        {
          "id": "the-scholar-merchant-part-2",
          "title": "The Scholar & Merchant, Part 2",
          "mark": "2:36:00",
          "seconds": 9360,
          "blocks": [
            {
              "id": "the-scholar-merchant-part-2-b1",
              "title": "The Scholar & Merchant, Part 2",
              "kind": "menu",
              "when": "Before the Thugs",
              "solo": false,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-2-1-728099",
                  "text": "Give Bodyguard's Vantage to Hikari",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "the-scholar-merchant-part-2-1-b3cdd6",
                  "text": "Temenos — Cleric: 5 Cleric skills, Aelfric's Blessing [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "the-scholar-merchant-part-2-1-ec4191",
                  "text": "Temenos — Warrior [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Menu",
                  "ctx": "Jobs"
                }
              ]
            },
            {
              "id": "the-scholar-merchant-part-2-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-2-1-01f594",
                  "text": "Fight the thugs in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-scholar-merchant-part-2-b3",
              "title": "Thugs",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-2-1-3e2c0a",
                  "text": "Hikari: Divine Dual-Edge x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "#1 — Divine Dual-Edge x2"
                },
                {
                  "id": "the-scholar-merchant-part-2-1-e7680a",
                  "text": "#2 — Divine Dual-Edge x2",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-scholar-merchant-part-2-b4",
              "title": "Moneylender",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-2-1-ed7567",
                  "text": "Osvald: Latent Power + Fireball x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "sheet": "Turn 1 — Latent Power + Fireball x3"
                }
              ]
            },
            {
              "id": "the-scholar-merchant-part-2-b5",
              "title": "After finishing the chapter, warp to Canalbrine.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "the-scholar-merchant-part-2-1-6b5522",
                  "text": "After finishing the chapter, warp to Canalbrine.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-2",
          "title": "Temenos Ch. 2",
          "mark": "2:38:47",
          "seconds": 9527,
          "blocks": [
            {
              "id": "temenos-ch-2-b1",
              "title": "Temenos Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-2-1-ae4ef3",
                  "text": "Before going upstairs, talk to the tavern keeper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-2-1-2c44af",
                  "text": "Set Slot 3 to Throne. Set Slot 4 to Osvald",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                },
                {
                  "id": "temenos-ch-2-1-64e8ce",
                  "text": "Set Slot 4 to Castti. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Tavern"
                }
              ]
            },
            {
              "id": "temenos-ch-2-b2",
              "title": "???",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-2-1-2d2606",
                  "text": "Turn 1 — Staff",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-2-1-98d5bb",
                  "text": "Turn 2 — Aggressive Slash x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-2-b3",
              "title": "Menu",
              "kind": "menu",
              "when": "After the coerce",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-2-1-35521e",
                  "text": "Temenos — Equip Evil Ward over A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "temenos-ch-2-b4",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-2-1-e19d7a",
                  "text": "Steal the Magic Nut from the cleric on the right of the church.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-2-1-f7f564",
                  "text": "Fight Vados the Architect in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-2-b5",
              "title": "Vados the Architect",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-2-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "temenos-ch-2-b6",
              "title": "Warp to Crackridge.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "temenos-ch-2-1-901ee6",
                  "text": "Warp to Crackridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-2-900-9a2cb2",
                  "text": "Make for the inn. Bring Reiza to the outskirts, investigate the Fellsun Ruins, follow Crick, investigate the “heavens”.",
                  "check": true,
                  "kind": "do",
                  "watch": 9717
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-3-crackridge-route",
          "title": "Temenos Ch. 3: Crackridge Route",
          "mark": "2:42:00",
          "seconds": 9720,
          "blocks": [
            {
              "id": "temenos-ch-3-crackridge-route-b1",
              "title": "Temenos Ch. 3: Crackridge Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-3-crackridge-route-1-6bc564",
                  "text": "After finishing the chapter, warp to Stormhail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-3-stormhail-route",
          "title": "Temenos Ch. 3: Stormhail Route",
          "mark": "2:44:00",
          "seconds": 9840,
          "blocks": [
            {
              "id": "temenos-ch-3-stormhail-route-b1",
              "title": "Temenos Ch. 3: Stormhail Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-3-stormhail-route-1-59a4a0",
                  "text": "Steal the Magic Nut from the knight on the right in the pair.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-3-stormhail-route-1-1e732e",
                  "text": "Steal the Ogre's Bane and Thunderstorm Amulet from the merchant outside the headquarters.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-3-stormhail-route-1-cd5a79",
                  "text": "Fight Cubaryi at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-3-stormhail-route-b2",
              "title": "Deputy Cubaryi",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-3-stormhail-route-1-a7f33b",
                  "text": "Hikari — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "temenos-ch-3-stormhail-route-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-3-stormhail-route-1-ddcaac",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-3-stormhail-route-1-fd890f",
                  "text": "Go to Nameless Village.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-4",
          "title": "Temenos Ch. 4",
          "mark": "2:48:00",
          "seconds": 10080,
          "blocks": [
            {
              "id": "temenos-ch-4-b1",
              "title": "Temenos Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-4-1-6923e0",
                  "text": "Guide Shirlutto.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "temenos-ch-4-1-f0a251",
                  "text": "Fight Kaldena at night.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-4-b2",
              "title": "Kaldena",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-4-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "temenos-ch-4-1-dd4ac4",
                  "text": "Throne — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "temenos-ch-4-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "temenos-ch-4-1-80edba",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-4-b3",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-4-1-f49023",
                  "text": "Set Slot 2 to Ochette. Set Slot 3 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "temenos-ch-4-b4",
              "title": "Hear a Tale",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "temenos-ch-4-1-509d99",
                  "text": "Hear a Tale",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        },
        {
          "id": "the-cleric-thief-part-1",
          "title": "The Cleric & Thief, Part 1",
          "mark": "2:52:00",
          "seconds": 10320,
          "blocks": [
            {
              "id": "the-cleric-thief-part-1-b1",
              "title": "The Cleric & Thief, Part 1",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-1-1-b5b153",
                  "text": "Turn 1 — Defend",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Forgetful Old Man"
                },
                {
                  "id": "the-cleric-thief-part-1-1-98d5bb",
                  "text": "Turn 2 — Aggressive Slash x4",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Forgetful Old Man"
                },
                {
                  "id": "the-cleric-thief-part-1-900-0d2217",
                  "text": "Take the former carpenter to the cathedral. Proceed through the hidden passageway.",
                  "check": true,
                  "kind": "do",
                  "watch": 10217
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-1-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-1-1-aecbb3",
                  "text": "Steal the Imperial Armour and Swift Shield from Ort.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-cleric-thief-part-1-1-8e7f5b",
                  "text": "Steal the Reinforcing Jam from the lady by the torch.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-cleric-thief-part-1-1-9c7ff7",
                  "text": "After finishing the chapter, warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-cleric-thief-part-1-900-58bc30",
                  "text": "Make for the shore. Ambush the guard in the harbor hut. Investigate the remains.",
                  "check": true,
                  "kind": "do",
                  "watch": 10309
                }
              ]
            }
          ]
        },
        {
          "id": "the-cleric-thief-part-2",
          "title": "The Cleric & Thief, Part 2",
          "mark": "2:55:00",
          "seconds": 10500,
          "blocks": [
            {
              "id": "the-cleric-thief-part-2-b1",
              "title": "The Cleric & Thief, Part 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-b8bf43",
                  "text": "Steal the Folded Paper.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-cleric-thief-part-2-1-421d51",
                  "text": "Go to Cavern of the Moon and Sun.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-2-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "After getting to Cavern of the Moon and Sun",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-cdf9cb",
                  "text": "Throne — Unequip Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "the-cleric-thief-part-2-1-682f1b",
                  "text": "Hikari — Equip Imperial Armour (Body)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-2-b3",
              "title": "Fight the encounter in the day.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-72039b",
                  "text": "Fight the encounter in the day.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-2-b4",
              "title": "Vagrant Frogkings I",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-31f640",
                  "text": "Hikari — Sword x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "the-cleric-thief-part-2-1-0ee040",
                  "text": "Ochette — Defend / Capture",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "the-cleric-thief-part-2-1-b7b530",
                  "text": "Anyone — Flee",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1",
                  "sheet": "Anyone — Run"
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-2-b5",
              "title": "Menu",
              "kind": "menu",
              "when": "After capturing the Vagrant Frogking I",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-f52934",
                  "text": "Throne — Equip Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "the-cleric-thief-part-2-b6",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "the-cleric-thief-part-2-1-41783e",
                  "text": "After finishing the chapter, warp to Oresrush.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "the-cleric-thief-part-2-1-1db9dd",
                  "text": "Go to Southern Cropdale Trail.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "dawn",
      "title": "The Dawn",
      "chapters": [
        {
          "id": "journey-for-the-dawn",
          "title": "Journey for the Dawn",
          "mark": "2:57:00",
          "seconds": 10620,
          "blocks": [
            {
              "id": "journey-for-the-dawn-b1",
              "title": "Journey for the Dawn",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters"
                },
                {
                  "id": "journey-for-the-dawn-1-bc5cc0",
                  "text": "Set Slot 2 to Castti. Set Slot 3 to Ochette",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "After the fight"
                },
                {
                  "id": "journey-for-the-dawn-1-a4ad1e",
                  "text": "Castti — Apothecary: 5 Apothecary skills, Dohter's Charity",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-3503d8",
                  "text": "Castti — Arcanist 3 Arcanist skills [v2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-1edf37",
                  "text": "Castti — Armsmaster [v]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-86feec",
                  "text": "Ochette — Merchant: 3 Merchant skills [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-663757",
                  "text": "Ochette — Dancer Peacock Strut [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-075a5d",
                  "text": "Partitio — Arcanist: 3 Arcanist skills [^4]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-cad034",
                  "text": "Partitio — Cleric [v4]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-35392d",
                  "text": "Osvald — Arcanist: 2 Arcanist skills [v3], Seal of Immortality",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Jobs"
                },
                {
                  "id": "journey-for-the-dawn-1-75d3f3",
                  "text": "Temenos — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-196a4d",
                  "text": "Partitio — Equip Lasting Memory over Evil Ward (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-a400fc",
                  "text": "Partitio — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-6b49ed",
                  "text": "Osvald — Unequip Peak Performance (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-8de2e1",
                  "text": "Osvald — Equip Hang Tough over Deal More Damage (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-95d1a4",
                  "text": "Osvald — Equip Lasting Memory (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-525748",
                  "text": "Ochette — Equip Boost-Start (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-2b2c26",
                  "text": "Castti — Unequip Extra Experience (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-c04570",
                  "text": "Castti — Equip Lasting Memory over Grows on Trees (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-cc5209",
                  "text": "Castti — Equip A Step Ahead (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                },
                {
                  "id": "journey-for-the-dawn-1-abd20a",
                  "text": "Hikari — Equip Summon Strength over Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "Shadowy Monsters",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b2",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-b8a3c0",
                  "text": "Warp to Flamechurch.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b3",
              "title": "Arcanette",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-785e1f",
                  "text": "Temenos — Spear x3 (can do latent power with staff if you have it) [<]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-de3f54",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-d5a6f3",
                  "text": "Castti — Axe x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-2db696",
                  "text": "Throne — Axe x3 [>]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-a7f33b",
                  "text": "Hikari — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b4",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-2389b1",
                  "text": "Go to Flamechurch: Cathedral Entrance.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b5",
              "title": "Menu",
              "kind": "menu",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-92e0ad",
                  "text": "Items — All Magic Nuts (2S, 4M) - will be 3M if you used all nuts b4 galdy → Castti",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "At the Flamechurch flame",
                  "ctx": "Inventory"
                },
                {
                  "id": "journey-for-the-dawn-1-4ae88b",
                  "text": "Valuables — Shiny Mirror",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "lead": "At the Flamechurch flame",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b6",
              "title": "After lighting the flame, warp to Beasting Village.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-5311e3",
                  "text": "Go to Tombs of the Wardenbeasts.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b7",
              "title": "Grotesque Monster",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-92767c",
                  "text": "Anyone — Energising Pomegranate (M) → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-b8cbd2",
                  "text": "Hikari — Defend / Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-d6019e",
                  "text": "Anyone — Soulstone (L)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-2e635b",
                  "text": "Hikari — Shinjumonjigiri x4 (if needed)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b8",
              "title": "Menu",
              "kind": "menu",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-f98892",
                  "text": "Set Slot 2 to Ochette. Set Slot 1 to Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "At the Toto'haha flame"
                },
                {
                  "id": "journey-for-the-dawn-1-b9134a",
                  "text": "After lighting the flame, warp to Ku.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "At the Toto'haha flame"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b9",
              "title": "Menu",
              "kind": "menu",
              "when": "Before going to the Armourer",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-df1b81",
                  "text": "Set Slot 3 to Osvald. Set Slot 4 to Throne",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-96997c",
                  "text": "Set Slot 1 to Agnea. Set Slot 3 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-1bb732",
                  "text": "Set Slot 4 to Partitio. Set Slot 1 to Ochette",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b10",
              "title": "Go to the armourer. Make sure you swapped parties first (need the extra sell value).",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-589578",
                  "text": "Go to the armourer. Make sure you swapped parties first (need the extra sell value).",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b11",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-25a433",
                  "text": "Buy 3 Great Helm",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-1ea24b",
                  "text": "Sell Guardian's Iceblade",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-c3fa58",
                  "text": "Sell Ogre's Bane",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-136303",
                  "text": "Sell Eclipse Edge",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-38fd59",
                  "text": "Sell Marietta",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-8e036e",
                  "text": "Sell Breaker's Blade",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-b7f54c",
                  "text": "Sell Black Bow",
                  "check": true,
                  "kind": "shop",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-c2e428",
                  "text": "Need to have at least 297k after selling.",
                  "check": false,
                  "kind": "note",
                  "warn": false,
                  "optional": false,
                  "ctx": "Notes"
                },
                {
                  "id": "journey-for-the-dawn-1-143117",
                  "text": "Osvald — Unequip all",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-5e6297",
                  "text": "Castti — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips tornado glaive, wind whisperer, tornado bow, battle-tested staff, swift shield, great helm, and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-35045d",
                  "text": "Castti — Equip Fang of Ferocity (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-86fd6b",
                  "text": "Castti — Equip Alpione's Amulet (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-2ef507",
                  "text": "Castti — Equip Blessed Vestments (Body)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-24db21",
                  "text": "Castti — Equip Ancient Circlet (Head)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-ff5d8e",
                  "text": "Castti — Unequip Swift Shield (Shield)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-897ebc",
                  "text": "Temenos — Equip Fortune Wand (Staff)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-4b3d26",
                  "text": "Throne — Lock Aegis Shield → Shield",
                  "check": true,
                  "kind": "menu",
                  "note": "Changed since the video (06/30/2026): Coat of Arms + Aegis Shield replace Empowering Necklace.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-736a06",
                  "text": "Throne — Equip Coat of Arms over Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "note": "Changed since the video (06/30/2026): Coat of Arms + Aegis Shield replace Empowering Necklace.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-311fec",
                  "text": "Throne — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips great helm and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-fee21e",
                  "text": "Ochette — Equip EXP Augmentor (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-733529",
                  "text": "Ochette — Equip Sprightly Ring (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-54d34f",
                  "text": "Partitio — Optimise (with hotkey)",
                  "check": true,
                  "kind": "menu",
                  "note": "equips swift shield, great helm, and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-f066fb",
                  "text": "Partitio — Equip Quick Cloak",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-b43e0e",
                  "text": "Partitio — Equip 2 Empowering Bracelets",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-d63bf8",
                  "text": "Agnea — Equip Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-4181c0",
                  "text": "Osvald — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips swift shield, great helm, and royal guard's mail",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "journey-for-the-dawn-1-ddefcc",
                  "text": "Osvald — Equip 2 Empowering Bracelets",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b12",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-5cb913",
                  "text": "Go to Tranquil Grotto.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-119821",
                  "text": "After lighting the flame, warp to Crackridge.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-c1274d",
                  "text": "Go to Fellsun Ruins.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-e01958",
                  "text": "After lighting the flame, warp to New Delsta Harbour.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-607742",
                  "text": "Go to Vidania.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            },
            {
              "id": "journey-for-the-dawn-b13",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Vide",
              "solo": false,
              "steps": [
                {
                  "id": "journey-for-the-dawn-1-54bca4",
                  "text": "Set Slot 3 to Throne. Set Slot 1 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-503369",
                  "text": "Set Slot 2 to Temenos. Set Slot 3 to Agnea",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "journey-for-the-dawn-1-764b34",
                  "text": "Throne — Abating Orb → Vide",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-58ad20",
                  "text": "Hikari — Latent Power + Hienka x2 → Vide",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-d72ed2",
                  "text": "Temenos — Energising Pomegranate (L) → Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "journey-for-the-dawn-1-956398",
                  "text": "Hikari — Shinjumonjigiri x4 → Vide",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 End"
                }
              ]
            }
          ]
        },
        {
          "id": "vide-the-wicked",
          "title": "Vide, the Wicked",
          "mark": "3:03:15",
          "seconds": 10995,
          "blocks": [
            {
              "id": "vide-the-wicked-b1",
              "title": "Vide, the Wicked",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "vide-the-wicked-1-ada0f5",
                  "text": "Castti — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "vide-the-wicked-1-c57688",
                  "text": "Partitio — Forbidden Elixir → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "vide-the-wicked-1-8a2047",
                  "text": "Agnea — Latent Power + Springy Boots",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "vide-the-wicked-1-fdb5dd",
                  "text": "Ochette — Peacock Strut → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "vide-the-wicked-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "vide-the-wicked-1-867b47",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "vide-the-wicked-1-da57bb",
                  "text": "Partitio — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "vide-the-wicked-1-173843",
                  "text": "Agnea — Dagger x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "vide-the-wicked-1-da6e32",
                  "text": "Ochette — Bow x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "vide-the-wicked-1-cad42d",
                  "text": "Partitio — HHT x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "vide-the-wicked-1-6e9c2c",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "vide-the-wicked-1-832da9",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "vide-the-wicked-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "After reaching Canalbrine",
              "solo": false,
              "steps": [
                {
                  "id": "vide-the-wicked-1-2fb028",
                  "text": "Set Slot 1 to Castti. Set Slot 2 to Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "vide-the-wicked-1-99270e",
                  "text": "Set Slot 3 to Partitio. Set Slot 4 to Osvald",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "vide-the-wicked-1-9416f6",
                  "text": "Throne — Merchant [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "vide-the-wicked-1-a3d854",
                  "text": "Temenos — Inventor [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                }
              ]
            },
            {
              "id": "vide-the-wicked-b3",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "vide-the-wicked-1-0e0d6e",
                  "text": "Hire the Cleric in the church.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "vide-the-wicked-1-6fad35",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "vide-the-wicked-1-9b96ed",
                  "text": "Save the game.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "vide-the-wicked-1-7e8702",
                  "text": "Exit and load the same file under Extra Battles.",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "extras",
      "title": "Extra Battles",
      "chapters": [
        {
          "id": "majestic-mysterious-travellers",
          "title": "Majestic Mysterious Travellers",
          "mark": "3:05:45",
          "seconds": 11145,
          "blocks": [
            {
              "id": "majestic-mysterious-travellers-b1",
              "title": "Majestic Mysterious Travellers",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "majestic-mysterious-travellers-1-476306",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "majestic-mysterious-travellers-1-7b2502",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "majestic-mysterious-travellers-1-43ec8c",
                  "text": "Castti — Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "majestic-mysterious-travellers-1-10c53e",
                  "text": "Temenos — Springy Boots → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "majestic-mysterious-travellers-1-a7a979",
                  "text": "Partitio — Latent Power + Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "majestic-mysterious-travellers-1-c98810",
                  "text": "Castti — Dohter's Charity → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "majestic-mysterious-travellers-1-2b3658",
                  "text": "Throne — Latent Power + Forbidden Elixir",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-2-7b2502",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-1-b65c41",
                  "text": "Castti — Latent Power + Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Forget-Me-Do (if before Temenos)",
                    "Blusterbloom x1 (x2 if after Temenos)",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-1-8df21f",
                  "text": "Temenos — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-1-5ed35a",
                  "text": "Partitio — Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "majestic-mysterious-travellers-1-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "majestic-mysterious-travellers-1-ca6da8",
                  "text": "Throne — Latent Power",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "majestic-mysterious-travellers-1-c15aba",
                  "text": "Throne — 2 Decaying Dragon's Essence",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "majestic-mysterious-travellers-1-26e34d",
                  "text": "Throne — Latent Power + Reinforcing Jam",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "majestic-mysterious-travellers-1-8208a7",
                  "text": "Throne — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "majestic-mysterious-travellers-1-867b47",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "majestic-mysterious-travellers-1-832da9",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                }
              ]
            }
          ]
        },
        {
          "id": "masterly-mysterious-travellers",
          "title": "Masterly Mysterious Travellers",
          "mark": "3:10:00",
          "seconds": 11400,
          "blocks": [
            {
              "id": "masterly-mysterious-travellers-b1",
              "title": "Masterly Mysterious Travellers",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "masterly-mysterious-travellers-1-476306",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "masterly-mysterious-travellers-1-7b2502",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "masterly-mysterious-travellers-1-43ec8c",
                  "text": "Castti — Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "masterly-mysterious-travellers-1-10c53e",
                  "text": "Temenos — Springy Boots → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "masterly-mysterious-travellers-1-a7a979",
                  "text": "Partitio — Latent Power + Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "masterly-mysterious-travellers-1-c98810",
                  "text": "Castti — Dohter's Charity → Throne",
                  "check": true,
                  "kind": "fight",
                  "note": "H'aanit can get a patience turn here, but as long as she doesn't kill Throne/Partitio/Castti (or hit throne with leghold) it's fine.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "masterly-mysterious-travellers-1-2b3658",
                  "text": "Throne — Latent Power + Forbidden Elixir",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "masterly-mysterious-travellers-2-7b2502",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "masterly-mysterious-travellers-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "masterly-mysterious-travellers-1-867b47",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "masterly-mysterious-travellers-1-5ed35a",
                  "text": "Partitio — Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "masterly-mysterious-travellers-1-03e71a",
                  "text": "Castti — Concoct x2",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "masterly-mysterious-travellers-1-ca6da8",
                  "text": "Throne — Latent Power",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "masterly-mysterious-travellers-1-c15aba",
                  "text": "Throne — 2 Decaying Dragon's Essence",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "masterly-mysterious-travellers-1-7b55df",
                  "text": "Throne — Reinforcing Jam",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "masterly-mysterious-travellers-1-d9c95d",
                  "text": "Castti — Latent Power + Concoct x2",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "masterly-mysterious-travellers-1-f4ea80",
                  "text": "Anyone — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "masterly-mysterious-travellers-1-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                }
              ]
            },
            {
              "id": "masterly-mysterious-travellers-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "Before True Vide",
              "solo": false,
              "steps": [
                {
                  "id": "masterly-mysterious-travellers-1-6e5201",
                  "text": "Set Slot 4 to Ochette. Set Slot 2 to Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "masterly-mysterious-travellers-1-935f58",
                  "text": "Set Slot 1 to Hikari. Set Slot 3 to Temenos",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "masterly-mysterious-travellers-1-8d0b0d",
                  "text": "Items — Nourishing Nut (M) → Partitio",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "masterly-mysterious-travellers-1-60eb5d",
                  "text": "Items — Reinforcing Jam (Ochette)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Inventory"
                },
                {
                  "id": "masterly-mysterious-travellers-1-35e324",
                  "text": "Throne — Cleric: All Cleric skills [^2]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "masterly-mysterious-travellers-1-f8b801",
                  "text": "Partitio — Merchant: 1 Merchant skill",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "masterly-mysterious-travellers-1-e328b6",
                  "text": "Partitio — Dancer [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "masterly-mysterious-travellers-1-0f471c",
                  "text": "Agnea — Merchant: Hired Help [v1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                }
              ]
            }
          ]
        },
        {
          "id": "true-vide-phase-1",
          "title": "True Vide (Phase 1)",
          "mark": "3:14:00",
          "seconds": 11640,
          "blocks": [
            {
              "id": "true-vide-phase-1-b1",
              "title": "True Vide (Phase 1)",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "true-vide-phase-1-1-0625d2",
                  "text": "Throne — Energising Pomegranate (L) → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-1-1-6e9c2c",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-1-1-00e5aa",
                  "text": "Hikari — Divine Dual-Edge x4 (if last)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-1-1-a2fc4b",
                  "text": "Hikari — Otherwise, Latent Power - Hienka → Vide",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-1-1-ac9110",
                  "text": "Partitio — Latent Power + HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-1-1-23056b",
                  "text": "Hikari — Divine Dual-Edge x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-1-1-b629fe",
                  "text": "Throne — Latent Power + Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-1-1-023611",
                  "text": "Throne — Aelfric's Blessing → Partitio",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-1-1-b23c6d",
                  "text": "Ochette — Revitalising Jam → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-1-1-76c4b1",
                  "text": "Hikari — Latent Power - Hienka → Vide",
                  "check": true,
                  "kind": "fight",
                  "note": "cursor should still be on vide",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-1-1-1804a1",
                  "text": "Partitio — Summon",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-1-2-1804a1",
                  "text": "Partitio — Summon",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-1-1-5e716d",
                  "text": "Hikari — Divine Dual-Edge x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-1-1-d31835",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-1-1-f84044",
                  "text": "Ochette — Provoke Beasts x2",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-1-1-72d5e0",
                  "text": "Ochette — Vagrant Frogking I x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-1-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-1-1-e8a29d",
                  "text": "Partitio — Lion Dance → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-1-1-e7b9ed",
                  "text": "Partitio — Reinforcing Jam → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-1-1-8d31f1",
                  "text": "Hikari — Latent Power - Hienka x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-phase-1-1-d04d7b",
                  "text": "Partitio — Energising Pomegranate → Hikari",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-1-2-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4 - Aelfric's"
                }
              ]
            }
          ]
        },
        {
          "id": "true-vide-phase-2",
          "title": "True Vide (Phase 2)",
          "mark": "3:16:00",
          "seconds": 11760,
          "blocks": [
            {
              "id": "true-vide-phase-2-b1",
              "title": "True Vide (Phase 2)",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "true-vide-phase-2-1-9517f0",
                  "text": "Temenos — Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-2-1-7b87af",
                  "text": "Osvald — One True Magic",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-2-1-b90fce",
                  "text": "Agnea — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-2-1-832da9",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Warding Leaf",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-2-1-6684e4",
                  "text": "Whimsical Leaf (skip if Castti already acts last)",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": true,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-phase-2-1-03113e",
                  "text": "Castti — Decaying Dragon's Essence → Bottom right [^]",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-2-1-f9d73d",
                  "text": "Temenos — Sacred Shield x3 → Osvald",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-2-1-99c436",
                  "text": "Osvald — Seal of Immortality",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-2-1-80ebe5",
                  "text": "Agnea — Refreshing Jam (if Osvald is at 1 HP, else Peacock Strut x2 Castti) → Osvald",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-2-1-4d8025",
                  "text": "Castti — Forbidden Elixir → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2"
                },
                {
                  "id": "true-vide-phase-2-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-2-1-02f182",
                  "text": "Castti — Concoct x4 (x3 if peacock)",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3 (can do x2 if peacock)",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-2-1-78bd83",
                  "text": "Osvald — Almighty Olive",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-phase-2-2-4d8025",
                  "text": "Castti — Forbidden Elixir → Self",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-2-1-97f51d",
                  "text": "Agnea — Peacock Strut (if not done already) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-phase-2-1-f4ea80",
                  "text": "Anyone — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-phase-2-1-03e71a",
                  "text": "Castti — Concoct x2",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-phase-2-1-55ce43",
                  "text": "Anyone — Defend",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-phase-2-1-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4 - Aelfric's"
                },
                {
                  "id": "true-vide-phase-2-1-d7a05f",
                  "text": "Anyone — Energising Pomegranate (M) → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                },
                {
                  "id": "true-vide-phase-2-2-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                }
              ]
            },
            {
              "id": "true-vide-phase-2-b2",
              "title": "Menu",
              "kind": "menu",
              "when": "Before True Vide, the Wicked",
              "solo": false,
              "steps": [
                {
                  "id": "true-vide-phase-2-1-2ee536",
                  "text": "Set Slot 2 to Agnea. Set Slot 4 to Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "true-vide-phase-2-1-d3e8b3",
                  "text": "Set Slot 1 to Temenos. Set Slot 3 to Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "true-vide-phase-2-1-fcc8ea",
                  "text": "Throne — Equip Thunderstorm Amulet over Brooch of Joy (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "true-vide-phase-2-1-317a58",
                  "text": "Ochette — Unequip Sprightly Ring (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "true-vide-phase-2-1-0f222b",
                  "text": "Temenos — Equip Thunderstorm Amulet (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "true-vide-phase-2-1-679f40",
                  "text": "Temenos — Equip Unerring Bracelet (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "true-vide-phase-2-1-be3ee0",
                  "text": "Agnea — Equip 2 Lightning Amulets",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Equipment"
                },
                {
                  "id": "true-vide-phase-2-1-898644",
                  "text": "Throne — Merchant [^1]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "true-vide-phase-2-1-9982e6",
                  "text": "Osvald — Dancer: Stimulate [v5]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "true-vide-phase-2-1-5adedf",
                  "text": "Hikari — Arcanist [v3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "true-vide-phase-2-1-912196",
                  "text": "Agnea — Inventor [^3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "true-vide-phase-2-1-a1da67",
                  "text": "Temenos — Scholar: Elemental Barrage [v3]",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Jobs"
                },
                {
                  "id": "true-vide-phase-2-1-7177e5",
                  "text": "Partitio — Equip Hang Tough over The Show Goes On (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                },
                {
                  "id": "true-vide-phase-2-1-186462",
                  "text": "Hikari — Equip Boost-Start over A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "warn": false,
                  "optional": false,
                  "ctx": "Support Skills"
                }
              ]
            }
          ]
        },
        {
          "id": "true-vide-the-wicked",
          "title": "True Vide, the Wicked",
          "mark": "3:18:00",
          "seconds": 11880,
          "blocks": [
            {
              "id": "true-vide-the-wicked-b1",
              "title": "True Vide, the Wicked",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "true-vide-the-wicked-1-81f90c",
                  "text": "Throne — Latent Power + HHA x3",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-the-wicked-1-5c18c2",
                  "text": "Throne — Forbidden Elixir → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-the-wicked-1-4dffbe",
                  "text": "Ochette — Peacock Strut x3 → Castti",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-the-wicked-1-7f3d40",
                  "text": "Temenos — Rotten Meat → Hikari",
                  "check": true,
                  "kind": "fight",
                  "note": "Changed since the video (09/17/2025): no shaggy aurochs; mighty leaf and rotten meat instead.",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-the-wicked-1-24a668",
                  "text": "Agnea — Windy Refrain",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 1"
                },
                {
                  "id": "true-vide-the-wicked-1-56cda0",
                  "text": "Hikari — Shinjumonjigiri x4 → Top",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-cb44c6",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-d38ea1",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-0f45b4",
                  "text": "Castti — Latent Power + Concoct x4 → Bottom",
                  "check": true,
                  "kind": "do",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-d3862a",
                  "text": "Osvald after both Castti and Hikari",
                  "check": true,
                  "kind": "party",
                  "note": "Otherwise",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-172305",
                  "text": "Osvald — Decaying Dragon's Essence",
                  "check": true,
                  "kind": "party",
                  "note": "Lion Dance",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 2"
                },
                {
                  "id": "true-vide-the-wicked-1-fa16db",
                  "text": "Partitio — HHA x4",
                  "check": true,
                  "kind": "party",
                  "note": "Can use the decaying dragon's essence with osvald (if not done already) if partitio is already moving first on turn 4",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-the-wicked-1-223665",
                  "text": "Osvald — Stimulate x3 → Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 3"
                },
                {
                  "id": "true-vide-the-wicked-1-752b3a",
                  "text": "Partitio — Latent Power + HHA x4",
                  "check": true,
                  "kind": "party",
                  "note": "Can use the decaying dragon's essence with osvald (if not done already) if partitio is already moving before the boss on turn 5",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-the-wicked-2-223665",
                  "text": "Osvald — Stimulate x3 → Partitio",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-the-wicked-1-980195",
                  "text": "Osvald has used Decaying Dragon's Essence (3 shields left)",
                  "check": true,
                  "kind": "party",
                  "note": "Osvald has not used Decaying Dragon's Essence (7 shields left)",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 4"
                },
                {
                  "id": "true-vide-the-wicked-1-812f43",
                  "text": "Partitio — HHB x3",
                  "check": true,
                  "kind": "party",
                  "note": "Branch: Partitio — HHA x3",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                },
                {
                  "id": "true-vide-the-wicked-1-0f01e1",
                  "text": "Osvald — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "party",
                  "note": "Branch: Osvald — Defend",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 5"
                },
                {
                  "id": "true-vide-the-wicked-1-292956",
                  "text": "Turn 5.5 — Partitio: Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "true-vide-the-wicked-1-4397da",
                  "text": "Turn 5.5 — Osvald: Decaying Dragon's Essence",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false
                },
                {
                  "id": "true-vide-the-wicked-1-167fa0",
                  "text": "Hikari — Latent Power - Hienka x2 (x3 if after Partitio)",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 6"
                },
                {
                  "id": "true-vide-the-wicked-1-f380c5",
                  "text": "Partitio — Revitalising Jam → Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 6"
                },
                {
                  "id": "true-vide-the-wicked-1-457d5f",
                  "text": "Osvald — Refreshing Jam → Throne",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 6"
                },
                {
                  "id": "true-vide-the-wicked-1-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 6"
                },
                {
                  "id": "true-vide-the-wicked-1-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 6 - Aelfric's"
                },
                {
                  "id": "true-vide-the-wicked-1-e25de3",
                  "text": "Throne — Latent Power + Spear x4 → Bottom",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 7"
                },
                {
                  "id": "true-vide-the-wicked-1-471d0d",
                  "text": "Throne — Energising Pomegranate (L) → Castti",
                  "check": true,
                  "kind": "do",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 7"
                },
                {
                  "id": "true-vide-the-wicked-1-6e9c2c",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 7"
                },
                {
                  "id": "true-vide-the-wicked-1-d57479",
                  "text": "Temenos — Staff x4 → Bottom",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 7"
                },
                {
                  "id": "true-vide-the-wicked-1-866332",
                  "text": "Agnea — Latent Power + Springy Boots x3",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 7"
                },
                {
                  "id": "true-vide-the-wicked-1-9e5b45",
                  "text": "Dancer — Stimulate x2 (if Castti is last) → Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 8"
                },
                {
                  "id": "true-vide-the-wicked-2-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 8"
                },
                {
                  "id": "true-vide-the-wicked-1-f9fa70",
                  "text": "Anyone — Energising Pomegranate (L) → Throne",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 8"
                },
                {
                  "id": "true-vide-the-wicked-1-46ea35",
                  "text": "Anyone — Decaying Dragon's Essence (after Castti)",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 8"
                },
                {
                  "id": "true-vide-the-wicked-1-3f43de",
                  "text": "Throne — Latent Power + Spear x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-1-8208a7",
                  "text": "Throne — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-1-125b37",
                  "text": "Temenos — Revive",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-1-302cf3",
                  "text": "Agnea — Energising Pomegranate (M) → Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-1-da936c",
                  "text": "Ochette — Provoke Beasts x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-1-b4c385",
                  "text": "Ochette — Vagrant Frogking I x6",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 9"
                },
                {
                  "id": "true-vide-the-wicked-2-9e5b45",
                  "text": "Dancer — Stimulate x2 (if Castti is last) → Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 10"
                },
                {
                  "id": "true-vide-the-wicked-3-91a7f5",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 10"
                },
                {
                  "id": "true-vide-the-wicked-1-19f8a0",
                  "text": "Last Person — Switch Party",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 10"
                },
                {
                  "id": "true-vide-the-wicked-1-95e2d0",
                  "text": "Ochette — Latent Power - Beastly Howl x3",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 10"
                },
                {
                  "id": "true-vide-the-wicked-1-83e0cb",
                  "text": "Throne — Almighty Olive",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 11"
                },
                {
                  "id": "true-vide-the-wicked-1-a56fbd",
                  "text": "Temenos — Latent Power + Elemental Barrage x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 11"
                },
                {
                  "id": "true-vide-the-wicked-2-24a668",
                  "text": "Agnea — Windy Refrain",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 11"
                },
                {
                  "id": "true-vide-the-wicked-1-a66f3c",
                  "text": "Throne — Latent Power + Sword x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 12"
                },
                {
                  "id": "true-vide-the-wicked-1-8e6463",
                  "text": "Throne — Reinforcing Jam → Temenos",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 12"
                },
                {
                  "id": "true-vide-the-wicked-2-a56fbd",
                  "text": "Temenos — Latent Power + Elemental Barrage x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 12"
                },
                {
                  "id": "true-vide-the-wicked-1-b04892",
                  "text": "Agnea — Elemental Bomb Bottle x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 12"
                },
                {
                  "id": "true-vide-the-wicked-1-28d97e",
                  "text": "Ochette — Peacock Strut x2 → Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 12"
                },
                {
                  "id": "true-vide-the-wicked-1-19e374",
                  "text": "Partitio — Latent Power + Stimulate x4 → Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 13"
                },
                {
                  "id": "true-vide-the-wicked-1-0b3249",
                  "text": "Hikari — Aggressive Slash x3",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 13"
                },
                {
                  "id": "true-vide-the-wicked-1-e80e7b",
                  "text": "Osvald — Forbidden Elixir → Castti",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 13"
                },
                {
                  "id": "true-vide-the-wicked-1-867b47",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "lead": "Turn 13"
                },
                {
                  "id": "true-vide-the-wicked-1-8c3105",
                  "text": "Osvald — Revitalising Jam → Hikari",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 14"
                },
                {
                  "id": "true-vide-the-wicked-1-832da9",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum"
                  ],
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 14"
                },
                {
                  "id": "true-vide-the-wicked-1-36aee5",
                  "text": "Hikari — Latent Power - Hienka x3",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 14"
                },
                {
                  "id": "true-vide-the-wicked-2-fec412",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "party",
                  "warn": false,
                  "optional": false,
                  "ctx": "Turn 14 - Aelfric's"
                }
              ]
            },
            {
              "id": "true-vide-the-wicked-b2",
              "title": "GGs!",
              "kind": "setup",
              "solo": true,
              "steps": [
                {
                  "id": "true-vide-the-wicked-1-7a333a",
                  "text": "GGs!",
                  "check": true,
                  "kind": "fight",
                  "warn": false,
                  "optional": false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
