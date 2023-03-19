import React, { useState } from 'react'

const PersonalInfo = (props) => {
  const [formInput, setFormInput] = useState({
    name:'',
    email:'',
    number:'',
  })

  const [errorText1,setErrorText1] = useState('')
  const [errorText2,setErrorText2] = useState('')
  const [errorText3,setErrorText3] = useState('')
  function handleFormOnChange(event){

    setFormInput((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  function handleFormSubmit(event){
    event.preventDefault();

    setErrorText1('');setErrorText2('');setErrorText3('');
    let newErrorText1 = ''
    let newErrorText2 = ''
    let newErrorText3 = ''

    // name validation
    if(formInput.name.trim() === ''){
      newErrorText1 = ('This Field is Required');
      setErrorText1(newErrorText1);
      return;
    }

    // email validation
    if(formInput.email.trim() === ''){
      newErrorText2 = ('This Field is Required');
      setErrorText2(newErrorText2);
      return;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInput.email)){
      newErrorText2 = ('Invalid Email Id');
      setErrorText2(newErrorText2);
      return;
    }

    // number validation
    if(formInput.number.trim() === ''){
      newErrorText3 = ('This Field is Required')
      setErrorText3(newErrorText3);
      return;
    }
    else if(!/^\+?\d{1,3}[- ]?\d{6,12}$/.test(formInput.number)){
      newErrorText3 = ('Invalid Phone Number')
      setErrorText3(newErrorText3);
      return;
    }
    
    props.changeActive('Select Plan')
  }

  return (
    <div className='container'>
        <h1 className='main-heading'>Personal Info</h1>
        <p className='caption'>Please provide your name,email address, and phone number</p>

        <form onSubmit={handleFormSubmit} noValidate>
            <div className='input-container'>

              <label className='form-label' htmlFor="name">Name</label>
              <p className="error-text">{errorText1}</p>
              <input onChange={handleFormOnChange} value={formInput.name}  className={errorText1? 'form-input form-input-error' : 'form-input'} type="text" name="name" id="name" placeholder='e.g. Stephen King'/> 
            </div>
           
            <div className='input-container'>
                <label className='form-label' htmlFor="email">Email Address</label>
                <p className="error-text">{errorText2}</p>
                <input onChange={handleFormOnChange} value={formInput.email}  className={errorText2? 'form-input form-input-error' : 'form-input'} type="text" name="email" id="email" placeholder='e.g. stephenking@lorem.com'/>
            </div>
            
            <div className='input-container'>

              <label className='form-label' htmlFor="number">Phone Number</label>
              <p className="error-text">{errorText3}</p>
              <input onChange={handleFormOnChange} value={formInput.number}  className={errorText3? 'form-input form-input-error' : 'form-input'} type="text" name="number" id="number" placeholder='e.g. +1 234 567 890'/>
              
            </div>
            <button className='form-button'>Next Step</button>
        </form>

    </div>
  )
}

export default PersonalInfo
