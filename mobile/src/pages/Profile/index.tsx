import React, {useState, useCallback, useRef} from 'react';
import {Animated, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {useNavigation, useScrollToTop} from '@react-navigation/native';

import usernameDark from '~/assets/profile/username-dark-24.png';
import usernameLight from '~/assets/profile/username-light-24.png';
import Background from '~/components/Background';
import FlatIconButton from '~/components/FlatIconButton';
import {useTypedSelector} from '~/store';
import {
  updateName,
  updateUsername,
  updateBio,
} from '~/store/modules/profile/actions';

import AddInfoButton from './AddInfoButton';
import Header from './Header';
import InputField from './InputField';
import ProfilePicture from './ProfilePicture';
import SocialList from './SocialList';
import {Container, InformationContainer, Title} from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {name, username, bio} = useTypedSelector(state => state.profile);

  const scrollRef = useRef<ScrollView>(null);
  const [scrollOffset] = useState(new Animated.Value(0));

  const handleGoToTop = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({y: 0});
    }
  }, [scrollRef]);

  const handleOpenSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  useScrollToTop(scrollRef);

  return (
    <Background>
      <Container
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16}
        ref={scrollRef}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {y: scrollOffset},
            },
          },
        ])}>
        <InformationContainer>
          <Title>INFORMAÇÕES PESSOAIS</Title>

          <InputField
            onSave={value => dispatch(updateName(value))}
            options={{
              icon: {name: 'account-circle'},
              content: name || '',
              placeholder: 'Nome',
              isValidValue: value => value.length > 3,
            }}
          />

          <InputField
            onSave={value => dispatch(updateUsername(value))}
            options={{
              icon: {source: {dark: usernameDark, light: usernameLight}},
              content: username || '',
              placeholder: 'Usuário',
              isValidValue: value => value.length > 3,
            }}
          />

          <InputField
            onSave={value => dispatch(updateBio(value))}
            options={{
              icon: {name: 'info'},
              content: bio || '',
              placeholder: 'Bio',
              isValidValue: value => value.length > 3,
            }}
          />

          <Title>OUTRAS INFORMAÇÕES</Title>

          <SocialList />

          <AddInfoButton />
        </InformationContainer>
      </Container>

      <Header offset={scrollOffset}>
        <FlatIconButton icon="share" />
        <ProfilePicture offset={scrollOffset} onPress={handleGoToTop} />
        <FlatIconButton icon="settings" onPress={handleOpenSettings} />
      </Header>
    </Background>
  );
};

export default Profile;
