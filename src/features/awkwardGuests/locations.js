import * as locationLabels from "features/awkwardGuests/locationLabels";
import * as weaponLabels from "features/awkwardGuests/weaponLabels";

const locations = {
  garage: {
    key: "garage",
    label: locationLabels.GARAGE,
    weapons: [
      weaponLabels.WRENCH,
      weaponLabels.ANTIFREEZE,
      weaponLabels.LEATHER_STRAP,
    ],
    connectedTo: [
      locationLabels.TROPHY_ROOM,
      locationLabels.BEDROOM,
      locationLabels.STUDY_CRIME_SCENE,
    ],
  },
  trophyRoom: {
    key: "trophyRoom",
    label: locationLabels.TROPHY_ROOM,
    weapons: [
      weaponLabels.SHOTGUN,
      weaponLabels.MACHETE,
      weaponLabels.DERRINGER_GUN,
    ],
    connectedTo: [
      locationLabels.GARAGE,
      locationLabels.VESTIBULE,
      locationLabels.BILLIARD_ROOM,
    ],
  },
  billiardRoom: {
    key: "billiardRoom",
    label: locationLabels.BILLIARD_ROOM,
    weapons: [weaponLabels.CUE],
    connectedTo: [locationLabels.TROPHY_ROOM, locationLabels.VESTIBULE],
    isStarting: true,
  },
  studyCrimeScene: {
    key: "studyCrimeScene",
    label: locationLabels.STUDY_CRIME_SCENE,
    weapons: [],
    connectedTo: [],
  },
  bedroom: {
    key: "bedroom",
    label: locationLabels.BEDROOM,
    weapons: [
      weaponLabels.PILLOW,
      weaponLabels.REVOLVER,
      weaponLabels.LETTER_OPENER,
      weaponLabels.POISONOUS_PLANT,
    ],
    connectedTo: [
      locationLabels.GARAGE,
      locationLabels.KITCHEN,
      locationLabels.STUDY_CRIME_SCENE,
    ],
  },
  vestibule: {
    key: "vestibule",
    label: locationLabels.VESTIBULE,
    weapons: [weaponLabels.SABER],
    connectedTo: [
      locationLabels.BILLIARD_ROOM,
      locationLabels.TROPHY_ROOM,
      locationLabels.LIVING_ROOM,
    ],
    isStarting: true,
  },
  kitchen: {
    key: "kitchen",
    label: locationLabels.KITCHEN,
    weapons: [
      weaponLabels.FRYING_PAN,
      weaponLabels.KITCHEN_KNIFE,
      weaponLabels.RAT_POISON,
    ],
    connectedTo: [
      locationLabels.BEDROOM,
      locationLabels.SHED,
      locationLabels.LIVING_ROOM,
    ],
  },
  livingRoom: {
    key: "livingRoom",
    label: locationLabels.LIVING_ROOM,
    weapons: [weaponLabels.BLUNDERBUSS],
    connectedTo: [
      locationLabels.VESTIBULE,
      locationLabels.LIBRARY,
      locationLabels.KITCHEN,
    ],
    isStarting: true,
  },
  shed: {
    key: "shed",
    label: locationLabels.SHED,
    weapons: [weaponLabels.SHOVEL, weaponLabels.PESTICIDE, weaponLabels.ROPE],
    connectedTo: [
      locationLabels.STUDY_CRIME_SCENE,
      locationLabels.KITCHEN,
      locationLabels.LIBRARY,
    ],
  },
  library: {
    key: "library",
    label: locationLabels.LIBRARY,
    weapons: [weaponLabels.CURTAIN_CORD],
    connectedTo: [locationLabels.LIVING_ROOM, locationLabels.SHED],
    isStarting: true,
  },
};

export default locations;
