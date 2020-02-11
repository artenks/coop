import React from 'react';
import {TextProps} from 'react-native';

import {Text} from './styles';

const Title: React.FC<TextProps> = props => {
  return <Text {...props} />;
};

export default Title;
