import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Text, View, Image} from 'react-native';
import styles from './style';
export class courseItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {courseData: data, index, isLastCourse} = this.props;
    const oddItem = index % 2 === 0;
    return (
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.courseItem,
            oddItem ? styles.courseItemOdd : styles.courseItemEven,
            !isLastCourse && styles.courseItemBottom,
          ]}>
          <View style={styles.imgView}>
            <Image style={styles.imgView} source={{uri: data.img}} />
          </View>
          <View style={styles.infoView}>
            <Text numberOfLines={2} style={styles.courseName}>
              {data.course_name}
            </Text>
            <Text style={styles.price}>
              {data.price == 0 ? '免费' : `￥${data.price}.00`}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default courseItem;
