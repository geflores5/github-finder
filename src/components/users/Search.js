import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContext';

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      githubContext.showAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onClick = () => {
    githubContext.clearUsers();
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
      {githubContext.showClear && (
        <button className='btn btn-light btn-block' onClick={onClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
