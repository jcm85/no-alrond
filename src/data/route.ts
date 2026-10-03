/** Generated from Chewy's published route sheet. Do not hand-edit. */
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
    "sheetDate": "2026-05-24",
    "steps": 1001,
    "foes": 3,
    "note": "Chewy's published route sheet from the video. Early game was revised on May 20 and May 24, 2026, after the April upload. No Alrond and no Bewildering Grace."
  },
  "acts": [
    {
      "id": "prologue",
      "title": "Prologue",
      "chapters": [
        {
          "id": "throne-ch-1-0",
          "title": "Throne Ch.1",
          "blocks": [
            {
              "id": "b0",
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
                  "id": "r3",
                  "text": "1st Person — Dagger / Axe x2 → Pursuer #1",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r4",
                  "text": "2nd Person — Dagger / Axe → Pursuer #2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r5",
                  "text": "3rd Person — Dagger / Axe → Pursuer #2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r7",
                  "text": "Everyone — Dagger / Axe x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b15",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r16",
                  "text": "Steal the Brothel Girl's Clothes.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r17",
                  "text": "Steal the Shadow Soulstone from the boy at the bottom left side of the screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r18",
                  "text": "Go south to the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r19",
                  "text": "Steal the Ice Soulstone, Wind Soulstone and Light Soulstone from the old man south of the armourer.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r20",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b22",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r24",
                  "text": "Buy Unerring Earring",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b26",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r27",
                  "text": "Heal to full before Pirro if you are under 210 HP.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b29",
              "title": "Pirro",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r30",
                  "text": "Turn 1 — Darkest Night",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r31",
                  "text": "Turn 2 — Darkest Night",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r32",
                  "text": "Turn 3 — Darkest Night x4",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r33",
                  "text": "Turn 4 — Sword",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r34",
                  "text": "Turn 5 — Sword",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r35",
                  "text": "Turn 6 — Shadow Soulstone",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r37",
                  "text": "Turn 7 — Light Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Healing Grape"
                },
                {
                  "id": "r38",
                  "text": "Turn 8 — Sword x4",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Light Soulstone"
                },
                {
                  "id": "r39",
                  "text": "Turn 9 — Latent Power + Wind Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Latent Power + Sword x4"
                },
                {
                  "id": "r40",
                  "text": "Then — Ice Soulstone",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Wind Soulstone"
                },
                {
                  "id": "r41",
                  "text": "Turn 10 — Sword",
                  "check": true,
                  "kind": "do",
                  "note": "Before Pirro on T8: Ice Soulstone"
                }
              ]
            },
            {
              "id": "b44",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r45",
                  "text": "Tag New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r46",
                  "text": "Tag Abandoned Village.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r47",
                  "text": "Recruit Osvald.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r48",
                  "text": "Go to Cape Cold.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r49",
                  "text": "Mug the man on the left.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b51",
              "title": "Man",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r52",
                  "text": "Turn 1 — Icewind",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r53",
                  "text": "Turn 2 — Fireball x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r54",
                  "text": "Turn 3 — Staff (if needed)",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b56",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r57",
                  "text": "Get the 2,000 leaves in the house behind the inn if you want an extra soulstone (M).",
                  "check": true,
                  "kind": "do",
                  "optional": true
                },
                {
                  "id": "r58",
                  "text": "Warp to Abandoned Village.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r59",
                  "text": "Get the Herb of Serenity up the ladder near the Black Market.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r60",
                  "text": "Reset the night market by toggling between day and night until you get clerics.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b62",
              "title": "Black Market",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r64",
                  "text": "Sell Old Locket",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r65",
                  "text": "Sell Heavy Coin Pouch",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r66",
                  "text": "Sell Gold Pocket Watch",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r67",
                  "text": "Sell Herb of Serenity",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r69",
                  "text": "Buy 2 Ice Soulstone",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r70",
                  "text": "Buy 1 Thunder Soulstone",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r71",
                  "text": "Buy 1 Ice Soulstone (M)",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r72",
                  "text": "Buy 6 or 7 Light Soulstone (M)",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b74",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r75",
                  "text": "Warp to New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r76",
                  "text": "Take the ship to Toto'haha Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r77",
                  "text": "Go to Western Tropu'hopu Traverse.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r78",
                  "text": "Kill an encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r79",
                  "text": "Get the Hunter Licence.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r80",
                  "text": "Kill another encounter with a Light Soulstone (M). If Osvald does not have at least 130 JP, get the Light Soulstone (M) up the stairs to the right and kill another encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b82",
              "title": "Menu",
              "kind": "menu",
              "when": "After Osvald gets 130 JP",
              "solo": false,
              "steps": [
                {
                  "id": "r85",
                  "text": "Throne — HP Thief",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Learn Skills"
                },
                {
                  "id": "r86",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Learn Skills"
                },
                {
                  "id": "r87",
                  "text": "Osvald — First 2 Scholar skills",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Learn Skills"
                },
                {
                  "id": "r89",
                  "text": "Osvald — Evasive Manoeuvres → Slot 2",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b91",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r92",
                  "text": "Go to Tropu'hopu.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r93",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r94",
                  "text": "Go to the Cavern of Waves.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r95",
                  "text": "Optionally S&Q. Walk and get the JP Augmentor from the red chest.",
                  "check": true,
                  "kind": "do",
                  "optional": true
                },
                {
                  "id": "r96",
                  "text": "Warp to New Delsta Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b98",
              "title": "Menu",
              "kind": "menu",
              "when": "After getting the JP Augmentor",
              "solo": false,
              "steps": [
                {
                  "id": "r101",
                  "text": "Give JP Augmentor to Throne (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "b103",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r104",
                  "text": "Take the ship to Western Continent Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r105",
                  "text": "Go to Cropdale.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r106",
                  "text": "Exit and get the Slumber Sage outside.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r107",
                  "text": "Go to Oresrush.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r108",
                  "text": "Start Throne Ch. 2: Mother's Route.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r109",
                  "text": "Recruit Partitio.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r110",
                  "text": "Go to Ryu.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r111",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b113",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r115",
                  "text": "Buy Blusterbloom x11",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b117",
              "title": "Recruit Hikari.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "r117",
                  "text": "Recruit Hikari.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b119",
              "title": "Ruffian Soldiers",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r120",
                  "text": "Anyone — Ice Soulstone",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r121",
                  "text": "Anyone — Attack",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b123",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r124",
                  "text": "Go to Northern Conning Creek Coast.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r125",
                  "text": "Kill the encounter at night with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r126",
                  "text": "Go to Western Conning Creek Coast.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r127",
                  "text": "Kill the encounter at night with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r128",
                  "text": "Talk to the quest NPC outside Conning Creek to complete \"Goading the Grapes\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r129",
                  "text": "Go to Conning Creek.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r130",
                  "text": "Start Osvald Ch. 3.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r131",
                  "text": "Go north to the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r132",
                  "text": "Steal the Wind Soulstone (L) from the woman outside the house.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r133",
                  "text": "Get the Rainbow Glass Bottle on the shore.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r134",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r135",
                  "text": "Take the ship to Western Continent Canalbrine.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r136",
                  "text": "Recruit Castti.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b138",
              "title": "Recruit Castti",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r141",
                  "text": "Set Slot 1 to Castti. Set Slot 4 to Hikari",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b143",
              "title": "Go to the armourer.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "r143",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b145",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r147",
                  "text": "Buy Critical Earring",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b149",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r150",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r151",
                  "text": "Go to the brigand.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b153",
              "title": "Brigand",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r154",
                  "text": "Throne — HP Thief x2",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b156",
              "title": "Talk to Arkar to get the Proof of the Inventor.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r157",
                  "text": "Craft Elemental Bomb Bottle and Critical Scope.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b159",
              "title": "Menu",
              "kind": "menu",
              "when": "After crafting both inventions",
              "solo": false,
              "steps": [
                {
                  "id": "r162",
                  "text": "Throne — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r163",
                  "text": "Osvald — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r164",
                  "text": "Partitio — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r165",
                  "text": "Castti — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b167",
              "title": "Sail to Clockbank.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "r167",
                  "text": "Sail to Clockbank.",
                  "check": true,
                  "kind": "do"
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
          "id": "partitio-ch-2-169",
          "title": "Partitio Ch. 2",
          "blocks": [
            {
              "id": "b169",
              "title": "Partitio Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r171",
                  "text": "After delivering the Clockite, warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r172",
                  "text": "Go to Eastern New Delsta Highroad.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r173",
                  "text": "Talk to Al to complete \"The Traveler's Bag\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r174",
                  "text": "Warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r175",
                  "text": "Go to Southern Crackridge Wilds.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r176",
                  "text": "During this section, if you get surprised, use the Wind Soulstone (L) instead of the normal strat.",
                  "check": true,
                  "kind": "do",
                  "note": "need castti alive for all encounters, rest can skip 1"
                },
                {
                  "id": "r177",
                  "text": "Break the Armour Eater with Sword/Axe/Staff and kill the encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r178",
                  "text": "Get the 6400 leaves from the gold chest down the ladder.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r179",
                  "text": "Go to Western Crackridge Wilds.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r180",
                  "text": "Break the Armour Eater with Sword/Axe/Staff and kill the encounter with a Light Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r181",
                  "text": "Go to Crackridge.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r182",
                  "text": "Purchase the Empowering Lychee (M) from the guitarist.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r183",
                  "text": "Go to Western Crackridge Wilds.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r184",
                  "text": "Kill the encounter with a Wind Soulstone (L). If you already used it, do the other strat.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r185",
                  "text": "Get the Thunder Soulstone (M) beside the left merchant.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r186",
                  "text": "Get the Merchant Licence.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b188",
              "title": "Menu",
              "kind": "menu",
              "when": "After getting the Merchant License",
              "solo": false,
              "steps": [
                {
                  "id": "r191",
                  "text": "Osvald — Merchant: 2 Merchant skills [^1], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r193",
                  "text": "Osvald — Inventor [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r194",
                  "text": "Partitio — Merchant: First 2 Merchant skills, Hired Help",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r196",
                  "text": "Throne — Merchant: First 2 Merchant skills [^1], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r199",
                  "text": "Throne — Equip Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r200",
                  "text": "Throne — Equip Boost-Start (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r201",
                  "text": "Osvald — Equip Grows on Trees (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r202",
                  "text": "Osvald — Equip Boost-Start (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r203",
                  "text": "Partitio — Equip Boost-Start (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b205",
              "title": "Go to Western Gravell Wilds.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r206",
                  "text": "Get the Thunder Soulstone (L) from the brown chest just up the stairs.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r207",
                  "text": "Kill the encounter at night by using Ruffians x2 with Throne, then HHGx4 with Partitio.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r208",
                  "text": "Enter Gravell, then immediately leave.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r209",
                  "text": "Head south down the ladder and get 23 500 leaves from the chest.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r210",
                  "text": "Warp to Clockbank.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r211",
                  "text": "Purchase the Wind Soulstone (M) and Fire Soulstone (M) from the old lady.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r212",
                  "text": "Hire the Clockmaker in the tavern.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r213",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b215",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r218",
                  "text": "Set Slot 1 to Hikari. Set Slot 4 to Castti",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b220",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Garnet",
              "solo": false,
              "steps": [
                {
                  "id": "r223",
                  "text": "Hikari — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b225",
              "title": "Purchase the Shadow Soulstone (M) from the man by the statue (near the factory).",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r226",
                  "text": "Switch to day before going back to the factory.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b228",
              "title": "Guards",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r229",
                  "text": "Anyone — Thunder Soulstone (M)",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b231",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r232",
                  "text": "Kill the encounter with a Fire Soulstone (M).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r233",
                  "text": "Fight Garnet in the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b235",
              "title": "Garnet",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r237",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r238",
                  "text": "Osvald — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r239",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r240",
                  "text": "Partitio — Spear",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r242",
                  "text": "Osvald — Axe x4 [>]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r243",
                  "text": "Hikari — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r244",
                  "text": "1st Merchant — Collect x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r245",
                  "text": "2nd Merchant — HHG x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b247",
              "title": "Menu",
              "kind": "menu",
              "when": "After Garnet",
              "solo": false,
              "steps": [
                {
                  "id": "r250",
                  "text": "Hikari — Merchant: 2 Merchant skills [v1], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r252",
                  "text": "Throne — Merchant [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r254",
                  "text": "Osvald — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r255",
                  "text": "Hikari — Equip Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r256",
                  "text": "Hikari — Equip Boost-Start (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b258",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r259",
                  "text": "Tag Flamechurch.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r260",
                  "text": "Go to Borderfall.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r261",
                  "text": "Get the Cleric Licence.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r262",
                  "text": "Purchase the Fire Soulstone (M) from the rightmost cleric.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r263",
                  "text": "Get the Thunder Soulstone (M) from the chest before the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r264",
                  "text": "Go to Montwise.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-2-266",
          "title": "Hikari Ch. 2",
          "blocks": [
            {
              "id": "b266",
              "title": "Hikari Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r268",
                  "text": "Rest at the inn if Throne does not have Latent Power.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r269",
                  "text": "Purchase the Wind Soulstone (M) from the man on the bench.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r270",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b272",
              "title": "Gladiator",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r273",
                  "text": "Turn 1 — Spear x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r274",
                  "text": "Turn 2 — Fire Soulstone (M)",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r276",
                  "text": "Learn Thrash after the fight.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b278",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r279",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b281",
              "title": "Gladiators",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r282",
                  "text": "Turn 1 — Ice Soulstone (M)",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b284",
              "title": "Zeto the Butcher",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r285",
                  "text": "Turn 1 — Sword x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r286",
                  "text": "Turn 2 — Thunder Soulstone (M)",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r287",
                  "text": "Turn 3 — Shadow Soulstone (M)",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r289",
                  "text": "Learn Slowing Sweep after the fight.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b291",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r292",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b294",
              "title": "Bandelam the Reaper",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r295",
                  "text": "Turn 1 — Slowing Sweep / Spear (if first on t2)",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r296",
                  "text": "Turn 2 — Spear x4",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r297",
                  "text": "Turn 3 — Thunder Soulstone (L)",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b299",
              "title": "Bandelam the Reaper",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r301",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r302",
                  "text": "Hikari — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r303",
                  "text": "Partitio — Spear x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r305",
                  "text": "Throne — HHG x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b307",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r308",
                  "text": "Go to Montwise: Underground Arena.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r309",
                  "text": "Ambush the Fainthearted Youth.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b311",
              "title": "Yurinas",
              "kind": "fight",
              "when": "Requires Latent Power on Throne",
              "solo": false,
              "steps": [
                {
                  "id": "r313",
                  "text": "Throne after Yurinas on T2",
                  "check": true,
                  "kind": "do",
                  "note": "Throne before Yurinas on T2"
                },
                {
                  "id": "r314",
                  "text": "Turn 1 — Defend",
                  "check": true,
                  "kind": "do",
                  "note": "Branch: T1 — Armour Corrosive"
                },
                {
                  "id": "r315",
                  "text": "Turn 2 — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "do",
                  "note": "Branch: T2 — HHV x4"
                },
                {
                  "id": "r316",
                  "text": "Throne after Yurinas on T2 — HHV x4",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b318",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r319",
                  "text": "Warp to Flamechurch.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b321",
              "title": "Menu",
              "kind": "menu",
              "when": "Before recruiting Temenos",
              "solo": false,
              "steps": [
                {
                  "id": "r324",
                  "text": "Give Reinforcing Jam (if no latent) to Throne",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r325",
                  "text": "Then — Champion's Belt (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "b327",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r328",
                  "text": "Recruit Temenos at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b330",
              "title": "Insurgent",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r331",
                  "text": "Throne — Dagger x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b333",
              "title": "Recruit Temenos",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r336",
                  "text": "Set Slot 2 to Temenos. Set Slot 4 to Hikari",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b338",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r339",
                  "text": "Purchase the Herb of Serenity from the woman to the north.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r340",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r341",
                  "text": "Go to Conning Creek: Outskirts.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r342",
                  "text": "After the cutscene, get the Fire Soulstone (M) from the nearby chest.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r343",
                  "text": "Fight Lady Clarissa at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b345",
              "title": "Lady Clarissa",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r346",
                  "text": "Merchant — HHG x4",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b348",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r349",
                  "text": "Warp to Oresrush.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-2-mother-s-route-351",
          "title": "Throne Ch. 2: Mother's Route",
          "blocks": [
            {
              "id": "b351",
              "title": "Throne Ch. 2: Mother's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r353",
                  "text": "After the cutscene at the saddlery, hire the Peddler near the east exit.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r354",
                  "text": "Purchase the Sturdy Pickaxe and Forget-Me-Do from the man in the armourer.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r355",
                  "text": "After finishing the chapter, warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-3-357",
          "title": "Osvald Ch. 3",
          "blocks": [
            {
              "id": "b357",
              "title": "Osvald Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r359",
                  "text": "Fight the encounter during the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b361",
              "title": "Guards",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r363",
                  "text": "Throne — Wind Soulstone (M)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r364",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r366",
                  "text": "Partitio — HHM x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r367",
                  "text": "Throne — Latent Power + Steal → Any",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r368",
                  "text": "Throne — Steal → Different",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r369",
                  "text": "Osvald — Springy Boots (if needed) → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r371",
                  "text": "Throne — Steal → Different",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r372",
                  "text": "Anyone — Run",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "b374",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r375",
                  "text": "Fight Stenvar at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b377",
              "title": "Stenvar",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r379",
                  "text": "Merchants — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r381",
                  "text": "1st Merchant — Collect x4 → Stenvar",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r382",
                  "text": "2nd Merchant — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b384",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r385",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r386",
                  "text": "Go to Beasting Village.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r387",
                  "text": "Recruit Ochette.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r388",
                  "text": "Pick Akala.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "winter",
      "title": "Snow & Castti",
      "chapters": [
        {
          "id": "recruit-ochette-390",
          "title": "Recruit Ochette",
          "blocks": [
            {
              "id": "b390",
              "title": "Recruit Ochette",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r393",
                  "text": "Set Slot 1 to Castti. Set Slot 4 to Temenos",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r394",
                  "text": "Set Slot 3 to Ochette. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b396",
              "title": "Steal Dispatches from Beastling Island and the Traveler's Bow from the NPC to the left.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r397",
                  "text": "Warp to Cape Cold.",
                  "check": true,
                  "kind": "do",
                  "note": "imo go for the steal but if you fail the 80% don't bother trying again",
                  "warn": true
                }
              ]
            },
            {
              "id": "b399",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving Cape Cold",
              "solo": false,
              "steps": [
                {
                  "id": "r402",
                  "text": "Castti — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r403",
                  "text": "Ochette — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r404",
                  "text": "Osvald — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b406",
              "title": "Go to Western Winterbloom Snows.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r407",
                  "text": "Use a Wind Soulstone (M) on the first encounter, then capture the Snow Yak.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r408",
                  "text": "Get the Scholar Licence.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r409",
                  "text": "Go to Winterbloom. Start Castti's chapter (should be default option)",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-2-winterbloom-route-411",
          "title": "Castti Ch. 2: Winterbloom Route",
          "blocks": [
            {
              "id": "b411",
              "title": "Castti Ch. 2: Winterbloom Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r413",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b415",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r418",
                  "text": "Set Slot 1 to Temenos. Set Slot 2 to Osvald",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r419",
                  "text": "Set Slot 3 to Partitio. Set Slot 3 to Ochette",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b421",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r422",
                  "text": "Talk to the Troubled Woman to complete \"The Sword in the Stone\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r423",
                  "text": "Fight Plukk at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b425",
              "title": "Plukk",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r427",
                  "text": "Merchant — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b429",
              "title": "Menu",
              "kind": "menu",
              "when": "Before buying the boat",
              "solo": false,
              "steps": [
                {
                  "id": "r432",
                  "text": "Castti — Scholar: 3 Scholar skills [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r433",
                  "text": "Partitio — Cleric: 4 Cleric skills [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r435",
                  "text": "Castti — Equip Elemental Augmentation (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r436",
                  "text": "Castti — Equip Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r437",
                  "text": "Partitio — Equip Evil Ward (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b439",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r440",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r441",
                  "text": "Soothe the Debt Collector.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r442",
                  "text": "Talk to the Retired Blacksmith to get the Proof of the Armsmaster and Conqueror's Sword.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r443",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b445",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r447",
                  "text": "Sell Conquerer's Sword",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r449",
                  "text": "Buy 2 Diffusing Serum",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r450",
                  "text": "Buy 2 Dreamy Flowers",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b452",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r453",
                  "text": "Purchase the Herb of Serenity from the lady.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r454",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r455",
                  "text": "Purchase the boat.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r456",
                  "text": "Paint the boat black and choose the octopus for the sail symbol. This is very important.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r457",
                  "text": "Get the Fortune Wand from the chest to the north.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r458",
                  "text": "Tag Roque Island.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r459",
                  "text": "Warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r460",
                  "text": "Get the Sunken Gold Statue to the south.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r461",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r462",
                  "text": "Go to Sai.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-2-sai-route-464",
          "title": "Castti Ch.2: Sai Route",
          "blocks": [
            {
              "id": "b464",
              "title": "Castti Ch.2: Sai Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r466",
                  "text": "Switch to night before fighting the Sand Lion.",
                  "check": true,
                  "kind": "do",
                  "ctx": "Sand Lion's Den"
                }
              ]
            },
            {
              "id": "b468",
              "title": "Sand Lion",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r470",
                  "text": "Merchant — HHV x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b472",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r473",
                  "text": "Finish the chapter.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r474",
                  "text": "Go to Wellgrove.",
                  "check": true,
                  "kind": "do"
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
          "id": "partitio-ch-3-476",
          "title": "Partitio Ch. 3",
          "blocks": [
            {
              "id": "b476",
              "title": "Partitio Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r478",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b480",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r482",
                  "text": "Sell Sunken Gold Statue",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b484",
              "title": "After the cutscene at the department store, warp to Crackridge Harbour: Anchorage.",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r485",
                  "text": "Go to Shipwreck of the Empress.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r486",
                  "text": "Get the Rusty Dagger at the end.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r487",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r488",
                  "text": "Go to Timberain.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r489",
                  "text": "Purchase the Blessed Vestments from the NPC in front of the courthouse.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r490",
                  "text": "Go to the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r491",
                  "text": "Purchase the Ancient Circlet from the quest NPC.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r492",
                  "text": "Soothe the Elderly Soldier.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r493",
                  "text": "Get the Rusty Polearm at the end.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r494",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r495",
                  "text": "Talk to Porta to get the Warlord's Spear and Dancer's Blade.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r496",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r497",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b499",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r501",
                  "text": "Sell Warlord's Spear",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b503",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r504",
                  "text": "Before hiring the last merchant in the tavern, speak to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b506",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r509",
                  "text": "Set Slot 1 to Osvald. Set Slot 4 to Castti",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b511",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Thurston",
              "solo": false,
              "steps": [
                {
                  "id": "r514",
                  "text": "Give Dancer's Blade to Throne",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r515",
                  "text": "Then — Fortune Wand (Temenos)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r517",
                  "text": "Throne — Inventor [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r518",
                  "text": "Osvald — Merchant [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r520",
                  "text": "Throne — Equip Peak Performance (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r522",
                  "text": "Use Temenos to heal Throne if she is not at full HP.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b524",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r525",
                  "text": "Fight Thurston at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b527",
              "title": "Thurston",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r529",
                  "text": "Throne — HP Thief x3 → Steam Engine",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r530",
                  "text": "Osvald — Defend [<]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r531",
                  "text": "Partitio — Defend [>]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r533",
                  "text": "1st Merchant — Bow x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r534",
                  "text": "2nd Merchant — HHV x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b536",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r537",
                  "text": "Warp to Sai.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r538",
                  "text": "Steal the Empowering Lychee (M) from the left disciple in the warriors' guild.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r539",
                  "text": "Get the Warrior Licence.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r540",
                  "text": "Warp to Roque Island.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "partitio-ch-4-542",
          "title": "Partitio Ch. 4",
          "blocks": [
            {
              "id": "b542",
              "title": "Partitio Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r544",
                  "text": "On the next screen, hear travel banter just before going down the stairs to the floor with the books.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b546",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Steam Tank Obsidian",
              "solo": false,
              "steps": [
                {
                  "id": "r549",
                  "text": "Give 2 Empowering Lychee (M) to Throne",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r551",
                  "text": "Temenos — Cleric: 4 Cleric skills",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r552",
                  "text": "Temenos — Hunter Leghold Trap [v3], Abating Orb",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r555",
                  "text": "Temenos — Equip Evil Ward (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r556",
                  "text": "Temenos — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b558",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r559",
                  "text": "Fight the Steam Tank at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b561",
              "title": "Steam Tank Obsidian",
              "kind": "fight",
              "when": "Requires Latent Power on Throne",
              "solo": false,
              "steps": [
                {
                  "id": "r564",
                  "text": "Throne — Latent Power + Critical Scope → Obsidian",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r565",
                  "text": "Throne — HP Thief x3 → Obsidian",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r566",
                  "text": "Osvald — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r567",
                  "text": "Temenos — Abating Orb → Obsidian",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r568",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r570",
                  "text": "Merchants — HHV x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b572",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r573",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r574",
                  "text": "Start Throne Ch. 3: Mother's Route.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r575",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b577",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r579",
                  "text": "Throne — Unequip Dancer's Blade",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r581",
                  "text": "Sell Drifting Dagger",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r582",
                  "text": "Sell Dancer's Blade",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r583",
                  "text": "Sell Axe of Avarice",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b585",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r586",
                  "text": "Steal the Habit.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r587",
                  "text": "Scrutinise the Eager Townsperson.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r588",
                  "text": "Rest at the inn if Partitio doesn't have latent power.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r589",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b591",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r594",
                  "text": "Set Slot 1 to Castti. Set Slot 2 to Temenos",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r595",
                  "text": "Set Slot 2 to Hikari. Set Slot 4 to Osvald",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b597",
              "title": "Menu",
              "kind": "menu",
              "when": "After the tavern",
              "solo": false,
              "steps": [
                {
                  "id": "r600",
                  "text": "Castti — Lock Small Axe",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r601",
                  "text": "Castti — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips ancient circlet and blessed vestments",
                  "ctx": "Equipment"
                },
                {
                  "id": "r603",
                  "text": "Hikari — Inventor [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r604",
                  "text": "Throne — Thief: 3 Thief skills",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r605",
                  "text": "Throne — Merchant [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r607",
                  "text": "Throne — Equip Life in the Shadows over Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b609",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r610",
                  "text": "Bribe the Strolling Townsperson.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r611",
                  "text": "Get the Dancer Licence.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r612",
                  "text": "Go to Wellgrove: Alrond's Estate.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r613",
                  "text": "Talk to Misha twice to complete \"Misha's Next Chapter\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r614",
                  "text": "Bribe Alrond, then hire him.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r615",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r616",
                  "text": "Go to Western Montwise Pass.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r617",
                  "text": "Go to Western Merry Hills Pass.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r618",
                  "text": "Tag Merry Hills.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r619",
                  "text": "Fight the Foreign Assassins.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "foreign-assassins-621",
          "title": "Foreign Assassins",
          "blocks": [
            {
              "id": "b621",
              "title": "Foreign Assassins",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r623",
                  "text": "Throne — HHM",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r624",
                  "text": "Hikari — Springy Boots → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r625",
                  "text": "Partitio — Summon",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r627",
                  "text": "Castti — Concoct x2",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Dreamy Flower x2",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2"
                },
                {
                  "id": "r630",
                  "text": "Hikari — Critical Scope x3 → Back",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r632",
                  "text": "Partitio — Summon (as needed)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3+"
                },
                {
                  "id": "r633",
                  "text": "Others — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3+"
                },
                {
                  "id": "r635",
                  "text": "Throne — HHB x4*",
                  "check": true,
                  "kind": "fight",
                  "lead": "After getting at least EXP x100 and JP x10, or after 5 Alrond procs",
                  "ctx": "Turn 3+"
                },
                {
                  "id": "r636",
                  "text": "Partitio — HHV x4 (can defend to get a 6th proc)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3+"
                },
                {
                  "id": "r638",
                  "text": "Flee and reload the save if did not get EXP x100 and at least JP x10 (29.02% from 6 Alrond procs).",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                },
                {
                  "id": "r639",
                  "text": "*Want to break with Throne to get Latent Power. If she already has it, you can break with Partitio.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b641",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r642",
                  "text": "Warp to Roque Island.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r643",
                  "text": "Ambush the man guarding the house.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r644",
                  "text": "Get the 39,800 leaves, 3 Rejuvenating Jams and Magic Nut (L) inside (all but the rightmost chest).",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r645",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r646",
                  "text": "Go to Ivory Ravine.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r647",
                  "text": "Get the Giant's Club.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r648",
                  "text": "Warp to Merry Hills.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b650",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r651",
                  "text": "Steal the Diamond Dagger from the merchant at the bottom of the screen, then inquire him.",
                  "check": true,
                  "kind": "do",
                  "note": "if you still have alrond following you, skip stealing the dagger"
                },
                {
                  "id": "r652",
                  "text": "Steal the Quick Cloak and Ice Soulstone (M) from the lady in blue.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r653",
                  "text": "Go to the armourer.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b655",
              "title": "Armourer",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r657",
                  "text": "Sell Diamond Dagger (if gotten)",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r659",
                  "text": "Buy Breaker's Blade",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r660",
                  "text": "Buy Swift Shield",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r661",
                  "text": "Buy Dazzling Tiara",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b663",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r664",
                  "text": "Steal the Platinum Helm from the man in blue.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r665",
                  "text": "Steal the Poetry of the Soul and Magic Nut (L) from the person under the bridge.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r666",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b668",
              "title": "Menu",
              "kind": "menu",
              "when": "Before fighting Gigantes",
              "solo": false,
              "steps": [
                {
                  "id": "r671",
                  "text": "Throne — Warrior: 5 Warrior skills [^3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r672",
                  "text": "Throne — Armsmaster [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r673",
                  "text": "Castti — Warrior: 5 Warrior skills [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r674",
                  "text": "Partitio — Cleric: 1 Cleric skill, Aelfric's Blessing",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r675",
                  "text": "Hikari — Warrior: 5 Warrior skills [v1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r676",
                  "text": "Hikari — Merchant [v3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r678",
                  "text": "Throne — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips breaker's blade, swift shield, dazzling tiara, and butler's tailcoat",
                  "ctx": "Equipment"
                },
                {
                  "id": "r679",
                  "text": "Throne — Lock Swift Shield",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r680",
                  "text": "Throne — Equip Giant's Club",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r681",
                  "text": "Throne — Unequip Traveler's Bow (if gotten)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r683",
                  "text": "Throne — Equip Deal More Damage over Life in the Shadows (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b685",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r686",
                  "text": "Go to the Nameless Isle.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r687",
                  "text": "Fight Gigantes at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b689",
              "title": "Gigantes",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r691",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r692",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r693",
                  "text": "Partitio — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r695",
                  "text": "Hikari — Aggressive Slash x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r696",
                  "text": "Throne — HP Thief x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b698",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r699",
                  "text": "Get the Finisher's Claws from the red chest.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r700",
                  "text": "Inquire Georges Lazuli.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r701",
                  "text": "Warp to Cropdale.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r702",
                  "text": "Recruit Agnea.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "beasts",
      "title": "Beasts",
      "chapters": [
        {
          "id": "recruit-agnea-704",
          "title": "Recruit Agnea",
          "blocks": [
            {
              "id": "b704",
              "title": "Recruit Agnea",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r707",
                  "text": "Set Slot 4 to Agnea. Set Slot 4 to Hikari",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r708",
                  "text": "Set Slot 1 to Temenos. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r709",
                  "text": "Set Slot 3 to Ochette. Set Slot 2 to Castti",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b711",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r712",
                  "text": "Warp to Crackridge.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-tera-s-route-714",
          "title": "Ochette Ch. 2: Tera's Route",
          "blocks": [
            {
              "id": "b714",
              "title": "Ochette Ch. 2: Tera's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r716",
                  "text": "Hunt for Buttermeep at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b718",
              "title": "Buttermeep",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r720",
                  "text": "Temenos — Staff → Buttermeep",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r721",
                  "text": "Ochette — Defend / Capture",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r723",
                  "text": "Ochette — Capture x3 (if not done already) → Buttermeep",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r724",
                  "text": "Anyone — Flee",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b726",
              "title": "Menu",
              "kind": "menu",
              "when": "After the fight",
              "solo": false,
              "steps": [
                {
                  "id": "r729",
                  "text": "Throne — Equip Finisher's Claws (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r730",
                  "text": "Ochette — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips traveler's bow, platinum helm, and quick cloak",
                  "ctx": "Equipment"
                },
                {
                  "id": "r731",
                  "text": "Temenos — Equip JP Augmentor (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r733",
                  "text": "Agnea — Inventor [^3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r734",
                  "text": "Temenos — Scholar: 1 Scholar skill [^1], Elemental Barrage",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r736",
                  "text": "Temenos — Hunter [v1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r738",
                  "text": "Agnea — Equip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r739",
                  "text": "Temenos — Equip Evasive Manoeuvres over A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b741",
              "title": "Notes",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r742",
                  "text": "Use Temenos to heal Throne if she got hit.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b744",
              "title": "Ochette: Monster Roster",
              "kind": "setup",
              "when": "After the fight",
              "solo": false,
              "steps": []
            },
            {
              "id": "b750",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r751",
                  "text": "Go to Crackridge.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r752",
                  "text": "Ambush the scholar at the bottom right of the town.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r753",
                  "text": "Get From the Far Reaches of Hell.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r754",
                  "text": "Fight Tera at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b756",
              "title": "Tera",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r758",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r760",
                  "text": "Throne — HP Thief x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b762",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r763",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r764",
                  "text": "Go to Southern Stormhail Snows.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r765",
                  "text": "Steal The Curious Legend of the Great Wall.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r766",
                  "text": "Steal the Energising Pomegranate (M) and Energising Pomegranate (L) from the man near the ladder.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r767",
                  "text": "Go to Stormhail.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-glacis-s-route-769",
          "title": "Ochette Ch. 2: Glacis's Route",
          "blocks": [
            {
              "id": "b769",
              "title": "Ochette Ch. 2: Glacis's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r771",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b773",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r776",
                  "text": "Set Slot 2 to Osvald. Set Slot 4 to Agnea",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b778",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r779",
                  "text": "Steal the Warding Leaf from the child in the provisioner.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r780",
                  "text": "Go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b782",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r784",
                  "text": "Sell Poetry of the Soul",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r786",
                  "text": "Buy 8 Strengthening Serum",
                  "check": true,
                  "kind": "shop"
                }
              ]
            },
            {
              "id": "b788",
              "title": "Sanctum Knight",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r789",
                  "text": "Turn 1 — Ice Soulstone (M)",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r790",
                  "text": "Turn 2 — Defend",
                  "check": true,
                  "kind": "do",
                  "note": "3.5% chance to die to crit here if sanctum knight goes first",
                  "warn": true
                },
                {
                  "id": "r791",
                  "text": "Turn 3 — Tera",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b793",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r794",
                  "text": "Fight Glacis at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b796",
              "title": "Glacis",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r798",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r800",
                  "text": "Throne — HP Thief x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b802",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r803",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b805",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Harvey's Creatures",
              "solo": false,
              "steps": [
                {
                  "id": "r808",
                  "text": "Throne — Thief: Aeber's Reckoning [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r809",
                  "text": "Throne — Dancer Dagger Dance [^3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r811",
                  "text": "Osvald — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r812",
                  "text": "Ochette — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-4-814",
          "title": "Osvald Ch. 4",
          "blocks": [
            {
              "id": "b814",
              "title": "Osvald Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r816",
                  "text": "Enter the library.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r817",
                  "text": "Talk to the Unusual Tome Specialist (quest NPC on the left) to complete \"Procuring Peculiar Tomes\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r818",
                  "text": "Scrutinise the first story NPC on the left. Infinite tries when scrutinising.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r819",
                  "text": "Talk to Al on the right side of the library to complete \"From the Far Reaches of Hell\". You may need to switch time to make him show up (also ensure you completed \"The Traveller's Bag\")",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r820",
                  "text": "Scrutinise the other 2 story NPCs.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b822",
              "title": "Underground Laboratory",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r823",
                  "text": "Hear the travel banter at the third door in the long corridor.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r824",
                  "text": "Switch to night before entering the room after the save point (keep it night until the boss).",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b826",
              "title": "Harvey's Creatures",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r827",
                  "text": "Throne — Dagger Dance x2",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b829",
              "title": "Grieving Golem",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r831",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r833",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b835",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r836",
                  "text": "Steal the Magic Nut (M) from the merchant.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r837",
                  "text": "Go to the tavern. Reset reputation if needed.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b839",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r842",
                  "text": "Set Slot 3 to Castti. Set Slot 4 to Osvald",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b844",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r845",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-2-cateracta-s-route-847",
          "title": "Ochette Ch. 2: Cateracta's Route",
          "blocks": [
            {
              "id": "b847",
              "title": "Ochette Ch. 2: Cateracta's Route",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r849",
                  "text": "Turn 1 — Fire Soulstone (M)",
                  "check": true,
                  "kind": "do",
                  "ctx": "Alpione"
                }
              ]
            },
            {
              "id": "b851",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r852",
                  "text": "After finishing the chapter, warp to Beasting Village.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "ochette-ch-3-854",
          "title": "Ochette Ch. 3",
          "blocks": [
            {
              "id": "b854",
              "title": "Ochette Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r856",
                  "text": "Fight the Shadowy Monsters at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b858",
              "title": "Shadowy Monsters",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r859",
                  "text": "Throne — Dagger Dance x2",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b861",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r862",
                  "text": "Get the Tornado Bow after crossing the bridge at Stormy Cape.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r863",
                  "text": "Kill the encounter at night with Dagger Dance x2. Dagger Dance x4 during day works too.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b865",
              "title": "Menu",
              "kind": "menu",
              "when": "After killing the encounter",
              "solo": false,
              "steps": [
                {
                  "id": "r868",
                  "text": "Throne — Scholar [v2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r869",
                  "text": "Castti — Armsmaster [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r870",
                  "text": "Ochette — Dancer: Peacock Strut [^3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r872",
                  "text": "Castti — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r873",
                  "text": "Castti — Equip Deal More Damage (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r874",
                  "text": "Temenos — Equip A Step Ahead (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r875",
                  "text": "Ochette — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r877",
                  "text": "Items — Magic Nuts (2L, 1M) → Castti",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r878",
                  "text": "Items — Rejuvenating Jam (Ochette)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r879",
                  "text": "Weapons — Giant's Club → Throne",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "b881",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r882",
                  "text": "Fight the Malamaowl at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b884",
              "title": "Malamaowl of the Sorrowful Moon",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r886",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r887",
                  "text": "Temenos — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r889",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b891",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r892",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r893",
                  "text": "Go to Curious Nest.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r894",
                  "text": "Fight both bosses at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b896",
              "title": "Battle-Worn Shark",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r898",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r900",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b902",
              "title": "Tyrannodrake",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r904",
                  "text": "Throne — Energising Pomegranate (M) → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r905",
                  "text": "Ochette — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r906",
                  "text": "Temenos — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r907",
                  "text": "Castti — Sixfold Strike",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r909",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r910",
                  "text": "Ochette — Bow x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r911",
                  "text": "Temenos — Bow x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r913",
                  "text": "Throne — HP Thief x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "b915",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r916",
                  "text": "Get the 2 Decaying Dragon's Essences, Fang of Ferocity and Tornado Glaive.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r917",
                  "text": "Warp to Oresrush.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r918",
                  "text": "Steal the Battle-Tested Staff from Roque.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r919",
                  "text": "Warp to Gravell.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r920",
                  "text": "Inquire the hunter outside.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r921",
                  "text": "Steal the Sharp Nut (L) from the old man.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r922",
                  "text": "Talk to Alpione twice to complete \"Alpione's Next Chapter\".",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r923",
                  "text": "Warp to Beasting Bay: Anchorage.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b925",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Scourge of the Sea",
              "solo": false,
              "steps": [
                {
                  "id": "r928",
                  "text": "Castti — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips tornado glaive, tornado bow, and battle-tested staff",
                  "ctx": "Equipment"
                },
                {
                  "id": "r929",
                  "text": "Castti — Equip Fang of Ferocity (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r930",
                  "text": "Castti — Equip Alpione's Amulet (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r932",
                  "text": "Throne — Equip Summon Strength over Boost-Start (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b934",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r935",
                  "text": "Get the Reinforcing Jam on the way to Scourge of the Sea.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r936",
                  "text": "Fight the Scourge of the Sea at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b938",
              "title": "Scourge of the Sea",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r940",
                  "text": "Throne — Defend (if first) / Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r941",
                  "text": "Castti — Icicle x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r942",
                  "text": "Anyone — Revitalizing Jam → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r944",
                  "text": "Throne — Aeber's Reckoning (if needed)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
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
          "id": "switch-to-night-before-fighting-galdera-946",
          "title": "Galdera",
          "mark": "2:14:42",
          "seconds": 8082,
          "blocks": [
            {
              "id": "b946",
              "title": "Switch to night before fighting Galdera.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "r946",
                  "text": "Switch to night before fighting Galdera.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b948",
              "title": "Galdera Party Setup",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r949",
                  "text": "Swap Agnea with Temenos",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r950",
                  "text": "Swap Throne with Osvald",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r952",
                  "text": "Primary party: Osvald",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r100952",
                  "text": "Secondary party: Partitio",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r953",
                  "text": "Primary party: Ochette",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r100953",
                  "text": "Secondary party: Temenos",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r954",
                  "text": "Primary party: Agnea",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r100954",
                  "text": "Secondary party: Throne",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r955",
                  "text": "Primary party: Castti",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r100955",
                  "text": "Secondary party: Hikari",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b957",
              "title": "Omniscient Eye",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r959",
                  "text": "Ochette — Peacock Strut x2 → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r960",
                  "text": "Agnea — Springy Boots → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r961",
                  "text": "Castti — Snowy Stew → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r963",
                  "text": "Osvald — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r964",
                  "text": "Ochette — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r965",
                  "text": "Agnea — Forbidden Elixir → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r966",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r967",
                  "text": "Castti — Latent Power + Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Diffusing Serum",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 2"
                },
                {
                  "id": "r972",
                  "text": "Osvald — Analyse x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r973",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r974",
                  "text": "Agnea — Elemental Bomb Bottle x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r975",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 3"
                },
                {
                  "id": "r979",
                  "text": "Agnea — Energising Pomegranate (L) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r980",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 4"
                }
              ]
            },
            {
              "id": "b984",
              "title": "Galdera, the Fallen",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r986",
                  "text": "Partitio — Latent Power (if needed) + Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r987",
                  "text": "Temenos — Energising Pomegranate (L) → Partitio",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r988",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r989",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r990",
                  "text": "Hikari — HHV x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r992",
                  "text": "Throne — Latent Power + Energising Pomegranate (M) → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "r993",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 - Aelfric's"
                },
                {
                  "id": "r995",
                  "text": "Partitio — Latent Power (if needed) + Aelfric's Blessing (if needed) → Temenos",
                  "check": true,
                  "kind": "fight",
                  "note": "skip aelfric's if temenos is after galdera",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r996",
                  "text": "Temenos — Leghold Trap (if Galdera is vulnerable)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r997",
                  "text": "Throne — Rejuvenating Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r998",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1000",
                  "text": "Throne — Latent Power + Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "r1001",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "r1002",
                  "text": "Temenos — Leghold Trap (if not done already)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 - Aelfric's"
                },
                {
                  "id": "r1004",
                  "text": "Partitio — HHA x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1005",
                  "text": "Throne — Latent Power + Aeber's Reckoning → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1006",
                  "text": "Throne — HP Thief x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1007",
                  "text": "Hikari — Rejuvenating Jam → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "b1009",
              "title": "Menu",
              "kind": "menu",
              "when": "After Galdera",
              "solo": false,
              "steps": [
                {
                  "id": "r1012",
                  "text": "Ochette — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1013",
                  "text": "Castti — Unequip Fang of Ferocity (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1015",
                  "text": "Ochette — Armsmaster [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1017",
                  "text": "Throne — Equip Boost-Start over Summon Strength (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1018",
                  "text": "Castti — Unequip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1019",
                  "text": "Agnea — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1021",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1022",
                  "text": "Go to the Lost Isle.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1023",
                  "text": "Get the Proof of the Arcanist.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1024",
                  "text": "Get the Ancient Cursed Talisman on the right.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1025",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1026",
                  "text": "Start Agnea Ch. 2.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1027",
                  "text": "After entreating the Theatre Ticket, entreat the Fortifying Nut (M) and the Nourishing Nut (M) from the man near the tavern entrance.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1028",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1030",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1033",
                  "text": "Set Slot 2 to Temenos. Set Slot 4 to Castti",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1034",
                  "text": "Set Slot 3 to Hikari. Set Slot 2 to Ochette",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b1036",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1037",
                  "text": "After alluring both NPCs on the second screen to Gil, warp to Canalbrine.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1039",
              "title": "Menu",
              "kind": "menu",
              "when": "After the tavern",
              "solo": false,
              "steps": [
                {
                  "id": "r1042",
                  "text": "Hikari — Dancer: All Dancer skills, including divine [^]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1043",
                  "text": "Hikari — Hunter Abating Orb [v3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1044",
                  "text": "Agnea — Dancer: Peacock Strut [v3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1045",
                  "text": "Agnea — Merchant 2 Merchant skills [v], Hired Help",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1047",
                  "text": "Agnea — Inventor [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1048",
                  "text": "Temenos — Cleric: 1 Cleric skill, Aelfric's Blessing",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1049",
                  "text": "Temenos — Warrior [^]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stories",
      "title": "The Stories",
      "chapters": [
        {
          "id": "temenos-ch-2-1051",
          "title": "Temenos Ch. 2",
          "blocks": [
            {
              "id": "b1051",
              "title": "Temenos Ch. 2",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1052",
                  "text": "???",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1053",
                  "text": "Turn 1 — Aggressive Slash x2",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1054",
                  "text": "Turn 2 — Aggressive Slash",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1056",
              "title": "Menu",
              "kind": "menu",
              "when": "After the coerce",
              "solo": false,
              "steps": [
                {
                  "id": "r1059",
                  "text": "Hikari — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips lost tribe's blade, tornado glaive, and guardian's great axe (tornado bow too but that doesn't matter)",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1060",
                  "text": "Hikari — Equip Fang of Ferocity (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1061",
                  "text": "Temenos — Equip Spurning Ribbon (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "note": "whichever slot JP augmentor isn't in",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1063",
                  "text": "Hikari — Equip Peak Performance (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1064",
                  "text": "Temenos — Unequip A Step Ahead (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1066",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1067",
                  "text": "Fight Vados the Architect in the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1069",
              "title": "Vados the Architect",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1071",
                  "text": "Throne — HP Thief x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b1073",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1074",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-3-mother-s-route-1076",
          "title": "Throne Ch. 3: Mother's Route",
          "blocks": [
            {
              "id": "b1076",
              "title": "Throne Ch. 3: Mother's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1078",
                  "text": "Fight Mother at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1080",
              "title": "Mother",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1082",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1083",
                  "text": "Hikari — Abating Orb → Mother",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1085",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1087",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1088",
                  "text": "Warp to Wellgrove.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-3-1090",
          "title": "Hikari Ch. 3",
          "blocks": [
            {
              "id": "b1090",
              "title": "Hikari Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1092",
                  "text": "After bribing Azuma, entreat the Nourishing Nut (M) and Magic Nut (L) from the merchant outside the department store.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1093",
                  "text": "Get another Dancer License.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1094",
                  "text": "Fight the Ku Soldiers in the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1096",
              "title": "Ku Soldiers",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1097",
                  "text": "Hikari — Thrash x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1099",
              "title": "General Rou",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1100",
                  "text": "Turn 1 — Switch to Spear",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1101",
                  "text": "Then — Abating Orb",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1102",
                  "text": "Turn 2 — Piercing Thrust x4",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1104",
                  "text": "Turn 3 — Defend",
                  "check": true,
                  "kind": "do",
                  "ctx": "If you got hit"
                },
                {
                  "id": "r1105",
                  "text": "Turn 4 — Piercing Thrust x2",
                  "check": true,
                  "kind": "do",
                  "ctx": "If you got hit"
                },
                {
                  "id": "r1107",
                  "text": "Learn Divine Dual-Edge.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b1109",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1110",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-2-1112",
          "title": "Agnea Ch. 2",
          "blocks": [
            {
              "id": "b1112",
              "title": "Agnea Ch. 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1114",
                  "text": "Allure the woman on the way back to the tavern.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1115",
                  "text": "Get the Lightning Amulet in the top floor on the first screen in the theatre.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1116",
                  "text": "Fight La'mani in the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1118",
              "title": "La'mani",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1120",
                  "text": "Throne — HP Thief x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b1122",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1123",
                  "text": "After finishing the chapter, warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1124",
                  "text": "Start Agnea Ch.3.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1125",
                  "text": "After the cutscene on the second screen, warp to Stormhail. Start Temenos' chapter, not Hikari's.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-3-stormhail-route-1127",
          "title": "Temenos Ch. 3: Stormhail Route",
          "blocks": [
            {
              "id": "b1127",
              "title": "Temenos Ch. 3: Stormhail Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1129",
                  "text": "Steal the Thunderstorm Amulet from the merchant outside the headquarters.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1130",
                  "text": "Fight Cubaryi at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1132",
              "title": "Deputy Cubaryi",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1134",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1136",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1138",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1139",
                  "text": "Warp to Stormhail.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-4-1141",
          "title": "Hikari Ch. 4",
          "blocks": [
            {
              "id": "b1141",
              "title": "Hikari Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1143",
                  "text": "Fight Kunzo at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1145",
              "title": "Kunzo",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1146",
                  "text": "Hikari — Divine Dual-Edge",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1148",
              "title": "Jin Mei",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1149",
                  "text": "Turn 1 — Sword",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1150",
                  "text": "Turn 2 — Sword",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1151",
                  "text": "Turn 3 — Defend",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1152",
                  "text": "Turn 4 — Wild Cut x2",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1153",
                  "text": "Turn 5 — Wild Cut x4",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1155",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1156",
                  "text": "Get the Thunderstorm Amulet in the tower to the left before the save point.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1157",
                  "text": "Fight Rai Mei at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1159",
              "title": "Rai Mei",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1161",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1163",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1165",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1166",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-3-1168",
          "title": "Agnea Ch. 3",
          "blocks": [
            {
              "id": "b1168",
              "title": "Agnea Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1170",
                  "text": "After finishing the chapter, steal the Fortifying Nut (M) from the sailor to the north.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1171",
                  "text": "Warp to Sai.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-4-1173",
          "title": "Agnea Ch. 4",
          "blocks": [
            {
              "id": "b1173",
              "title": "Agnea Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1175",
                  "text": "Steal the Reinforcing Jam from the lady down the stairs if you have none left. Need 2 for endgame.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1176",
                  "text": "Fight Veronica at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1178",
              "title": "Veronica",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1180",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1182",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1184",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1185",
                  "text": "Go to Ku.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "hikari-ch-5-1187",
          "title": "Hikari Ch. 5",
          "mark": "1:21:53",
          "seconds": 4913,
          "blocks": [
            {
              "id": "b1187",
              "title": "Hikari Ch. 5",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1189",
                  "text": "Fight Ritsu at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1191",
              "title": "Ritsu",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1193",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1194",
                  "text": "Hikari — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1196",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1198",
              "title": "Mugen",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1200",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1201",
                  "text": "Hikari — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1203",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1205",
              "title": "\"Hikari\"",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1206",
                  "text": "Turn 1 — Aggressive Slash x2",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1207",
                  "text": "Turn 2 — Abating Orb",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1208",
                  "text": "Turn 3 — Aggressive Slash",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1209",
                  "text": "Turn 4 — Hienka x4",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1211",
              "title": "Enshrouded King",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1213",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1214",
                  "text": "Hikari — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1216",
                  "text": "Throne — Staff x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1217",
                  "text": "Hikari — Aggressive Slash x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1218",
                  "text": "Agnea — Lion Dance → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1219",
                  "text": "Temenos — Energizing Pomegranate (L) → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1221",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "b1223",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1224",
                  "text": "Warp to Crackridge Harbour: Anchorage.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1225",
                  "text": "Steal the Battle-Tested Blade and Giant Shield from Bandelam.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1227",
              "title": "Menu",
              "kind": "menu",
              "when": "Before the next fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1230",
                  "text": "Give Giant Shield to Agnea",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1231",
                  "text": "Then — Battle-Tested Blade (Hikari)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                }
              ]
            },
            {
              "id": "b1233",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1234",
                  "text": "Warp to Merry Hills.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "agnea-ch-5-1236",
          "title": "Agnea Ch. 5",
          "blocks": [
            {
              "id": "b1236",
              "title": "Agnea Ch. 5",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1238",
                  "text": "Hikari — Divine Dual-Edge x2",
                  "check": true,
                  "kind": "do",
                  "ctx": "Hired Men"
                }
              ]
            },
            {
              "id": "b1240",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1241",
                  "text": "Fight Dolcinaea at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1243",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Dolcinaea",
              "solo": false,
              "steps": [
                {
                  "id": "r1246",
                  "text": "Hikari — Unequip Grows on Trees (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1247",
                  "text": "Hikari — Equip Deal More Damage over A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1248",
                  "text": "Hikari — Equip Summon Strength (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1250",
              "title": "Dolcinaea",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1252",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1254",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1256",
              "title": "Dolcinaea the Star",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1258",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1260",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1262",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1263",
                  "text": "Warp to Ryu.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "the-dancer-warrior-part-1-1265",
          "title": "The Dancer & Warrior, Part 1",
          "blocks": [
            {
              "id": "b1265",
              "title": "The Dancer & Warrior, Part 1",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1267",
                  "text": "While waiting for the next day, go to the provisioner.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1269",
              "title": "Provisioner",
              "kind": "shop",
              "solo": false,
              "steps": [
                {
                  "id": "r1271",
                  "text": "Buy Blusterbloom x31",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r1273",
                  "text": "Sell Guardian's Iceblade",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r1274",
                  "text": "Sell Lost Tribe's Blade",
                  "check": true,
                  "kind": "shop"
                },
                {
                  "id": "r1276",
                  "text": "If you needed to restore reputation, sell Marietta as well.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b1278",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1279",
                  "text": "Steal the Light Nut from the boy on the way to see Yomi on the hill.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1280",
                  "text": "After finishing the chapter, warp to Ku.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1281",
                  "text": "Start The Dancer & Warrior, Part 2.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1282",
                  "text": "Entreat the Magic Nut (M) and Dancer's Mask on the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1283",
                  "text": "Warp to Crackridge.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-3-crackridge-route-1285",
          "title": "Temenos Ch. 3: Crackridge Route",
          "blocks": [
            {
              "id": "b1285",
              "title": "Temenos Ch. 3: Crackridge Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1287",
                  "text": "After finishing the chapter, warp to Ku.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1289",
              "title": "The Dancer & Warrior, Part 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1291",
                  "text": "Entreat the Tough Nut (M) and Sacred Wood from the NPC to the right.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1292",
                  "text": "Entreat the Wine Offering in the tavern.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1293",
                  "text": "Steal the Unerring Bracelet from the quest NPC outside the tavern.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1294",
                  "text": "Steal the Fortifying Nut and Magic Nut from the man on the right of the 2 blocking the alley.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1295",
                  "text": "Talk to Benkei.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1296",
                  "text": "Go to Tranquil Grotto.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1298",
              "title": "Yomi",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1299",
                  "text": "Turn 1 — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1301",
                  "text": "Do not learn Forlorn Requiem.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                }
              ]
            },
            {
              "id": "b1303",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1304",
                  "text": "After finishing the chapter, entreat the Fortifying Nut (M) from the soldier in the house.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1305",
                  "text": "Warp to Tropu'hopu.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1306",
                  "text": "Go to Nameless Village.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "temenos-ch-4-1308",
          "title": "Temenos Ch. 4",
          "blocks": [
            {
              "id": "b1308",
              "title": "Temenos Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1310",
                  "text": "Steal the Wind Soulstone (L) from the beastling near the entrance.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1311",
                  "text": "Guide Shirlutto.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1313",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Kaldena",
              "solo": false,
              "steps": [
                {
                  "id": "r1316",
                  "text": "Hikari — Unequip All",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1317",
                  "text": "Throne — Battle-Tested Blade",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1319",
                  "text": "Hikari — Equip A Step Ahead over Boost-Start (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1320",
                  "text": "Temenos — Equip A Step Ahead over Evasive Maneouvres (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1322",
              "title": "Kaldena",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1324",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1325",
                  "text": "Hikari — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1326",
                  "text": "Temenos — Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1328",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1330",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1331",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1333",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1336",
                  "text": "Set Slot 4 to Osvald. Set Slot 2 to Hikari",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1337",
                  "text": "Set Slot 1 to Partitio. Set Slot 3 to Agnea",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1338",
                  "text": "Hear a Tale",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1339",
                  "text": "The Cleric & Thief, Part 1",
                  "check": true,
                  "kind": "party"
                }
              ]
            }
          ]
        },
        {
          "id": "the-cleric-thief-part-1-1341",
          "title": "The Cleric & Thief, Part 1",
          "blocks": [
            {
              "id": "b1341",
              "title": "The Cleric & Thief, Part 1",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1343",
                  "text": "Turn 1 — Staff",
                  "check": true,
                  "kind": "do",
                  "ctx": "Forgetful Old Man"
                },
                {
                  "id": "r1344",
                  "text": "Turn 2 — Aggressive Slash x3",
                  "check": true,
                  "kind": "do",
                  "ctx": "Forgetful Old Man"
                }
              ]
            },
            {
              "id": "b1346",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1347",
                  "text": "Steal the Imperial Armour and Swift Shield from Ort.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1348",
                  "text": "Steal the Reinforcing Jam from the lady by the torch.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1349",
                  "text": "After finishing the chapter, warp to Gravell.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "osvald-ch-5-1351",
          "title": "Osvald Ch. 5",
          "blocks": [
            {
              "id": "b1351",
              "title": "Osvald Ch. 5",
              "kind": "menu",
              "when": "Before the mugs",
              "solo": false,
              "steps": [
                {
                  "id": "r1355",
                  "text": "Give Swift Shield to Osvald",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1357",
                  "text": "Throne — Dancer [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1358",
                  "text": "Osvald — Merchant: 1 Merchant skill [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1359",
                  "text": "Partitio — Arcanist: 3 Arcanist skills [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1360",
                  "text": "Partitio — Cleric [v4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1361",
                  "text": "Temenos — Hunter [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1363",
                  "text": "Partitio — Unequip A Step Ahead (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1365",
              "title": "Mugs",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1366",
                  "text": "#1 — HHV x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1367",
                  "text": "#2 — HHB x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1368",
                  "text": "#3 — HHV x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1369",
                  "text": "#4 — HHG x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1370",
                  "text": "#5 — HHV x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1372",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1373",
                  "text": "Fight the Small Golems at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1375",
              "title": "Small Golems",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1376",
                  "text": "Throne — Dagger Dance x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1378",
              "title": "Professor Harvey",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1380",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1381",
                  "text": "Temenos — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1383",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1385",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1386",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "the-scholar-merchant-part-1-1388",
          "title": "The Scholar & Merchant, Part 1",
          "blocks": [
            {
              "id": "b1388",
              "title": "The Scholar & Merchant, Part 1",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1390",
                  "text": "Go to the tavern.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1392",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1395",
                  "text": "Set Slot 1 to Agnea. Set Slot 4 to Temenos",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b1397",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1398",
                  "text": "After finishing the chapter, warp to Montwise.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1400",
              "title": "The Scholar & Merchant, Part 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1402",
                  "text": "Entreat the Lightning Amulet from the librarian.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1403",
                  "text": "Fight the first wave in the day, and the second wave at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1405",
              "title": "Thugs",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1406",
                  "text": "#1 — Dagger Dance x3",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1407",
                  "text": "#2 — Dagger Dance x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1409",
              "title": "Moneylender",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1410",
                  "text": "Turn 1 — HHB x3",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1412",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1413",
                  "text": "Warp to Winterbloom.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-2-father-s-route-1415",
          "title": "Throne Ch. 2: Father's Route",
          "blocks": [
            {
              "id": "b1415",
              "title": "Throne Ch. 2: Father's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1417",
                  "text": "Talk to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1419",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1422",
                  "text": "Set Slot 1 to Temenos. Set Slot 2 to Osvald",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1423",
                  "text": "Set Slot 2 to Castti. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b1425",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1426",
                  "text": "Entreat the Soldier's Spear and Fortifying Nut (L) from the soldier.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1427",
                  "text": "Fight Bergomi at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1429",
              "title": "Bergomi",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1431",
                  "text": "Throne — Dagger Dance x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b1433",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1434",
                  "text": "Warp to Montwise.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-3-father-s-route-1436",
          "title": "Throne Ch. 3: Father's Route",
          "blocks": [
            {
              "id": "b1436",
              "title": "Throne Ch. 3: Father's Route",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1438",
                  "text": "Fight Father at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1440",
              "title": "Father",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1442",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1443",
                  "text": "Temenos — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1445",
                  "text": "Throne — Surprise Attack x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1447",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1448",
                  "text": "Warp to New Delsta.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "throne-ch-4-1450",
          "title": "Throne Ch. 4",
          "blocks": [
            {
              "id": "b1450",
              "title": "Throne Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1452",
                  "text": "Go to Lostseed.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1453",
                  "text": "Steal the Mooneater from the man near the entrance.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1454",
                  "text": "Steal the Forbidden Elixir from the girl guarding the house.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1455",
                  "text": "Steal 2 Rotten Meat from the NPC up the stairs.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1456",
                  "text": "Steal the Almighty Olive from the man before the next screen.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1457",
                  "text": "Fight Claude at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1459",
              "title": "Claude",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1461",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1462",
                  "text": "Temenos — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1464",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "note": "2.5% chance to miss crit :(",
                  "warn": true,
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1465",
                  "text": "surprise attack has guaranteed crit but doesn't kill",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1467",
                  "text": "After finishing the chapter, warp to Abandoned Village.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-3-1469",
          "title": "Castti Ch. 3",
          "blocks": [
            {
              "id": "b1469",
              "title": "Castti Ch. 3",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1471",
                  "text": "After the first flashback, go to the tavern keeper.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1473",
              "title": "Tavern",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1476",
                  "text": "Set Slot 3 to Ochette. Set Slot 4 to Agnea",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b1478",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1479",
                  "text": "After finishing the chapter, warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1480",
                  "text": "Start The Cleric & Thief, Part 2.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1481",
                  "text": "After stealing the Folded Paper, warp to Timberain.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1483",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Trousseau",
              "solo": false,
              "steps": [
                {
                  "id": "r1486",
                  "text": "Throne — Equip Quick Cloak (Body)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1487",
                  "text": "Ochette — Optimise (with hotkey)",
                  "check": true,
                  "kind": "menu",
                  "note": "Equips mooneater, tornado glaive, bow of carnage",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1488",
                  "text": "Ochette — Equip Tornado Bow (Bow)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                }
              ]
            }
          ]
        },
        {
          "id": "castti-ch-4-1490",
          "title": "Castti Ch. 4",
          "blocks": [
            {
              "id": "b1490",
              "title": "Castti Ch. 4",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1492",
                  "text": "Steal the Wind Soulstone (L) from the lady near the entrance.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1493",
                  "text": "Once it starts raining, steal the Empowering Necklace from the soldier across the bridge.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1494",
                  "text": "Fight Trousseau at night.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1496",
              "title": "Trousseau",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1498",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1499",
                  "text": "Temenos — Abating Orb",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1501",
                  "text": "Throne — Aeber's Reckoning",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1503",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1504",
                  "text": "Warp to Cropdale.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "the-apothecary-hunter-part-1-1506",
          "title": "The Apothecary & Hunter, Part 1",
          "blocks": [
            {
              "id": "b1506",
              "title": "The Apothecary & Hunter, Part 1",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1508",
                  "text": "Throne — Dagger x3",
                  "check": true,
                  "kind": "do",
                  "ctx": "Dire Duorduor"
                }
              ]
            },
            {
              "id": "b1510",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1511",
                  "text": "After finishing the chapter, warp to Cropdale.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1513",
              "title": "The Apothecary & Hunter, Part 2",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1515",
                  "text": "Turn 1 — Wind Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "ctx": "Wriggling Shadow"
                },
                {
                  "id": "r1516",
                  "text": "Turn 2 — Wind Soulstone (L)",
                  "check": true,
                  "kind": "do",
                  "ctx": "Wriggling Shadow"
                }
              ]
            },
            {
              "id": "b1518",
              "title": "Creeping Shadow",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1520",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1522",
                  "text": "Throne — Surprise Attack x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b1524",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1525",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                }
              ]
            }
          ]
        },
        {
          "id": "the-cleric-thief-part-2-1527",
          "title": "The Cleric & Thief, Part 2",
          "blocks": [
            {
              "id": "b1527",
              "title": "The Cleric & Thief, Part 2",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1529",
                  "text": "Steal the Whimsical Leaf from the merchant outside if you do not have one.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1530",
                  "text": "Go to Cavern of the Moon and Sun.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1532",
              "title": "Menu",
              "kind": "menu",
              "solo": false,
              "steps": [
                {
                  "id": "r1533",
                  "text": "Right before entering the Cavern of the Moon and Sun",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1535",
                  "text": "Castti — Apothecary: All Apothecary skills, including divine",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1536",
                  "text": "Castti — Arcanist 3 Arcanist skills [v2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1537",
                  "text": "Castti — Armsmaster [v]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1539",
                  "text": "Temenos — Unequip Spurning Ribbon",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1540",
                  "text": "Ochette — Unequip all",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1541",
                  "text": "Ochette — Equip Bow of Carnage",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "b1543",
              "title": "Fight the encounter in the day.",
              "kind": "travel",
              "solo": true,
              "steps": [
                {
                  "id": "r1543",
                  "text": "Fight the encounter in the day.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1545",
              "title": "Vagrant Frogkings I",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1547",
                  "text": "Throne — Dagger x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1548",
                  "text": "Ochette — Defend / Capture",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1549",
                  "text": "Anyone — Run",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                }
              ]
            },
            {
              "id": "b1551",
              "title": "Menu",
              "kind": "menu",
              "when": "After the fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1554",
                  "text": "Items — Nourishing Nut (L) → Throne",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1555",
                  "text": "Items — All Magic Nuts (1L, 1M, 2S) (Castti)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1557",
                  "text": "Throne — Equip Spurning Ribbon over Champion's Belt",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1558",
                  "text": "Castti — Equip Fang of Ferocity",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1559",
                  "text": "Castti — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips tornado glaive, mooneater, tornado bow, battle-tested staff",
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "b1561",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1562",
                  "text": "After finishing the chapter, warp to Oresrush.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1563",
                  "text": "Go to Southern Cropdale Trail.",
                  "check": true,
                  "kind": "do"
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
          "id": "journey-for-the-dawn-1565",
          "title": "Journey for the Dawn",
          "blocks": [
            {
              "id": "b1565",
              "title": "Journey for the Dawn",
              "kind": "setup",
              "solo": false,
              "steps": [
                {
                  "id": "r1567",
                  "text": "Throne — Dagger Dance x3",
                  "check": true,
                  "kind": "do",
                  "ctx": "Shadowy Monsters"
                },
                {
                  "id": "r1568",
                  "text": "Agnea · Castti",
                  "check": false,
                  "kind": "note",
                  "ctx": "Shadowy Monsters"
                },
                {
                  "id": "r1572",
                  "text": "Throne — Merchant [v]",
                  "check": true,
                  "kind": "menu",
                  "lead": "After the fight",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1573",
                  "text": "Hikari — Scholar [v4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1574",
                  "text": "Osvald — Arcanist: 2 Arcanist skills [v3], Seal of Immortality",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1577",
                  "text": "Throne — Equip Life in the Shadows over Deal More Damage (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1578",
                  "text": "Castti — Equip Peak Performance over Evasive Manoeuvres (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1579",
                  "text": "Castti — Equip A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1580",
                  "text": "Osvald — Equip Hang Tough over Evasive Manoeuvres (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1581",
                  "text": "Osvald — Equip Lasting Memory (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1582",
                  "text": "Partitio — Equip Lasting Memory (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1583",
                  "text": "Partitio — Equip A Step Ahead (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1584",
                  "text": "Agnea — Equip Boost-Start (Slot 3)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1585",
                  "text": "Agnea — Equip A Step Ahead (Slot 4)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1587",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1588",
                  "text": "Warp to Flamechurch.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1590",
              "title": "Arcanette",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1592",
                  "text": "Throne — Spear x3 / Defend [<]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1593",
                  "text": "Ochette — Axe x2 / Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1594",
                  "text": "Castti — Defend / Axe (if last)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1595",
                  "text": "Temenos — Axe x2 / Defend [>]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1597",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1598",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1602",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1603",
                  "text": "Go to Flamechurch: Cathedral Entrance.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1604",
                  "text": "After lighting the flame, warp to Beasting Village.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1605",
                  "text": "Go to Tombs of the Wardenbeasts.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1607",
              "title": "Grotesque Monster",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1609",
                  "text": "Throne — Bow x3 [>]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1610",
                  "text": "Ochette — Bow x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1611",
                  "text": "Castti — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1612",
                  "text": "Temenos — Axe / Bow x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1614",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1615",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 2"
                }
              ]
            },
            {
              "id": "b1619",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1620",
                  "text": "After lighting the flame, warp to Ku.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1622",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving Ku",
              "solo": false,
              "steps": [
                {
                  "id": "r1625",
                  "text": "Throne — Unequip all",
                  "check": true,
                  "kind": "menu",
                  "note": "swift shield stays on (thanks to lock)",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1626",
                  "text": "Hikari — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips battle-tested blade, soldier's spear, dazzling tiara, and butler's tailcoat",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1627",
                  "text": "Hikari — Equip Finisher's Claws",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1628",
                  "text": "Hikari — Equip Champion's Belt",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1629",
                  "text": "Hikari — Unequip Dazzling Tiara",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1630",
                  "text": "Hikari — Equip Giant's Club",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1631",
                  "text": "Hikari — Unequip Soldier's Spear",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1632",
                  "text": "Partitio — Equip Soldier's Spear",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1633",
                  "text": "Osvald — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips dazzling tiara and imperial armour",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1634",
                  "text": "Osvald — Equip Empowering Necklace",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1635",
                  "text": "Osvald — Equip Librarian's Amulet",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1636",
                  "text": "Ochette — Equip 2 Lightning Amulets",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1637",
                  "text": "Temenos — Equip Thunderstorm Amulet",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1638",
                  "text": "Temenos — Equip Unerring Bracelet",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1639",
                  "text": "Throne — Equip Thunderstorm Amulet",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1640",
                  "text": "Throne — Equip Coat of Arms",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1641",
                  "text": "Throne — Optimise",
                  "check": true,
                  "kind": "menu",
                  "note": "equips platinum helm and quick cloak",
                  "ctx": "Equipment"
                },
                {
                  "id": "r1644",
                  "text": "Set Slot 1 to Osvald. Set Slot 2 to Temenos",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1645",
                  "text": "Set Slot 4 to Hikari. Set Slot 3 to Castti",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1646",
                  "text": "Set Slot 3 to Agnea. Set Slot 4 to Ochette",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1647",
                  "text": "Set Slot 2 to Partitio. Set Slot 1 to Throne",
                  "check": true,
                  "kind": "party"
                }
              ]
            },
            {
              "id": "b1649",
              "title": "Menu",
              "kind": "menu",
              "when": "Before leaving Ku (menu 2)",
              "solo": false,
              "steps": [
                {
                  "id": "r1652",
                  "text": "Items — 3 Nourishing Nut (M) → Osvald",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1653",
                  "text": "Items — All Fortifying Nuts (2S, 3M, 2L) (Hikari)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1654",
                  "text": "Items — Tough Nut (M) (Osvald)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1655",
                  "text": "Items — Sharp Nut (L) (Hikari)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1656",
                  "text": "Items — 2 Light Nut (Osvald)",
                  "check": true,
                  "kind": "menu",
                  "note": "needed to prevent crits on true vide the wicked",
                  "ctx": "Inventory"
                },
                {
                  "id": "r1658",
                  "text": "Partitio — Equip Spurning Ribbon",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Equipment"
                }
              ]
            },
            {
              "id": "b1660",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1661",
                  "text": "Go to Tranquil Grotto.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1662",
                  "text": "After lighting the flame, warp to Crackridge.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1663",
                  "text": "Go to Fellsun Ruins.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1664",
                  "text": "After lighting the flame, warp to New Delsta Harbour.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1665",
                  "text": "Go to Vidania.",
                  "check": true,
                  "kind": "do"
                }
              ]
            },
            {
              "id": "b1667",
              "title": "Menu",
              "kind": "menu",
              "when": "Before Vide",
              "solo": false,
              "steps": [
                {
                  "id": "r1671",
                  "text": "Set Slot 2 to Throne. Set Slot 1 to Partitio",
                  "check": true,
                  "kind": "party",
                  "note": "Partitio Osvald"
                },
                {
                  "id": "r1672",
                  "text": "Set Slot 1 to Temenos. Set Slot 4 to Agnea",
                  "check": true,
                  "kind": "party",
                  "note": "Ochette Hikari"
                },
                {
                  "id": "r1673",
                  "text": "Castti · Temenos",
                  "check": false,
                  "kind": "note"
                },
                {
                  "id": "r1676",
                  "text": "Throne — Energising Pomegranate (L) → Hikari",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1677",
                  "text": "Hikari — Latent Power - Hienka x2 → Vide",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1678",
                  "text": "Temenos — Abating Orb → Vide",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1680",
                  "text": "Hikari — Shinjumonjigiri x4 → Vide",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 1 End"
                }
              ]
            }
          ]
        },
        {
          "id": "vide-the-wicked-1682",
          "title": "Vide, the Wicked",
          "mark": "3:03:15",
          "seconds": 10995,
          "blocks": [
            {
              "id": "b1682",
              "title": "Vide, the Wicked",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1684",
                  "text": "Agnea — Latent Power + Springy Boots",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1685",
                  "text": "Partitio/Ochette — Rotten Meat (whoever is first) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1686",
                  "text": "Partitio/Ochette — Forbidden Elixir (whoever is second) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1687",
                  "text": "Castti — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1689",
                  "text": "Agnea — Dagger x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1690",
                  "text": "Partitio — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1691",
                  "text": "Ochette — Bow x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1692",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1693",
                  "text": "Castti — Latent Power + Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1698",
                  "text": "Partitio — HHT x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1699",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 3"
                }
              ]
            },
            {
              "id": "b1703",
              "title": "Menu",
              "kind": "menu",
              "when": "After reaching Canalbrine",
              "solo": false,
              "steps": [
                {
                  "id": "r1707",
                  "text": "Set Slot 4 to Castti. Set Slot 2 to Osvald",
                  "check": true,
                  "kind": "party",
                  "note": "Temenos Partitio"
                },
                {
                  "id": "r1708",
                  "text": "Set Slot 2 to Partitio. Set Slot 3 to Hikari",
                  "check": true,
                  "kind": "party",
                  "note": "Osvald Ochette"
                },
                {
                  "id": "r1709",
                  "text": "Set Slot 3 to Ochette. Set Slot 4 to Temenos",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1711",
                  "text": "Ochette — Inventor [v3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1713",
                  "text": "Castti — Equip Lasting Memory over Peak Performance (Slot 1)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            },
            {
              "id": "b1715",
              "title": "Overworld",
              "kind": "travel",
              "solo": false,
              "steps": [
                {
                  "id": "r1716",
                  "text": "Hire the Cleric in the church.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1717",
                  "text": "Warp to Conning Creek.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1718",
                  "text": "Save the game.",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1719",
                  "text": "Exit and load the same file under Extra Battles.",
                  "check": true,
                  "kind": "do"
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
          "id": "majestic-mysterious-travellers-1721",
          "title": "Majestic Mysterious Travellers",
          "mark": "3:05:45",
          "seconds": 11145,
          "blocks": [
            {
              "id": "b1721",
              "title": "Majestic Mysterious Travellers",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1723",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1724",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1725",
                  "text": "Castti — Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1726",
                  "text": "Ochette — Springy Boots → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1727",
                  "text": "Partitio — Latent Power + Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1729",
                  "text": "Castti — Dohter's Charity → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 End"
                },
                {
                  "id": "r1731",
                  "text": "Throne — Latent Power + Forbidden Elixir",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1732",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1733",
                  "text": "Partitio — Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1735",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "do",
                  "ctx": "Castti after Ochette"
                },
                {
                  "id": "r1736",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "do",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Castti after Ochette"
                },
                {
                  "id": "r1740",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "do",
                  "note": "Diffusing Serum",
                  "ctx": "Castti after Ochette"
                },
                {
                  "id": "r1741",
                  "text": "Ochette · Energising Pomegranate (L) · Castti",
                  "check": false,
                  "kind": "note",
                  "ctx": "Castti after Ochette"
                },
                {
                  "id": "r1743",
                  "text": "Castti — Concoct x3 (x4 if full BP)",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2/x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1747",
                  "text": "Throne — Latent Power",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1748",
                  "text": "Throne — 2 Decaying Dragon's Essence",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1750",
                  "text": "Throne — Latent Power + Reinforcing Jam",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1751",
                  "text": "Throne — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "note": "If Castti is not second, skip latent and use talisman with someone else",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1752",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1757",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 3 End"
                }
              ]
            }
          ]
        },
        {
          "id": "masterly-mysterious-travellers-1762",
          "title": "Masterly Mysterious Travellers",
          "blocks": [
            {
              "id": "b1762",
              "title": "Masterly Mysterious Travellers",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1764",
                  "text": "Throne — Latent Power + Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1765",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1766",
                  "text": "Castti — Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1767",
                  "text": "Ochette — Springy Boots → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1768",
                  "text": "Partitio — Latent Power + Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1770",
                  "text": "Castti — Dohter's Charity → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 End"
                },
                {
                  "id": "r1772",
                  "text": "Throne — Latent Power + Forbidden Elixir",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1773",
                  "text": "Throne — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1774",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1775",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1779",
                  "text": "Partitio — Aelfric's Blessing → Throne",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1781",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1785",
                  "text": "Throne — Latent Power",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1786",
                  "text": "Throne — 2 Decaying Dragon's Essence",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1788",
                  "text": "Throne — Reinforcing Jam",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1789",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1794",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x2",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 3 End"
                }
              ]
            },
            {
              "id": "b1799",
              "title": "Menu",
              "kind": "menu",
              "when": "Before True Vide",
              "solo": false,
              "steps": [
                {
                  "id": "r1803",
                  "text": "Set Slot 2 to Hikari. Set Slot 2 to Castti",
                  "check": true,
                  "kind": "party",
                  "note": "Castti"
                },
                {
                  "id": "r1805",
                  "text": "Throne — Cleric: All Cleric skills [^2]",
                  "check": true,
                  "kind": "menu",
                  "note": "Ochette",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1806",
                  "text": "Partitio — Merchant: 1 Merchant skill",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1807",
                  "text": "Partitio — Dancer Stimulate [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1808",
                  "text": "Agnea — Merchant [v1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                }
              ]
            }
          ]
        },
        {
          "id": "true-vide-phase-1-1810",
          "title": "True Vide (Phase 1)",
          "blocks": [
            {
              "id": "b1810",
              "title": "True Vide (Phase 1)",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1812",
                  "text": "Throne — Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1813",
                  "text": "Hikari — Divine Dual-Edge x2 (if after both Ochette and Partitio)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1814",
                  "text": "Hikari — Otherwise, Latent Power - Hienka → Any",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1815",
                  "text": "Partitio — Latent Power - HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1816",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1818",
                  "text": "Hikari — Divine Dual-Edge x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 End"
                },
                {
                  "id": "r1820",
                  "text": "Throne — Latent Power + Energising Pomegranate (L) → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1821",
                  "text": "Throne — Aelfric's Blessing → Partitio",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1822",
                  "text": "Hikari — Latent Power - Hienka → Different",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1823",
                  "text": "Partitio — Summon",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1824",
                  "text": "Ochette — Revitalising Jam → Hikari",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1826",
                  "text": "Partitio — Summon",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1827",
                  "text": "Hikari — Divine Dual-Edge x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1829",
                  "text": "Throne — Armour Corrosive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1830",
                  "text": "Hikari — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1831",
                  "text": "Partitio — Lion Dance → Hikari",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1832",
                  "text": "Ochette — Provoke Beasts x2",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1833",
                  "text": "Ochette — Vagrant Frogking I x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1835",
                  "text": "Partitio — Reinforcing Jam → Hikari",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3 End"
                },
                {
                  "id": "r1837",
                  "text": "Hikari — Latent Power - Hienka x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1839",
                  "text": "Hikari — Shinjumonjigiri x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4 End"
                }
              ]
            },
            {
              "id": "b1841",
              "title": "True Vide (Phase 2)",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1843",
                  "text": "Agnea — HHB x4",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1844",
                  "text": "Castti — Concoct x3",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Whimsical Leaf",
                    "Warding Leaf",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1849",
                  "text": "Temenos — Aelfric's Blessing → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1850",
                  "text": "Osvald — One True Magic",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1852",
                  "text": "Castti — Decaying Dragon's Essence → Bottom right [^]",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1 End"
                },
                {
                  "id": "r1854",
                  "text": "Agnea — Refreshing Jam (if needed, else Peacock Strut x2 Castti) → Osvald",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1855",
                  "text": "Temenos — Sacred Shield x3 → Osvald",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1856",
                  "text": "Osvald — Seal of Immortality",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1857",
                  "text": "Castti — Forbidden Elixir → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2"
                },
                {
                  "id": "r1859",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1860",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ],
                  "ctx": "Turn 2 End"
                },
                {
                  "id": "r1865",
                  "text": "Osvald — Almighty Olive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1867",
                  "text": "Castti — Forbidden Elixir → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 3 End"
                },
                {
                  "id": "r1869",
                  "text": "Agnea — Peacock Strut (if not done already) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1870",
                  "text": "Anyone — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1871",
                  "text": "Castti — Staff (if before both Agnea and Ancient Cursed Talisman)",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1872",
                  "text": "Castti — Otherwise, Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1875",
                  "text": "Anyone — Energising Pomegranate (L) (if after Castti) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1876",
                  "text": "Castti — Otherwise, Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1878",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 4 End"
                },
                {
                  "id": "r1882",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "fight",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 5"
                }
              ]
            },
            {
              "id": "b1886",
              "title": "Menu",
              "kind": "menu",
              "when": "Before True Vide, the Wicked",
              "solo": false,
              "steps": [
                {
                  "id": "r1890",
                  "text": "Set Slot 1 to Agnea. Set Slot 2 to Hikari",
                  "check": true,
                  "kind": "party",
                  "note": "Castti"
                },
                {
                  "id": "r1891",
                  "text": "Set Slot 3 to Temenos. Set Slot 3 to Partitio",
                  "check": true,
                  "kind": "party",
                  "note": "Partitio"
                },
                {
                  "id": "r1893",
                  "text": "Agnea — Inventor [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1894",
                  "text": "Throne — Merchant [^1]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1895",
                  "text": "Osvald — Dancer: Stimulate [^4]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1896",
                  "text": "Hikari — Arcanist [v3]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1897",
                  "text": "Temenos — Scholar [^2]",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Jobs"
                },
                {
                  "id": "r1899",
                  "text": "Partitio — Equip Hang Tough over Evil Ward (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                },
                {
                  "id": "r1900",
                  "text": "Hikari — Equip Boost-Start over A Step Ahead (Slot 2)",
                  "check": true,
                  "kind": "menu",
                  "ctx": "Support Skills"
                }
              ]
            }
          ]
        },
        {
          "id": "true-vide-the-wicked-1902",
          "title": "True Vide, the Wicked",
          "blocks": [
            {
              "id": "b1902",
              "title": "True Vide, the Wicked",
              "kind": "fight",
              "solo": false,
              "steps": [
                {
                  "id": "r1904",
                  "text": "Throne — Latent Power + Defend",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1905",
                  "text": "Throne — HHG x3",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1906",
                  "text": "Agnea — Peacock Strut x3 → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1907",
                  "text": "Anyone — Rotten Meat (whoever is first of Ochette and Temenos) → Hikari",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1908",
                  "text": "Anyone — Forbidden Elixir (whoever is second of Ochette and Temenos) → Castti",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 1"
                },
                {
                  "id": "r1911",
                  "text": "Hikari — Shinjumonjigiri x4 → Top",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1912",
                  "text": "Castti — Switch to Staff",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1913",
                  "text": "Castti — Latent Power + Concoct x3 → Bottom",
                  "check": true,
                  "kind": "do",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum"
                  ]
                },
                {
                  "id": "r1916",
                  "text": "Partitio — Defend",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1917",
                  "text": "Osvald after both Castti and Hikari",
                  "check": true,
                  "kind": "party",
                  "note": "Otherwise"
                },
                {
                  "id": "r1918",
                  "text": "Osvald — Decaying Dragon's Essence",
                  "check": true,
                  "kind": "party",
                  "note": "Lion Dance"
                },
                {
                  "id": "r1920",
                  "text": "Partitio — HHA x4",
                  "check": true,
                  "kind": "party",
                  "note": "Can use the decaying dragon's essence with osvald (if not done already) if partitio is already moving first on turn 4",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1921",
                  "text": "Osvald — Stimulate x3 → Partitio",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 3"
                },
                {
                  "id": "r1923",
                  "text": "Partitio — Latent Power + HHA x4",
                  "check": true,
                  "kind": "party",
                  "note": "Can use the decaying dragon's essence with osvald (if not done already) if partitio is already moving before the boss on turn 5",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1924",
                  "text": "Osvald — Stimulate x3 → Partitio",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1925",
                  "text": "Osvald has used Decaying Dragon's Essence (3 shields left)",
                  "check": true,
                  "kind": "party",
                  "note": "Osvald has not used Decaying Dragon's Essence (7 shields left)",
                  "ctx": "Turn 4"
                },
                {
                  "id": "r1927",
                  "text": "Partitio — Spear x3",
                  "check": true,
                  "kind": "party",
                  "note": "Branch: Partitio — HHA x3",
                  "ctx": "Turn 5"
                },
                {
                  "id": "r1928",
                  "text": "Osvald — Ancient Cursed Talisman",
                  "check": true,
                  "kind": "party",
                  "note": "Branch: Osvald — Defend",
                  "ctx": "Turn 5"
                },
                {
                  "id": "r1929",
                  "text": "Turn 5.5",
                  "check": false,
                  "kind": "note"
                },
                {
                  "id": "r1930",
                  "text": "Partitio · Ancient Cursed Talisman",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 5"
                },
                {
                  "id": "r1931",
                  "text": "Osvald · Decaying Dragon's Essence",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 5"
                },
                {
                  "id": "r1933",
                  "text": "Hikari — Latent Power - Hienka x2 (x3 if after Osvald)",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 6"
                },
                {
                  "id": "r1934",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 6"
                },
                {
                  "id": "r1937",
                  "text": "Partitio — Revitalising Jam → Hikari",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 6"
                },
                {
                  "id": "r1938",
                  "text": "Osvald — Refreshing Jam → Throne",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 6"
                },
                {
                  "id": "r1940",
                  "text": "Hikari — Shinjumonjigiri x4",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 6 End"
                },
                {
                  "id": "r1943",
                  "text": "Throne — Latent Power + Spear x4 → Bottom",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1944",
                  "text": "Throne — Energising Pomegranate (L) → Castti",
                  "check": true,
                  "kind": "do"
                },
                {
                  "id": "r1945",
                  "text": "Agnea — Latent Power + Springy Boots x2",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1946",
                  "text": "Temenos — Staff x4 → Bottom",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1947",
                  "text": "Ochette — Latent Power - Beastly Howl",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1950",
                  "text": "Dancer — Stimulate x2 (if Castti is last) → Castti",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1951",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x3",
                    "Strengthening Serum",
                    "Diffusing Serum"
                  ]
                },
                {
                  "id": "r1955",
                  "text": "Anyone — Energising Pomegranate (L) → Throne",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1956",
                  "text": "Anyone — Decaying Dragon's Essence (after Castti)",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1958",
                  "text": "Partitio is able to use Latent Power + Spear x4 instead of the Dragon Essence.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                },
                {
                  "id": "r1960",
                  "text": "Throne — Latent Power + Spear x4",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1961",
                  "text": "Throne — Reinforcing Jam → Self",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1962",
                  "text": "Ochette — Provoke Beasts x4",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1963",
                  "text": "Ochette — Vagrant Frogking I x6",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1964",
                  "text": "Temenos — Revive",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1965",
                  "text": "Agnea — Energising Pomegranate (L) → Castti",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 9"
                },
                {
                  "id": "r1968",
                  "text": "Dancer — Stimulate (may need to x2 depending on turn order) → Castti / Hikari",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1969",
                  "text": "2nd Person — Switch to Ochette, Beastly Howl x3 (if needed)",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1970",
                  "text": "Hikari — Shinjumonjigiri x2 (if needed)",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1971",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ]
                },
                {
                  "id": "r1974",
                  "text": "Last Person — Switch Party",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1975",
                  "text": "Agnea — Latent Power + Peacock Strut x2",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1977",
                  "text": "Need Concoct with either Beastly Howl debuff or Shinjumonjigiri (Castti also cannot act last).",
                  "check": false,
                  "kind": "note",
                  "note": "you're always able to guarantee one of these options via stimulate",
                  "ctx": "Notes"
                },
                {
                  "id": "r1978",
                  "text": "Ochette has used Beastly Howl (0 BP)",
                  "check": false,
                  "kind": "note",
                  "note": "Ochette has not used Beastly Howl (3 BP)",
                  "ctx": "Notes"
                },
                {
                  "id": "r1980",
                  "text": "Throne — Latent Power + Sword x4",
                  "check": false,
                  "kind": "note",
                  "ctx": "Turn 11"
                },
                {
                  "id": "r1981",
                  "text": "Throne — Almighty Olive",
                  "check": true,
                  "kind": "fight",
                  "ctx": "Turn 11"
                },
                {
                  "id": "r1982",
                  "text": "Ochette — Energising Pomegranate (M) → Self",
                  "check": false,
                  "kind": "note",
                  "note": "Branch: Ochette — Provoke Beasts x4",
                  "ctx": "Turn 11"
                },
                {
                  "id": "r1983",
                  "text": "Temenos — Latent Power + Elemental Barrage x4",
                  "check": false,
                  "kind": "note",
                  "note": "Akala x6",
                  "ctx": "Turn 11"
                },
                {
                  "id": "r1985",
                  "text": "Throne — Latent Power + Sword x3",
                  "check": false,
                  "kind": "note",
                  "note": "Turn 12",
                  "ctx": "Turn 12"
                },
                {
                  "id": "r1986",
                  "text": "Throne — Reinforcing Jam → Temenos",
                  "check": true,
                  "kind": "fight",
                  "note": "Throne",
                  "ctx": "Turn 12"
                },
                {
                  "id": "r1987",
                  "text": "Ochette — Provoke Beasts x4",
                  "check": false,
                  "kind": "note",
                  "note": "Reinforcing Jam",
                  "ctx": "Turn 12"
                },
                {
                  "id": "r1988",
                  "text": "Ochette — Akala x6",
                  "check": true,
                  "kind": "fight",
                  "note": "Ochette",
                  "ctx": "Turn 12"
                },
                {
                  "id": "r1989",
                  "text": "Temenos — Latent Power + Elemental Barrage x4",
                  "check": false,
                  "kind": "note",
                  "note": "Branch: Temenos — Latent Power + Elemental Barrage x3 (x4 if Akala glitched)",
                  "ctx": "Turn 12"
                },
                {
                  "id": "r1991",
                  "text": "If you still have a Dragon Essence, use it with Throne instead of the jam (Temenos does Staff x3)",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                },
                {
                  "id": "r1992",
                  "text": "If the boss has 9 shields or fewer on Temenos' turn, can use Staff x4 instead of barrage.",
                  "check": false,
                  "kind": "note",
                  "ctx": "Notes"
                },
                {
                  "id": "r1995",
                  "text": "Partitio — Latent Power + Stimulate x4 → Hikari",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1996",
                  "text": "Hikari — Aggressive Slash x3",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1997",
                  "text": "Osvald — Forbidden Elixir → Castti",
                  "check": true,
                  "kind": "party"
                },
                {
                  "id": "r1998",
                  "text": "Castti — Latent Power + Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ]
                },
                {
                  "id": "r2002",
                  "text": "Osvald — Energising Pomegranate (any size) → Castti",
                  "check": true,
                  "kind": "party",
                  "ctx": "Turn 14"
                },
                {
                  "id": "r2003",
                  "text": "Castti — Concoct x4",
                  "check": true,
                  "kind": "party",
                  "lines": [
                    "Blusterbloom x4",
                    "Strengthening Serum"
                  ],
                  "ctx": "Turn 14"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
