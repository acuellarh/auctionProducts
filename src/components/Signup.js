import React, { useState } from 'react';
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log(formValue) 
     if(formValue.name && formValue.email && formValue.password && formValue.confirmationPassword) {
     
      try {
        const {data} = await api.post('/signup', formValue) 
        if(data.success){
          resetForm();      
          navigate('/login')    
        }         
      } catch (error) {      
        console.error('error')        
      }
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
      <p className='register__paragraph'>Already have an account? <a href='/login'>Log In</a></p>
    </section> 
    
  )
} 