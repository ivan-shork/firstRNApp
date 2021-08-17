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
    const {course_id} = route.params;
    return (
      <View>
        <Text> Detail </Text>
        <Text>传递参数course_id: {course_id}</Text>
        <Button
          title="回去首页"
          onPress={() => {
            navigation.navigate({
              name: '首页',
            });
          }}
        />
      </View>
    );
  }
}

export default Detail;
