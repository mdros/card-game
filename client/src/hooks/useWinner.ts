export type Winner = 0 | 1 | null;

export function getWinner(card1: any, card2: any, mode: boolean): Winner {
  if (mode) {
    const attack1 = card1.attack;
    const attack2 = card2.attack;
    if (attack1 === attack2) return null;
    return attack1 > attack2 ? 0 : 1;
  } else {
    const crew1 = card1.crew;
    const crew2 = card2.crew;
    if (crew1 === crew2) return null;
    return crew1 > crew2 ? 0 : 1;
  }
} 