import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

class SwiperItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {swiperData, navigation, styles} = this.props;
    console.log(swiperData);
    const directToPage = () => {
      navigation.navigate('Detail', {
        course_id: swiperData.course_id,
      });
    };
    return (
      <TouchableWithoutFeedback style={styles.slider} onPress={directToPage}>
        <Image style={styles.sliderImg} source={{uri: swiperData.img}} />
      </TouchableWithoutFeedback>
    );
  }
}

export default SwiperItem;
