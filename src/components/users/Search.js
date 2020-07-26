import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import { setAlert, searchUsers } from '../../context/actions';

const Search = () => {
  const { showClear, dispatch } = useContext(Context);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      const alert = await setAlert('Please enter something', 'light');
      dispatch({ type: 'SET_ALERT', payload: alert });
    } else {
      dispatch({ type: 'SET_LOADING' });
      const searchedUsers = await searchUsers(text);
      dispatch({
        type: 'SEARCH_USERS',
        payload: searchedUsers,
      });
      setText('');
    }
  };

  const onClick = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={onClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
