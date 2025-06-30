export type Person = {
  id: number;
  name: string;
  attack: number;
  gender: string;
};

const people: Person[] = [
  { id: 1, name: "Luke Skywalker", attack: 85, gender: "male" },
  { id: 2, name: "Leia Organa", attack: 70, gender: "female" },
  { id: 3, name: "Darth Vader", attack: 99, gender: "male" },
  { id: 4, name: "Yoda", attack: 95, gender: "male" },
];

export function usePeople() {
  return people;
}
