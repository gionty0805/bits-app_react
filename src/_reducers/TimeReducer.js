
import {TICK} from '../_actions/TimeAction';
//초기화
const initialState={
  time:new Date().toLocaleTimeString(),
  interval: null
}

// 리듀서 함수
const timeReducer = (state = initialState, action) => {
  switch(action.type) {
    case TICK:
      return {
        ...state,
        time: action.time
      }
    default:
      return state
  }
}

// 리듀서 Export
export default timeReducer;