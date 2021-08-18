import {StyleSheet} from 'react-native';
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

export default styles;
