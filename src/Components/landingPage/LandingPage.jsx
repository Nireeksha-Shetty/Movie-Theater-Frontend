import React from 'react'
import { Link } from 'react-router-dom'

import '../styleslogin/entire.css';
// import Header from './Header'
import '../styleslogin/logo.png'
import { useNavigate } from 'react-router-dom';
import Header from '../shared/Header';

export default function LandingPage() {
const navigate=useNavigate();

const goto=(e)=>{
    navigate("/");
}
    //JSX Component
    return (
        <>
            
              <Header/>  
           

            <header style={HeaderStyle}>
                <h1 className="main-title text-center">WELCOME ADMIN</h1>
                <div className="admin_button">

                    <Link to="/register">
                        <button className="primary-button">Add New Admin</button>
                    </Link>
                    <Link to="/">
                        <button className="primary-button" id="reg_btn" onClick={(e)=>goto(e)}><span>Go to DashBoard</span></button>
                    </Link>
                </div>
            </header>
        </>
    )
}


const HeaderStyle = {
    width: "100%",
    height: "80vh",
    backgroundPosition: "center",
    background: "black",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}