import produce from 'immer';

import {Themes} from '../../../themes';
import {Action, Types} from './types';

const INITIAL_STATE = {
  theme: Themes.light,
};

function theme(state = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.switchTheme:
        if (action.payload) {
          draft.theme = action.payload.theme;
        }
        break;
      case Types.restoreDefault:
        draft.theme = INITIAL_STATE.theme;
        break;
      default:
        break;
    }
  });
}

export default theme;
