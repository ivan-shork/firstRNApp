import {CourseApi} from '../../api';
import HTTP from '../index';
export default class CourseModel extends HTTP {
  getCourseDatas() {
    return new Promise((resolve, reject) => {
      this.fetchGet({
        url: CourseApi.getCourseDatas,
        successCb: data => {
          resolve(data);
        },
        errorCb: err => {
          reject(err);
        },
      });
    });
  }
  getCourses(fileId) {
    return new Promise((resolve, reject) => {
      this.fetchGet({
        url: CourseApi.getCourses + fileId,
        successCb: data => {
          resolve(data);
        },
        errorCb: err => {
          reject(err);
        },
      });
    });
  }
}
