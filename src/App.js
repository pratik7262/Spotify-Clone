import { Box, useMediaQuery } from "@mui/material";
import MainContainer from "./components/mainContainer";
import MusicControler from "./components/musicControler";
import Sidebar from "./components/sidebar";
import { NotResponssive } from "./components/NotResponssive";

function App() {
  const isNotResponssive = useMediaQuery("(min-width:900px)");
  return (
    <div>
      {isNotResponssive ? (
        <>
          <Box display="flex">
            <Sidebar />
            <MainContainer />
          </Box>
          <MusicControler />
        </>
      ) : (
        <Box display="flex">
          <NotResponssive />
        </Box>
      )}
    </div>
  );
}

export default App;
