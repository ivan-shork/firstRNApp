import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../components/Logo';
import styles from '../style';

const baseSkin = route => {
  return {
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
          source={require('../images/back.png')}
          style={styles.iconWithTitle}
        />
      </View>
    ),
    headerBackTitle: '返 回',
    headerTruncatedBackTitle: '撒顿',
    headerBackTitleStyle: styles.backTitleStyle,
  };
};

export default baseSkin;
