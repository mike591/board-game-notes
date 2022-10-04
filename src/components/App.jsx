import "./App.scss";
import NotesIcon from "@mui/icons-material/Notes";
import {
  Drawer,
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import mansionImg from "assets/mansion.png";
import LocationCards from "components/awkwardGuests/LocationCards";
import Overlay from "components/awkwardGuests/Overlay";
import SuspectCards from "components/awkwardGuests/SuspectCards";
import WeaponCards from "components/awkwardGuests/WeaponCards";
import {
  loadState,
  resetState,
} from "features/awkwardGuests/awkwardGuestsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const [openSuspectsDrawer, setOpenSuspectsDrawer] = useState(false);
  const [openWeaponsDrawer, setOpenWeaponsDrawer] = useState(false);
  const [openLocationsDrawer, setOpenLocationsDrawer] = useState(false);
  const [openNoteSelectionDrawer, setOpenNoteSelectionDrawer] = useState(false);
  const [stateLoaded, setStateLoaded] = useState(false);
  const [modalOn, setModalOn] = useState(false);

  const dispatch = useDispatch();

  const handleClearStorage = () => {
    dispatch(resetState());
  };

  const toggleFullScreen = () => {
    if (!window.document.fullscreenElement) {
      window.document.documentElement.requestFullscreen();
    } else {
      if (window.document.exitFullscreen) {
        window.document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    if (!stateLoaded) {
      const stateString = window.localStorage.getItem("state");
      if (stateString) {
        dispatch(loadState({ state: JSON.parse(stateString) }));
      }
      setStateLoaded(true);
    }
  }, [dispatch, stateLoaded]);

  useEffect(() => {
    localStorage.setItem("myCat", "Tom");
  }, []);

  return (
    <div className="App">
      <Dialog
        open={modalOn}
        onClose={() => {
          setModalOn(false);
        }}
      >
        <DialogTitle id="clear-storage-dialog-title">
          {"Clear storage?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="clear-storage-dialog-description">
            This will delete all the notes you have taken.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setModalOn(false);
            }}
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              handleClearStorage();
              setModalOn(false);
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Drawer
        anchor={"left"}
        open={openSuspectsDrawer}
        onClose={() => setOpenSuspectsDrawer(false)}
      >
        <div className="drawer__content">
          <SuspectCards />
        </div>
      </Drawer>
      <Drawer
        anchor={"left"}
        open={openWeaponsDrawer}
        onClose={() => setOpenWeaponsDrawer(false)}
      >
        <div className="drawer__content">
          <WeaponCards />
        </div>
      </Drawer>
      <Drawer
        anchor={"left"}
        open={openLocationsDrawer}
        onClose={() => setOpenLocationsDrawer(false)}
      >
        <div className="drawer__content">
          <LocationCards />
        </div>
      </Drawer>
      <Drawer
        anchor={"left"}
        open={openNoteSelectionDrawer}
        onClose={() => setOpenNoteSelectionDrawer(false)}
      >
        <div className="drawer__content">
          <Button
            sx={{ my: 2, p: 4, width: "100%" }}
            onClick={() => setOpenSuspectsDrawer(true)}
          >
            Suspects
          </Button>
          <Button
            sx={{ my: 2, p: 4, width: "100%" }}
            onClick={() => setOpenWeaponsDrawer(true)}
          >
            Weapons
          </Button>
          <Button
            sx={{ my: 2, p: 4, width: "100%" }}
            onClick={() => setOpenLocationsDrawer(true)}
          >
            Locations
          </Button>
          <Button
            sx={{ my: 2, p: 4, width: "100%" }}
            onClick={() => {
              setModalOn(true);
              setOpenNoteSelectionDrawer(false);
            }}
          >
            Clear storage
          </Button>
          <Button
            sx={{ my: 2, p: 4, width: "100%" }}
            onClick={toggleFullScreen}
          >
            Toggle fullscreen
          </Button>
        </div>
      </Drawer>
      <Fab
        color="primary"
        sx={{ position: "absolute", zIndex: 10, m: 2 }}
        onClick={() => setOpenNoteSelectionDrawer(true)}
      >
        <NotesIcon />
      </Fab>
      <div className="board">
        <div className="board__content">
          <Overlay />
          <img
            className="board__content__image"
            src={mansionImg}
            alt="mansion"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
