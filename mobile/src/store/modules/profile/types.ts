export interface Profile {
  name?: string;
  username?: string;
  bio?: string;
  informations: Information[];
}

interface Information {
  name: AdditionalInfo;
  value: string;
}

export type AdditionalInfo =
  | 'instagram'
  | 'facebook'
  | 'pinterest'
  | 'linkedin'
  | 'github'
  | 'medium'
  | 'youtube'
  | 'twitter'
  | 'tumblr'
  | 'whatsapp';

export enum Types {
  'updateName' = 'UPDATE_NAME',
  'updateUsername' = 'UPDATE_USERNAME',
  'updateBio' = 'UPDATE_BIO',
}

export interface Action {
  type: Types;
  payload: Profile;
}
