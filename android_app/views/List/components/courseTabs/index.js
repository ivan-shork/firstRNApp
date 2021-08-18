import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

import TabItem from './tabItem';
export class CourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedTab: 0,
    };
  }
  render() {
    const {tabs, showCheckCourses} = this.props;
    const checkTab = (i, field) => {
      this.setState({
        checkedTab: i,
      });
      showCheckCourses(field);
    };
    const {checkedTab} = this.state;
    return (
      <View style={styles.tabContainer}>
        {tabs.map((item, index) => {
          return (
            <TabItem
              key={index}
              tab={item}
              is_checked={checkedTab === index}
              check={() => checkTab(index, item.field)}
            />
          );
        })}
      </View>
    );
  }
}

export default CourseTab;
