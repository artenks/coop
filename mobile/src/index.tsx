import React, {useContext} from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider, ThemeContext} from 'styled-components/native';

import createRouter from '~/routes';

import {useTypedSelector} from './store';
import {Themes} from './themes';
import dark from './themes/dark';
import light from './themes/light';

const Content: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  const Routes = createRouter(colors);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={colors.barStyle} />
      <Routes />
    </>
  );
};

const App: React.FC = () => {
  const theme = useTypedSelector(state => state.theme.theme);

  return (
    <ThemeProvider theme={theme === Themes.light ? light : dark}>
      <Content />
    </ThemeProvider>
  );
};

export default App;
