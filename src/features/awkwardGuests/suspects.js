import portraits from "assets/portraits";
import motives from "features/awkwardGuests/motives";
import * as suspectNames from "features/awkwardGuests/suspectNames";

const suspects = {
  a: {
    key: "a",
    label: suspectNames.ANGELICA_ALBINSON,
    motives: [
      motives.poisonedChalice,
      motives.extremePrinciples,
      motives.sinisterPlans,
    ],
    img: portraits.a,
  },
  b: {
    key: "b",
    label: suspectNames.BERWICK_SISTERS,
    motives: [
      motives.familyVendetta,
      motives.socialUndermining,
      motives.excessiveAmbition,
    ],
    img: portraits.b,
  },
  c: {
    key: "c",
    label: suspectNames.CLAUDETTE_CAZELAR,
    motives: [
      motives.exposedFraud,
      motives.fatalRejection,
      motives.unforseenBusiness,
    ],
    img: portraits.c,
  },
  g: {
    key: "g",
    label: suspectNames.GREG_GAFFNEY,
    motives: [motives.stolenRecipe, motives.fixedFights, motives.animalCruelty],
    img: portraits.g,
  },
  m: {
    key: "m",
    label: suspectNames.MORTIMER_W_MOLLOW,
    motives: [motives.brokenDreams, motives.piratedIdea, motives.childNeglect],
    img: portraits.m,
  },
  s: {
    key: "s",
    label: suspectNames.STANLEY_SMITHE,
    motives: [
      motives.macabreBet,
      motives.fraternityHazing,
      motives.fakeIdentity,
    ],
    img: portraits.s,
  },
};

export default suspects;
