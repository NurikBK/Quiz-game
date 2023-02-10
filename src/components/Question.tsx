import { Box, Button, Typography } from "@mui/material";
import { decodeHtml } from "../util/utility";
import Divider from "@mui/material/Divider";
import Option from "./Option";

type Props = {
  question: string;
  incorrectAnswers: any;
  correctAnswer: number | string;
};
const Question = ({ question, incorrectAnswers, correctAnswer }: Props) => {
  const options = [...incorrectAnswers, correctAnswer];

  const decodedQuestion = decodeHtml(question);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", color: "#293264", mb: "5px" }}>
        {decodedQuestion}
      </Typography>
      <Box display="flex" justifyContent="start" gap={5}>
        {options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </Box>
      <Divider sx={{ m: "10px 0" }} />
    </Box>
  );
};
export default Question;
