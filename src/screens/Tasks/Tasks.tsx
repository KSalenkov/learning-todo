import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';

import {Task} from '../../components/Task';
import {Filters} from '../../components/Filters';
import {AddTask} from '../../components/AddTask';

import {useTasks} from '../../hooks/useTasks';

export const Tasks: React.FC = () => {
  const {tasksData, filterType, setFilterType} = useTasks();

  return (
    <View style={styles.container}>
      <View style={[styles.contentWrapper, styles.header]}>
        <Filters filterType={filterType} onChange={setFilterType} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentWrapper}>
          {tasksData.map((task, idx) => (
            <Task
              key={task.id.toString()}
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
              isLast={idx === tasksData.length - 1}
            />
          ))}
          <AddTask />
        </View>
      </ScrollView>
    </View>
  );
};
