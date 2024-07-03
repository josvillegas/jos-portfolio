import { ui, foot, defaultLang } from "./ui";

export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getFooteru(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in foot) return lang as keyof typeof foot;
  return defaultLang;
}

export function getFooter(lang: keyof typeof foot) {
  return function t(key: keyof (typeof foot)[typeof defaultLang]) {
    return foot[lang][key] || foot[defaultLang][key];
  };
}
