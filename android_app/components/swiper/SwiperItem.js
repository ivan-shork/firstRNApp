import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

class SwiperItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {swiperData, navigation, styles} = this.props;
    const directToPage = () => {
      navigation.navigate('Detail', {
        course_id: swiperData.course_id,
      });
    };
    return (
      <TouchableWithoutFeedback onPress={directToPage}>
        <Image style={styles.swiperSize} source={{url: swiperData.img}} />
      </TouchableWithoutFeedback>
    );
  }
}

export default SwiperItem;
