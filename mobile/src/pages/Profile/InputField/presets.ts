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
import whatsappDark from '~/assets/profile/whatsapp-dark-24.png';
import whatsappLight from '~/assets/profile/whatsapp-light-24.png';
import youtubeDark from '~/assets/profile/youtube-dark-24.png';
import youtubeLight from '~/assets/profile/youtube-light-24.png';
import {updateName} from '~/store/modules/profile/actions';
import {AdditionalInfo} from '~/store/modules/profile/types';

import {InputFieldLayoutProps} from './index';

const presets = {
  instagram: <InputFieldLayoutProps>{
    placeholder: 'Instagram',
    icon: {source: {dark: instagramDark, light: instagramLight}},
    isValidValue: (value: string) => value.length > 3,
    action: updateName,
  },
  facebook: <InputFieldLayoutProps>{
    placeholder: 'Facebook',
    icon: {source: {dark: facebookDark, light: facebookLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  github: <InputFieldLayoutProps>{
    placeholder: 'GitHub',
    icon: {source: {dark: githubDark, light: githubLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  linkedin: <InputFieldLayoutProps>{
    placeholder: 'LinkedIn',
    icon: {source: {dark: linkedinDark, light: linkedinLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  medium: <InputFieldLayoutProps>{
    placeholder: 'Medium',
    icon: {source: {dark: mediumDark, light: mediumLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  pinterest: <InputFieldLayoutProps>{
    placeholder: 'Pinterest',
    icon: {source: {dark: pinterestDark, light: pinterestLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  tumblr: <InputFieldLayoutProps>{
    placeholder: 'Tumblr',
    icon: {source: {dark: tumblrDark, light: tumblrLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  twitter: <InputFieldLayoutProps>{
    placeholder: 'Twitter',
    icon: {source: {dark: twitterDark, light: twitterLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  whatsapp: <InputFieldLayoutProps>{
    placeholder: 'WhatsApp',
    icon: {source: {dark: whatsappDark, light: whatsappLight}},
    isValidValue: (value: string) => value.length > 3,
  },
  youtube: <InputFieldLayoutProps>{
    placeholder: 'YouTube',
    icon: {source: {dark: youtubeDark, light: youtubeLight}},
    isValidValue: (value: string) => value.length > 3,
  },
};

export function findPreset(search: AdditionalInfo): InputFieldLayoutProps {
  return presets[search];
}
