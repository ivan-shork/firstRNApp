import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './style';
import ListModel from '../../request/modules/list';

// 首页组件
import SwiperBanner from '../../components/swiper';
const listModel = new ListModel();

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldData: [],
      courseData: [],
    };
  }

  _getDatas(field) {
    listModel.getCourseFields().then(res => {
      this.setState({
        fieldData: res.result,
      });
    });

    listModel.getCourses(field).then(res => {
      this.setState({
        courseData: res.result,
      });
    });
  }
  componentDidMount() {
    this._getDatas(this.state.field);
    // 反应导航componentDidMount只在用户第一次打开屏幕时出现一次,如果以后用户再次打开此页面则不会触发componentDidMount.
    // 所以要为导航添加监听
    this._unsubscribe = this.props.navigation.addListener('focus', e => {
      console.log('点击tab，开始请求.....');
      this._getDatas(this.state.field);
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    const {navigation, route} = this.props;
    return (
      <View style={styles.homeContainer}>
        <SwiperBanner
          navigation={navigation}
          swiperDatas={this.state.swiperDatas}
        />
      </View>
    );
  }
}

export default List;
