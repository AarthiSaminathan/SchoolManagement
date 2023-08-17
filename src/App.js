import './App.css';
import { BrowserRouter,Routes,  Route} from "react-router-dom";
import Home from './Dashboard/Home';
import Admin from './Login/Admin';
import AddStudent from './Component/AdminService/AddStudent';
import GetStudent from './Component/AdminService/GetStudent';
import UpdateStudent from './Component/AdminService/UpdateStudent';
import DeleteStudent from './Component/AdminService/DeleteStudent';
import AdminDashboard from './Dashboard/AdminDashboard';
import FileUpload from './Component/AdminService/FileUpload';

function App() {
  return (
    <div className="container">
       <BrowserRouter>
     <Routes>
     <Route  path="/" element={< Home/>}/>
      <Route  path="/Admin" element={<Admin/>}/>
      <Route path='/A' element={<AdminDashboard/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
    <Route path="/GetStudent" element={<GetStudent/>}/>
    <Route path="/UpdateStudent" element={<UpdateStudent/>}/>
    <Route path="/DeleteStudent" element={<DeleteStudent/>}/>
    <Route exact path="/F" element={<FileUpload/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
