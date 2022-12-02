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

function Main() {
  const [movieStatus, setMovieStatus] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const role1 = "admin";
  return (
    <div className="main-container">
      <div className="main-Container-head">
        <Header pass={role1} />
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
