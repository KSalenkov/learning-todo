import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import {useAppDispatch} from '../../store';
import {actions} from '../../store/tasks/slice';

import {Checkbox} from '../Checkbox';
import {DeleteTask} from '../DeleteTask';

interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  isLast?: boolean;
}

export const Task: React.FC<TaskProps> = ({
  id,
  title,
  description,
  completed,
  isLast = false,
}) => {
  const dispatch = useAppDispatch();

  const handleCheck = () => {
    dispatch(actions.markTask(id));
  };

  return (
    <View style={[styles.container, isLast && styles.last]}>
      <Checkbox checked={completed} onPress={handleCheck} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.description, completed && styles.completed]}>
          {description}
        </Text>
      </View>
      <DeleteTask id={id} />
    </View>
  );
};
