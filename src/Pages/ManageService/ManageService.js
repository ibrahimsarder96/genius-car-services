import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDelete = id =>{
    const proceed = window.confirm('are you sure');
    if(proceed){
      const url = `https://guarded-ravine-63543.herokuapp.com/service/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = services.filter(service =>service._id !== id);
        setServices(remaining);
      })
    }
  }
  return (
    <div className='w-50 mx-auto'>
      <h3 className='my-5 text-primary'>Manage your service</h3>
    {
      services.map(service => <div key={service._id}>
        <h5>{service.name} <button onClick={() => handleDelete (service._id)}>X</button></h5>
      </div>)
    }
    </div>
  );
};

export default ManageService;