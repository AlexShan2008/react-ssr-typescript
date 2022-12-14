import { SET_USER_LIST, ADD_USER } from "../action-type";

const actionCreators = {
  getUserList() {
    return function (dispatch, getState, request) {
      return request.get(`/api/user`).then((response) => {
        const { data } = response.data;
        dispatch({
          type: SET_USER_LIST,
          payload: data,
        });

        return getState().user.list;
      });
    };
  },
  addUser(user) {
    return {
      type: ADD_USER,
      payload: user,
    };
  },
};

export default actionCreators;
