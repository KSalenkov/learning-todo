import React from 'react';
import {TouchableOpacity} from 'react-native';

import BlankCheckbox from '../../assets/Icons/BlankCheckbox';
import FilledCheckbox from '../../assets/Icons/FilledCheckbox';

export interface CheckboxProps {
  onPress: () => void;
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({onPress, checked}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {checked ? <FilledCheckbox /> : <BlankCheckbox />}
    </TouchableOpacity>
  );
};
