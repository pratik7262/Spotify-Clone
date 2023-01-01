import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../theme";

const ContentGrid = ({img,title,subtitle}) => {
  return (
  
      <Grid item width={186} borderRadius={2} xs={2.4}>
        <Card
          sx={{
            padding: "10px",
            width: 186,
            height: 280,
            bgcolor: colors.black[400],
          }}
        >
          <CardMedia
            component="img"
            height="197"
            image={img}
            alt="green iguana"
            sx={{ borderRadius: "4px", mb: "20px" }}
          />
          <Box>
            <Typography variant="h5" mb={1} fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="h6">{subtitle}</Typography>
          </Box>
        </Card>
      </Grid>
   
  );
};

export default ContentGrid;
