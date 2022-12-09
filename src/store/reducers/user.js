import { SET_USER_LIST } from "../action-type";

const initialState = {
  list: [],
};

function counter(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        list: action.payload,
      };

    default:
      return state;
  }
}

export default counter;
