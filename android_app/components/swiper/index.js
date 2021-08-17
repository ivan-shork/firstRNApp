import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

import Swiper from 'react-native-swiper';
import SwiperItem from './SwiperItem';
class SwiperBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {swiperDatas, navigation} = this.props;

    // swiper配置
    const swiperOptions = {
      paginationStyle: styles.paginationStyle,
      dot: <View style={styles.dot} />,
      activeDot: <View style={styles.dotActive} />,
      autoplay: true,
      autoPlayTimeout: 3,
      removeClippedSubviews: false,
    };

    return (
      <View style={styles.swiperContainer}>
        <Swiper {...swiperOptions}>
          {swiperDatas.map((item, index) => {
            return (
              <SwiperItem
                navigation={navigation}
                styles={styles}
                swiperData={item}
                key={index}
              />
            );
          })}
        </Swiper>
      </View>
    );
  }
}

export default SwiperBanner;
