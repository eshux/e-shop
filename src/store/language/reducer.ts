import { LanguageState, AllActions, CHANGE_LANGUAGE } from './types';

const initialStore: LanguageState = {
  language: 'en'
};

export const languages = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        language: action.language,
      };
    }
    default:
      return state;
  }
};
