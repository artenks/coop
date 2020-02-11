import {Profile} from '~/store/modules/profile/types';

import {Themes} from '../themes';

export interface RootState {
  settings: {
    theme: Themes;
  };
  profile: Profile;
}
