import React from 'react';
import '../Sch_Styles/UserSide_View.css';
import 'bootstrap/dist/css/bootstrap.css';
 import axios from 'axios';
 import baseUrl from '../sch_environment/BaseUrl'
import { useState,useEffect } from 'react';

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { addDays,subDays,addWeeks,format, getDaysInMonth, getDate, getYear } from 'date-fns';
import { getMonth } from 'date-fns';



export default function UserSideMovieView() {

 var num=[];
 for(let i=0;i<10;i++)
 {
   num[i]=i;
 }
 console.log(num);


//Array Intialization for date Selection
    
    var date=[];
    var shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    var today = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    //var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    console.log(date,"hi")
    for(let i=0;i<10;i++)
    {
        //  date[i] =today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()+i);
        date[i]=getYear(subDays(today,-i))+'-'+(getMonth(subDays(today,-i))+1)+'-'+format(subDays(today,-i),"ee");
         console.log(date[i]);
    }
    var tom=new Date();
  
    tom.setDate(today.getDate()+1)
    var array=[today,tom]

    // console.log(array)

const [input,setInput]=useState([]);
const [multiSlot,setMultiSlot]=useState([]);

useEffect(() => {
    let temp = [...input]
    const ids = {}
    input.map(item=> (!(item.theatreName in ids)) ? ids[item.theatreName]=[] : null )
  //   ids = { 2:[], 3:[] }
    input.map(item=> ids[item.theatreName].push(item.time) )
    temp = []
  //   Object.keys(ids).map(id => temp.push({id:ids[id]}))
  
    setMultiSlot(ids)
    
  
  }, [input])


// For Current Date Setting 
var year=today.getFullYear();
var mon=(today.getMonth()+1)
var day=(today.getDate())


// Loading Of data By Theatre Name ---Displaying Movies and their Slots
useEffect(()=>
{
    axios.get(`${baseUrl}/schedule/select/date/RRR/${year}-${mon}-${day}`)
        .then((response)=>{ setInput(response.data);console.log(response.data,"hooo")})
        .catch((e)=>console.log(e));
},[])
var btns = document.getElementsByClassName("date-box");

console.log(btns)

for (var i = 0; i < btns.length; i++) {

btns[i].addEventListener("click", function()

 {

    console.log("chicck")

    var current = document.getElementsByClassName("active");

    if (current.length > 0) {

      current[0].className = current[0].className.replace(" active", "");

    }

    this.className += " active";

    });



}


// Making Date Into format of yyyy-mm-dd (so Splitting of Date field is done)
   const print=async(e)=>
  {    
    console.log(e,"checj")
  
    var tab = date[e].split("-")
    console.log(tab)
    
    await axios.get(`${baseUrl}/schedule/select/date/RRR/${tab[0]}-${tab[1]}-${tab[2]}`)
    .then((response)=>{ console.log(response.data,"Error in Getting date wise Schedule");setInput(response.data)})
      .catch((e)=>console.log(e));

   }


  return (

    // Displaying Header For User View Showing Theatre
    <div className='body' id='body'>
    
      <div className='movie_header' id='movie_header'><br></br>

        <text id="movie_name"> <b>Phoneix</b></text>

        <div className='genres' id='genres'>

          <div className='buttons' id='btns'>
          
          <button type="text" className="btn btn-secondary btn-sm" id='txt1'>U/A</button>
          <button type="text" className="btn btn-secondary btn-sm" id='txt2'>Drama</button>
          <button type="text" className="btn btn-secondary btn-sm" id='txt3'>Mystery</button>
          <button type="text" className="btn btn-secondary btn-sm" id='txt4'>Thriller</button>
          </div>

        </div>

      </div>

      {/* Using multislot Object making entity based on movie name Slots */}

      <div  style={{marginTop:"24rem"}}   >
     {
         Object.keys(multiSlot).map((item)=>{
    return(
               <div id="div_body1">
                    <a href="#" id="nexus"><b>{item}</b></a><br></br>
    
                    <div className='btns-container' style={{display:"flex",gap:"1rem"}}>
                            {multiSlot[item].map(slot=>(  
                                    <div  className='sch1' id='sch1'><text >{slot}</text>
                                    </div>))}
                    </div>
       
                </div>    
             )  
         })
     } </div>  
     

     <div>
      {/* <Carousel className="date-icon"> */}
      <div className="date-main" id="date_mod">
  <div >
          <MdArrowBackIosNew  className="date-icon" />{" "}
        </div>
       



{/* Scrolling  Dates Field Display */}
        <div className="date-scroll" >
       
          {
          num.map((item,i)=>{ return(
          
            <div   className="date-datemain"  key={i} id={date[i]}  onClick={()=>print(i)}>
         
                <div className="date-box" value="0" key={i} onClick={print}>
                    <div className="date-day" >{format(subDays(today,-item),"eee")}</div>
                    <div className="date-date1" >{getDate(subDays(today,-i),"e")}</div>
                    <div className="date-month" >{shortMonthName(subDays(today,-i))}</div>   
                </div> 
         </div>)
       
})

          
        }
        
        </div>
      
        <div>
          <MdArrowForwardIos  className="date-icon" />{" "}
        </div>
       
      </div>
     </div>        

    </div>
    

  )
}
