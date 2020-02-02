import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'coop',
      storage: AsyncStorage,
      whitelist: ['theme'],
    },
    reducers,
  );

  return persistedReducer;
};
