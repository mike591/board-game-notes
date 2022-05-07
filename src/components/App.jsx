import "./App.scss";
import { Drawer, Button, AppBar, Toolbar } from "@mui/material";
import mansionImg from "assets/mansion.png";
import SuspectCards from "components/awkwardGuests/SuspectCards";
import WeaponCards from "components/awkwardGuests/WeaponCards";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const [openSuspectsDrawer, setOpenSuspectsDrawer] = useState(false);
  const [openWeaponsDrawer, setOpenWeaponsDrawer] = useState(false);
  const [openRoomsDrawer, setOpenRoomsDrawer] = useState(false);

  const dispatch = useDispatch();

  const awkwardGuestsState = useSelector((state) => state.awkwardGuests);

  console.log({ awkwardGuestsState });

  return (
    <div className="App">
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
        open={openRoomsDrawer}
        onClose={() => setOpenRoomsDrawer(false)}
      >
        Rooms!
      </Drawer>

      <AppBar position="relative">
        <Toolbar>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => setOpenSuspectsDrawer(true)}
          >
            Suspects
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => setOpenWeaponsDrawer(true)}
          >
            Weapons
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => setOpenRoomsDrawer(true)}
          >
            Rooms
          </Button>
        </Toolbar>
      </AppBar>
      <div className="board">
        <div className="board__content">
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
