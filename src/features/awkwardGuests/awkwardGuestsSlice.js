import { createSlice } from "@reduxjs/toolkit";
import locations from "features/awkwardGuests/locations";
import suspects from "features/awkwardGuests/suspects";
import weapons from "features/awkwardGuests/weapons";

export const awkwardGuestsSlice = createSlice({
  name: "counter",
  initialState: {
    weapons: {
      [weapons.wrench.key]: 0,
      [weapons.fryingPan.key]: 0,
      [weapons.shovel.key]: 0,
      [weapons.cue.key]: 0,
      [weapons.shotgun.key]: 0,
      [weapons.derringerGun.key]: 0,
      [weapons.revolver.key]: 0,
      [weapons.blunderbuss.key]: 0,
      [weapons.kitchenKnife.key]: 0,
      [weapons.letterOpener.key]: 0,
      [weapons.machete.key]: 0,
      [weapons.saber.key]: 0,
      [weapons.antifreeze.key]: 0,
      [weapons.ratPoison.key]: 0,
      [weapons.pesticide.key]: 0,
      [weapons.poisonousPlant.key]: 0,
      [weapons.leatherStrap.key]: 0,
      [weapons.pillow.key]: 0,
      [weapons.rope.key]: 0,
      [weapons.curtainCord.key]: 0,
    },
    locations: {
      [locations.garage.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.trophyRoom.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.billiardRoom.key]: {
        notes: "",
        blocked: [],
        guestCount: undefined,
        guests: [],
      },
      [locations.studyCrimeScene.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.bedroom.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.vestibule.key]: {
        notes: "",
        blocked: [],
        guestCount: undefined,
        guests: [],
      },
      [locations.kitchen.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.livingRoom.key]: {
        notes: "",
        blocked: [],
        guestCount: undefined,
        guests: [],
      },
      [locations.shed.key]: {
        notes: "",
        blocked: [],
        guests: [],
      },
      [locations.library.key]: {
        notes: "",
        blocked: [],
        guestCount: undefined,
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
