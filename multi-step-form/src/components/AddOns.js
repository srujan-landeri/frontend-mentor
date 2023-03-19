import React, { useState } from 'react'
import {BsFillCheckSquareFill} from "react-icons/bs"

const AddOns = (props) => {
  const [services,setServices] = useState(props.details.services || [])
  function handleService(service_name){
    setServices(prev => prev.map(service => {
      return service.serviceName === service_name ? 
        {
          ...service,
          isActive: !service.isActive,
        }
        :
        {
          ...service
        }
    }))
  }

  return (
    <div className='container'>

      <h1 className='main-heading'>Pick add-ons</h1>
      <p className='caption'> Add-ons help enhance your gaming experience </p>

      <div className="services-container">

        <div className={services[0].isActive ? 'service service-active' : 'service'} onClick = {() => handleService('online')}>
          {<BsFillCheckSquareFill className = 'checked' size={25} color = {services[0].isActive? 'hsl(250, 100%, 64%)' : 'white'}/>}
          <div className="inner-service-card">
            <h3>Online Service</h3>
            <p>Access to multiplayer games</p>
          </div>
          {props.details.isMonthly ? <p>+$1/mo</p> :  <p>+$10/yr</p>}
        </div>

        <div className={services[1].isActive ? 'service service-active' : 'service'} onClick = {() => handleService('storage')}>
        {<BsFillCheckSquareFill className = 'checked' size={25} color = {services[1].isActive? 'hsl(250, 100%, 64%)' : 'white'}/>}
          <div className="inner-service-card">
            <h3>Larger Storage</h3>
            <p>Extra 1TB to cloud save</p>
          </div>
          {props.details.isMonthly? <p>+$2/mo</p> : <p>+$20yr</p>}
        </div>

        <div className={services[2].isActive ? 'service service-active' : 'service'} onClick = {() => handleService('profile')}>
        {<BsFillCheckSquareFill className = 'checked' size={25} color = {services[2].isActive? 'hsl(250, 100%, 64%)' : 'white'}/>}
          <div className="inner-service-card">
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          {props.details.isMonthly? <p>+$2/mo</p> : <p>+$20yr</p>}
        </div>

      </div>

      <button className='go-back' onClick = {() => props.changeActive('Select Plan')}>Go Back</button>
      <button className='form-button' onClick={() => {props.changeSubcribtionDetails({...props.details, services:services});props.changeActive('Summary')}}>Next Step</button>
    </div>
  )
}

export default AddOns
