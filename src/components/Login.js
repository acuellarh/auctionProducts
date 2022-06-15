import React from 'react';
import './login.css'

export const Login = ()=>{
  return (
    <section className='login'> 
      <h2 className='login__title'>Log In</h2>
      <form className='login__form' method='POS' action=''>     
        <div>        
          <input className='login__input' type='email' name='email' placeholder='Email'/>    
        </div>
        <div>        
          <input className='login__input' type="password" name='password' placeholder='Password'/>
        </div>
                 
        <button className='login__button' type="submit">Log In</button>             
      </form> 
      <p className='login__paragraph'>Don{`'`}t have an account? <a href='#'>Sign up</a></p>
    </section> 
  )
}