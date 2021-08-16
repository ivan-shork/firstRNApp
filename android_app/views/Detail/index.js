import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
    };
  }
  componentDidMount() {
    console.log('Detail组件挂载完成------------');
  }
  componentWillUnmount() {
    console.log('Detail组件卸载完成------------');
  }
  render() {
    const {route, navigation} = this.props;
    const {msg} = route.params;
    const setPostText = val => {
      this.setState({
        postText: val,
      });
    };
    return (
      <View>
        <Text> Detail </Text>
        <Text>传递参数: {msg}</Text>
        <TextInput
          multiline
          style={{height: 200, padding: 10, backgroundColor: 'white'}}
          value={this.state.postText}
          onChangeText={setPostText}
        />
        <Button
          title="回去首页并传递一个参数"
          onPress={() => {
            navigation.navigate({
              name: '首页',
              params: {
                postText: this.state.postText,
              },
            });
          }}
        />
      </View>
    );
  }
}

export default Detail;
