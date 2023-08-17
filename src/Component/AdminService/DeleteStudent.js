import React,{useState} from "react";
import axios from "axios";
import AdminDashboard from "../../Dashboard/AdminDashboard";

export default function DeleteStudent()
{
    const[formDetails,setFormDatalis]=useState({
        id:'',
        
    });
    const handleFormDetailSubmit=(e)=>{
        e.preventDefault();

        axios.delete(`https://localhost:7179/api/Students/delete-student-by-rollno/${formDetails.id}`,
        {
            id:formDetails.id,
           
        })
        .then((response)=>{
            alert("Deleted Successfully");
            console.log(response.data);
        });
        
    };
    const handleInputsChange=(e)=>{
        setFormDatalis({
            ...formDetails,
            [e.target.name]:e.target.value
        });
    };
    const handleFormCancel=()=>{
        setFormDatalis({
            id:"",
        });
    }
    
    return(
        <>
        <AdminDashboard/>
        <div className="DeleteStudent" >
        <div class="col s12 m8 l4 offset-m2 offset-l4" style={{paddingTop:140,paddingRight:100,paddingLeft:300,paddingBottom:100}} >
          <div class="card" >
            <div class="card-action blue lighten-4 black-text">
        <form onSubmit={handleFormDetailSubmit}>
            <div style={{justifyContent: 'center'}}>
            <div class="row">
            <div class="input-field col offset-s4 s4">
           Id:<input type="number" name="id" value={formDetails.id} onChange={handleInputsChange}/><br/><br/>
           </div>
           </div>
           <div style={{textAlign:"center"}}>
           <button type="submit" className="btn green">Delete</button>
           <span style={{marginRight:"70px"}}></span>
        <button type="button" className="btn red" onClick={handleFormCancel}>Cancel</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}