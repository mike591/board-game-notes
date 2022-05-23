import { createSlice } from "@reduxjs/toolkit";
import locationLabels from "features/awkwardGuests/locationLabels";
import locations from "features/awkwardGuests/locations";
import suspects from "features/awkwardGuests/suspects";
import weapons from "features/awkwardGuests/weapons";

export const awkwardGuestsSlice = createSlice({
  name: "counter",
  initialState: {
    weapons: {
      [weapons.wrench.key]: true, // false,
      [weapons.fryingPan.key]: true, // false,
      [weapons.shovel.key]: true, // false,
      [weapons.cue.key]: true, // false,
      [weapons.shotgun.key]: true, // false,
      [weapons.derringerGun.key]: true, // false,
      [weapons.revolver.key]: true, // false,
      [weapons.blunderbuss.key]: true, // false,
      [weapons.kitchenKnife.key]: true, // false,
      [weapons.letterOpener.key]: true, // false,
      [weapons.machete.key]: true, // false,
      [weapons.saber.key]: true, // false,
      [weapons.antifreeze.key]: true, // false,
      [weapons.ratPoison.key]: true, // false,
      [weapons.pesticide.key]: true, // false,
      [weapons.poisonousPlant.key]: true, // false,
      [weapons.leatherStrap.key]: true, // false,
      [weapons.pillow.key]: true, // false,
      [weapons.rope.key]: true, // false,
      [weapons.curtainCord.key]: true, // false,
    },
    locations: {
      [locations.garage.key]: {
        notes: "",
        blocked: {
          [locations.trophyRoom.key]: true, // false,
          [locations.bedroom.key]: true, // false,
          [locations.studyCrimeScene.key]: true, // false,
        },
        guests: [],
      },
      [locations.trophyRoom.key]: {
        notes: "",
        blocked: {
          [locations.garage.key]: true, // false,
          [locations.vestibule.key]: true, // false,
          [locations.billiardRoom.key]: true, // false,
        },
        guests: [],
      },
      [locations.billiardRoom.key]: {
        notes: "",
        blocked: {
          [locations.trophyRoom.key]: true, // false,
          [locations.vestibule.key]: true, // false,
        },
        guestCount: 5,
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
          [locations.garage.key]: true, // false,
          [locations.kitchen.key]: true, // false,
          [locations.studyCrimeScene.key]: true, // false,
        },
        guests: [],
      },
      [locations.vestibule.key]: {
        notes: "",
        blocked: {
          [locations.billiardRoom.key]: true, // false,
          [locations.trophyRoom.key]: true, // false,
          [locations.livingRoom.key]: true, // false,
        },
        guestCount: 5,
        guests: [],
      },
      [locations.kitchen.key]: {
        notes: "",
        blocked: {
          [locations.bedroom.key]: true, // false,
          [locations.shed.key]: true, // false,
          [locations.livingRoom.key]: true, // false,
        },
        guests: [],
      },
      [locations.livingRoom.key]: {
        notes: "",
        blocked: {
          [locations.vestibule.key]: true, // false,
          [locations.library.key]: true, // false,
          [locations.kitchen.key]: true, // false,
        },
        guestCount: 5,
        guests: [],
      },
      [locations.shed.key]: {
        notes: "",
        blocked: {
          [locations.studyCrimeScene.key]: true, // false,
          [locations.kitchen.key]: true, // false,
          [locations.library.key]: true, // false,
        },
        guests: [],
      },
      [locations.library.key]: {
        notes: "",
        blocked: {
          [locations.livingRoom.key]: true, // false,
          [locations.shed.key]: true, // false,
        },
        guestCount: 5,
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
  },
  reducers: {
    loadState: (state, action) => {
      state.weapons = action.weapons;
      state.locations = action.locations;
      state.suspects = action.suspects;
      state.solution = action.solution;
    },
    updateSuspects: (state, action) => {
      const { key, motiveIdx, proofIdx, value } = action.payload;
      state.suspects[key].motives[motiveIdx][proofIdx] = value;
    },
    updateWeapons: (state, action) => {
      const { key, value } = action.payload;
      state.weapons[key] = value;
    },
    updateLocations: (state, action) => {
      const { locationKey, key, value } = action.payload;
      state.locations[locationKey][key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadState, updateSuspects, updateWeapons, updateLocations } =
  awkwardGuestsSlice.actions;

export default awkwardGuestsSlice.reducer;
