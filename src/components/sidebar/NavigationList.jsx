import { Box, Typography } from "@mui/material";
import React from "react";
import { alignCenter } from "../../styles/style";
import { sidebarList } from "../../data/mockData";

const NavigationList = () => {
  return (
    <Box width="100%" padding="15px 8px">
      {sidebarList.map((item) => {
        return (
          <Box key={item.id} sx={{ ...alignCenter, padding: "0 16px", mb: "10px" }}>
            {item.icon}
            <Typography ml='10px' fontWeight={400} component="a" variant="h5">
              {item.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavigationList;
