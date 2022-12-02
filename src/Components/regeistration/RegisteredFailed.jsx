import React from 'react'
import SignUpAdmin from '../signUp/SignUpAdmin';

function RegisteredFailed() {
  //JSX Component
  return (
    <div className='RegisteredFailed'>
    <div className='popupPage'>
      <div className='popupWindow'>
        <div>
          <img src=""></img>
          <h1 className='text-center'>Registration Failed</h1>
          <p className='text-center'>This Email Address has been already taken for one Account</p>
          <p className='text-center'>Try with another email Address</p>
        </div>
        <div className='success-buttons'>
          <button>Try Again</button>
          <button>Go to DashBoard</button>
        </div>
      </div>
    </div>
    {/* <SignUpAdmin/> */}
    </div>
  )
}

export default RegisteredFailed;