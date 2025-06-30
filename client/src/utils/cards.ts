import { Person } from "@/hooks/usePeople";
import { Starship } from "@/hooks/useStarships";

export function getTwoRandomCards(peopleMode: boolean, people: Person[], starships: Starship[]) {
  if (peopleMode) {
    if (people.length < 2) return [people[0], people[0]];
    const idx1 = Math.floor(Math.random() * people.length);
    let idx2 = Math.floor(Math.random() * (people.length - 1));
    if (idx2 >= idx1) idx2 += 1;
    return [people[idx1], people[idx2]];
  } else {
    if (starships.length < 2) return [starships[0], starships[0]];
    const idx1 = Math.floor(Math.random() * starships.length);
    let idx2 = Math.floor(Math.random() * (starships.length - 1));
    if (idx2 >= idx1) idx2 += 1;
    return [starships[idx1], starships[idx2]];
  }
} 