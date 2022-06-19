import React, { useState } from 'react';
import { signupApi } from '../utils/api';
import './signup.css'


export const Signup = ()=>{

  const formInitialValue = {
    name: '',
    email:'',
    password: '',
    confirmationPassword: ''
  }

  const [formValue, setFormValue] = useState(formInitialValue);

  const resetForm = () => {
    setFormValue(formInitialValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log(formValue) 
     if(formValue.name && formValue.email && formValue.password && formValue.confirmationPassword) {
     
      try {
        await signupApi.post('/signup', formValue)        
      } catch (error) {
        console.error('error')        
      }        
      resetForm()     
    }
  }

  const handleChange = (e) => {
    setFormValue({
      ...formValue, 
      [e.target.name]: e.target.value
    })
  }

  return(   
    <section className='register'> 
      <h2 className='register__title'>Sign Up</h2>
      <form className='resgister__form'  onSubmit={handleSubmit}>
        <div>        
          <input 
          className='register__input' 
          type='tex' 
          name='name' 
          placeholder='Full Name'
          onChange={handleChange}
          value={formValue.name}
          />
        </div>
        <div>        
          <input 
          className='register__input' 
          type='email' 
          name='email' 
          placeholder='Email'
          onChange={handleChange}
          value={formValue.email}
          />    
        </div>
        <div>        
          <input 
          className='register__input' 
          type="password" 
          name='password' 
          placeholder='Password'
          onChange={handleChange}
          value={formValue.password}
          />
        </div>
        <div>        
          <input 
          className='register__input' 
          type="password" 
          name='confirmationPassword' 
          placeholder='Confirmation Password'
          onChange={handleChange}
          value={formValue.confirmationPassword}
          />
        </div>         
        <button className='register__button' type="submit">Sign Up</button>             
      </form> 
      <p className='register__paragraph'>Already have an account? <a href='#'>Log In</a></p>
    </section> 
    
  )
} 