import React, {Component} from 'react';
import {RefreshControl} from 'react-native';

const _defaultOptions = {
  tintColor: '#333',
  title: '正在加载中...',
  titleColor: '#eee',
};

class MyRefreshControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {refreshing, onRefresh, tintColor, title, titleColor} = {
      ..._defaultOptions,
      ...this.props,
    };
    console.log(refreshing, onRefresh, tintColor, title, titleColor);

    return (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor={tintColor}
        title={title}
        titleColor={titleColor}
      />
    );
  }
}

export default MyRefreshControl;
