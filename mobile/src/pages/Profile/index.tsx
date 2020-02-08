import React, {useState, useCallback, useRef} from 'react';
import {Animated, ScrollView} from 'react-native';

import {useNavigation, useScrollToTop} from '@react-navigation/native';

import facebookDark from '~/assets/profile/facebook-dark-24.png';
import facebookLight from '~/assets/profile/facebook-light-24.png';
import githubDark from '~/assets/profile/github-dark-24.png';
import githubLight from '~/assets/profile/github-light-24.png';
import instagramDark from '~/assets/profile/instagram-dark-24.png';
import instagramLight from '~/assets/profile/instagram-light-24.png';
import linkedinDark from '~/assets/profile/linkedin-dark-24.png';
import linkedinLight from '~/assets/profile/linkedin-light-24.png';
import mediumDark from '~/assets/profile/medium-dark-24.png';
import mediumLight from '~/assets/profile/medium-light-24.png';
import pinterestDark from '~/assets/profile/pinterest-dark-24.png';
import pinterestLight from '~/assets/profile/pinterest-light-24.png';
import tumblrDark from '~/assets/profile/tumblr-dark-24.png';
import tumblrLight from '~/assets/profile/tumblr-light-24.png';
import twitterDark from '~/assets/profile/twitter-dark-24.png';
import twitterLight from '~/assets/profile/twitter-light-24.png';
import usernameDark from '~/assets/profile/username-dark-24.png';
import usernameLight from '~/assets/profile/username-light-24.png';
import whatsappDark from '~/assets/profile/whatsapp-dark-24.png';
import whatsappLight from '~/assets/profile/whatsapp-light-24.png';
import youtubeDark from '~/assets/profile/youtube-dark-24.png';
import youtubeLight from '~/assets/profile/youtube-light-24.png';
import Background from '~/components/Background';
import FlatIconButton from '~/components/FlatIconButton';

import AddInfoButton from './AddInfoButton';
import Header from './Header';
import InputField from './InputField';
import ProfilePicture from './ProfilePicture';
import {Container, InformationContainer, Title} from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

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

          <InputField icon={{name: 'account-circle'}} content="Nome" />

          <InputField
            icon={{source: {dark: usernameDark, light: usernameLight}}}
            content="Usuário"
          />

          <InputField icon={{name: 'info'}} content="Bio" />

          <Title>OUTRAS INFORMAÇÕES</Title>

          <InputField
            icon={{
              source: {
                dark: instagramDark,
                light: instagramLight,
              },
            }}
            content="Instagram"
          />

          <InputField
            icon={{
              source: {
                dark: facebookDark,
                light: facebookLight,
              },
            }}
            content="Facebook"
          />

          <InputField
            icon={{
              source: {
                dark: pinterestDark,
                light: pinterestLight,
              },
            }}
            content="Pinterest"
          />

          <InputField
            icon={{
              source: {
                dark: linkedinDark,
                light: linkedinLight,
              },
            }}
            content="LinkedIn"
          />

          <InputField
            icon={{
              source: {
                dark: githubDark,
                light: githubLight,
              },
            }}
            content="GitHub"
          />

          <InputField
            icon={{
              source: {
                dark: mediumDark,
                light: mediumLight,
              },
            }}
            content="Medium"
          />

          <InputField
            icon={{
              source: {
                dark: youtubeDark,
                light: youtubeLight,
              },
            }}
            content="YouTube"
          />

          <InputField
            icon={{
              source: {
                dark: twitterDark,
                light: twitterLight,
              },
            }}
            content="Twitter"
          />

          <InputField
            icon={{
              source: {
                dark: tumblrDark,
                light: tumblrLight,
              },
            }}
            content="Tumblr"
          />

          <InputField
            icon={{
              source: {
                dark: whatsappDark,
                light: whatsappLight,
              },
            }}
            content="WhatsApp"
          />

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
