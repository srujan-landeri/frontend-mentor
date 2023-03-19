import React from 'react'

const Summary = (props) => {
  const details = props.details;
  const planCharges = {
    'Arcade': 9,
    'Advanced': 12,
    'Pro':15
  }
  const serviceCharges = {
    'online': 1,
    'profile': 2,
    'storage': 2,
  }

  const isMonth = details.isMonthly

  let total = isMonth? planCharges[details.mode] : (planCharges[details.mode] * 10);
  for(let i of details.services){
    if(i.isActive){
      if(isMonth){
        total += serviceCharges[i.serviceName]
      }
      else{
        total += serviceCharges[i.serviceName] * 10
      }
    }
  }

  
  return (
    <div className='container'>
      <h1 className='main-heading'>Finishing up</h1>
      <p className='caption'>Double-check everything looks OK before conforiming</p>

      <div className="mode-card">
        <div className="mode-inner-card">
          <h2>{details.mode + '(' + (isMonth ? 'Monthly' : 'Yearly') + ')' }</h2>
          <span>Change</span>
        </div>
        <p>{'$' + (isMonth ? planCharges[details.mode] + '/mo' : (planCharges[details.mode] * 10) + '/yr')}</p>
      </div>

      {props.details.services.map(element => {
        if(element.isActive){
          return (<div className="service-summary-card">
            {element.serviceName === 'online' && <h3>Online Service</h3>}
            {element.serviceName === 'storage' && <h3>Larger Storage</h3>}
            {element.serviceName === 'profile' && <h3>Customizable Profile</h3>}

            <p>{'$' + (isMonth ? serviceCharges[element.serviceName] + '/mo' : (serviceCharges[element.serviceName] * 10) + '/yr')}</p>

          </div>)
        }
      })}
        <div className="total-card">
          <h3>Total ({(isMonth?'per month':'per year')})</h3>
          <p>+${total}/{isMonth?'mo':'yr'}</p>
        </div>

        <button onClick={() => props.changeActive('Add Ons')} className="go-back">Go Back</button>
        <button className="confirm-button" onClick={() => props.changeActive('Thankyou')}>Confirm</button>
    </div>
  )
}

export default Summary
