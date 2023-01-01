import { Box, Grid } from "@mui/material";
import React from "react";

import ContentGrid from "./ContentGrid";
import Header from "./Header";

const Feed = ({ headerTitle, gridData }) => {
  return (
    <Box padding="24px 32px" mb='48px'>
      <Header title={headerTitle} />
      <Grid  container columnGap="24" columnSpacing={6}>
        {gridData.map((item) => {
          return (
            <ContentGrid
              key={item.id}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Feed;
