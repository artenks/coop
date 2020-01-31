import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import {Container} from './styles';

export default function FloatingActionButton({icon, ...rest}) {
  return (
    <Container
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.5,
        shadowRadius: 20,
      }}
      {...rest}>
      <Icon name={icon} color="#fff" size={20} />
    </Container>
  );
}

FloatingActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
};
