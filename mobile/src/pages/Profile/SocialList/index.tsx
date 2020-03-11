import React from 'react';

import {useTypedSelector} from '~/store';

import InputField from '../InputField';
import {findPreset} from '../InputField/presets';

const SocialList: React.FC = () => {
  const {informations} = useTypedSelector(state => state.profile);

  return (
    <>
      {informations.map((preset, index) => (
        <InputField
          key={`${index}`}
          options={{...findPreset(preset.name), content: preset.value}}
        />
      ))}
    </>
  );
};

export default SocialList;
