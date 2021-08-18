import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
class courseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {course, navigation} = this.props;
    const redirectToPage = () => {
      navigation.navigate('Detail', {
        course_id: course.id,
      });
    };
    return (
      <TouchableWithoutFeedback onPress={redirectToPage} style={styles.course}>
        <View>
          <View>
            <Image style={styles.courseImg} source={{uri: course.img}} />
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseTitle}>{course.course_name}</Text>
            <Text style={styles.coursePrice}>原价只需{course.price}元</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default courseItem;
