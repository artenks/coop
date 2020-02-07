import React, {useContext} from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider, ThemeContext} from 'styled-components/native';

import Routes from '~/routes';

import {useTypedSelector} from './store';
import {Themes} from './themes';
import dark from './themes/dark';
import light from './themes/light';

const Content: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={colors.barStyle} />
      <Routes />
    </>
  );
};

const App: React.FC = () => {
  const theme = useTypedSelector(state => state.settings.theme);

  return (
    <ThemeProvider theme={theme === Themes.light ? light : dark}>
      <Content />
    </ThemeProvider>
  );
};

export default App;
