import React, {useState, useEffect, useCallback} from 'react';
import {Alert, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Picker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  checkCameraPermission,
  requestCameraPermission,
  CheckPermissionResults,
  RequestPermissionResults,
} from '~/services/permissions';

import {
  Wrapper,
  Title,
  Row,
  RoundButton,
  IconContainer,
  Label,
  EmptyContainer,
} from './styles';

interface Props {
  isOpenned: boolean;
  onClose(): void;
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    elevation: 16,
  },
});

const ImagePicker: React.FC<Props> = ({isOpenned, onClose}) => {
  const [isVisible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleRequestPermissions = useCallback(async () => {
    const requestResult = await requestCameraPermission();

    switch (requestResult) {
      case RequestPermissionResults.GRANTED:
        setVisible(true);
        break;
      case RequestPermissionResults.DENIED:
        handleClose();
        break;
    }
  }, [handleClose]);

  const handleCameraPicker = useCallback(() => {
    Picker.launchCamera({}, response => {
      console.log(response);
    });
  }, []);

  const handleGalleryPicker = useCallback(() => {
    Picker.launchImageLibrary({}, response => {
      console.log(response);
    });
  }, []);

  useEffect(() => {
    if (isOpenned) {
      (async () => {
        const checkResult = await checkCameraPermission();

        switch (checkResult) {
          case CheckPermissionResults.GRANTED:
            setVisible(true);
            break;
          case CheckPermissionResults.DENIED:
            handleRequestPermissions();
            break;
          default:
            Alert.alert('Erro', 'Não foi possível acessar sua câmera/galeria');
            handleClose();
            break;
        }
      })();
    } else {
      setVisible(false);
    }
  }, [handleClose, isOpenned, handleRequestPermissions]);

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={handleClose}
      onSwipeComplete={handleClose}
      swipeDirection={['down']}
      onBackdropPress={handleClose}
      backdropColor="rgba(0, 0, 0, 0.6)"
      style={styles.modal}>
      <Wrapper>
        <Title>Selecionar a fonte</Title>
        <Row>
          <TouchableWithoutFeedback onPress={handleCameraPicker}>
            <RoundButton>
              <IconContainer>
                <Icon name="camera-alt" size={24} color="#666" />
              </IconContainer>

              <Label>Câmera</Label>
            </RoundButton>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleGalleryPicker}>
            <RoundButton>
              <IconContainer>
                <Icon name="photo" size={24} color="#666" />
              </IconContainer>

              <Label>Galeria</Label>
            </RoundButton>
          </TouchableWithoutFeedback>

          <EmptyContainer />
        </Row>
      </Wrapper>
    </Modal>
  );
};

export default ImagePicker;
