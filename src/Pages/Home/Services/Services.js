import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
    fetch('https://guarded-ravine-63543.herokuapp.com/service')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div id="services">
      <h1 className='services-title my-5 text-primary text-center'>Our Services</h1>
      <div className="services-container container">
      {
        services.map(service => <Service
        key={service._id}
        service={service}
        ></Service>)
      }
      </div>
    </div>
  );
};

export default Services;