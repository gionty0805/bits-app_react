//액션 타입 변수
export const START_TIMER = 'START_TIMER';
export const TICK = 'TICK';


const tick = ({interval}) => {
  return {
    type: TICK,
    time: new Date().toLocaleTimeString(),
    interval
  }
}

//액션 생성 함수 Export
export const startTimer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: START_TIMER
    });

    clearInterval(getState.interval);

   const interval = setInterval(() => {
     dispatch(tick({interval}))
   }, 1000)
  }
}