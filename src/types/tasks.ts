export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type FilterType = 'all' | 'completed' | 'unfulfilled';

export enum FilterOptions {
  all = 'Показывать все задания',
  completed = 'Выполненные',
  unfulfilled = 'Не выполненные',
}
