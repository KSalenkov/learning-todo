import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {Modal} from '../Modal';
import {Button} from '../Button';

import {useToggle} from '../../hooks/useToggle';

import {type FilterType, FilterOptions} from '../../types/tasks';

interface FiltersProps {
  filterType: FilterType;
  onChange: (value: FilterType) => void;
}

const filtersOptions: FilterType[] = ['all', 'completed', 'unfulfilled'];

export const Filters: React.FC<FiltersProps> = ({filterType, onChange}) => {
  const [open, {on, off}] = useToggle(false);

  const handleChange = (value: FilterType) => {
    onChange(value);
    off();
  };

  return (
    <>
      <Button
        label={FilterOptions[filterType]}
        onPress={on}
        size="small"
        color="secondary"
      />
      <Modal open={open} onClose={off}>
        <View style={styles.container}>
          <View style={styles.filtersContainer}>
            {filtersOptions.map((value, idx) => (
              <TouchableOpacity
                key={value}
                activeOpacity={0.8}
                style={[
                  styles.button,
                  idx !== filtersOptions.length - 1 && styles.bottomBorder,
                ]}
                onPress={() => handleChange(value)}>
                <Text
                  style={[
                    styles.text,
                    value === filterType && styles.selected,
                  ]}>
                  {FilterOptions[value]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};
