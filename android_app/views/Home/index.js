import React, {Component} from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import styles from './style';
import CourseModel from '../../request/modules/course';

// 首页组件
import SwiperBanner from '../../components/swiper';
import MainTitle from './component/MainTitle';
import RecomCourseList from './component/RecomCourseList';
import CourseList from './component/CourseList';
const courseModel = new CourseModel();

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperDatas: [],
      fieldDatas: [],
      courseDatas: [],
      recomCourseDatas: [],
    };
  }

  _getCourseData() {
    courseModel.getCourseDatas().then(res => {
      const data = res.result;
      this.setState({
        swiperDatas: data.swipers,
        fieldDatas: data.fields,
        courseDatas: data.courses,
        recomCourseDatas: data.recomCourses,
      });
    });
  }
  componentDidMount() {
    this._getCourseData();
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
    const {courseDatas, fieldDatas} = this.state;

    const CoursesRender = fieldDatas.map((fieldItem, index) => {
      const courseItems = courseDatas.filter(courseItem => {
        return courseItem.field === fieldItem.field;
      });
      return (
        <View key={index}>
          <MainTitle title={fieldItem.field_name} />
          <CourseList courseDatas={courseItems} />
        </View>
      );
    });

    return (
      <View style={styles.homeContainer}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}>
          <SwiperBanner
            navigation={navigation}
            swiperDatas={this.state.swiperDatas}
          />

          <MainTitle title="推荐课程" />
          <RecomCourseList recomCourseDatas={this.state.recomCourseDatas} />

          {CoursesRender}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
