import reactDom from 'react-dom';
import img from '../images/Course.jpg';
import { useEffect, useState } from 'react';
import Eye from '../images/eye.png';
import { useHistory } from "react-router-dom";
import '../App.css'


  const Courses = ({}) => {
    const CL = [{id:1,Title:"Calculas",Descrip:"Interesting"}];
    useEffect(() => {
      fetch('http://localhost:4000/Courses')
        .then((data) => {
          console.log(data);
        })
    }, []);



    return ( <>
              <div className='nav2'>
                  <h1>Courses</h1>
              </div>
  {/*<img src ={img}  alt="IMAGE" width="5800"/>*/}
            <div style={{}}>
            <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '100px', justifyContent:'center', position:'static'}}>
             {CL.map(C=>(
         
              <div class="courseCard" key={C.id}>
              <div class="image">
              <img src="https://picsum.photos/300" alt="" />
              </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle"
              placeholder="course name" value={C.Title}/>
            <textarea class="inpBox"
              placeholder="course description" value={C.Descript}/>
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            {/*<div class="btns">
              
              <button title="View Course" onClick={() => history.push('builder/courseview/'+C.id)} ><img src={Eye} alt='view' /></button>
        </div>*/}
          </div>
        </div>

        ))}
        <div style={{width:'270px',height:'300px'}}>
        <button class="addCourse"  title="Add New Course">+</button></div>
      </div>
      </div>

  </>
     );
}
 
export default Courses;