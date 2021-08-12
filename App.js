/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import TxCourse from './android_app/TxCourse.js';
import TodoList from './android_app/components/TodoList.js';
import myTodoList from './android_app/config/myTodoList.js';
const App: () => Node = () => {
  return <TodoList list={myTodoList} />;
};

export default App;
