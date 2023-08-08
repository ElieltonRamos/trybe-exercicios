export interface CategoryTranslations {
  en: string;
  no: string;
  se: string;
}

export interface CategoryFullNameTranslations {
  en: string;
  no: string;
  se: string;
}

export interface KnownNameTranslations {
  en: string;
}

export interface FullNameTranslations {
  en: string;
}

export interface MotivationTranslations {
  en: string;
  se: string;
}

export interface Link {
  rel: string;
  href: string;
  action: string;
  types: string;
}

export interface Laureate {
  id: string;
  knownName: KnownNameTranslations;
  orgName?: KnownNameTranslations;
  fullName: FullNameTranslations;
  portion: string;
  sortOrder: string;
  motivation: MotivationTranslations;
  links: Link[];
}

export interface NobelPrize {
  awardYear: string;
  category: CategoryTranslations;
  categoryFullName: CategoryFullNameTranslations;
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  links: Link[];
  laureates: Laureate[];
}

export type LaureateProps = {
  knownName: string;
  motivation: string;
};

export type AppState = {
  nobelPrizes: NobelPrizeType[];
};

export type NobelPrizeType = {
  category: string;
  date: string;
  knownName: string;
  motivation: string;
};
