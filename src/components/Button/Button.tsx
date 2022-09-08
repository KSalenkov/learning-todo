import React from 'react';
import {
  TouchableOpacity,
  Text,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {useStyles} from './styles';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  size?: 'small' | 'large';
  color?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  size = 'large',
  color = 'primary',
  style,
}) => {
  const styles = useStyles({size, color});

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
