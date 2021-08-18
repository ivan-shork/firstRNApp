import React, {Component} from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import styles from './style';
import ListModel from '../../request/modules/list';

// 首页组件
import CourseTab from './components/courseTabs';
import Course from './components/course';
const listModel = new ListModel();

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldData: [],
      courseData: [],
      curField: 'all',
    };
  }

  _getDatas(field) {
    this._getCourseFields();
    this._getCourses(field);
  }
  _getCourseFields() {
    listModel
      .getCourseFields()
      .then(res => {
        this.setState({
          fieldData: [{field: 'all', field_name: '全部'}].concat(res.result),
        });
      })
      .catch(err => {
        console.log('请求错误了', err);
      });
  }
  _getCourses(field) {
    listModel
      .getCourses(field)
      .then(res => {
        this.setState({
          courseData: res.result,
        });
      })
      .catch(err => {
        console.log('请求错误了', err);
      });
  }

  _updateCourses(field) {
    this._getCourses(field);
    this.setState({
      curField: field,
    });
  }

  componentDidMount() {
    this._getDatas(this.state.curField);
    // 反应导航componentDidMount只在用户第一次打开屏幕时出现一次,如果以后用户再次打开此页面则不会触发componentDidMount.
    // 所以要为导航添加监听
    this._unsubscribe = this.props.navigation.addListener('focus', e => {
      console.log('点击tab，开始请求.....');
      this._getDatas(this.state.curField);
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    const {navigation} = this.props;
    const {fieldData, courseData} = this.state;
    return (
      <View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}>
          <CourseTab
            tabs={fieldData}
            showCheckCourses={field => this._updateCourses(field)}
          />
          <Course courses={courseData} navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default List;
