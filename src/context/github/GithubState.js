import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    alert: null,
    loading: false,
    showClear: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: 'SEARCH_USERS', payload: res.data.items });
  };

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: 'GET_USER', payload: res.data });
  };

  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: 'GET_REPOS', payload: res.data });
  };

  const showAlert = (msg, type) => {
    const alert = { msg, type };
    dispatch({ type: 'SET_ALERT', payload: alert });
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        showAlert,
        users: state.users,
        user: state.user,
        repos: state.repos,
        repo: state.repo,
        alert: state.alert,
        loading: state.loading,
        showClear: state.showClear,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
