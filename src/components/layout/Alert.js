import React, { useContext } from 'react';
import Context from '../../context/Context';

const Alert = () => {
  const { alert } = useContext(Context);
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
