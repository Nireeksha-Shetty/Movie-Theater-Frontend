import React from "react";
import '../styleslogin/entire.css';
import { useState } from "react";
import axios from 'axios';
import baseUrl from "../environment/baseUrl";
// import Header from "./Header";

function Settings() {
    const [password,setPassword1]=useState("");
    
      const [password1, setPassword] = useState("");
    
      // Setting password1
      const onTextFieldChange = (e) => {
        setPassword1(e.target.value);
      }
      
      //Setting password
      function handlePassword(e) {
        setPassword(e.target.value);
      }
     async function handleProfileSettings(e){
        const response=await axios.get(`${baseUrl}/user/settings/${localStorage.getItem("email")}/${localStorage.getItem("password")}`);
        console.log(response.data);
        localStorage.setItem("firstName",response.data.firstName);
        localStorage.setItem("lastName",response.data.lastName);
        localStorage.setItem("mobileNumber",response.data.mobileNumber);
        localStorage.setItem("gender",response.data.gender);

     }

     // Changing password
     async function changePassword(e){
        const response=await axios.get(`${baseUrl}/user/settings/${localStorage.getItem("email")}/${localStorage.getItem("password")}`);
        console.log(response.data);
         if(password1===response.data.password){
            const response1=await axios.post(`${baseUrl}/user/${localStorage.getItem("email")}/${password}`,password);
            console.log(response1.data);
            alert("hi");
         }
         else{
             alert("hello");
         }
         
     }
     
      
    
    
  // JSX Component
  return (
     
    <div className="SEfull">
        
        <div className="SEaccount">
                <div className="    ">
                    <h1 onClick={(e)=>handleProfileSettings(e)}>Hello</h1>
                </div>
            
                <div className="SEdetails">
                    <h5>Account details</h5>
                    <form>
                    <div className="SEemail">
                        <label htmlFor="email">Email:</label>
                        <input type="text" placeholder="User@gmail.com" name="email" value={localStorage.getItem("email")} onChange={(e)=>onTextFieldChange(e)}></input><br/>
                    </div>
                    <div className="SEmobile">
                        <label htmlFor="mobile">Mobile:</label><br/>
                        <input className="SElabel2" type="text" placeholder="9999999999" name="mobileNumber" value={localStorage.getItem("mobileNumber")} onChange={(e)=>onTextFieldChange(e)}></input><br/>
                    </div>
                    </form>
                    <br></br>
                </div>
            

        </div>
        
        <div className="SEperson">
            <h5>Personal Details</h5>
            <div className="SEfirstname">
                <label htmlFor="firstname">First Name:</label><br/>
                <input type="text" placeholder="Enter First Name here" name="firstName" value={localStorage.getItem("firstName")} onChange={(e)=>onTextFieldChange(e)}></input><br/>
            </div>
            <div className="SElastname">
                <label htmlFor="lastname">Last Name:</label><br/>
                <input type="text" placeholder="Enter Last Name here" name="lastName" value={localStorage.getItem("lastName")} onChange={(e)=>onTextFieldChange(e)}></input><br/>
            </div>
            <div className="SEbirthday">
                <label htmlFor="birthday">Birthday:</label><br/>
                <input type="date" ></input><br/>
            </div>
            <div className="SEgender">
                <label htmlFor="gender" className="SELABgender">Gender:</label><br/>
                <select  name="gender" value={localStorage.getItem("gender")} onChange={(e)=>onTextFieldChange(e)}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
            </div>
        </div>

        <div className="SEpassword">
            <h5>Edit Password</h5>
            <div className="SEcurrent">
                <label htmlFor="Current">Current Password:</label><br/>
                <input type="password" placeholder="" name="currentPassword" onChange={(e)=>handlePassword(e)} ></input>
            </div>
            <div className="SEnew">
                <label htmlFor="New">New Password:</label><br/>
                <input type="password" name="password" placeholder="" onChange={(e)=>onTextFieldChange(e)}></input>
            </div>
            <div className="SEconfirm">
                <label htmlFor="Confirm">Confirm Password:</label><br/>
                <input type="password" placeholder="" name="confirmPassword" onChange={(e)=>onTextFieldChange(e)} ></input>
            </div>
            
            <button onClick={(e)=>changePassword(e)}>Edit</button>
        </div>
       
    </div>
  );
}

export default Settings;

