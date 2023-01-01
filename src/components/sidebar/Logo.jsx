import React from "react";
import { Box, Typography } from "@mui/material";
import { BsSpotify } from "react-icons/bs";
import { alignCenter } from "../../styles/style";

const Logo = () => {
  return (
    <Box sx={alignCenter} padding="0 24px" mb='18px'>
      <BsSpotify color="white" size="39px" />
      <Typography
        variant="h3"
        sx={{ textDecoration: "none", ml: "5px", fontWeight: "bold" }}
        component="a"
        href="#"
      >
        Spotify
      </Typography>
    </Box>
  );
};

export default Logo;
