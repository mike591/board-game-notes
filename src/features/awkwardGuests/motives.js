import motivesImages from "assets/motives";
import * as suspectNames from "features/awkwardGuests/suspectNames";

export const EVIDENCE = "EVIDENCE";

const motives = {
  poisonedChalice: {
    label: "Poisoned chalice",
    proof: [
      suspectNames.CLAUDETTE_CAZELAR,
      suspectNames.BERWICK_SISTERS,
      EVIDENCE,
    ],
    img: motivesImages.thunder,
  },
  extremePrinciples: {
    label: "Extreme principles",
    proof: [
      suspectNames.STANLEY_SMITHE,
      suspectNames.CLAUDETTE_CAZELAR,
      EVIDENCE,
    ],
    img: motivesImages.heart,
  },
  sinisterPlans: {
    label: "Sinister plans",
    proof: [
      suspectNames.MORTIMER_W_MOLLOW,
      suspectNames.GREG_GAFFNEY,
      EVIDENCE,
    ],
    img: motivesImages.money,
  },
  familyVendetta: {
    label: "Family Vendetta",
    proof: [
      suspectNames.ANGELICA_ALBINSON,
      suspectNames.MORTIMER_W_MOLLOW,
      EVIDENCE,
    ],
    img: motivesImages.vengeance,
  },
  socialUndermining: {
    label: "Social undermining",
    proof: [
      suspectNames.CLAUDETTE_CAZELAR,
      suspectNames.GREG_GAFFNEY,
      EVIDENCE,
    ],
    img: motivesImages.thunder,
  },
  excessiveAmbition: {
    label: "Excessive ambition",
    proof: [
      suspectNames.MORTIMER_W_MOLLOW,
      suspectNames.STANLEY_SMITHE,
      EVIDENCE,
    ],
    img: motivesImages.money,
  },
  exposedFraud: {
    label: "Exposed fraud",
    proof: [
      suspectNames.MORTIMER_W_MOLLOW,
      suspectNames.GREG_GAFFNEY,
      EVIDENCE,
    ],
    img: motivesImages.blackmail,
  },
  fatalRejection: {
    label: "Fatal rejection",
    proof: [
      suspectNames.STANLEY_SMITHE,
      suspectNames.ANGELICA_ALBINSON,
      EVIDENCE,
    ],
    img: motivesImages.heart,
  },
  unforseenBusiness: {
    label: "Unforseen business",
    proof: [suspectNames.GREG_GAFFNEY, suspectNames.BERWICK_SISTERS, EVIDENCE],
    img: motivesImages.reverse,
  },
  stolenRecipe: {
    label: "Stolen recipe",
    proof: [
      suspectNames.ANGELICA_ALBINSON,
      suspectNames.BERWICK_SISTERS,
      EVIDENCE,
    ],
    img: motivesImages.reverse,
  },
  fixedFights: {
    label: "Fixed fights",
    proof: [
      suspectNames.STANLEY_SMITHE,
      suspectNames.MORTIMER_W_MOLLOW,
      EVIDENCE,
    ],
    img: motivesImages.blackmail,
  },
  animalCruelty: {
    label: "Animal cruelty",
    proof: [
      suspectNames.BERWICK_SISTERS,
      suspectNames.CLAUDETTE_CAZELAR,
      EVIDENCE,
    ],
    img: motivesImages.thunder,
  },
  brokenDreams: {
    label: "Broken dreams",
    proof: [
      suspectNames.GREG_GAFFNEY,
      suspectNames.ANGELICA_ALBINSON,
      EVIDENCE,
    ],
    img: motivesImages.heart,
  },
  piratedIdea: {
    label: "Pirated idea",
    proof: [
      suspectNames.CLAUDETTE_CAZELAR,
      suspectNames.STANLEY_SMITHE,
      EVIDENCE,
    ],
    img: motivesImages.reverse,
  },
  childNeglect: {
    label: "Child neglect",
    proof: [
      suspectNames.BERWICK_SISTERS,
      suspectNames.STANLEY_SMITHE,
      EVIDENCE,
    ],
    img: motivesImages.vengeance,
  },
  macabreBet: {
    label: "Macabre bet",
    proof: [
      suspectNames.GREG_GAFFNEY,
      suspectNames.CLAUDETTE_CAZELAR,
      EVIDENCE,
    ],
    img: motivesImages.money,
  },
  fraternityHazing: {
    label: "Fraternity hazing",
    proof: [
      suspectNames.ANGELICA_ALBINSON,
      suspectNames.BERWICK_SISTERS,
      EVIDENCE,
    ],
    img: motivesImages.vengeance,
  },
  fakeIdentity: {
    label: "Fake identity",
    proof: [
      suspectNames.ANGELICA_ALBINSON,
      suspectNames.MORTIMER_W_MOLLOW,
      EVIDENCE,
    ],
    img: motivesImages.blackmail,
  },
};

export default motives;
