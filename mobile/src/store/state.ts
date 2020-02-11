import {Themes} from '../themes';

export interface RootState {
  settings: {
    theme: Themes;
  };
  profile: {
    name: string;
    username: string;
    bio: string;
  };
}
