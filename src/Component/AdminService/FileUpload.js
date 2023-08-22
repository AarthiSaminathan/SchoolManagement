import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { HubConnectionBuilder } from '@microsoft/signalr';
import AdminDashboard from "../../Dashboard/AdminDashboard";

const FileUpload = () => { 
const [file, setFile] = useState(null); 
const [uploadProgress, setUploadProgress] = useState(0); 
const[fileExistMessage,setFileExistMessage]=useState("");
const handleFileChange = (event) => { 
  setFile(event.target.files[0]); 
}; 
 useEffect(()=>{
  const connection=new HubConnectionBuilder()
            .withUrl("https://localhost:7179/UploadHub")
            .build();
      connection.start().catch(error=>console.error("SignalR Connection Error",error));
      connection.on("getProgress",(percentCompleted)=>{
        setUploadProgress(percentCompleted);
      });
      return()=>{
        connection.stop();
      };
 },[]);

 

const handleUpload = () => { 
  
  // const response = await axios.get("https://localhost:7179/api/FileValidation/get-file");
  // console.log(response);
  // if(response!==[])
  // {
  //     setFileExistMessage("File already exists");
  //     return;
  // }
  
  const formData = new FormData(); 
  formData.append("file", file); 

  // axios 
  // .post("https://localhost:7179/api/Students/add-student-by-file", formData, { 
  // headers: { 
  // "Content-Type": "multipart/form-data",
  // }, 
  // onUploadProgress: (progressEvent) => { 
  // const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100); 
  // console.log(progress+"%");
  // setUploadProgress(progress); 
  // }, 
  // }) 
  // .then((response) => { 
  // console.log(response); 
  // }) 
  // .catch((error) => { 
    

  // console.log(error); 
  // }); 
  
  axios 
  .post("https://localhost:7179/api/Students/add-student-by-file", formData, { 
  headers: { 
  "Content-Type": "multipart/form-data",
  }, 
  onUploadProgress: (progressEvent) => { 
  const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100); 
  console.log(progress+"%");
  setUploadProgress(progress); 
  }, 
  }) 
  .then((response) => { 
  console.log(response); 
  }) 
  .catch((error) => { 
    if(error.response)
    {
    setFileExistMessage(error.response.data);
  console.log(error.response.data); 
    }
  }); 

}; 
       
return ( 
    <>
    <AdminDashboard/>
    <div className="FileUpload"  >
    <h4 style={{paddingTop:90,paddingRight:80,paddingLeft:350,color:"ButtonText"}}>ADD STUDENT DETAILS FILE</h4>
      
  <div class="col s12 m8 l4 offset-m2 offset-l4" 
  style={{paddingTop:50,paddingRight:200,paddingLeft:400,paddingBottom:110}} >
    <div class="card" >
      
      <div class="card-action blue lighten-4 black-text">
    
<input type="file" onChange={handleFileChange} /> <br></br><br></br>
<button onClick={handleUpload} style={{textAlign:"center"}}>Upload</button> 
{fileExistMessage && <p style={{color:"red"}}>{fileExistMessage}</p>}
{uploadProgress > 0 && 
( 
      <div>
        <p>Uploading:{uploadProgress}%</p>
        <progress value={uploadProgress} style={{width:`${uploadProgress}%`,height:40}} max="100"/>
        </div>


)} 
{uploadProgress===100 && <p>Upload Completed!</p>}
</div> 
</div>
</div>
</div>
</>  
); 
}; 

export default FileUpload;