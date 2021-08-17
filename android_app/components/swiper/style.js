import {StyleSheet} from 'react-native';
const width = gScreen.screen_width;
const height = gScreen.screen_height;

const baseDot = {
  width: px2dp(7),
  height: px2dp(7),
  backgroundColor: '#666',
  marginLeft: 3,
  marginRight: 2,
  borderRadius: 5,
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: width * 0.32,
    marginTop: px2dp(20),
    overflow: 'hidden',
    borderRadius: 10,
  },
  // swiper-item
  slider: {
    flex: 1,
    overflow: 'hidden',
  },
  sliderImg: {
    flex: 1,
    // width: '100%',
  },
  //导航器样式
  paginationStyle: {
    bottom: px2dp(10),
  },
  // 导航器的.
  dot: {
    ...baseDot,
    opacity: 0.2,
  },
  dotActive: {
    ...baseDot,
    width: px2dp(19),
    backgroundColor: '#fff',
  },
});

export default styles;
