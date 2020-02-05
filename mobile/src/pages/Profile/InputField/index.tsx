import React from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, IconContainer, Field} from './styles';

interface Props extends TextInputProps {
  icon?: string;
}

const InputField: React.FC<Props> = ({icon, children, ...rest}) => {
  return (
    <Container>
      {(() => {
        if (children) {
          return <IconContainer>{children}</IconContainer>;
        }

        if (icon) {
          return (
            <IconContainer>
              <Icon name={icon} size={24} color="#666" />
            </IconContainer>
          );
        }
      })()}
      <Field {...rest} />
    </Container>
  );
};

export default InputField;
