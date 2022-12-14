import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../action-type";
import { push } from "redux-first-history";

const actionCreators = {
  login(user) {
    return function (dispatch, getState, request) {
      return request.post(`/api/login`, user).then((response) => {
        const { success, error, data } = response.data;

        if (success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
          });
          dispatch(push("/profile"));
        } else {
          dispatch({
            type: LOGIN_ERROR,
            payload: error,
          });
        }
      });
    };
  },
  logout() {
    return function (dispatch, getState, request) {
      return request.get(`/api/logout`).then((response) => {
        const { success } = response.data;

        if (success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          dispatch(push("/login"));
        }
      });
    };
  },
  validate() {
    return function (dispatch, getState, request) {
      return request.get(`/api/validate`).then((response) => {
        const { success, data } = response.data;
        if (success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
          });
        }
      });
    };
  },
};

export default actionCreators;
