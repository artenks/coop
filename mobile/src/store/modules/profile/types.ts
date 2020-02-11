export interface Profile {
  name?: string;
  username?: string;
  bio?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
    youtube?: string;
    twitter?: string;
    tumblr?: string;
    whatsapp?: string;
  };
}

export enum Types {
  'updateName' = 'UPDATE_NAME',
  'updateUsername' = 'UPDATE_USERNAME',
  'updateBio' = 'UPDATE_BIO',
}

export interface Action {
  type: Types;
  payload: Profile;
}
