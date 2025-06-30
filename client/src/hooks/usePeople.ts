export type Person = {
  id: number;
  name: string;
  attack: number;
};

const people: Person[] = [
  { id: 1, name: "Luke Skywalker", attack: 85 },
  { id: 2, name: "Leia Organa", attack: 70 },
  { id: 3, name: "Darth Vader", attack: 99 },
  { id: 4, name: "Yoda", attack: 95 },
];

export function usePeople() {
  return people;
}
