const initialState = {
  data: [],
};

const test = (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return {
        data: payload,
      };
    default:
      return state;
  }
};

export default test;
