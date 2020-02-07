import React from 'react';

import {Container, Icon, InfoContainer, Title, Description} from './styles';

interface Props {
  icon: string;
  title: string;
  description?: string;
  onPress(): void;
}

const Category: React.FC<Props> = ({icon, title, description, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} />
      <InfoContainer>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </InfoContainer>
    </Container>
  );
};

export default Category;
