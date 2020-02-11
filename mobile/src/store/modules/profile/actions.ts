import {Action, Types} from './types';

export function updateName(name: string): Action {
  return {
    type: Types.updateName,
    payload: {
      name,
    },
  };
}

export function updateUsername(username: string): Action {
  return {
    type: Types.updateUsername,
    payload: {
      username,
    },
  };
}

export function updateBio(bio: string): Action {
  return {
    type: Types.updateBio,
    payload: {
      bio,
    },
  };
}
