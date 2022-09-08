import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {ButtonProps} from './Button';

type StylesProps = Pick<ButtonProps, 'size' | 'color'>;

export const useStyles = ({size, color}: StylesProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: color === 'primary' ? Colors.blue : Colors.transparent,
      width: '100%',
      height: size === 'large' ? 55 : 36,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      ...(color === 'secondary'
        ? {
            borderWidth: 2,
            borderColor: Colors.blue,
          }
        : {}),
    },
    label: {
      color: color === 'primary' ? Colors.white : Colors.blue,
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: size === 'large' ? 16 : 14,
    },
  });
