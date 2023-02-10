import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import StartGame from "./components/StartGame";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  useEffect(() => {
    async function getQuiz() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json();
      setQuiz(data.results);
    }
    getQuiz();
  }, []);

  const startGame = () => {
    setStartQuiz((prevState) => !prevState);
  };
  console.log(quiz);
  return (
    <div className="app">
      <Box
        display="flex
      "
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        {!startQuiz ? (
          <StartGame startGame={startGame} />
        ) : (
          <Quiz data={quiz} />
        )}
      </Box>
    </div>
  );
}

export default App;
