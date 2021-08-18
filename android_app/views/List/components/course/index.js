import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CourseItem from './courseItem';
import styles from './style';
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {courses, navigation} = this.props;

    return (
      <View style={styles.courseContainer}>
        {courses.map((item, index) => {
          return (
            <CourseItem course={item} key={index} navigation={navigation} />
          );
        })}
      </View>
    );
  }
}

export default Course;
