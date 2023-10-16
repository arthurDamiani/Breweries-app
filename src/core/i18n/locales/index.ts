import { Platform, NativeModules } from 'react-native';
import { I18n } from 'i18n-js';

import en from './en-US';
import pt from './pt-BR';

type CustomTranslations = {
  [key: string]: string;
};

const normalizeTranslate: CustomTranslations = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

const i18n = new I18n({
  en_US: en,
  pt_BR: pt,
  en: en,
  pt_US: pt,
});

const language = getLanguageByDevice();
const translateNormalize = normalizeTranslate[language];
const iHaveThisLanguage = Object.keys(i18n.translations).includes(translateNormalize);
iHaveThisLanguage ? (i18n.locale = translateNormalize) : (i18n.defaultLocale = 'pt_BR');

export const translate = (key: string) => i18n.t(key);
