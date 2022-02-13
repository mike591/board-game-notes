import { useEffect, useRef, useState, useCallback } from "react";
import "./App.scss";
import CanvasDraw from "react-canvas-draw";
import awkwardGuestsImg from "assets/awkward_guests_tracking_sheet.png";

const App = () => {
  const canvasContainerRef = useRef();
  const [dimensions, setDimensions] = useState();

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

  return (
    <div className="App">
      <div className="_menu"></div>
      <div className="_container" ref={canvasContainerRef}>
        {dimensions && (
          <CanvasDraw
            className="_canvas"
            enablePanAndZoom
            imgSrc={awkwardGuestsImg}
            canvasWidth={dimensions.width}
            canvasHeight={dimensions.height}
            brushRadius={0}
            lazyRadius={0}
            hideInterface
            zoomExtents={{ min: 0.5, max: 6 }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
