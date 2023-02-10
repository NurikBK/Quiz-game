import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { decodeHtml } from "../util/utility";

type Props = {
  option: string;
};
function Option({ option }: Props) {
  const [isCliked, setIsClicked] = useState<boolean>(false);
  const variant = isCliked ? "contained" : "outlined";
  const decodedOption = decodeHtml(option);

  return (
    <Button
      sx={{ padding: "5px 15px" }}
      variant={variant}
      onClick={() => setIsClicked(!isCliked)}
    >
      {decodedOption}
    </Button>
  );
}
export default Option;
