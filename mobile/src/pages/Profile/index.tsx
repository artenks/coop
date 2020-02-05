import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationBottomTabScreenComponent} from 'react-navigation-tabs';

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

import AddMoreButton from './AddMoreButton';
import InputField from './InputField';
import LogoutButton from './LogoutButton';
import ProfilePicture from './ProfilePicture';
import {Container, Header, InformationContainer, Title} from './styles';

const Profile: NavigationBottomTabScreenComponent = () => {
  return (
    <Background>
      <Container>
        <Header>
          <FlatIconButton icon="share" />
          <ProfilePicture />
          <FlatIconButton icon="settings" />
        </Header>

        <InformationContainer>
          <Title>INFORMAÇÕES PESSOAIS</Title>

          <InputField icon="account-circle" placeholder="Nome" />

          <InputField placeholder="Usuário">
            <Image source={username} />
          </InputField>

          <InputField icon="info" placeholder="Bio" />
        </InformationContainer>

        <InformationContainer>
          <Title>OUTRAS INFORMAÇÕES</Title>

          <InputField placeholder="Instagram">
            <Image source={instagram} />
          </InputField>

          <InputField placeholder="Facebook">
            <Image source={facebook} />
          </InputField>

          <InputField placeholder="Pinterest">
            <Image source={pinterest} />
          </InputField>

          <InputField placeholder="LinkedIn">
            <Image source={linkedin} />
          </InputField>

          <InputField placeholder="GitHub">
            <Image source={github} />
          </InputField>

          <InputField placeholder="Medium">
            <Image source={medium} />
          </InputField>

          <InputField placeholder="YouTube">
            <Image source={youtube} />
          </InputField>

          <InputField placeholder="Twitter">
            <Image source={twitter} />
          </InputField>

          <InputField placeholder="Tumblr">
            <Image source={tumblr} />
          </InputField>

          <InputField placeholder="WhatsApp">
            <Image source={whatsapp} />
          </InputField>
        </InformationContainer>

        <AddMoreButton>Adicionar Informação</AddMoreButton>
        <LogoutButton>Sair</LogoutButton>
      </Container>
    </Background>
  );
};

Profile.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" color={tintColor} size={24} />
  ),
};

export default Profile;
