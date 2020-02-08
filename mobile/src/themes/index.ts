export enum Themes {
  'dark',
  'light',
}

export interface ThemeSelect {
  dark: any;
  light: any;
}

export function select(theme: Themes, {dark, light}: ThemeSelect): any {
  if (theme === Themes.dark) {
    return dark;
  }

  return light;
}

export default {
  select,
};
