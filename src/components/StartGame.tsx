import { Box, Button, Typography } from "@mui/material";

type Props = {
  startGame: () => void;
};
const StartGame = ({ startGame }: Props) => {
  return (
    <Box textAlign="center">
      <Typography variant="h2" color="#293264" mb={5}>
        Quizzical
      </Typography>
      <Button variant="contained" onClick={startGame}>
        Start Game
      </Button>
    </Box>
  );
};
export default StartGame;
