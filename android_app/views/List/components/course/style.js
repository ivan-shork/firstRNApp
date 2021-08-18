import {StyleSheet} from 'react-native';
const width = gScreen.screen_width;
const height = gScreen.screen_height;

const styles = StyleSheet.create({
  courseContainer: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  course: {
    backgroundColor: '#fff',
    width: 0.9 * width,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  courseImg: {
    width: '100%',
    height: 100,
  },
  courseInfo: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  courseTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'steelblue',
    marginBottom: 10,
    letterSpacing: 2,
  },
  coursePrice: {
    color: '#f40',
    fontSize: 15,
    textAlign: 'right',
  },
});

export default styles;
