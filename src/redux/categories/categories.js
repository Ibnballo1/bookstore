// Actions
export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// initial state
const categories = [];

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducer
const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default categoryReducer;
