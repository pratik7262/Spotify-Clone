import { Box, Typography } from "@mui/material";
import React from "react";
import { alignCenter } from "../../styles/style";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { colors } from "../../theme";

const Install = () => {
  return (
    <Box sx={{ ...alignCenter, justifyContent:'center', padding: "0 16px", mb: "10px",position:"absolute",bottom:"0"}}>
      <ArrowCircleDownIcon sx={{  fontSize: "30px", color: colors.black[200] }}/>
      <Typography ml="10px" color={colors.black[200]} fontWeight={400} component="a" variant="h5">
        Install App
      </Typography>
    </Box>
  );
};

export default Install;
