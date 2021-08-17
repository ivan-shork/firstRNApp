import {StyleSheet} from 'react-native';

const width = gScreen.screen_width;

const styles = StyleSheet.create({
  recomCourseBoard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    padding: 10,
    borderRadius: 10,
  },
  courseItem: {
    width: width / 2 - 30,
  },
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
    marginTop: 5,
  },
  priceNum: {
    color: '#f40',
  },
});

export default styles;
