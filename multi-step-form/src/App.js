import React, { useState,useContext, createContext } from 'react'
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thankyou from './components/Thankyou'

const store = createContext();

const App = () => {
  const [active,setActive] = useState('Your Info')
  const [subscriptionDetails,setSubscribtionDetails] = useState({
    mode:'Arcade',
    isMonthly:true,
    services:[{
      serviceName: 'online',
      isActive: false,
    },
    
    {
      serviceName: 'storage',
      isActive: false,
    },
    
    {
      serviceName: 'profile',
      isActive: false,
    }]
  })
  

  function changeSubcribtionDetails(data){
    setSubscribtionDetails(data)
  }

  function changeActive(newActive){
    setActive(newActive)
  }

  return (
    <div className='App'>
      <nav>
        <div onClick = {() => {setActive('Your Info')}} className='nav-element'>
          <span className={active === 'Your Info'? "step-number step-number-active" : "step-number"}>
            1
          </span>
          <div className='step-content'>
            <h2>STEP 1</h2>
            <h1>YOUR INFO</h1>
          </div>
        </div>
        
        <div onClick = {() => {setActive('Select Plan')}} className='nav-element'>
          <span className={active === 'Select Plan'? "step-number step-number-active" : "step-number"}>
            2
          </span>
          <div className='step-content'>
            <h2>STEP 2</h2>
            <h1>SELECT PLAN</h1>
          </div>
        </div>
        
        <div onClick = {() => {setActive('Add Ons')}} className='nav-element'>
          <span className={active === 'Add Ons'? "step-number step-number-active" : "step-number"}>
            3
          </span>
          <div className='step-content'>
            <h2>STEP 3</h2>
            <h1>ADD-ONS</h1>
          </div>
        </div>
        
        <div onClick = {() => {setActive('Summary')}} className='nav-element'>
          <span className={active === 'Summary' || active === 'Thankyou'? "step-number step-number-active" : "step-number"}>
            4
          </span>
          <div className='step-content'>
            <h2>STEP 4</h2>
            <h1>SUMMARY</h1>
          </div>
        </div>
        
      </nav>

      <main>
        <store.Provider value={{subscriptionDetails,setSubscribtionDetails}}>
          {active === 'Your Info' && <PersonalInfo changeActive = {(newActive) => changeActive(newActive)}/>}
          {active === 'Select Plan' && <SelectPlan changeActive = {(newActive) => changeActive(newActive)} details = {subscriptionDetails} changeSubcribtionDetails = {setSubscribtionDetails}/>}
          {active === 'Add Ons' && <AddOns changeActive = {(newActive) => changeActive(newActive)} details = {subscriptionDetails} changeSubcribtionDetails= {setSubscribtionDetails}/>}
          {active === 'Summary' && <Summary changeActive = {(newActive) => changeActive(newActive)} details = {subscriptionDetails}/>}
          {active === 'Thankyou' && <Thankyou/>}
        </store.Provider>
      </main>
    </div>
  )
}

export default App
export {store};