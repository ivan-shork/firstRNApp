import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const px2dp = px => PixelRatio.roundToNearestPixel(px);

const {width} = Dimensions.get('window');
export class MyInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      leftIcon,
      leftLabelTxt,
      autoFocus,
      placeholder,
      txtAlign,
      isOpenClear,
      onChangeText,
      onSubmitEditing,
      clearTxt,
      txt,
    } = this.props;
    // 文本款对齐
    const txtAlignStyle =
      txtAlign === 'left'
        ? {textAlign: 'left', marginLeft: 5}
        : txtAlign === 'right'
        ? {textAlign: 'right'}
        : txtAlign === 'center'
        ? {textAlign: 'center'}
        : null;
    return (
      <View style={[styles.baseInputStyle, txtAlignStyle]}>
        <View style={styles.inputLeft}>
          <Text>{leftIcon}</Text>
          <Text>{leftLabelTxt}</Text>
        </View>
        <TextInput
          value={txt}
          style={styles.textInputStyle}
          autoFocus={autoFocus}
          underlineColorAndroid="steelblue"
          placeholder={placeholder}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        {isOpenClear ? (
          <TouchableOpacity onPress={clearTxt}>
            <Text style={styles.closeIcon}>x</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  baseInputStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: width,
  },
  textInputStyle: {
    flex: 1,
    textAlign: 'center',
  },
  closeIcon: {
    borderColor: 'gray',
    borderWidth: px2dp(1),
    borderRadius: 50,
    paddingLeft: px2dp(7),
    paddingRight: px2dp(7),
    paddingTop: px2dp(7),
    paddingBottom: px2dp(7),
  },
});

export default MyInput;
