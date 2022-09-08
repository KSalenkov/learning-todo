import {useState, useMemo} from 'react';
import {useAppSelector} from '../store';
import {selectTasks} from '../store/tasks/selectors';

import {type FilterType} from '../types/tasks';

export const useTasks = () => {
  const tasksData = useAppSelector(selectTasks);

  const [filterType, setFilterType] = useState<FilterType>('all');

  const filteredData = useMemo(() => {
    return tasksData.filter(task => {
      if (filterType !== 'all') {
        return filterType === 'completed' ? task.completed : !task.completed;
      }
      return true;
    });
  }, [tasksData, filterType]);

  return {
    tasksData: filteredData,
    filterType,
    setFilterType,
  };
};
