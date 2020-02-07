import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import FlatIconButton from '../FlatIconButton';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <FlatIconButton icon="arrow-back" onPress={handleBack} />;
};

export default BackButton;
