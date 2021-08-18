import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';

export class tabItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {tab} = this.props;
    const {check, is_checked} = this.props;
    return (
      <TouchableOpacity
        style={[styles.tabItem, is_checked && styles.checkTabItem]}
        onPress={check}>
        <Text style={styles.tabTitle}>{tab.field_name}</Text>
      </TouchableOpacity>
    );
  }
}

export default tabItem;
