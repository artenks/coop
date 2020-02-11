export interface Profile {
  name?: string;
  username?: string;
  bio?: string;
}

export enum Types {
  'updateName',
  'updateUsername',
  'updateBio',
}

export interface Action {
  type: Types;
  payload: Profile;
}
