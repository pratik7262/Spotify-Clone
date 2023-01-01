import React from "react";
import { Box } from "@mui/material";
import { mainContainerOuterBox } from "../../styles/style";
import Spacer from "./Spacer";
import Feed from "./feed";
import { feedData } from "../../data/mockData";

const MainContainer = () => {
  return (
    <>
      <Box sx={{ ...mainContainerOuterBox, position: "absolute", right: "0" }}>
        <Spacer />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 654.6,
            overflowY: "scroll"/* Hide scrollbars */,
          }}
        >
          {feedData.map((item) => {
            return (
              <Feed
                key={item.id}
                headerTitle={item.title}
                gridData={item.gridData}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default MainContainer;
