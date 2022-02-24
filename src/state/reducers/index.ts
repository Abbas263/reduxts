import { combineReducers } from "redux";
import repositoriesReducer from "../reducers/repositoriesReducer";
const reducers = combineReducers({
  repositories: repositoriesReducer,
});
export default reducers;
