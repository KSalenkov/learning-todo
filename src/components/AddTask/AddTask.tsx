import React, {useEffect} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

import {useAppDispatch} from '../../store';
import {actions} from '../../store/tasks/slice';

import {Modal} from '../Modal';
import {Dialog} from '../Dialog';
import {Button} from '../Button';

import {Colors} from '../../styles/colors';

import {useForm, Controller} from 'react-hook-form';
import {Task} from '../../types/tasks';

import {useToggle} from '../../hooks/useToggle';

interface FormData {
  title: string;
  description: string;
}

const defaultValues = {
  title: '',
  description: '',
};

export const AddTask: React.FC = () => {
  const dispatch = useAppDispatch();
  const [open, {on, off}] = useToggle(false);

  const {handleSubmit, control, reset} = useForm<FormData>({
    defaultValues,
  });

  const onSubmit = (formData: FormData) => {
    const newTask: Task = {
      ...formData,
      id: Date.now(),
      completed: false,
    };
    dispatch(actions.createTask(newTask));
    off();
  };

  useEffect(() => {
    if (!open) {
      reset(defaultValues);
    }
  }, [open, reset]);

  return (
    <>
      <Button label="Добавить" onPress={on} style={styles.addButton} />
      <Modal open={open} onClose={off}>
        <Dialog
          title="Добавить предмет"
          description="Укажите заголовок и задание"
          confirmText="Сохранить"
          onCancel={off}
          onConfirm={handleSubmit(onSubmit)}>
          <View style={styles.form}>
            <Controller
              control={control}
              name="title"
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <TextInput
                  style={[
                    styles.textInput,
                    styles.margin,
                    error && styles.inputError,
                  ]}
                  placeholder="Заголовок"
                  selectionColor={Colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{
                required: true,
              }}
              render={({field: {value, onChange}, fieldState: {error}}) => (
                <TextInput
                  style={[styles.textInput, error && styles.inputError]}
                  placeholder="Задание"
                  selectionColor={Colors.lightBlue}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
        </Dialog>
      </Modal>
    </>
  );
};
