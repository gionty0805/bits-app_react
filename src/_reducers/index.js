import { combineReducers } from "redux";
import user from "./user_reducer";
import timeReducer from "./TimeReducer";
//

const rootReducer = combineReducers({
  user,timeReducer
});

export default rootReducer;
