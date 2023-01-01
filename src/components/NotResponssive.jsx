import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export const NotResponssive= () => {
  return (
    <Box height="100%" width='100%' display="flex" alignItems="center" justifyContent="center">
      <Paper sx={{height:'300px', width:'300px'}} elevation={24}>
      <Box height="100%" width='100%' display="flex" alignItems="center" justifyContent="center">
        <Typography textAlign='center' fontSize='2rem' variant="h6" color='black'>
          Spotify Renders Completely Diffrent Website For Mobile View. Please Switch To Desktop View
        </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
