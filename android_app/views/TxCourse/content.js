import React, {Component} from 'react';
import {View, Text} from 'react-native';

class content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {test} = this.props;
    return (
      <View>
        <Text style={{fontSize: 40}} onPress={test}>
          test
        </Text>
      </View>
    );
  }
}

export default content;
