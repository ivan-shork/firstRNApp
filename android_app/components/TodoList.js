import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {this.props.list.map(item => {
          return <TodoItem {...item} />;
        })}
      </View>
    );
  }
}

export default TodoList;
