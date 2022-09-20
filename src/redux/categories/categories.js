// Actions
export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// initial state
const categories = [];

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});

// Reducer
const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default categoryReducer;
