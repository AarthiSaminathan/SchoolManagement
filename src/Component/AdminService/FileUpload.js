import React, { useState } from "react"; 
import axios from "axios"; 
import AdminDashboard from "../../Dashboard/AdminDashboard";

const FileUpload = () => { 
const [file, setFile] = useState(null); 
const [uploadProgress, setUploadProgress] = useState(0); 

const handleFileChange = (event) => { 
setFile(event.target.files[0]); 
}; 

const handleUpload = () => { 
if (file) { 
const formData = new FormData(); 
formData.append("file", file); 

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
console.log(error); 
}); 
} 
}; 
       
return ( 
    <>
    <AdminDashboard/>
    <div className="FileUpload"  >
      
      
  <div class="col s12 m8 l4 offset-m2 offset-l4" 
  style={{paddingTop:200,paddingRight:200,paddingLeft:400,paddingBottom:110}} >
    <div class="card" >
      
      <div class="card-action blue lighten-4 black-text">
    
<input type="file" onChange={handleFileChange} /> <br></br><br></br>
<button onClick={handleUpload} style={{textAlign:"center"}}>Upload</button> 
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