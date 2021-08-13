import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
const px2dp = px => PixelRatio.roundToNearestPixel(px);
import CheckBox from '@react-native-community/checkbox';
import {DOING, DONE, WILLDO} from '../../config/myTodoList';
import {doubleClick} from '../../utils/event';
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: false,
    };
  }
  render() {
    const name = this.props.name;
    const status = this.props.status;
    const setSelection = val => {
      this.setState({
        selection: val,
      });
      const newStatus = val ? DONE : WILLDO;
      this.props.changStatus(newStatus);
    };
    // const [slection, setSelection] = useState(false);
    const btnBgColor = {
      [DOING]: 'salmon',
      [DONE]: 'green',
      [WILLDO]: 'steelblue',
    };
    const _changeDo = () => {
      if (this.props.status === DOING) {
        this.props.changStatus(WILLDO);
      } else if (this.props.status === WILLDO) {
        this.props.changStatus(DOING);
      }
    };
    const changeDo = doubleClick(_changeDo);
    return (
      <View style={styles.item}>
        <CheckBox value={this.state.selection} onValueChange={setSelection} />
        <Text style={this.state.selection ? styles.isDone : {color: 'black'}}>
          {name}
        </Text>
        <TouchableOpacity onPress={() => changeDo()}>
          <Text
            style={[{backgroundColor: btnBgColor[status]}, styles.statusBtn]}>
            {this.props.status}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: px2dp(50),
  },
  isDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  statusBtn: {
    paddingLeft: px2dp(7),
    paddingRight: px2dp(7),
    paddingTop: px2dp(4),
    paddingBottom: px2dp(4),
    shadowOffset: {height: 4, width: 0},
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.8,
    shadowRadius: 6,
    color: 'white',
    borderWidth: px2dp(1),
    borderRadius: 4,
  },
});
