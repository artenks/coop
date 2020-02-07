import React, {useState, useCallback, useRef} from 'react';
import {Animated, Image, ScrollView} from 'react-native';
import {useNavigation, useScrollToTop} from '@react-navigation/native';

import facebook from '~/assets/facebook.png';
import github from '~/assets/github.png';
import instagram from '~/assets/instagram.png';
import linkedin from '~/assets/linkedin.png';
import medium from '~/assets/medium.png';
import pinterest from '~/assets/pinterest.png';
import tumblr from '~/assets/tumblr.png';
import twitter from '~/assets/twitter.png';
import username from '~/assets/username.png';
import whatsapp from '~/assets/whatsapp.png';
import youtube from '~/assets/youtube.png';
import Background from '~/components/Background';
import FlatIconButton from '~/components/FlatIconButton';

import Header from './Header';
import InputField from './InputField';
import ProfilePicture from './ProfilePicture';
import {Container, InformationContainer, Title} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  const scrollRef = useRef<ScrollView>(null);
  const [scrollOffset] = useState(new Animated.Value(0));

  const handleGoToTop = useCallback(() => {
    scrollRef.current?.scrollTo({y: 0});
  }, [scrollRef]);

  const handleOpenSettings = useCallback(() => {
    navigation.navigate('Settings');
  }, [navigation]);

  useScrollToTop(scrollRef);

  return (
    <Background>
      <Container
        scrollEventThrottle={10}
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

          <InputField icon="account-circle" content="Nome" />

          <InputField content="Usuário">
            <Image source={username} />
          </InputField>

          <InputField icon="info" content="Bio" />

          <Title>OUTRAS INFORMAÇÕES</Title>

          <InputField content="Instagram">
            <Image source={instagram} />
          </InputField>

          <InputField content="Facebook">
            <Image source={facebook} />
          </InputField>

          <InputField content="Pinterest">
            <Image source={pinterest} />
          </InputField>

          <InputField content="LinkedIn">
            <Image source={linkedin} />
          </InputField>

          <InputField content="GitHub">
            <Image source={github} />
          </InputField>

          <InputField content="Medium">
            <Image source={medium} />
          </InputField>

          <InputField content="YouTube">
            <Image source={youtube} />
          </InputField>

          <InputField content="Twitter">
            <Image source={twitter} />
          </InputField>

          <InputField content="Tumblr">
            <Image source={tumblr} />
          </InputField>

          <InputField content="WhatsApp">
            <Image source={whatsapp} />
          </InputField>
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
