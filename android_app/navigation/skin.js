import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
const styles = StyleSheet.create({
  // 与返回一起的图标
  iconWithTitle: {
    width: 11,
    height: 18,
    marginRight: 3,
  },
  // 返回
  headerBack: {
    display: 'flex',
    flexDirection: 'row',
    // flex: 1,
  },

  backTitleStyle: {
    color: 'steelblue',
    fontSize: 18,
    height: 44,
    lineHeight: 44,
  },
  // 设置按钮
  settingBtn: {
    color: '#fff',
    width: 30,
    fontSize: 20,
  },
});

export default ({route}) => ({
  headerStyle: {
    backgroundColor: '#FA8072',
    height: 44,
  },
  // 右边的按钮
  headerRight: () => (
    <Icon
      name="cog"
      style={styles.settingBtn}
      onPress={() => alert('这是一个设置按钮，暂无功能！')}
    />
  ),
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  // 头部
  headerTitle: props => {
    return <Logo title={route.name} />;
  },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 44,
    color: '#fff',
  },
  // 返回的按钮
  headerBackImage: () => (
    <View style={styles.headerBack}>
      <Image
        fadeDuration={0}
        source={require('./images/back.png')}
        style={styles.iconWithTitle}
      />
    </View>
  ),
  headerBackTitle: '返 回',
  headerTruncatedBackTitle: '撒顿',
  headerBackTitleStyle: styles.backTitleStyle,
});

const GlobalSkin = {
  headerStyle: {
    backgroundColor: '#FA8072',
    height: 44,
  },
  // 右边的按钮
  headerRight: () => (
    <Icon
      name="cog"
      style={styles.settingBtn}
      onPress={() => alert('这是一个设置按钮，暂无功能！')}
    />
  ),
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  // headerTitle: props => {
  //   return <Logo title= />;
  // },
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 44,
    color: '#fff',
  },
  // 返回的按钮
  headerBackImage: () => (
    <View style={styles.headerBack}>
      <Image
        fadeDuration={0}
        source={require('./images/back.png')}
        style={styles.iconWithTitle}
      />
    </View>
  ),
  headerBackTitle: '返 回',
  headerTruncatedBackTitle: '撒顿',
  headerBackTitleStyle: styles.backTitleStyle,
};

// export default GlobalSkin;
