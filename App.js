/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import './global';
// import TxCourse from './android_app/TxCourse.js';
import TodoList from './android_app/views/TodoList/index.js';
import myTodoList from './android_app/config/myTodoList.js';
import TxCourse from './android_app/navigation/txCourse';
const App: () => Node = () => {
  return (
    <>
      {/* <TodoList list={myTodoList} /> */}
      <TxCourse />
    </>
  );
};

export default App;
