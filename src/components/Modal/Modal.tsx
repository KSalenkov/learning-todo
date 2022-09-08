import React, {type PropsWithChildren} from 'react';
import {
  Modal as ModalComponent,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  onClose,
}) => {
  return (
    <ModalComponent animationType="fade" transparent={true} visible={open}>
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backgroundButton}
          onPress={onClose}
        />
        {children}
      </KeyboardAvoidingView>
    </ModalComponent>
  );
};
