export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        showClear: true,
        alert: null,
      };
    case 'GET_USER_INFO':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        showClear: false,
        alert: null,
      };
    default:
      return state;
  }
};
