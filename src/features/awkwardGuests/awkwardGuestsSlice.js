import { createSlice } from "@reduxjs/toolkit";
import locations from "features/awkwardGuests/locations";
import suspects from "features/awkwardGuests/suspects";
import weapons from "features/awkwardGuests/weapons";

const initialState = {
  weapons: {
    [weapons.wrench.key]: false,
    [weapons.fryingPan.key]: false,
    [weapons.shovel.key]: false,
    [weapons.cue.key]: false,
    [weapons.shotgun.key]: false,
    [weapons.derringerGun.key]: false,
    [weapons.revolver.key]: false,
    [weapons.blunderbuss.key]: false,
    [weapons.kitchenKnife.key]: false,
    [weapons.letterOpener.key]: false,
    [weapons.machete.key]: false,
    [weapons.saber.key]: false,
    [weapons.antifreeze.key]: false,
    [weapons.ratPoison.key]: false,
    [weapons.pesticide.key]: false,
    [weapons.poisonousPlant.key]: false,
    [weapons.leatherStrap.key]: false,
    [weapons.pillow.key]: false,
    [weapons.rope.key]: false,
    [weapons.curtainCord.key]: false,
  },
  locations: {
    [locations.garage.key]: {
      notes: "",
      blocked: {
        [locations.trophyRoom.key]: false,
        [locations.bedroom.key]: false,
        [locations.studyCrimeScene.key]: false,
      },
      guests: [],
    },
    [locations.trophyRoom.key]: {
      notes: "",
      blocked: {
        [locations.garage.key]: false,
        [locations.vestibule.key]: false,
        [locations.billiardRoom.key]: false,
      },
      guests: [],
    },
    [locations.billiardRoom.key]: {
      notes: "",
      blocked: {
        [locations.trophyRoom.key]: false,
        [locations.vestibule.key]: false,
      },
      guestCount: 0,
      guests: [],
    },
    [locations.studyCrimeScene.key]: {
      notes: "",
      blocked: {},
      guests: [],
    },
    [locations.bedroom.key]: {
      notes: "",
      blocked: {
        [locations.garage.key]: false,
        [locations.kitchen.key]: false,
        [locations.studyCrimeScene.key]: false,
      },
      guests: [],
    },
    [locations.vestibule.key]: {
      notes: "",
      blocked: {
        [locations.billiardRoom.key]: false,
        [locations.trophyRoom.key]: false,
        [locations.livingRoom.key]: false,
      },
      guestCount: 0,
      guests: [],
    },
    [locations.kitchen.key]: {
      notes: "",
      blocked: {
        [locations.bedroom.key]: false,
        [locations.shed.key]: false,
        [locations.livingRoom.key]: false,
      },
      guests: [],
    },
    [locations.livingRoom.key]: {
      notes: "",
      blocked: {
        [locations.vestibule.key]: false,
        [locations.library.key]: false,
        [locations.kitchen.key]: false,
      },
      guestCount: 0,
      guests: [],
    },
    [locations.shed.key]: {
      notes: "",
      blocked: {
        [locations.studyCrimeScene.key]: false,
        [locations.kitchen.key]: false,
        [locations.library.key]: false,
      },
      guests: [],
    },
    [locations.library.key]: {
      notes: "",
      blocked: {
        [locations.livingRoom.key]: false,
        [locations.shed.key]: false,
      },
      guestCount: 0,
      guests: [],
    },
  },
  suspects: {
    [suspects.a.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    [suspects.b.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    [suspects.c.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    [suspects.g.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    [suspects.m.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    [suspects.s.key]: {
      notes: "",
      motives: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  },
  solution: {
    who: "",
    why: "",
    how: "",
    hasAccomplice: "",
    accompliceWho: "",
    accompliceWhy: "",
  },
};

export const awkwardGuestsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loadState: (state, action) => {
      const { weapons, locations, suspects, solution } = action.payload.state;
      state.weapons = weapons;
      state.locations = locations;
      state.suspects = suspects;
      state.solution = solution;
    },
    updateSuspects: (state, action) => {
      const { key, motiveIdx, proofIdx, value } = action.payload;
      state.suspects[key].motives[motiveIdx][proofIdx] = value;
      window.localStorage.setItem("state", JSON.stringify(state));
    },
    updateWeapons: (state, action) => {
      const { key, value } = action.payload;
      state.weapons[key] = value;
      window.localStorage.setItem("state", JSON.stringify(state));
    },
    updateLocations: (state, action) => {
      const { locationKey, key, value } = action.payload;
      state.locations[locationKey][key] = value;
      window.localStorage.setItem("state", JSON.stringify(state));
    },
    resetState: (state) => {
      window.localStorage.removeItem("state");
      state.weapons = { ...initialState.weapons };
      state.locations = { ...initialState.locations };
      state.suspects = { ...initialState.suspects };
      state.solution = { ...initialState.solution };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadState,
  resetState,
  updateSuspects,
  updateWeapons,
  updateLocations,
} = awkwardGuestsSlice.actions;

export default awkwardGuestsSlice.reducer;
