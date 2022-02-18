import { useRef, useState, useCallback, useEffect } from "react";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import EditIcon from "@mui/icons-material/Edit";
import CanvasDraw from "react-canvas-draw";
import awkwardGuestsImg from "assets/awkward_guests_tracking_sheet.png";
import { CirclePicker } from "react-color";
import Drawer from "@mui/material/Drawer";
import "./App.scss";
import { Fab } from "@mui/material";

const App = () => {
  const canvasRef = useRef();
  const canvasContainerRef = useRef();

  const [dimensions, setDimensions] = useState({});
  const [color, setColor] = useState("#000000");
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);
  const [showFlash, setShowFlash] = useState(true);

  const handleResize = useCallback(() => {
    const aspectRatio = 1654 / 2339; // (h/w)

    let width = canvasContainerRef.current.offsetWidth;
    let height = aspectRatio * width;

    while (height >= canvasContainerRef.current.offsetHeight) {
      width *= 0.99;
      height *= 0.99;
    }

    setDimensions({
      width: width,
      height: height,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      window.document.body.requestFullscreen({ navigationUI: "hide" });
    }
  };

  return (
    <div className="App">
      <Fab
        className="drawer-button"
        color="primary"
        onClick={() => setDrawerIsOpen(true)}
      >
        <EditIcon />
      </Fab>
      <Drawer
        className="_drawer"
        anchor={"left"}
        open={drawerIsOpen}
        onClose={() => {
          setDrawerIsOpen(false);
          setShowFlash(false);
        }}
      >
        <div className="_controls">
          <Button
            className={`__button ${showFlash ? "blink_me" : ""}`}
            variant="outlined"
            onClick={handleFullScreen}
          >
            <OpenInFullIcon />
          </Button>
          <Button className="__button" variant="outlined" onClick={handleUndo}>
            <UndoIcon />
          </Button>
          <CirclePicker
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
            colors={[
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#2196f3",
              "#00bcd4",
              "#4caf50",
              "#8bc34a",
              "#cddc39",
              "#ffc107",
              "#ff9800",
              "#795548",
              "#607d8b",
              "#000000",
            ]}
            width="auto"
          />
        </div>
      </Drawer>
      <div className="_container" ref={canvasContainerRef}>
        <CanvasDraw
          ref={canvasRef}
          enablePanAndZoom
          imgSrc={awkwardGuestsImg}
          canvasWidth={dimensions.width}
          canvasHeight={dimensions.height}
          brushRadius={0}
          lazyRadius={0}
          brushColor={color}
          hideInterface
          zoomExtents={{ min: 1, max: 8 }}
        />
      </div>
    </div>
  );
};

export default App;
