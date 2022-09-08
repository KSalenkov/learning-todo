import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type Task} from '../../types/tasks';

interface TasksState {
  data: Task[];
}

const initialState: TasksState = {
  data: [
    {
      id: 0,
      title: 'Математика',
      description: 'Стр. 4 , упр. 36 а, б.',
      completed: false,
    },
    {
      id: 1,
      title: 'Русский язык',
      description: 'Учебник, стр. 4 , упр. 36 а, б.',
      completed: true,
    },
    {
      id: 2,
      title: 'ИЗО',
      description:
        'Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки',
      completed: false,
    },
    {
      id: 3,
      title: 'Литература',
      description: 'Учебник, стр. 4 , упр. 36 а, б.',
      completed: true,
    },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    markTask: (state, {payload}: PayloadAction<number>) => {
      const currentTask = state.data.find(task => task.id === payload)!;
      currentTask.completed = !currentTask.completed;
    },
    createTask: (state, {payload}: PayloadAction<Task>) => {
      state.data.push(payload);
    },
    deleteTask: (state, {payload}: PayloadAction<number>) => {
      state.data = state.data.filter(task => task.id !== payload);
    },
  },
});

export const actions = tasksSlice.actions;

export default tasksSlice.reducer;
