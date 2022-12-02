import { useState,useEffect } from "react";
import "../styles/AddMovie.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/AddMovie.css";
import { Multiselect } from "multiselect-react-dropdown";


function AddMovie({ setModalOpen }) {
   const [id, setId] = useState("");
  const [movieCode, setMovieCode] = useState("UA");
  const [rating, setRating] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [movieStatus, setMovieStatus] = useState("RUNNING");
  const [cast, setCast] = useState("");
  const [language, setLanguage] = useState("Hindi");
  const [movieUrl, setMovieUrl] = useState("");
  const [firstName, setFirstName] = useState("Akshay");
  const [lastName, setLastName] = useState("kumar");
  const castList=[];
  const castData = [
    // { name: "Akshay Kumar",castId:1 },
    // { name: "Ranveer Singh",castId:2},
    // { name: "Ajay Devagan",castId:3},
    // { name: "Katrina Kaif",castId:4},
  ];
  const [Options,setOptions] = useState(castData);

  
useEffect(() => {
  const getActorsData=async()=>{
    // const getActorsName=[];
    const reqActor=await fetch("https://633531b1849edb52d6fcfde6.mockapi.io/ActorsData");
    const resActor = await reqActor.json();
    console.log(resActor);
    // for(let i=0;i<resActor.length;i++){
    //   castData.push(resActor[i].name);
    // }
    setOptions(resActor)
  }
  getActorsData();
},[])


  const postData = () => {
    console.log(
      movieCode,
      movieName,
      movieGenre,
      releaseDate,
      rating,
      duration,
      movieStatus,
      cast,
      language,
      movieUrl
    );
    // axios.post(`http://192.168.137.59:9090/movies/addmovie`, {
      axios.post(`http://localhost:9090/movies/addmovie`, {
      movieCode,
      movieUrl,
      movieName,
      movieGenre,
      releaseDate,
      duration,
      movieStatus,
      rating,
      language,
       cast: firstName
    });
  };

  return (
    <div className="AddMovie-Main">
      <div className="Addmovie-App">
        <div className="Addmovie-addmovie">
          <div className="Addmovie-Moviename">
            <p id="Addmovie-name">Movie Name*</p>
            <input
              type="text"
              id="Addmovie-myText"
              onChange={(e) => setMovieName(e.target.value)}
            ></input>
          </div>
          <div id="Addmovie-two">
            <div className="Addmovie-Language">
              <p id="Addmovie-Language">Code*</p>
              <select
                id="Addmovie-myLanguage"
                onChange={(e) => setMovieCode(e.target.value)}
              >
                <option value="R">R</option>
                <option value="A">A</option>
                <option value="UA">UA</option>
              </select>
            </div>
            <div className="Addmovie-Ratings">
              <p id="Addmovie-Ratings">Status*</p>
              <select
                id="Addmovie-myRatings"
                onChange={(e) => setMovieStatus(e.target.value)}
              >
                <option value="RUNNING">Running</option>
                <option value="UPCOMING">Upcoming</option>
                <option value="CLOSED">Closed</option>
                <option value="DELETE">Delete</option>
              </select>
            </div>
          </div>
          <div id="Addmovie-two">
            <div className="Addmovie-Language">
              <p id="Addmovie-Language">Language*</p>
              <select
                id="Addmovie-myLanguage"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Kannada">Kannada</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
                <option value="Malyalam">Malyalam</option>
              </select>
            </div>
            <div className="Addmovie-Ratings">
              <p id="Addmovie-Ratings">Ratings*</p>
              <input
                type="text"
                id="Addmovie-myRatings"
                onChange={(e) => setRating(e.target.value)}
              ></input>
            </div>
          </div>
          <div id="Addmovie-two">
            <div className="Addmovie-Language">
              <p id="Addmovie-Language">Release-Date*</p>
              <input
                type="text"
                id="Addmovie-myLanguage"
                onChange={(e) => setReleaseDate(e.target.value)}
              ></input>
            </div>
            <div className="Addmovie-Ratings">
              <p id="Addmovie-Ratings">Duration*</p>
              <input
                type="text"
                id="Addmovie-myRatings"
                onChange={(e) => setDuration(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="Addmovie-Moviename">
            <p id="Addmovie-name">Image Link*</p>
            <input
              type="text"
              id="Addmovie-myText"
              // placeholder='Give the movie image link'>
              onChange={(e) => setMovieUrl(e.target.value)}
            />
          </div>

          <div className="Addmovie-Cast">
            <p id="Addmovie-castname">Cast*</p>
            <Multiselect
                    options={Options}
                    displayValue={"name"}
                    onSelect={(e) => {
                      console.log("CastList",e);
                      setFirstName(e);
                    }}
                  />
          </div>
          <div className="Addmovie-Moviebtn">
            <Link path="/">
              <button
                id="Addmovie-addbtn"
                name="formBtn"
                onClick={() => {
                  postData();
                  setModalOpen(false);
                  window.setTimeout(function () {
                    window.location.reload();
                  }, 500);
                }}
              >
                Add Movie
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
