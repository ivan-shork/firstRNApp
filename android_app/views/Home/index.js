import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // 反应导航componentDidMount只在用户第一次打开屏幕时出现一次,如果以后用户再次打开此页面则不会触发componentDidMount.
    // 所以要为导航添加监听
    this._unsubscribe = this.props.navigation.addListener('focus', e => {
      console.log('点击tab，开始请求.....');
    });
    console.log('home组件挂载完成------------');
  }
  componentWillUnmount() {
    console.log('home组件卸载完成------------');
    this._unsubscribe();
  }
  render() {
    const {navigation, route} = this.props;
    const {params} = route;
    console.log(params);
    return (
      <View>
        <Text> Home </Text>
        <Button
          title="跳转到Detail"
          onPress={() => {
            navigation.navigate('Detail', {
              msg: '第一个传递route',
            });
          }}
        />
        <Button
          title="更新标题"
          onPress={() => {
            navigation.setOptions({
              title: '撒旦撒旦',
            });
          }}
        />
        <Text>传回来的参数:{params?.postText}</Text>
      </View>
    );
  }
}

export default Home;
