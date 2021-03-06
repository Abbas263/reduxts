import { ActionType } from "../action-types";
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORY;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORY_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}
// interface Action {
//   type: string;
//   payload?: any;
// }

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
