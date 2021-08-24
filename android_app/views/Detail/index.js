import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
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
      <WebView
        source={{uri: 'https://ke.qq.com/course/' + course_id}}
        startInLoadingState={true}
      />
    );
  }
}

export default Detail;
