import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../action-type";

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
        }
      });
    };
  },
};

export default actionCreators;
