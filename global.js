import {Dimensions, PixelRatio} from 'react-native';
let {width, height} = Dimensions.get('window');
global.gScreen = {
  screen_width: width,
  screen_height: height,
};
global.px2dp = px => PixelRatio.roundToNearestPixel(px);
