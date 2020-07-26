import React, { useReducer } from 'react';
import Context from './Context';
import reducer from './reducer';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    alert: null,
    loading: false,
    showClear: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default GithubState;
