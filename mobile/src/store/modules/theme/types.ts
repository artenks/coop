import {Themes} from '../../../themes';

export enum Types {
  'switchTheme',
  'restoreDefault',
}

export interface Action {
  type: Types;
  payload?: {
    theme: Themes;
  };
}
