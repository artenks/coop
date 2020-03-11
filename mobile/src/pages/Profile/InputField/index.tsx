import React, {useState, useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '~/store';
import {AdditionalInfo} from '~/store/modules/profile/types';
import Theme, {ThemeSelect} from '~/themes';

import EditDialog from './EditDialog';
import {findPreset} from './presets';
import {Container, IconContainer, Label} from './styles';

export interface InputFieldLayoutProps {
  icon: {
    name?: string;
    source?: ThemeSelect;
  };
  content: string;
  placeholder: string;
  isValidValue(text: string): boolean;
  action(value: string): any;
}

interface Props {
  options: AdditionalInfo | InputFieldLayoutProps;
}

const InputField: React.FC<Props> = ({options}) => {
  const theme = useTypedSelector(state => state.settings.theme);
  const dispatch = useDispatch();
  const props: InputFieldLayoutProps = (() => {
    if (typeof options === 'string') {
      return findPreset(options);
    }

    return options;
  })();

  const [isModalOpenned, setModalOpenned] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalOpenned(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpenned(false);
  }, []);

  const handleSubmit = useCallback(
    (value: string): boolean => {
      const isValid = props.isValidValue(value);

      if (isValid) {
        dispatch(props.action(value));
        handleCloseModal();
      }

      return isValid;
    },
    [dispatch, handleCloseModal, props],
  );

  return (
    <>
      <Container onPress={handleOpenModal}>
        {(() => {
          if (props.icon.name) {
            return (
              <IconContainer>
                <Icon name={props.icon.name} size={24} color="#666" />
              </IconContainer>
            );
          }

          if (props.icon.source) {
            return (
              <IconContainer>
                <Image source={Theme.select(theme, props.icon.source)} />
              </IconContainer>
            );
          }
        })()}
        <Label>{props.content || props.placeholder}</Label>
      </Container>

      <EditDialog
        title={props.placeholder}
        text={props.content}
        isVisible={isModalOpenned}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default InputField;
