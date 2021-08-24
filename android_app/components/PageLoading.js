import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

class PageLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('loading渲染了');

    return (
      <View style={styles.loadingContainer}>
        <Text>加载中...</Text>
        <Image
          style={styles.loadingPic}
          source={require('../assests/images/loading.gif')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    width: gScreen.screen_width,
    height: gScreen.screen_height - 207,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingPic: {
    width: 80,
    height: 80,
  },
});

export default PageLoading;
