import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import CreateIcon from "@mui/icons-material/Create";
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";

import "./App.scss";
import { ReactSketchCanvas } from "react-sketch-canvas";
import awkwardGuestsImg from "assets/awkward_guests_tracking_sheet.png";

const App = () => {
  const canvasRef = useRef();
  const [isErasing, setIsErasing] = useState(false);

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleRedo = () => {
    canvasRef.current.redo();
  };

  const setPencilMode = () => {
    canvasRef.current.eraseMode(false);
    setIsErasing(false);
  };

  const setEraseMode = () => {
    canvasRef.current.eraseMode(true);
    setIsErasing(true);
  };

  window.canvasRef = canvasRef.current;

  return (
    <div className="App">
      <div className="_menu"></div>
      <div className="_container">
        <div className="_controls">
          <Button variant="outlined" onClick={handleUndo}>
            <UndoIcon />
          </Button>
          <Button variant="outlined" onClick={handleRedo}>
            <RedoIcon />
          </Button>
          <Button
            variant={isErasing ? "outlined" : "contained"}
            onClick={setPencilMode}
          >
            <CreateIcon />
          </Button>
          <Button
            variant={isErasing ? "contained" : "outlined"}
            onClick={setEraseMode}
          >
            <FormatColorResetIcon />
          </Button>
        </div>
        <ReactSketchCanvas
          ref={canvasRef}
          strokeWidth={1}
          strokeColor="black"
          backgroundImage={awkwardGuestsImg}
          preserveBackgroundImageAspectRatio="xMidYMid meet"
        />
      </div>
    </div>
  );
};

export default App;
