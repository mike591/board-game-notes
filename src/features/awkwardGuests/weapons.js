import * as locationLabels from "features/awkwardGuests/locationLabels";
import signs from "features/awkwardGuests/signs";
import * as weaponCategories from "features/awkwardGuests/weaponCategories";
import * as weaponLabels from "features/awkwardGuests/weaponLabels";

const weapons = {
  wrench: {
    key: "wrench",
    label: weaponLabels.WRENCH,
    signs: [signs.oilySubstance, signs.strongOdors],
    location: locationLabels.GARAGE,
    category: weaponCategories.BLUNT_WEAPONS,
  },
  fryingPan: {
    key: "fryingPan",
    label: weaponLabels.FRYING_PAN,
    signs: [signs.oilySubstance, signs.tracesOfADarkPowder],
    location: locationLabels.KITCHEN,
    category: weaponCategories.BLUNT_WEAPONS,
  },
  shovel: {
    key: "shovel",
    label: weaponLabels.SHOVEL,
    signs: [signs.cyanosisOrBruises, signs.tracesOfDirt],
    location: locationLabels.SHED,
    category: weaponCategories.BLUNT_WEAPONS,
  },
  cue: {
    key: "cue",
    label: weaponLabels.CUE,
    signs: [signs.defensiveWounds, signs.tracesOfADarkPowder],
    location: locationLabels.BILLIARD_ROOM,
    category: weaponCategories.BLUNT_WEAPONS,
  },
  shotgun: {
    key: "shotgun",
    label: weaponLabels.SHOTGUN,
    signs: [signs.signsOfAFight, signs.burnMarks],
    location: locationLabels.TROPHY_ROOM,
    category: weaponCategories.FIREARMS,
  },
  derringerGun: {
    key: "derringerGun",
    label: weaponLabels.DERRINGER_GUN,
    signs: [signs.defensiveWounds, signs.burnMarks],
    location: locationLabels.TROPHY_ROOM,
    category: weaponCategories.FIREARMS,
  },
  revolver: {
    key: "revolver",
    label: weaponLabels.REVOLVER,
    signs: [signs.heavyBleeding, signs.strongOdors],
    location: locationLabels.BEDROOM,
    category: weaponCategories.FIREARMS,
  },
  blunderbuss: {
    key: "blunderbuss",
    label: weaponLabels.BLUNDERBUSS,
    signs: [signs.attackFromBehind, signs.tracesOfADarkPowder],
    location: locationLabels.LIVING_ROOM,
    category: weaponCategories.FIREARMS,
  },
  kitchenKnife: {
    key: "kitchenKnife",
    label: weaponLabels.KITCHEN_KNIFE,
    signs: [signs.defensiveWounds, signs.heavyBleeding],
    location: locationLabels.KITCHEN,
    category: weaponCategories.BLADED_WEAPONS,
  },
  letterOpener: {
    key: "letterOpener",
    label: weaponLabels.LETTER_OPENER,
    signs: [signs.attackFromBehind, signs.cyanosisOrBruises],
    location: locationLabels.BEDROOM,
    category: weaponCategories.BLADED_WEAPONS,
  },
  machete: {
    key: "machete",
    label: weaponLabels.MACHETE,
    signs: [signs.attackFromBehind, signs.tracesOfDirt],
    location: locationLabels.TROPHY_ROOM,
    category: weaponCategories.BLADED_WEAPONS,
  },
  saber: {
    key: "saber",
    label: weaponLabels.SABER,
    signs: [signs.heavyBleeding, signs.signsOfAFight],
    location: locationLabels.VESTIBULE,
    category: weaponCategories.BLADED_WEAPONS,
  },
  antifreeze: {
    key: "antifreeze",
    label: weaponLabels.ANTIFREEZE,
    signs: [signs.cyanosisOrBruises, signs.oilySubstance],
    location: locationLabels.GARAGE,
    category: weaponCategories.POISONS,
  },
  ratPoison: {
    key: "ratPoison",
    label: weaponLabels.RAT_POISON,
    signs: [signs.heavyBleeding, signs.tracesOfADarkPowder],
    location: locationLabels.KITCHEN,
    category: weaponCategories.POISONS,
  },
  pesticide: {
    key: "pesticide",
    label: weaponLabels.PESTICIDE,
    signs: [signs.burnMarks, signs.strongOdors],
    location: locationLabels.SHED,
    category: weaponCategories.POISONS,
  },
  poisonousPlant: {
    key: "poisonousPlant",
    label: weaponLabels.POISONOUS_PLANT,
    signs: [signs.tracesOfDirt, signs.oilySubstance],
    location: locationLabels.BEDROOM,
    category: weaponCategories.POISONS,
  },
  leatherStrap: {
    key: "leatherStrap",
    label: weaponLabels.LEATHER_STRAP,
    signs: [signs.attackFromBehind, signs.strongOdors],
    location: locationLabels.GARAGE,
    category: weaponCategories.SUFFOCATING_WEAPONS,
  },
  pillow: {
    key: "pillow",
    label: weaponLabels.PILLOW,
    signs: [signs.cyanosisOrBruises, signs.signsOfAFight],
    location: locationLabels.BEDROOM,
    category: weaponCategories.SUFFOCATING_WEAPONS,
  },
  rope: {
    key: "rope",
    label: weaponLabels.ROPE,
    signs: [signs.tracesOfDirt, signs.burnMarks],
    location: locationLabels.SHED,
    category: weaponCategories.SUFFOCATING_WEAPONS,
  },
  curtainCord: {
    key: "curtainCord",
    label: weaponLabels.CURTAIN_CORD,
    signs: [signs.defensiveWounds, signs.signsOfAFight],
    location: locationLabels.LIBRARY,
    category: weaponCategories.SUFFOCATING_WEAPONS,
  },
};

export default weapons;
