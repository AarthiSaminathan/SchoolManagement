import React from "react";
import "./AdminDashboard.css";
import BackgroundImage from "../images/Front.jpg";

 const Home =()=>{
    const divStyle={
        backgroundImage:`url(${BackgroundImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        height:"100vh",
         
    }
    return(
        
          <div className="Home"  style={divStyle} >
          <nav>
          <div class="nav-wrapper  purple lighten-1 " style={{width:"955px",paddingRight: "40px"}}>
          <a href="#!" class="brand-logo" style={{paddingRight: "40px",lineHeight:"65px"}}><i class="material-icons left">home</i>Student Management</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/Admin" style={{paddingRight: "40px",lineHeight:"65px"}}><i class="material-icons left">whatshot</i>Admin</a></li>
        <li><a href="/Student" style={{paddingRight: "40px",lineHeight:"65px"}}><i class="material-icons left">person</i>Student</a></li>
      </ul>
            </div>
            </nav>          
            </div>
           

 
  
  )
 }
 export default Home;