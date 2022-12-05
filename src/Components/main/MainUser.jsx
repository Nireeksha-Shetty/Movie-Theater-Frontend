import React, { useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Buttons from "../button/Buttons";
// import Delete from "./Delete";
// import MainContainer from "./MainContainer";
import Moviecard from "../movie/Moviecard";
import Navbar from "../shared/Navbar";
import "../../../src/App.css";
import { Route } from "react-router-dom";
import baseUrl from "../environment/baseUrl";
import axios from "axios";
import HeaderUser from "../shared/HeaderUser";


function Main() {
  const [movieStatus, setMovieStatus] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  
  // const response=axios.get(`${baseUrl}/user/${localStorage.getItem("email")}`);
  const role1="admin";
  return (
    <div className="main-container">
      <div className="main-Container-head">
        <HeaderUser pass={role1} />
      </div>
      <div className="main-Container-nav">
        <Navbar
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setMovieStatus={setMovieStatus}
          movieStatus={movieStatus}
        />
      </div>

      <Buttons
        add={role1}
        setMovieStatus={setMovieStatus}
        movieStatus={movieStatus}
      />
      {/* <DeleteButton/> */}
      <Moviecard movieStatus={movieStatus} add={role1}/>

      <Footer />
    </div>
  );
}

export default Main;
