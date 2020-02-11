import {combineReducers} from 'redux';

import profile from './profile/reducer';
import settings from './settings/reducer';

export default combineReducers({
  profile,
  settings,
});
