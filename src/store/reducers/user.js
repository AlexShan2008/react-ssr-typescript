import { SET_USER_LIST, ADD_USER } from "../action-type";

const initialState = {
  list: [],
};

function counter(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return {
        list: action.payload,
      };
    case ADD_USER:
      return {
        list: [...state.list, action.payload],
      };

    default:
      return state;
  }
}

export default counter;
