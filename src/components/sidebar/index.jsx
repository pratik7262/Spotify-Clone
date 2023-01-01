import React from "react";
import { Box,  } from "@mui/material";
import Logo   from "./Logo";
import {  outerBox } from "../../styles/style";
import NavigationList from "./NavigationList";
import Actions from "./Actions";
import Install from "./Install";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{...outerBox,position:'absolute'}}
      >
        <Box sx={{ pt: "24px", width: "100%" }}>
          <Logo/>
          <NavigationList/>
          <Actions/>
          <Install/>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
