import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './style';
export class RecomCourseList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {courseData: data} = this.props;
    return (
      <TouchableWithoutFeedback>
        <View style={styles.courseItem}>
          <View style={styles.imgView}>
            <Image style={styles.imgView} source={{uri: data.course_img}} />
          </View>
          <View style={styles.courseName}>
            <Text numberOfLines={2} style={styles.courseNameText}>
              {data.course_name}
            </Text>
          </View>
          <View style={styles.teacherInfo}>
            <Image style={styles.teacherImg} source={{uri: data.teacher_img}} />
            <Text style={styles.teacherName}>{data.teacher_name}</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.priceNum}>￥{data.price}.00</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default RecomCourseList;
