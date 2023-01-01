import { Box, Typography } from "@mui/material";
import { justifyBetween } from "../../../styles/style";
import React from 'react'

const Header = ({title}) => {
  return (
    <Box
    sx={{ ...justifyBetween, width: "100%", height: "40px", mb: "16px" }}
  >
    <Typography
      variant="h3"
      component="a"
      href="#"
      sx={{
        textDecoration: "none",
        fontWeight: "bold",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="h5"
      component="a"
      href="#"
      sx={{
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Show all
    </Typography>
  </Box>
  )
}

export default Header