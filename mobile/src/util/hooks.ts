import {useState, useEffect, Dispatch, SetStateAction} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

type PersistedResponse<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialValue: T,
): PersistedResponse<T> {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then(value => {
      if (value) {
        setState(JSON.parse(value));
      }
    });
  }, [key]);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    })();
  }, [key, state]);

  return [state, setState];
}
