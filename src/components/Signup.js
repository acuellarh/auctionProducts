import React from 'react';
import './signup.css'


export const Signup = ()=>{
  return(   
    <section className='register'> 
      <h2 className='register__title'>Sign Up</h2>
      <form className='resgister__form' method='POS' action=''>
        <div>        
          <input className='register__input' type='tex' name='name' placeholder='Full Name'/>
        </div>
        <div>        
          <input className='register__input' type='email' name='email' placeholder='Email'/>    
        </div>
        <div>        
          <input className='register__input' type="password" name='password' placeholder='Password'/>
        </div>
        <div>        
          <input className='register__input' type="password" name='confirmationPassword' placeholder='Confirmation Password'/>
        </div>         
        <button className='register__button' type="submit">Sign Up</button>             
      </form> 
      <p className='register__paragraph'>Already have an account? <a href='#'>Log In</a></p>
    </section> 
    
  )
} 