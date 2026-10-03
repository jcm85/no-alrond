/** Plain combat notes for a first-time player. "?" means unconfirmed. */

export type GuideLine = { title: string; text: string };

export const combatGuide: GuideLine[] = [
  {
    title: "Weakness",
    text: "Each enemy is weak to some of 12 types, always in this order: Sword, Spear (the game also calls this Polearm), Dagger, Axe, Bow, Staff, Fire, Ice, Lightning, Wind, Light, Dark. A new enemy shows ? until you hit that type.",
  },
  {
    title: "Shield",
    text: "The number under the shield is how many weakness hits it can take. Each weakness hit takes 1 off. Other hits do not.",
  },
  {
    title: "Break",
    text: "At 0 the enemy loses its next action and takes much more damage. Your Latent Power gauge fills, then the shield comes back. The app does not tell you which step will break the enemy.",
  },
  {
    title: "Boost",
    text: "You gain 1 BP on a turn you do not boost, and you can hold up to 5. Spend up to 3 on one action. The sheet writes counts such as x3 as-is. What that count means is unconfirmed (?).",
  },
  {
    title: "Break, then boost",
    text: "Save BP, break first, then use boosted attacks while the enemy cannot act.",
  },
  {
    title: "Latent Power",
    text: "One special move per character, charged by breaking and by taking damage. Throne's lets her act twice. Temenos's makes a hit strip a shield. Partitio's refills BP. Ochette's gives free beast skills.",
  },
  {
    title: "Shield-strippers",
    text: "Some Hired Help, Beastly Howl, Temenos's Judgment, and Decaying Dragon's Essence strip a shield even when the hit is not a weakness. The sheet's letter codes are not confirmed here (?).",
  },
  {
    title: "Bosses change",
    text: "Many bosses switch weaknesses or regain shields after a phase change. Re-check on screen. The chips are the opening phase only.",
  },
];

export const fleeGuide: GuideLine[] = [
  {
    title: "With A Step Ahead",
    text: "Anyone: Flee (free first turn from A Step Ahead; if it fails, Flee again next turn).",
  },
  {
    title: "Early, one enemy",
    text: "Break it (hit its weakness), then Flee (Chewy: a broken enemy always lets you flee).",
  },
  {
    title: "Two or more enemies",
    text: "Flee (repeat until it works).",
  },
  {
    title: "Boss fights",
    text: "Flee is not available in boss fights.",
  },
];
