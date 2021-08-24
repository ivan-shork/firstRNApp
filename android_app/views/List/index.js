import React, {Component} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import ListModel from '../../request/modules/list';
import MyRefreshControl from '../../components/MyrefreshControl';
import PageLoading from '../../components/PageLoading';

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
      isRefreshing: false,
      loading: false,
    };
  }
  // 初始化数据
  async _getDatas(field) {
    await this._getCourseFields();
    await this._getCourses(field);
    this.setState({
      isRefreshing: false,
      loading: false,
    });
  }
  // 请求
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
  // 请求
  _getCourses(field) {
    listModel
      .getCourses(field)
      .then(res => {
        this.setState({
          courseData: res.result,
        });
        console.log(res);
      })
      .catch(err => {
        console.log('请求错误了', err);
      });
  }
  // 点击tab时更新course数据
  _updateCourses(field) {
    this._getCourses(field);
    this.setState({
      curField: field,
    });
  }

  // 刷新逻辑
  pageRefreshing() {
    if (this.state.isRefreshing) {
      return;
    }
    this.setState({
      courseData: [],
      fieldData: [],
      isRefreshing: true,
      loading: true,
    });
    setTimeout(() => {
      this._getDatas(this.state.curField);
    }, 1000);
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
    const {fieldData, courseData, isRefreshing} = this.state;
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={this.pageRefreshing.bind(this)}
              title="loading..."
            />
          }>
          {this.state.loading ? (
            <PageLoading />
          ) : (
            <View>
              <CourseTab
                tabs={fieldData}
                showCheckCourses={field => this._updateCourses(field)}
              />
              <Course courses={courseData} navigation={navigation} />
            </View>
          )}
          {/* <CourseTab
            tabs={fieldData}
            showCheckCourses={field => this._updateCourses(field)}
          />
          <Course courses={courseData} navigation={navigation} /> */}
        </ScrollView>
      </View>
    );
  }
}

export default List;
