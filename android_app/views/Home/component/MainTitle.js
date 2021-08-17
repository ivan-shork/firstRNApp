import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export class MainTitle extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>{title}</Text>
        <Icon style={styles.titleIcon} name="arrow-down" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: px2dp(17),
    marginTop: px2dp(17),
  },
  mainTitle: {
    color: 'salmon',
    fontSize: px2dp(17),
    fontWeight: 'bold',
    paddingBottom: px2dp(5),
    borderBottomColor: 'salmon',
    borderBottomWidth: px2dp(4),
    letterSpacing: px2dp(3),
  },
  titleIcon: {
    color: 'salmon',
    fontSize: px2dp(17),
  },
});
export default MainTitle;
