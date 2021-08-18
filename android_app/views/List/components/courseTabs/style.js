import {StyleSheet} from 'react-native';
const width = gScreen.screen_width;
const height = gScreen.screen_height;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#1b315e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    opacity: 0.7,
  },
  tabItem: {
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  checkTabItem: {
    borderBottomColor: 'salmon',
    borderBottomWidth: 3,
    fontWeight: 'bold',
  },
  tabTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
