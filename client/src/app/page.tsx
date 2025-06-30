"use client";
import GameCard from "@/components/GameCard";
import { usePeople } from "@/hooks/usePeople";
import { useStarships } from "@/hooks/useStarships";
import { getWinner, Winner } from "@/hooks/useWinner";
import { getTwoRandomCards } from "@/utils/cards";
import { Box, Button, FormControlLabel, Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [usePeopleMode, setUsePeopleMode] = useState(true);
  const people = usePeople();
  const starships = useStarships();
  
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  const [cards, setCards] = useState(() => getTwoRandomCards(true, people, starships));
  const [winner, setWinner] = useState<Winner>(() => getWinner(cards[0], cards[1], true));

  const handleDraw = (mode: boolean, resetScores = false) => {
    const newCards = getTwoRandomCards(mode, people, starships);
    setCards(newCards);
    const newWinner = getWinner(newCards[0], newCards[1], mode);
    setWinner(newWinner);
    if (resetScores) {
      setLeftScore(0);
      setRightScore(0);
    } else {
      if (newWinner === 0) setLeftScore((score) => score + 1);
      if (newWinner === 1) setRightScore((score) => score + 1);
    }
  };

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = event.target.checked;
    setUsePeopleMode(newMode);
    handleDraw(newMode, true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Card War Game
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <FormControlLabel
          control={<Switch checked={usePeopleMode} onChange={handleSwitch} color="warning" />}
          label={usePeopleMode ? "People" : "Starships"}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Score: {leftScore}</Typography>
          <GameCard card={cards[0]} isPeopleMode={usePeopleMode} highlight={winner === 0} />
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">VS</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Score: {rightScore}</Typography>
          <GameCard card={cards[1]} isPeopleMode={usePeopleMode} highlight={winner === 1} />
        </Box>
      </Box>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6">
          Winner: {winner !== null ? (winner === 0 ? "Left Card" : "Right Card") : "It's a tie!"}
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleDraw(usePeopleMode)} color="warning">
          Play Again
        </Button>
      </Box>
    </Box>
  );
}

