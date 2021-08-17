import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import CourseItem from './courseItem';
export class CourseList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {courseDatas} = this.props;
    const isLast = index => {
      const len = courseDatas.length;
      if (len % 2 === 0) {
        return (
          courseDatas.length - 1 === index || courseDatas.length - 2 === index
        );
      } else {
        return courseDatas.length - 1 === index;
      }
    };
    return (
      <View style={styles.courseBoard}>
        {courseDatas.map((item, key) => {
          return (
            <CourseItem
              key={key}
              index={key}
              courseData={item}
              isLastCourse={isLast(key)}
            />
          );
        })}
      </View>
    );
  }
}

export default CourseList;
