import {Themes} from '../../../themes';

export enum Types {
  'switchTheme' = 'SWITCH_THEME',
  'restoreDefault' = 'RESTORE_DEFAULT',
}

export interface Action {
  type: Types;
  payload?: {
    theme: Themes;
  };
}
