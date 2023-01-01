import { colors } from "../theme";

//common styles
export const alignCenter = {
  display: "flex",
  alignItems: "center",
};

export const justifyBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
//side bar styles
export const outerBox = {
  minHeight: "654.6px",
  width: "231px",
  backgroundColor: "primary.main",
  borderRight: `1px solid ${colors.black[300]}`,
};

export const mainContainerOuterBox = {
  minHeight: "654.6px",
  width: "85%",
  color: "white",
  backgroundColor: "hwb(0deg 7% 93%)",
  borderRight: `1px solid ${colors.black[300]}`,
};

export const spacer = {
  ...justifyBetween,
  height: "32px",
  position: "sticky",
  top: 0,
  padding: "16px 32px ",
  backgroundColor:'hsl(0deg 0% 3%)'
};
