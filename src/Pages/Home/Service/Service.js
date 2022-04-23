import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
  const { _id, name, img , description, price} = service;
  const navigate = useNavigate()

  const navigateServiceDetail = id =>{
   navigate(`/service/${id}`)
  }
  return (
    <div className='service-container'>
      <img className='w-100 rounded' src={img} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <h5>{price}</h5>
      <button onClick={() =>navigateServiceDetail(_id)} className='btn-primary rounded'>Book {name}</button>
    </div>
  );
};

export default Service;