import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
  const experts = [
    {id: 1, name: 'will smith', img: expert1},
    {id: 2, name: 'abram lincon', img: expert2},
    {id: 3, name: 'steve job', img: expert3},
    {id: 4, name: 'messy', img: expert4},
    {id: 5, name: 'sakib', img: expert5},
    {id: 6, name: 'rogina', img: expert6},
  ];
  return (
    <div id="experts" className='container'>
       <h2 className='text-center text-primary mt-5'>Our Experts</h2>
     <div className="row">
     {
        experts.map(expert => <Expert
        id={expert.id}
        expert={expert}
        ></Expert>)
      }
     </div>
    </div>
  );
};

export default Experts;