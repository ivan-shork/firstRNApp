import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import CourseItem from './courseItem';
import styles from './style';
export class RecomCourseList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {recomCourseDatas} = this.props;
    return (
      <View style={styles.recomCourseBoard}>
        {recomCourseDatas.map((item, index) => {
          return <CourseItem key={index} courseData={item} />;
        })}
      </View>
    );
  }
}

export default RecomCourseList;
