import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/";

export const SearchRepositories = (term: string) => {
  //   return async (dispatch: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORY,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.names;
      });
      dispatch({
        type: ActionType.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORY_ERROR,
        payload: error.message,
      });
    }
  };
};
