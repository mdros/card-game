export type Starship = {
  id: number;
  name: string;
  crew: number;
  model: string;
};

const starships: Starship[] = [
  { id: 1, name: "Millennium Falcon", crew: 4, model: "YT-1300 light freighter" },
  { id: 2, name: "Star Destroyer", crew: 47060, model: "Imperial I-class Star Destroyer" },
  { id: 3, name: "X-wing", crew: 1, model: "T-65 X-wing" },
  { id: 4, name: "TIE Fighter", crew: 1, model: "Twin Ion Engine Fighter" },
];

export function useStarships() {
  return starships;
}
