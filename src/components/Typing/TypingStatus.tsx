import React from "react";
import { cn } from "@bem-react/classname";
import "./TypingStatus.css";
import { Box, Typography } from "@material-ui/core";

const TypingStatus: React.FC = () => {
  const typingStatus = cn("TypingStatus");

  return (
    <Box className={typingStatus()}>
      <Box className={typingStatus("Container")}>
        <Box className={typingStatus("Circle")} />
        <Box className={typingStatus("Circle")} />
        <Box className={typingStatus("Circle")} />
      </Box>
      <Typography variant="body2" className={typingStatus("Status")}>
        Печатает...
      </Typography>
    </Box>
  );
};
export default TypingStatus;
