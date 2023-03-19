import React, { useEffect } from 'react'
import {MdToggleOn} from "react-icons/md"
import {MdToggleOff} from "react-icons/md"
const SelectPlan = (props) => {
  const [isMonth,setIsMonth] = React.useState(props.details.isMonthly);
  const [subscription,setSubscription] = React.useState(props.details.mode);
  return (
    <div className='container'>
      <h1 className='main-heading'>Select your plan</h1>
      <p className='caption'>You have the option of monthly or yearly billing</p>


      <div className="card-container">
        <div onClick = {() => setSubscription('Arcade')} className={subscription === 'Arcade' ? "card card-active" : "card"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>        
          <div className="inner-card">
            <h1 className='card-heading'>Arcade</h1>
            <p className = "card-caption">{isMonth? '$9/mo' : '$90/yr'}</p>
            {!isMonth && <p style={{color:"hsl(213, 96%, 18%)",fontSize:"14.5px",fontWeight:500}}>2 months free</p>}
          </div>
        </div>

        <div onClick = {() => setSubscription('Advanced')} className={subscription === 'Advanced' ? "card card-active" : "card"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
          <div className='inner-card'>
            <h1 className='card-heading'>Advanced</h1>
            <p className="card-caption">{isMonth? '$12/mo' : '$120/yr'}</p>
            {!isMonth && <p style={{color:"hsl(213, 96%, 18%)",fontSize:"14.5px",fontWeight:500}}>2 months free</p>}
          </div>
        </div>

        <div onClick = {() => setSubscription('Pro')} className={subscription === 'Pro' ? "card card-active" : "card"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
            <div className='inner-card'>
              <h1 className='card-heading'>Pro</h1>
              <p className="card-caption">{isMonth? '$15/mo' : '$150/yr'}</p>
              {!isMonth && <p style={{color:"hsl(213, 96%, 18%)",fontSize:"14.5px",fontWeight:500}}>2 months free</p>}
            </div>
        </div>
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <span className={isMonth ? 'subscription-plan-active' : 'subscription-plan-active subscription-plan-inactive'}>Monthly</span> 
        {isMonth && <MdToggleOff onClick={() => setIsMonth(prev => !prev)} size={50} color={"hsl(213, 96%, 18%)"} style={{textAlign:"center"}}/>}
        {!isMonth && <MdToggleOn onClick={() => setIsMonth(prev => !prev)} size={50} color={"hsl(213, 96%, 18%)"} style={{textAlign:"center"}}/>}
        <span className={isMonth ? 'subscription-plan-active subscription-plan-inactive' : 'subscription-plan-active'}>Yearly</span>
      </div>
      <button onClick = {() => props.changeActive('Your Info')} className='go-back'>Go Back</button>
      <button onClick = {() => { props.changeSubcribtionDetails({...props.details, mode:subscription, isMonthly:isMonth});props.changeActive('Add Ons')}} className='form-button'>Next Step</button>
    </div>
  )
}

export default SelectPlan;
