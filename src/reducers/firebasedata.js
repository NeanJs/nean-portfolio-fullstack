export default (data = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    default:
      return data;
  }
};
