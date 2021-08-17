import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
const px2dp = px => PixelRatio.roundToNearestPixel(px);

export class ShadowBoxView extends Component {
  _defaultOptions = {
    color: '#fff',
    border: 0,
    radius: 5,
    opcity: 0.5,
    x: 1,
    y: 4,
  };
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
      contentWidth: 0,
      showShadow: false,
    };
  }
  render() {
    const {style, shadowOptions} = this.props;
    return !this.state.showShadow ? (
      <View
        style={style}
        onLayout={e => {
          const layout = e.nativeEvent.layout;
          const width = layout.width;
          const height = layout.height;
          this.setState({
            contentHeight: height,
            contentWidth: width,
            showShadow: true,
          });
        }}>
        {this.props.children}
      </View>
    ) : (
      <BoxShadow
        setting={{
          height: this.state.contentHeight,
          width: this.state.contentWidth,
          ...this._defaultOptions,
          ...shadowOptions,
        }}
        style={styles.box}>
        <View style={style}>{this.props.children}</View>
      </BoxShadow>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ShadowBoxView;
