import { Box, Button, Typography } from "@mui/material";
import Question from "./Question";

type Props = {
  data: {
    question: string;
    incorrect_answers: string | [];
    correct_answer: string;
  }[];
};
const Quiz = ({ data }: Props) => {
  return (
    <Box width="80%">
      {data.map((item, index) => (
        <Question
          key={index}
          question={item.question}
          incorrectAnswers={item.incorrect_answers}
          correctAnswer={item.correct_answer}
        />
      ))}
      <Button sx={{ mt: "15px", mr: "auto" }} variant="contained">
        Show Answears
      </Button>
    </Box>
  );
};
export default Quiz;
