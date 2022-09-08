import React, {type PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface IconButtonProps {
  onPress: () => void;
}

export const IconButton: React.FC<PropsWithChildren<IconButtonProps>> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};
