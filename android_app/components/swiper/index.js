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

    return (
      <View>
        <Swiper>
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
