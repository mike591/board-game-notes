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
      },
      [locations.trophyRoom.key]: {
        notes: "",
        blocked: [],
      },
      [locations.billiardRoom.key]: {
        notes: "",
        blocked: [],
        guestNum: undefined,
      },
      [locations.studyCrimeScene.key]: {
        notes: "",
        blocked: [],
      },
      [locations.bedroom.key]: {
        notes: "",
        blocked: [],
      },
      [locations.vestibule.key]: {
        notes: "",
        blocked: [],
        guestNum: undefined,
      },
      [locations.kitchen.key]: {
        notes: "",
        blocked: [],
      },
      [locations.livingRoom.key]: {
        notes: "",
        blocked: [],
        guestNum: undefined,
      },
      [locations.shed.key]: {
        notes: "",
        blocked: [],
      },
      [locations.library.key]: {
        notes: "",
        blocked: [],
        guestNum: undefined,
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
  },
});

// Action creators are generated for each case reducer function
export const { loadState, updateSuspects, updateWeapons } =
  awkwardGuestsSlice.actions;

export default awkwardGuestsSlice.reducer;
