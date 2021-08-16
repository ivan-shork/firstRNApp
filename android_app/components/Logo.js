import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title} = this.props;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../assests/images/timg.jpeg')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: px2dp(35),
    height: px2dp(35),
    borderRadius: 40,
  },
  title: {
    fontSize: px2dp(25),
    fontWeight: 'bold',
  },
});

export default Logo;
