import React from 'react';
import '../Sch_Styles/UserSide_View.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Sch_Styles/Date.css';
import axios from 'axios';
import { addDays,subDays,addWeeks,format, getDaysInMonth, getDate, getYear } from 'date-fns';
import { getMonth } from 'date-fns';

import { useState,useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export default function UserSide_View() {
  var num=[];
 for(let i=0;i<10;i++)
 {
   num[i]=i;
 }
 console.log(num);
    
    var date=[];

    var today = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    //var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    console.log(date,"hi")
    for(let i=0;i<3;i++)
    {
         date[i] =today.getFullYear() + '-' + (today.getMonth()+1) + '-' + (today.getDate()+i);
        //  console.log(date[i]);
    }
    var tom=new Date();
    var shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    tom.setDate(today.getDate()+1)
    var array=[today,tom]


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
//   var k="2022-11-12";

var year=today.getFullYear();

var mon=(today.getMonth()+1)
var day=(today.getDate()-10)


var btns = document.getElementsByClassName("date-box");

console.log(btns)

for (var i = 0; i < btns.length; i++) {

btns[i].addEventListener("click", function()

 {

   

    var current = document.getElementsByClassName("active");

    if (current.length > 0) {

      current[0].className = current[0].className.replace(" active", "");

    }

    this.className += " active";

    });



}
useEffect(()=>

{
    
 
   
    axios.get(`http://localhost:8083/schedule/select/date/I/${year}-${mon}-${day}`)
        .then((response)=>{

                setInput(response.data);console.log(response.data,"hooo")})

            .catch((e)=>console.log(e));




},[])



   const print=(e)=>
  {    
    var tab = date[0].split("-");    
    // Display table values
    for(var i = 0; i < tab.length; i++){
      console.log(tab[i]);
    }
  
    axios.get(`http://localhost:8083/schedule/select/date/I/${tab[0]}-${tab[1]}-${tab[2]}`)
    .then((response)=>{ console.log(response.data,"llllll");setInput(response.data)})

        .catch((e)=>console.log(e));

   }


  return (

    
    <div className='body' id='body'>
    
      <div className='movie_header' id='movie_header'><br></br>

        <text id="movie_name"> <b>I</b></text>

        <div className='genres' id='genres'>

          <div className='buttons' id='btns'>
          
          <button type="text" class="btn btn-secondary btn-sm" id='txt1'>U/A</button>
          <button type="text" class="btn btn-secondary btn-sm" id='txt2'>Drama</button>
          <button type="text" class="btn btn-secondary btn-sm" id='txt3'>Mystery</button>
          <button type="text" class="btn btn-secondary btn-sm" id='txt4'>Thriller</button>
          </div>

        </div>

      </div>

      <div  style={{marginTop:"24rem"}}   >
     {
         Object.keys(multiSlot).map((item)=>{
    return(
               <div id="div_body1">
                    <a href="#" id="nexus"><b>{item}</b></a><br></br>
      {/* <a href="#" id="nexus1"><b>Bangalore</b></a> */}
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
         {/* <CDBContainer id="id5">

<CDBCarousel id="id6" activeItem={1}  length={3}  showControls={true}   showIndicators={true}  className=""  slide >
<CDBCarouselItem > */}
      
        <div className="date-scroll" >
       
          {
          num.map((item,i)=>(
          
            <div   className="date-datemain"  key={i} id={date[i]}   onClick={print}>
         
         <div className="date-box" value="0" key={i} onClick={print}>
                    <div className="date-day" >{format(subDays(today,-item),"eee")}</div>
                    <div className="date-date1" >{getDate(subDays(today,-i),"e")}</div>
                    <div className="date-month" >{shortMonthName(subDays(today,-i))}</div>   
                </div> 
         </div>
       
          ))
        }
        
        </div>
        {/* </CDBCarouselItem>
        </CDBCarousel>
         </CDBContainer>
         */}
        <div>
          <MdArrowForwardIos  className="date-icon" />{" "}
        </div>
       
      </div>
     </div>       

    </div>
    

  )
}
