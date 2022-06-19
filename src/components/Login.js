import React, { useState } from 'react';
import { api } from '../utils/api';
import './login.css'

export const Login = ()=>{

  const formInitialValue = {  
    email:'',
    password: '' 
  }

  const [formValue, setFormValue] = useState(formInitialValue);
  const [token, setToken] = useState();

  const resetForm = () => {
    setFormValue(formInitialValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log(formValue) 
     if(formValue.email && formValue.password ) {
     
      try {
        const {data} = await api.post('/login', formValue) 
        if(data.success){
          console.log(data.token)
          setToken(token)
          resetForm();       
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

  return (
    <section className='login'> 
      <h2 className='login__title'>Log In</h2>
      <form className='login__form' onSubmit={handleSubmit}>     
        <div>        
          <input
           className='login__input'
           type='email' name='email'
           placeholder='Email'
           onChange={handleChange}
           value={formValue.email}
           />    
        </div>
        <div>        
          <input
           className='login__input'
           type="password" name='password'
           placeholder='Password'
           onChange={handleChange}
           value={formValue.password}           
           />
        </div>                 
        <button className='login__button' type="submit">Log In</button>             
      </form> 
      <p className='login__paragraph'>Don&#39;t have an account? <a href='/signup'>Sign up</a></p>
    </section> 
  )
}