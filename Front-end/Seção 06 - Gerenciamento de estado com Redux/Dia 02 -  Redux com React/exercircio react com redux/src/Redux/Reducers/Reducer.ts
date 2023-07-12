type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  clicks: 0,
  count: 0,
};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'increment_Counter': 
      return { ...state, count: state.count + action.payload };
    default: 
      return state;
  }
};

export default reducer;
