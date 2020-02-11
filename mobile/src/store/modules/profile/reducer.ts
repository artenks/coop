import produce from 'immer';

import {Action, Profile, Types} from './types';

const INITIAL_STATE: Profile = {};

function profile(state = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.updateName:
        draft.name = action.payload.name;
        break;
      case Types.updateUsername:
        draft.username = action.payload.username;
        break;
      case Types.updateBio:
        draft.bio = action.payload.bio;
        break;
      default:
        break;
    }
  });
}

export default profile;
