/** Generated from scripts/overlays/merged-fights.json. Do not hand-edit. */
export const weakOrder = ["Sword", "Spear", "Dagger", "Axe", "Bow", "Staff", "Fire", "Ice", "Lightning", "Wind", "Light", "Dark"] as const;
export type WeakName = (typeof weakOrder)[number];
export type WeakConfidence = "verified" | "single-source" | "unverified";
export type FightEnemy = {
  name: string;
  confidence: WeakConfidence;
  weak?: WeakName[];
  shield?: string;
  recheck?: boolean;
};
export type FightNote = {
  enemies: FightEnemy[];
  ignoresWeakness?: boolean;
};
export const fightNotes: Record<string, FightNote> = {
  "throne-ch-1-1-df6557": {
    "enemies": [
      {
        "name": "Pursuer #1/#2",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Dark"
        ],
        "shield": "1"
      },
      {
        "name": "Pursuer Leader",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-f77d8e": {
    "enemies": [
      {
        "name": "Pursuer #1/#2",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Dark"
        ],
        "shield": "1"
      },
      {
        "name": "Pursuer Leader",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-3c172c": {
    "enemies": [
      {
        "name": "Pursuer #1/#2",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Dark"
        ],
        "shield": "1"
      },
      {
        "name": "Pursuer Leader",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-987a9f": {
    "enemies": [
      {
        "name": "Pursuer #1/#2",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Dark"
        ],
        "shield": "1"
      },
      {
        "name": "Pursuer Leader",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-84df79": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-3fcd03": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-14d1fd": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-8eebe3": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-92eaeb": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-47005d": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-460fb6": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-acb87f": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-90e8dd": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-7e2f52": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-0ccf3c": {
    "enemies": [
      {
        "name": "Pirro",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "throne-ch-1-1-57ffa0": {
    "enemies": [
      {
        "name": "Phantom Snake (Man) — identity of route \"Man\" inferred",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-1-1-db0eeb": {
    "enemies": [
      {
        "name": "Phantom Snake (Man) — identity of route \"Man\" inferred",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-1-1-79e189": {
    "enemies": [
      {
        "name": "Phantom Snake (Man) — identity of route \"Man\" inferred",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-1-1-e70eb9": {
    "enemies": [
      {
        "name": "Phantom Snake (Man) — identity of route \"Man\" inferred",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Light",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-1-1-e35f5f": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-aa8862": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-9ed6aa": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-2fdf48": {
    "enemies": [
      {
        "name": "Ruffian Soldiers",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-28e4f5": {
    "enemies": [
      {
        "name": "Ruffian Soldiers",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-e70239": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-2-e70239": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-1-0c70df": {
    "enemies": [
      {
        "name": "Brigand (forced, bag quest)",
        "confidence": "unverified"
      }
    ]
  },
  "partitio-ch-2-1-2283e2": {
    "enemies": [
      {
        "name": "Armor Eater",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Staff"
        ],
        "shield": "4"
      }
    ]
  },
  "partitio-ch-2-2-2283e2": {
    "enemies": [
      {
        "name": "Armor Eater",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Staff"
        ],
        "shield": "4"
      }
    ]
  },
  "partitio-ch-2-1-1d25ed": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "partitio-ch-2-1-333eee": {
    "enemies": [
      {
        "name": "A Stubborn Worker / guards (forced)",
        "confidence": "unverified"
      }
    ]
  },
  "partitio-ch-2-1-20657b": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "partitio-ch-2-1-d6adbe": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-d31835": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-684b4c": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-de3f54": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-047bfe": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-40a7e1": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-734f9a": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-fe6045": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "partitio-ch-2-1-8bbdbd": {
    "enemies": [
      {
        "name": "Garnet",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "hikari-ch-2-1-b939d4": {
    "enemies": [
      {
        "name": "Gladiator",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-506c3a": {
    "enemies": [
      {
        "name": "Gladiator",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-b35c33": {
    "enemies": [
      {
        "name": "Gladiators",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-461d0f": {
    "enemies": [
      {
        "name": "Zeto the Butcher",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-e6bf56": {
    "enemies": [
      {
        "name": "Zeto the Butcher",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-427c1f": {
    "enemies": [
      {
        "name": "Zeto the Butcher",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-0d325a": {
    "enemies": [
      {
        "name": "Bandelam (challenge phase, Hikari solo)",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-a58594": {
    "enemies": [
      {
        "name": "Bandelam (challenge phase, Hikari solo)",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-0a69a4": {
    "enemies": [
      {
        "name": "Bandelam (challenge phase, Hikari solo)",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-2-1-d31835": {
    "enemies": [
      {
        "name": "Bandelam the Reaper",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-2-1-005e5f": {
    "enemies": [
      {
        "name": "Bandelam the Reaper",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-2-1-734f9a": {
    "enemies": [
      {
        "name": "Bandelam the Reaper",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-2-1-cb44c6": {
    "enemies": [
      {
        "name": "Bandelam the Reaper",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-2-1-95b746": {
    "enemies": [
      {
        "name": "Bandelam the Reaper",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-2-1-625d41": {
    "enemies": [
      {
        "name": "Yurinas",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "6-8"
      }
    ]
  },
  "hikari-ch-2-1-7791d7": {
    "enemies": [
      {
        "name": "Yurinas",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "6-8"
      }
    ]
  },
  "hikari-ch-2-1-b5b153": {
    "enemies": [
      {
        "name": "Yurinas",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "6-8"
      }
    ]
  },
  "hikari-ch-2-1-09d6da": {
    "enemies": [
      {
        "name": "Yurinas",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "6-8"
      }
    ]
  },
  "hikari-ch-2-1-640754": {
    "enemies": [
      {
        "name": "Yurinas",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "6-8"
      }
    ]
  },
  "hikari-ch-2-1-05fde0": {
    "enemies": [
      {
        "name": "Insurgent",
        "confidence": "unverified"
      }
    ]
  },
  "recruit-temenos-1-925b73": {
    "enemies": [
      {
        "name": "Lady Clarissa",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "recruit-temenos-1-d51a23": {
    "enemies": [
      {
        "name": "Lady Clarissa",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "osvald-ch-3-1-a91bcd": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-cb44c6": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-876b4e": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-d85c79": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-8c99a5": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-01fcfb": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-a6c898": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-b7b530": {
    "enemies": [
      {
        "name": "Guards",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-3-1-79f386": {
    "enemies": [
      {
        "name": "Captain Stenvar",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "osvald-ch-3-1-4c0b71": {
    "enemies": [
      {
        "name": "Captain Stenvar",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "osvald-ch-3-1-0d0310": {
    "enemies": [
      {
        "name": "Captain Stenvar",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "osvald-ch-3-1-bbc69f": {
    "enemies": [
      {
        "name": "Captain Stenvar",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "5"
      }
    ],
    "ignoresWeakness": true
  },
  "osvald-ch-4-1-9448f9": {
    "enemies": [
      {
        "name": "Harvey's Creatures",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-4-1-480890": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-2fddbd": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-dce425": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-27f40f": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-89e965": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-df4ae0": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ],
    "ignoresWeakness": true
  },
  "osvald-ch-4-1-0355d7": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-d018b8": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-a4daf9": {
    "enemies": [
      {
        "name": "Grieving Golem",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Wind",
          "Light"
        ],
        "shield": "7",
        "recheck": true
      }
    ]
  },
  "osvald-ch-4-1-a91bcd": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-10131c": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-ab0547": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-cbebe9": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-573056": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-f9e6ad": {
    "enemies": [
      {
        "name": "Woodland Birdian IV",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind"
        ],
        "shield": "2"
      }
    ]
  },
  "osvald-ch-4-1-78ced9": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-4-1-8b8ac4": {
    "enemies": [
      {
        "name": "Bergomi",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire"
        ],
        "shield": "4"
      }
    ]
  },
  "osvald-ch-4-1-5255f7": {
    "enemies": [
      {
        "name": "Bergomi",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire"
        ],
        "shield": "4"
      }
    ]
  },
  "osvald-ch-4-1-e582f7": {
    "enemies": [
      {
        "name": "Bergomi",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire"
        ],
        "shield": "4"
      }
    ],
    "ignoresWeakness": true
  },
  "castti-ch-2-sai-route-1-655e3d": {
    "enemies": [
      {
        "name": "Sandlion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "castti-ch-2-sai-route-1-1e4df1": {
    "enemies": [
      {
        "name": "Sandlion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "castti-ch-2-sai-route-1-177f53": {
    "enemies": [
      {
        "name": "Sandlion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Light",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "partitio-ch-3-1-84ddac": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ]
  },
  "partitio-ch-3-1-8d6297": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ]
  },
  "partitio-ch-3-1-a5bee4": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ]
  },
  "partitio-ch-3-1-e582f7": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ],
    "ignoresWeakness": true
  },
  "partitio-ch-3-1-33f63f": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ]
  },
  "partitio-ch-3-1-21cca9": {
    "enemies": [
      {
        "name": "Thurston",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Ice",
          "Wind"
        ],
        "shield": "4",
        "recheck": true
      }
    ]
  },
  "hikari-ch-3-1-f7de09": {
    "enemies": [
      {
        "name": "Ku Soldier",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Light"
        ],
        "shield": "3"
      }
    ]
  },
  "hikari-ch-3-1-0990c5": {
    "enemies": [
      {
        "name": "Ku Soldier",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Light"
        ],
        "shield": "3"
      }
    ]
  },
  "hikari-ch-3-1-b5b153": {
    "enemies": [
      {
        "name": "General Rou",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Bow",
          "Lightning"
        ],
        "shield": "4"
      }
    ]
  },
  "hikari-ch-3-1-35af3c": {
    "enemies": [
      {
        "name": "General Rou",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Bow",
          "Lightning"
        ],
        "shield": "4"
      }
    ],
    "ignoresWeakness": true
  },
  "hikari-ch-3-1-324180": {
    "enemies": [
      {
        "name": "General Rou",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Bow",
          "Lightning"
        ],
        "shield": "4"
      }
    ]
  },
  "castti-ch-2-sai-route-1-93d74f": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ]
  },
  "foreign-assassins-1-b8556e": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ]
  },
  "foreign-assassins-1-de3f54": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ]
  },
  "foreign-assassins-1-f672a6": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ]
  },
  "foreign-assassins-1-c74d9c": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ],
    "ignoresWeakness": true
  },
  "foreign-assassins-1-67722a": {
    "enemies": [
      {
        "name": "Foreign Assassin I",
        "confidence": "verified",
        "weak": [
          "Bow",
          "Fire",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin II",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow"
        ]
      },
      {
        "name": "Foreign Assassin III",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Light"
        ]
      },
      {
        "name": "Foreign Assassin IV",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Ice",
          "Wind"
        ]
      }
    ]
  },
  "hikari-ch-4-1-9974b8": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-add45d": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-de3f54": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-a0d4ee": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-8a70a1": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-f79474": {
    "enemies": [
      {
        "name": "Gigantes",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Bow",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "9"
      }
    ]
  },
  "hikari-ch-4-1-3b6c9f": {
    "enemies": [
      {
        "name": "Kunzo",
        "confidence": "single-source",
        "weak": [
          "Dagger",
          "Axe",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "hikari-ch-4-1-76173e": {
    "enemies": [
      {
        "name": "Kunzo",
        "confidence": "single-source",
        "weak": [
          "Dagger",
          "Axe",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "hikari-ch-4-1-53f239": {
    "enemies": [
      {
        "name": "Kunzo",
        "confidence": "single-source",
        "weak": [
          "Dagger",
          "Axe",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "hikari-ch-4-1-34de72": {
    "enemies": [
      {
        "name": "Kunzo",
        "confidence": "single-source",
        "weak": [
          "Dagger",
          "Axe",
          "Lightning"
        ],
        "shield": "5"
      }
    ]
  },
  "hikari-ch-4-1-30cf28": {
    "enemies": [
      {
        "name": "Jin Mei",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-4-1-bb4fc4": {
    "enemies": [
      {
        "name": "Jin Mei",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-4-1-b59915": {
    "enemies": [
      {
        "name": "Jin Mei",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-4-1-bb6c10": {
    "enemies": [
      {
        "name": "Jin Mei",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-4-1-c62409": {
    "enemies": [
      {
        "name": "Jin Mei",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-4-1-8001eb": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ]
  },
  "hikari-ch-4-1-1b4577": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ],
    "ignoresWeakness": true
  },
  "hikari-ch-4-1-44abb9": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ]
  },
  "hikari-ch-4-1-27f40f": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ]
  },
  "hikari-ch-4-1-7b2502": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ],
    "ignoresWeakness": true
  },
  "hikari-ch-4-1-23056b": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ]
  },
  "hikari-ch-4-1-b2c082": {
    "enemies": [
      {
        "name": "Rai Mei",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "7-9",
        "recheck": true
      }
    ]
  },
  "hikari-ch-5-1-2bb7f3": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-8d6297": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-de3f54": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-a0d4ee": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-cfe886": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-a0359c": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-f79474": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-eddb33": {
    "enemies": [
      {
        "name": "Ritsu",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-eb49dd": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-2-de3f54": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-1-7b0e9d": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-1-b975db": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-2-f79474": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-2-eddb33": {
    "enemies": [
      {
        "name": "Mugen (King Mugen)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "hikari-ch-5-1-8ec5fe": {
    "enemies": [
      {
        "name": "\"Hikari\"",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-327e3b": {
    "enemies": [
      {
        "name": "\"Hikari\"",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-e30026": {
    "enemies": [
      {
        "name": "\"Hikari\"",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-d99259": {
    "enemies": [
      {
        "name": "\"Hikari\"",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-7c1a39": {
    "enemies": [
      {
        "name": "\"Hikari\"",
        "confidence": "unverified"
      }
    ]
  },
  "hikari-ch-5-1-ee054c": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-3-de3f54": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-1-832da9": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-1-a4daf9": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-1-d31835": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-3-f79474": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-1-e7ac11": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "hikari-ch-5-2-b975db": {
    "enemies": [
      {
        "name": "Enshrouded King",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Bow",
          "Staff",
          "Lightning",
          "Wind"
        ],
        "shield": "10"
      }
    ]
  },
  "castti-ch-2-winterbloom-route-1-a92679": {
    "enemies": [
      {
        "name": "Plukk",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "castti-ch-2-winterbloom-route-1-5e716d": {
    "enemies": [
      {
        "name": "Plukk",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "castti-ch-4-1-c79d17": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-8de399": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-dd4ac4": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-ea2633": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-4b9af3": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-25d233": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-fec412": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "castti-ch-4-1-0a311c": {
    "enemies": [
      {
        "name": "Trousseau",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Dark"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-1-3b79ec": {
    "enemies": [
      {
        "name": "Battle-Worn Shark",
        "confidence": "unverified"
      }
    ]
  },
  "agnea-ch-2-1-d31835": {
    "enemies": [
      {
        "name": "Battle-Worn Shark",
        "confidence": "unverified"
      }
    ]
  },
  "agnea-ch-2-1-de3f54": {
    "enemies": [
      {
        "name": "Battle-Worn Shark",
        "confidence": "unverified"
      }
    ]
  },
  "agnea-ch-2-1-fec412": {
    "enemies": [
      {
        "name": "Battle-Worn Shark",
        "confidence": "unverified"
      }
    ]
  },
  "agnea-ch-2-1-8f3c27": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-8de399": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-8d6297": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-0dfafc": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-f6a5d4": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-8fa5c4": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-2-fec412": {
    "enemies": [
      {
        "name": "Tyrannodrake",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Spear",
          "Dagger",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "10"
      }
    ]
  },
  "agnea-ch-2-1-2041b2": {
    "enemies": [
      {
        "name": "Scourge of the Sea",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "12",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-2-d31835": {
    "enemies": [
      {
        "name": "Scourge of the Sea",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "12",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-2-de3f54": {
    "enemies": [
      {
        "name": "Scourge of the Sea",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "12",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-2-f6a5d4": {
    "enemies": [
      {
        "name": "Scourge of the Sea",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "12",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-3-fec412": {
    "enemies": [
      {
        "name": "Scourge of the Sea",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Fire",
          "Light"
        ],
        "shield": "12",
        "recheck": true
      }
    ]
  },
  "agnea-ch-2-1-1dfd88": {
    "enemies": [
      {
        "name": "La'mani",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "agnea-ch-2-1-2971e0": {
    "enemies": [
      {
        "name": "La'mani",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "throne-ch-3-father-s-route-1-e04c85": {
    "enemies": [
      {
        "name": "Father",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Wind",
          "Light"
        ],
        "shield": "8"
      }
    ]
  },
  "throne-ch-3-father-s-route-1-e434e0": {
    "enemies": [
      {
        "name": "Father",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Wind",
          "Light"
        ],
        "shield": "8"
      }
    ]
  },
  "throne-ch-3-father-s-route-1-d31835": {
    "enemies": [
      {
        "name": "Father",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Wind",
          "Light"
        ],
        "shield": "8"
      }
    ]
  },
  "throne-ch-3-father-s-route-1-de3f54": {
    "enemies": [
      {
        "name": "Father",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Wind",
          "Light"
        ],
        "shield": "8"
      }
    ]
  },
  "throne-ch-3-father-s-route-1-fec412": {
    "enemies": [
      {
        "name": "Father",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Wind",
          "Light"
        ],
        "shield": "8"
      }
    ]
  },
  "agnea-ch-4-1-13e654": {
    "enemies": [
      {
        "name": "Veronica",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "agnea-ch-4-1-d31835": {
    "enemies": [
      {
        "name": "Veronica",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "agnea-ch-4-1-de3f54": {
    "enemies": [
      {
        "name": "Veronica",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "agnea-ch-4-1-fec412": {
    "enemies": [
      {
        "name": "Veronica",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Fire",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "partitio-ch-4-1-dc278c": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "partitio-ch-4-1-7f54f6": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "partitio-ch-4-1-108a46": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "partitio-ch-4-1-de3f54": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "partitio-ch-4-1-1a6f51": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "partitio-ch-4-1-43fc5b": {
    "enemies": [
      {
        "name": "Steam Tank Obsidian",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Dark"
        ],
        "shield": "40"
      }
    ]
  },
  "ochette-ch-2-cateracta-s-route-1-08a97c": {
    "enemies": [
      {
        "name": "Alpione",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Dagger",
          "Wind",
          "Light",
          "Dark"
        ],
        "shield": "2"
      }
    ]
  },
  "ochette-ch-2-cateracta-s-route-1-cea8bc": {
    "enemies": [
      {
        "name": "Buttermeep",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Bow",
          "Ice",
          "Lightning"
        ],
        "shield": "2"
      }
    ]
  },
  "ochette-ch-2-cateracta-s-route-1-0ee040": {
    "enemies": [
      {
        "name": "Buttermeep",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Bow",
          "Ice",
          "Lightning"
        ],
        "shield": "2"
      }
    ]
  },
  "ochette-ch-2-cateracta-s-route-1-f9e6ad": {
    "enemies": [
      {
        "name": "Buttermeep",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Bow",
          "Ice",
          "Lightning"
        ],
        "shield": "2"
      }
    ]
  },
  "ochette-ch-2-tera-s-route-1-97c621": {
    "enemies": [
      {
        "name": "Elderly Woman",
        "confidence": "unverified"
      }
    ]
  },
  "ochette-ch-2-tera-s-route-1-8fa4b7": {
    "enemies": [
      {
        "name": "Tera",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "ochette-ch-2-tera-s-route-1-d31835": {
    "enemies": [
      {
        "name": "Tera",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "ochette-ch-2-tera-s-route-1-bceb68": {
    "enemies": [
      {
        "name": "Tera",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "ochette-ch-2-tera-s-route-1-78d939": {
    "enemies": [
      {
        "name": "Tera",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Ice",
          "Dark"
        ],
        "shield": "6"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-b89570": {
    "enemies": [
      {
        "name": "Sanctum Knight",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Fire",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-327e3b": {
    "enemies": [
      {
        "name": "Sanctum Knight",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Fire",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-2232c1": {
    "enemies": [
      {
        "name": "Sanctum Knight",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Axe",
          "Fire",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-3639da": {
    "enemies": [
      {
        "name": "Glacis",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-d31835": {
    "enemies": [
      {
        "name": "Glacis",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-bceb68": {
    "enemies": [
      {
        "name": "Glacis",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "ochette-ch-2-glacis-s-route-1-78d939": {
    "enemies": [
      {
        "name": "Glacis",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      }
    ]
  },
  "ochette-ch-3-1-c63de8": {
    "enemies": [
      {
        "name": "Shadowy Monsters",
        "confidence": "unverified"
      }
    ]
  },
  "ochette-ch-3-1-5e716d": {
    "enemies": [
      {
        "name": "Shadowy Monsters",
        "confidence": "unverified"
      }
    ]
  },
  "ochette-ch-3-1-301023": {
    "enemies": [
      {
        "name": "unclear (random encounter)",
        "confidence": "unverified"
      }
    ]
  },
  "the-apothecary-hunter-part-2-1-9f4c40": {
    "enemies": [
      {
        "name": "The Apothecary & Hunter, Part 2",
        "confidence": "unverified"
      }
    ]
  },
  "the-apothecary-hunter-part-2-1-e64400": {
    "enemies": [
      {
        "name": "The Apothecary & Hunter, Part 2",
        "confidence": "unverified"
      }
    ]
  },
  "the-apothecary-hunter-part-2-1-d31835": {
    "enemies": [
      {
        "name": "Creeping Shadow",
        "confidence": "unverified"
      }
    ]
  },
  "the-apothecary-hunter-part-2-1-de3f54": {
    "enemies": [
      {
        "name": "Creeping Shadow",
        "confidence": "unverified"
      }
    ]
  },
  "the-apothecary-hunter-part-2-1-fec412": {
    "enemies": [
      {
        "name": "Creeping Shadow",
        "confidence": "unverified"
      }
    ]
  },
  "galdera-1-95ea15": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-8a2047": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-da2c91": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-7488e9": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-0ab8c9": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-d1cac8": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-d38ea1": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-b65c41": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-30e750": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-b04892": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-b73092": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-91a7f5": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-cb14be": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-2-91a7f5": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-d7a05f": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-3-91a7f5": {
    "enemies": [
      {
        "name": "Omniscient Eye",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "8",
        "recheck": true
      }
    ]
  },
  "galdera-1-107476": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-48b742": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-e2e548": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-27f40f": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-476306": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-2-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-568595": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-3-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-eb43c3": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-61fbfe": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-73f0dd": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-dc7e4b": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-05fde0": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-8de399": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-305c9a": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-09853b": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-da936c": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-61b1b2": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-1b8814": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-2-61fbfe": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-4-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-2-568595": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-5-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-1-131109": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "galdera-6-688285": {
    "enemies": [
      {
        "name": "Galdera, the Fallen (body)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Ice"
        ],
        "recheck": true
      },
      {
        "name": "Sundering Arm (Galdera part)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Light"
        ],
        "shield": "9",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-1-9d180a": {
    "enemies": [
      {
        "name": "Agnea Ch. 5",
        "confidence": "unverified"
      }
    ]
  },
  "agnea-ch-5-1-e653d6": {
    "enemies": [
      {
        "name": "Dolcinaea",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-1-de3f54": {
    "enemies": [
      {
        "name": "Dolcinaea",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-1-fec412": {
    "enemies": [
      {
        "name": "Dolcinaea",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Bow",
          "Lightning",
          "Dark"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-1-d31835": {
    "enemies": [
      {
        "name": "Dolcinaea the Star (phase 2)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Wind"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-2-de3f54": {
    "enemies": [
      {
        "name": "Dolcinaea the Star (phase 2)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Wind"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "agnea-ch-5-2-fec412": {
    "enemies": [
      {
        "name": "Dolcinaea the Star (phase 2)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe",
          "Fire",
          "Wind"
        ],
        "shield": "6",
        "recheck": true
      }
    ]
  },
  "throne-ch-3-mother-s-route-1-676baa": {
    "enemies": [
      {
        "name": "Mother",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-3-mother-s-route-1-683b59": {
    "enemies": [
      {
        "name": "Mother",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-3-mother-s-route-1-de3f54": {
    "enemies": [
      {
        "name": "Mother",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-3-mother-s-route-1-90bf7a": {
    "enemies": [
      {
        "name": "Mother",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "throne-ch-4-1-89d69d": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "throne-ch-4-1-8de399": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "throne-ch-4-1-dd4ac4": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "throne-ch-4-1-de3f54": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "throne-ch-4-1-160340": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "throne-ch-4-1-fec412": {
    "enemies": [
      {
        "name": "Claude",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Axe",
          "Staff",
          "Lightning",
          "Dark"
        ],
        "shield": "9"
      }
    ]
  },
  "the-dancer-warrior-part-2-1-a7f33b": {
    "enemies": [
      {
        "name": "Yomi",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-f405b2": {
    "enemies": [
      {
        "name": "Senseless villagers (mug fights; enemy names unread)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-fbbe36": {
    "enemies": [
      {
        "name": "Senseless villagers (mug fights; enemy names unread)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-47ae28": {
    "enemies": [
      {
        "name": "Senseless villagers (mug fights; enemy names unread)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-c46741": {
    "enemies": [
      {
        "name": "Senseless villagers (mug fights; enemy names unread)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-85c903": {
    "enemies": [
      {
        "name": "Senseless villagers (mug fights; enemy names unread)",
        "confidence": "unverified"
      }
    ]
  },
  "osvald-ch-5-1-2111bb": {
    "enemies": [
      {
        "name": "Small Golem",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Fire",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "osvald-ch-5-1-5e716d": {
    "enemies": [
      {
        "name": "Small Golem",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Fire",
          "Ice",
          "Light"
        ],
        "shield": "6"
      }
    ]
  },
  "osvald-ch-5-1-8de399": {
    "enemies": [
      {
        "name": "Professor Harvey",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "osvald-ch-5-1-dd4ac4": {
    "enemies": [
      {
        "name": "Professor Harvey",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "osvald-ch-5-1-de3f54": {
    "enemies": [
      {
        "name": "Professor Harvey",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "osvald-ch-5-1-fec412": {
    "enemies": [
      {
        "name": "Professor Harvey",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Fire",
          "Ice",
          "Lightning"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "the-scholar-merchant-part-2-1-01f594": {
    "enemies": [
      {
        "name": "Thugs",
        "confidence": "unverified"
      }
    ]
  },
  "the-scholar-merchant-part-2-1-3e2c0a": {
    "enemies": [
      {
        "name": "Thugs",
        "confidence": "unverified"
      }
    ]
  },
  "the-scholar-merchant-part-2-1-ed7567": {
    "enemies": [
      {
        "name": "Moneylender",
        "confidence": "unverified"
      }
    ]
  },
  "temenos-ch-2-1-2d2606": {
    "enemies": [
      {
        "name": "???",
        "confidence": "unverified"
      }
    ]
  },
  "temenos-ch-2-1-98d5bb": {
    "enemies": [
      {
        "name": "???",
        "confidence": "unverified"
      }
    ]
  },
  "temenos-ch-2-1-f7f564": {
    "enemies": [
      {
        "name": "Vados the Architect",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "temenos-ch-2-1-5e716d": {
    "enemies": [
      {
        "name": "Vados the Architect",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "temenos-ch-3-stormhail-route-1-cd5a79": {
    "enemies": [
      {
        "name": "Deputy Cubaryi",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Staff"
        ],
        "shield": "5",
        "recheck": true
      }
    ]
  },
  "temenos-ch-3-stormhail-route-1-a7f33b": {
    "enemies": [
      {
        "name": "Deputy Cubaryi",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Staff"
        ],
        "shield": "5",
        "recheck": true
      }
    ]
  },
  "temenos-ch-4-1-f0a251": {
    "enemies": [
      {
        "name": "Kaldena (Captain Kaldena / Cardinal Kaldena)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "temenos-ch-4-1-de3f54": {
    "enemies": [
      {
        "name": "Kaldena (Captain Kaldena / Cardinal Kaldena)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "temenos-ch-4-1-dd4ac4": {
    "enemies": [
      {
        "name": "Kaldena (Captain Kaldena / Cardinal Kaldena)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "temenos-ch-4-1-fec412": {
    "enemies": [
      {
        "name": "Kaldena (Captain Kaldena / Cardinal Kaldena)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Staff",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "the-cleric-thief-part-1-1-b5b153": {
    "enemies": [
      {
        "name": "The Cleric & Thief, Part 1",
        "confidence": "unverified"
      }
    ]
  },
  "the-cleric-thief-part-1-1-98d5bb": {
    "enemies": [
      {
        "name": "The Cleric & Thief, Part 1",
        "confidence": "unverified"
      }
    ]
  },
  "the-cleric-thief-part-2-1-72039b": {
    "enemies": [
      {
        "name": "Vagrant Frogking I",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "the-cleric-thief-part-2-1-31f640": {
    "enemies": [
      {
        "name": "Vagrant Frogking I",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "the-cleric-thief-part-2-1-0ee040": {
    "enemies": [
      {
        "name": "Vagrant Frogking I",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "the-cleric-thief-part-2-1-b7b530": {
    "enemies": [
      {
        "name": "Vagrant Frogking I",
        "confidence": "single-source",
        "weak": [
          "Sword",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "journey-for-the-dawn-1-5e716d": {
    "enemies": [
      {
        "name": "Journey for the Dawn",
        "confidence": "unverified"
      }
    ]
  },
  "journey-for-the-dawn-1-785e1f": {
    "enemies": [
      {
        "name": "Arcanette",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "journey-for-the-dawn-1-de3f54": {
    "enemies": [
      {
        "name": "Arcanette",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "journey-for-the-dawn-1-d5a6f3": {
    "enemies": [
      {
        "name": "Arcanette",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "journey-for-the-dawn-1-2db696": {
    "enemies": [
      {
        "name": "Arcanette",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "journey-for-the-dawn-1-a7f33b": {
    "enemies": [
      {
        "name": "Arcanette",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Ice",
          "Lightning"
        ],
        "shield": "8"
      }
    ]
  },
  "journey-for-the-dawn-1-92767c": {
    "enemies": [
      {
        "name": "Grotesque Monster",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "journey-for-the-dawn-1-b8cbd2": {
    "enemies": [
      {
        "name": "Grotesque Monster",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "journey-for-the-dawn-1-d6019e": {
    "enemies": [
      {
        "name": "Grotesque Monster",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "journey-for-the-dawn-1-2e635b": {
    "enemies": [
      {
        "name": "Grotesque Monster",
        "confidence": "single-source",
        "weak": [
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "7"
      }
    ]
  },
  "journey-for-the-dawn-1-764b34": {
    "enemies": [
      {
        "name": "Vide (stage 1 body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "journey-for-the-dawn-1-58ad20": {
    "enemies": [
      {
        "name": "Vide (stage 1 body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "journey-for-the-dawn-1-d72ed2": {
    "enemies": [
      {
        "name": "Vide (stage 1 body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "journey-for-the-dawn-1-956398": {
    "enemies": [
      {
        "name": "Vide (stage 1 body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      }
    ]
  },
  "vide-the-wicked-1-ada0f5": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-c57688": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-8a2047": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-fdb5dd": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-d38ea1": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-867b47": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-da57bb": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-173843": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-da6e32": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-cad42d": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "vide-the-wicked-1-6e9c2c": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ],
    "ignoresWeakness": true
  },
  "vide-the-wicked-1-832da9": {
    "enemies": [
      {
        "name": "Vide, the Wicked (final boss)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Wind",
          "Light"
        ],
        "shield": "10",
        "recheck": true
      },
      {
        "name": "Wicked Left Arm",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Bow",
          "Staff"
        ],
        "shield": "5"
      },
      {
        "name": "Wicked Right Arm",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light",
          "Dark"
        ],
        "shield": "4"
      }
    ]
  },
  "majestic-mysterious-travellers-1-476306": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-7b2502": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ],
    "ignoresWeakness": true
  },
  "majestic-mysterious-travellers-1-43ec8c": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-10c53e": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-a7a979": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-c98810": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-2b3658": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-2-7b2502": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ],
    "ignoresWeakness": true
  },
  "majestic-mysterious-travellers-1-d38ea1": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-b65c41": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-8df21f": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-5ed35a": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-91a7f5": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-ca6da8": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-c15aba": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ],
    "ignoresWeakness": true
  },
  "majestic-mysterious-travellers-1-26e34d": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-8208a7": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-867b47": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "majestic-mysterious-travellers-1-832da9": {
    "enemies": [
      {
        "name": "Ophilia",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dark"
        ],
        "shield": "6"
      },
      {
        "name": "Alfyn",
        "confidence": "verified",
        "weak": [
          "Dagger",
          "Bow",
          "Fire"
        ],
        "shield": "7"
      },
      {
        "name": "Tressa",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Fire",
          "Lightning"
        ],
        "shield": "7"
      },
      {
        "name": "Olberic",
        "confidence": "verified",
        "weak": [
          "Axe",
          "Ice",
          "Wind"
        ],
        "shield": "8"
      }
    ]
  },
  "masterly-mysterious-travellers-1-476306": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-7b2502": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ],
    "ignoresWeakness": true
  },
  "masterly-mysterious-travellers-1-43ec8c": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-10c53e": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-a7a979": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-c98810": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-2b3658": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-2-7b2502": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ],
    "ignoresWeakness": true
  },
  "masterly-mysterious-travellers-1-d38ea1": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-867b47": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-5ed35a": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-03e71a": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-ca6da8": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-c15aba": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ],
    "ignoresWeakness": true
  },
  "masterly-mysterious-travellers-1-7b55df": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-d9c95d": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-f4ea80": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "masterly-mysterious-travellers-1-91a7f5": {
    "enemies": [
      {
        "name": "Primrose",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Light"
        ],
        "shield": "7"
      },
      {
        "name": "Therion",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Bow",
          "Ice"
        ],
        "shield": "7"
      },
      {
        "name": "H'aanit",
        "confidence": "verified",
        "weak": [
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "8"
      },
      {
        "name": "Cyrus",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Axe"
        ],
        "shield": "6"
      }
    ]
  },
  "true-vide-phase-1-1-0625d2": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-6e9c2c": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-phase-1-1-00e5aa": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-a2fc4b": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-ac9110": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-phase-1-1-23056b": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-b629fe": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-023611": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-b23c6d": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-76c4b1": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-1804a1": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-2-1804a1": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-5e716d": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-d31835": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-f84044": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-72d5e0": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-fec412": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-e8a29d": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-e7b9ed": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-8d31f1": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-1-d04d7b": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-1-2-fec412": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-9517f0": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-7b87af": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-b90fce": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-phase-2-1-832da9": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-03113e": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-phase-2-1-f9d73d": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-99c436": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-80ebe5": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-4d8025": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-d38ea1": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-02f182": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-78bd83": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-2-4d8025": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-97f51d": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-f4ea80": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-03e71a": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-55ce43": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-91a7f5": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-1-d7a05f": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-phase-2-2-91a7f5": {
    "enemies": [
      {
        "name": "Vide (body)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Axe",
          "Staff",
          "Lightning",
          "Light"
        ],
        "shield": "10 (P1 half) / 15 (after party swap)",
        "recheck": true
      },
      {
        "name": "Wriggling Tentacle (top-left)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Axe",
          "Bow",
          "Ice",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Lithe Tentacle (top-right)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Ice",
          "Lightning",
          "Wind",
          "Light"
        ],
        "shield": "5"
      },
      {
        "name": "Thwarting Tentacle (bottom-right)",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Staff",
          "Wind",
          "Dark"
        ],
        "shield": "5"
      },
      {
        "name": "Creeping Tentacle (bottom-left)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow",
          "Fire",
          "Dark"
        ],
        "shield": "5"
      }
    ]
  },
  "true-vide-the-wicked-1-81f90c": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-5c18c2": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-4dffbe": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-7f3d40": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-24a668": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-56cda0": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-cb44c6": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-0f45b4": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-fa16db": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-223665": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-752b3a": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-2-223665": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-812f43": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-the-wicked-1-292956": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-4397da": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-the-wicked-1-167fa0": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-f380c5": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-457d5f": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-91a7f5": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-fec412": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-e25de3": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-471d0d": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-6e9c2c": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-the-wicked-1-d57479": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-866332": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-9e5b45": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-2-91a7f5": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-f9fa70": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-3f43de": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-8208a7": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-302cf3": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-da936c": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-b4c385": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-2-9e5b45": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-3-91a7f5": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-95e2d0": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ],
    "ignoresWeakness": true
  },
  "true-vide-the-wicked-1-a56fbd": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-a66f3c": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-8e6463": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-2-a56fbd": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-b04892": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-28d97e": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-19e374": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-0b3249": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-e80e7b": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-867b47": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-8c3105": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-832da9": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-1-36aee5": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "true-vide-the-wicked-2-fec412": {
    "enemies": [
      {
        "name": "Vide the Wicked — P1 body",
        "confidence": "verified",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "15",
        "recheck": true
      },
      {
        "name": "P1 right arm (screen left)",
        "confidence": "verified",
        "weak": [
          "Fire",
          "Lightning",
          "Light"
        ],
        "shield": "6"
      },
      {
        "name": "P1 left arm (screen right)",
        "confidence": "verified",
        "weak": [
          "Sword",
          "Dagger",
          "Bow"
        ],
        "shield": "8"
      },
      {
        "name": "P2 body (<=600k HP)",
        "confidence": "single-source",
        "weak": [
          "Spear",
          "Dagger",
          "Axe",
          "Ice",
          "Lightning",
          "Light"
        ],
        "shield": "20"
      },
      {
        "name": "P2 right arm / left arm",
        "confidence": "unverified"
      },
      {
        "name": "P3 body (800k HP)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-900-ca73a5": {
    "enemies": [
      {
        "name": "Pursuers (tutorial)",
        "confidence": "unverified"
      }
    ]
  },
  "throne-ch-1-900-eaf252": {
    "enemies": [
      {
        "name": "Guard",
        "confidence": "unverified"
      }
    ]
  }
};
