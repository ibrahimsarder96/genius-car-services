import React from 'react';
import sleeping from '../../../images/mecanic.jpg'
const NotFound = () => {
  return (
    <div>
      <h2 className='text-center text-primary'>Mecanic is sleeping</h2>
      <img className='w-100' src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;