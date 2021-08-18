import React, {Component} from 'react';
import {View, Text, PixelRatio, StyleSheet, ToastAndroid} from 'react-native';
import TodoItem from './TodoItem';
import MyInput from '../../components/MyInput';
import ShadowBoxView from '../../components/ShadowBoxView';
import allTodoList from '../../config/myTodoList';
const px2dp = px => PixelRatio.roundToNearestPixel(px);

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.child = null;
    this.state = {
      list: allTodoList,
      taskVal: '',
    };
  }
  changStatus(id, newStatus) {
    let i = this.state.list.findIndex(item => item.id === id);
    const list = this.state.list;
    list[i].status = newStatus;
    this.setState({
      list: list,
    });
  }
  onRef = child => {
    this.child = child;
  };
  render() {
    const setNewTask = val => {
      this.setState({
        taskVal: val,
      });
    };
    const validTask = this.state.list.every(
      item => item.name !== this.state.taskVal,
    );
    const addNewTask = () => {
      if (!validTask) {
        ToastAndroid.show('任务已存在！', 20000);
        return;
      }
      const newTask = {
        id: this.state.list[this.state.list.length - 1].id + 1,
        name: this.state.taskVal,
        status: 'WILLDO',
      };
      this.setState({
        list: this.state.list.concat([newTask]),
        taskVal: '',
      });
    };
    const resetTask = () => {
      this.setState({
        taskVal: '',
      });
    };
    return (
      // <ShadowBoxView
      //   onRef={this.onRef}
      //   style={styles.list}
      //   shadowOptions={{radius: 40}}>
      <View style={styles.list}>
        <View>
          {this.state.list.map(item => {
            return (
              <TodoItem
                key={item.id}
                {...item}
                changStatus={newStatus => this.changStatus(item.id, newStatus)}
                test={this.state.test}
              />
            );
          })}
        </View>
        <MyInput
          leftLabelTxt="Task"
          txt={this.state.taskVal}
          leftIcon={'\ud83d\ude01'}
          autoFocus={true}
          placeholder={'请输入你的任务'}
          txtAlign="center"
          isOpenClear={this.state.taskVal.length ? true : false}
          onChangeText={setNewTask}
          onSubmitEditing={addNewTask}
          clearTxt={resetTask}
        />
      </View>
      // </ShadowBoxView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: px2dp(30),
    marginLeft: px2dp(20),
    marginRight: px2dp(20),
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20),
    paddingTop: px2dp(10),
    paddingBottom: px2dp(10),
    borderWidth: px2dp(2),
    backgroundColor: 'pink',
    borderColor: 'steelblue',
    borderRadius: 20,
  },
});
export default TodoList;
