import { SET_USER_LIST, ADD_USER } from "../action-type";
import axios from "axios";

const actionCreators = {
  getUserList() {
    return function (dispatch) {
      return axios.get(`http://localhost:8000/api/user`).then((response) => {
        const { data } = response.data;
        dispatch({
          type: SET_USER_LIST,
          payload: data,
        });
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
