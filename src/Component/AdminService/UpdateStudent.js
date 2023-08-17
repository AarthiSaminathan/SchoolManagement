import React,{useState} from "react";
import axios from "axios";
import AdminDashboard from "../../Dashboard/AdminDashboard";

export default function UpdateStudent()
{    
    const[formData,setFormData]=useState({
        id:'',
        Name:'',
        standard:'',
        academicYear:' ',
        gender:''
    });
    const handleFormSubmit=(e)=>{
        e.preventDefault();

        axios.put(`https://localhost:7179/api/Students/update-student-by-rollno/${formData.id}`,
        {
            id:formData.id,
            Name:formData.Name,
            standard:formData.standard,
            academicYear:formData.academicYear,
            gender:formData.gender
        })
        .then((response)=>{
            alert("Updated Successfully")
            console.log(response.data);
        });
        
    };
    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handleCancel=()=>{
        setFormData({
            id:"",
            Name:"",
            standard:"",
            academicYear:"",
            gender:""
        });
    };
    
      
    return(
        <>
        <AdminDashboard/>
        <div className="UpdateStudent" >
  <div class="col s12 m8 l4 offset-m2 offset-l4" style={{paddingTop:80,paddingRight:100,paddingLeft:300,paddingBottom:100}} >
    <div class="card" >
      
      <div class="card-action blue lighten-4 black-text">
    
      
        <form onSubmit={handleFormSubmit}>
            <div class="row">
            <div class="col s12">
            <div class="input-field inline col offset-s4 s4">
            <input type="number" id="id_inline" name="id" value={formData.id} onChange={handleInputChange}/>
            <label for="id_inline">Id:</label>
            </div>
            </div>
           </div>
           <div class="row">
           <div class="col s12">
           <div class="input-field  inline col  offset-s4 s4">
           <input type="text" id="name_inline" name="Name" value={formData.Name} onChange={handleInputChange}/>
           <label for="name_inline">Name:</label>
           </div>
           </div>
           </div>
           <div class="row">
           <div class="col s12">
           <div class="input-field inline col offset-s4 s4">
           <input type="number" id="standard_inline" name="standard" value={formData.standard} onChange={handleInputChange}/>
           <label for="standard_inline">Standard:</label>
           </div>
           </div>
           </div>
           <div class="row">
           <div class="col s12">
            <div class="input-field inline col offset-s4 s4">
            <input type="number" id="academicyear_inline"  name="academicYear" value={formData.academicYear} onChange={handleInputChange}/><br/><br/>
            <label for="academicyear_inline">AcademicYear:</label>
           </div>
           </div>
           </div>
           <div class="row">
           <div class="col s12">
            <div class="input-field inline col offset-s4 s4">
           Gender:
           <input class="with-gap" type="radio" name="gender" value="M" id="M"
               onClick={handleInputChange}  />
             <label for="M">M</label>
            <input class="with-gap" type="radio" name="gender" value="F" id="F"
              onClick={handleInputChange} />
            <label for="F">F</label>
            </div>
            </div>
            </div>
          <br/><br/>
          <div style={{textAlign:"center"}}>          
          <button type="submit" className="btn green">Update✔</button>
          <span style={{marginRight:"70px"}} ></span>
          <button type="button" className="btn red" onClick={handleCancel}>Cancel❌</button>
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
} 