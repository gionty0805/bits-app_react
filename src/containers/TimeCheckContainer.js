import React from 'react';
import {connect} from 'react-redux';
import TimeComponent from '../components/TimeCheckComponent';
import {startTimer} from '../_actions/TimeAction';

class TimerContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.startTimer();
    }
    render() {    
      return (<TimeComponent time={this.props.time}/>);
    }
}
const mapStateToProps = (state) =>{   // 리듀서의 스테이트 값이 store에있고 그걸불러쥼
  return {
    time:state.timeReducer.time
  }
};
const mapDispatchToProps = (dispatch) => {//타이머 모듈에서export 한 액션 생성 함수
  return {
    startTimer: () => {dispatch(startTimer())}
    
  }
}
TimerContainer = connect(mapStateToProps , mapDispatchToProps)(TimerContainer);
export default TimerContainer;