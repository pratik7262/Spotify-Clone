import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { justifyBetween, spacer } from "../../styles/style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {  BsPersonCircle } from "react-icons/bs";

const Spacer = () => {
  return (
    <Box sx={spacer}>
      <Box sx={{ ...justifyBetween, width: "80px" }}>
        <ArrowBackIosNewIcon />
        <ArrowForwardIosIcon />
      </Box>
      <Box sx={{...justifyBetween,width:"250px"}}>
        <Button variant="outlined" sx={{borderRadius:'25px'}} color="secondary">
          Upgrade
        </Button>
        <IconButton >
            <BsPersonCircle style={{color:'white'}}/>
            <Typography variant="h6" ml='10px' fontWeight={500}>Pratik Shinde</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Spacer;
