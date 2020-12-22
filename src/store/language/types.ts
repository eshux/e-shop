export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export type Languages = 'lv' | 'en';

export type LanguageState = {
  language: Languages
};

export type ChangeLanguage = {
  type: typeof CHANGE_LANGUAGE;
  language: Languages;
};

export type AllActions =  ChangeLanguage;

