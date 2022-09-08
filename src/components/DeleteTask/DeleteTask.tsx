import React from 'react';

import {IconButton} from '../IconButton';
import DeleteIcon from '../../assets/Icons/DeleteIcon';
import {Modal} from '../Modal';
import {Dialog} from '../Dialog';
import {useAppDispatch} from '../../store';
import {actions} from '../../store/tasks/slice';

import {useToggle} from '../../hooks/useToggle';

interface DeleteTaskProps {
  id: number;
}

export const DeleteTask: React.FC<DeleteTaskProps> = ({id}) => {
  const dispatch = useAppDispatch();
  const [open, {on, off}] = useToggle(false);

  const onDelete = () => {
    dispatch(actions.deleteTask(id));
  };

  return (
    <>
      <IconButton onPress={on}>
        <DeleteIcon />
      </IconButton>
      <Modal open={open} onClose={off}>
        <Dialog
          title="Удалить задание?"
          confirmText="Удалить"
          onConfirm={onDelete}
          onCancel={off}
        />
      </Modal>
    </>
  );
};
