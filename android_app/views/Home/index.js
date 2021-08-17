import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import CourseModel from '../../request/modules/course';

const courseModel = new CourseModel();

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: [],
    };
  }

  _getCourseData() {
    courseModel.getCourseDatas().then(res => {
      const data = res.result;
      this.setState({
        swiperData: data.swiperData,
        fieldData: data.fieldData,
        courseData: data.courseData,
        recomCourseData: data.recomCourseData,
      });
    });
  }
  componentDidMount() {
    // 反应导航componentDidMount只在用户第一次打开屏幕时出现一次,如果以后用户再次打开此页面则不会触发componentDidMount.
    // 所以要为导航添加监听
    this._unsubscribe = this.props.navigation.addListener('focus', e => {
      console.log('点击tab，开始请求.....');
      this._getCourseData();
    });
    console.log('home组件挂载完成------------');
  }
  componentWillUnmount() {
    console.log('home组件卸载完成------------');
    this._unsubscribe();
  }
  render() {
    const {navigation, route} = this.props;
    return <View />;
  }
}

export default Home;
