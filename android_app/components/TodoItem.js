import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';
const px2dp = px => PixelRatio.roundToNearestPixel(px);
import CheckBox from '@react-native-community/checkbox';
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: false,
    };
  }

  render() {
    const name = this.props.name;
    const status = this.props.status;
    const setSelection = () => {
      this.setState({
        selection: !this.state.selection,
      });
    };
    // const [slection, setSelection] = useState(false);
    return (
      <View style={styles.item}>
        <CheckBox
          value={this.state.selection}
          onClick={() => {
            this.setState({
              selection: !this.state.selection,
            });
          }}
        />
        <Text>{name}</Text>
        <Text>{status}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: px2dp(40),
    paddingRight: px2dp(40),
    paddingTop: px2dp(10),
    paddingBottom: px2dp(10),
  },
});
