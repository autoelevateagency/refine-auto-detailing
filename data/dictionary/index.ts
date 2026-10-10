import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary, Locale };
