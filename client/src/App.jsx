import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
