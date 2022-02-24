import { ActionType } from "../action-types";
import { Action } from "../actions";
interface repositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};
const reducer = (
  state: repositoriesState = initialState,
  action: Action
): repositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
