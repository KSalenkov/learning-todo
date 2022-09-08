/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {store} from './src/store/store';
import {Provider} from 'react-redux';

import {Tasks} from './src/screens/Tasks';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Tasks />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
