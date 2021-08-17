import {StyleSheet} from 'react-native';

const width = gScreen.screen_width;

const styles = StyleSheet.create({
  courseBoard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    // justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderRadius: 10,
    marginBottom: 20,
  },
  courseItem: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: width / 2 - 10,
    borderColor: '#a1a3a6',
  },
  courseItemBottom: {
    borderBottomWidth: 1,
  },
  courseItemOdd: {
    borderRightWidth: 1,
  },
  courseItemEven: {},
  imgView: {
    width: width / 2 - 30,
    height: ((width / 2 - 20) * 1080) / 1920,
  },
  courseName: {
    marginTop: 5,
    marginBottom: 5,
  },
  courseNameText: {
    fontSize: 13,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  teacherImg: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginRight: 5,
  },
  teacherName: {
    fontSize: 12,
    color: '#666',
  },
  price: {
    color: '#f40',
  },
});

export default styles;
