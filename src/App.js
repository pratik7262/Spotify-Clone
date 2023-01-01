import { Box } from "@mui/material";
import MainContainer from "./components/mainContainer";
import MusicControler from "./components/musicControler";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div>
      <Box display="flex" >
        <Sidebar />
        <MainContainer />
      </Box>
      <MusicControler />
    </div>
  );
}

export default App;
