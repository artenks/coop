import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import RootApp from './src';
import {store, persistor} from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
