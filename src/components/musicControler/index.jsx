import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { RxShuffle } from "react-icons/rx";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { AiFillPauseCircle } from "react-icons/ai";
import { SlLoop } from "react-icons/sl";
import React from "react";
import { colors } from "../../theme";

const BorderLinearProgress = styled(Box)(() => ({
  height: 5,
  borderRadius: 5,
  width: 500,
  backgroundColor: "white",
}));

const MusicControler = () => {
  return (
    <>
      <Stack
        width="100%"
        position="absolute"
        bottom={0}
        backgroundColor="#181818"
        height={91}
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={4}>
          <RxShuffle color={colors.black[200]} />
          <FaStepBackward color={colors.black[200]} />
          <AiFillPauseCircle color={colors.black[200]} size="39px" />
          <FaStepForward color={colors.black[200]} />
          <SlLoop color={colors.black[200]} />
        </Stack>
        <Stack direction="row" alignItems="center" color="white" spacing={1}>
          <Typography variant="h6">00:00</Typography>
          <BorderLinearProgress />
          <Typography variant="h6">00:00</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default MusicControler;
