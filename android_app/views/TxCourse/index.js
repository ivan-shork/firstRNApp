import React, {Component} from 'react';
import {Text} from 'react-native';
import Content from './content';

import CourseModel from '../../request/modules/course';
import ListModel from '../../request/modules/list';

const courseModel = new CourseModel();
const listModel = new ListModel();
export default class TxCourse extends Component {
  name = 'TxCourse';
  constructor(props) {
    super(props);
    this.agent = 'ivan';
  }
  componentDidMount() {
    courseModel
      .getCourseDatas()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  _agent = () => {
    console.log(this.agent);
  };
  render() {
    return <Content test={this._agent} />;
  }
}
