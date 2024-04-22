const reducer = (state, action) => {
  switch (action.type) {
    case "increaseCount":
      return state + 1;

    case "decreaseCount":
      return state - 1;

    case "removeCount":
      return 0;

    case "setInputValue":
      return state + +action.payload;

    default:
      return state;
  }
};

export default reducer;
