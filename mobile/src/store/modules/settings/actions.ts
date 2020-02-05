import {Themes} from '../../../themes';
import {Action, Types} from './types';

export function switchTheme(theme: Themes): Action {
  return {
    type: Types.switchTheme,
    payload: {
      theme,
    },
  };
}

export function restoreDefault(): Action {
  return {
    type: Types.restoreDefault,
  };
}
