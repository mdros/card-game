import { Card, CardContent, Typography } from "@mui/material";
import { Person } from "../hooks/usePeople";
import { Starship } from "../hooks/useStarships";

interface GameCardProps {
  card: Person | Starship;
  isPeopleMode: boolean;
  highlight?: boolean;
}

const GameCard = ({ card, isPeopleMode, highlight = false }: GameCardProps) => (
  <Card sx={{ minWidth: 250, border: highlight ? "4px solid green" : "4px solid white" }}>
    <CardContent>
      <Typography variant="h6">
        {card.name}
      </Typography>
      {isPeopleMode ? (
        <>
          <Typography>Attack: {(card as Person).attack}</Typography>
          <Typography>Gender: {(card as Person).gender}</Typography>
        </>
      ) : (
        <>
          <Typography>Crew: {(card as Starship).crew}</Typography>
          <Typography>Model: {(card as Starship).model}</Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default GameCard; 