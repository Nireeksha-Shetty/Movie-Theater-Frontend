import React from 'react'
import SignUpAdmin from '../signUp/SignUpAdmin';

function RegisteredSuccess() {
  //JSX Component
  return (
    <div className='RegisterSuccess'>
    <div className='popupPage text-center'>
      <div className='popupWindow'>
        <div>
          <img src="src/assets/images/tick.png"></img>
          <h1>Admin Added successfully</h1>
          <p>You created New Admin Account</p>
        </div>
      <div className='success-buttons'>
          <button>Add Another Admin</button>
          <button>Go to DashBoard</button>
        </div>
        {/* <button className='cancel secondary-button'>X</button> */}
      </div>
    </div>
    {/* <SignUpAdmin/> */}
    </div>
  );
}

export default RegisteredSuccess;