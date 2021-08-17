import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props.sk);
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
    width: px2dp(25),
    height: px2dp(25),
    borderRadius: 40,
    borderWidth: px2dp(1),
    borderColor: '#fff',
    marginRight: px2dp(10),
  },
  title: {
    fontSize: px2dp(17),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Logo;
