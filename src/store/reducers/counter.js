import { ADD } from "../action-type";

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        number: state.number + 1,
      };

    default:
      return state;
  }
}

export default counter;
