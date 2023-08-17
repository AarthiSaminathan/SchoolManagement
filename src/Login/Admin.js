import React, {  useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import BackgroundImage from "../images/login1.jpg";
import AdminDashboard from '../Dashboard/AdminDashboard';

const Admin = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error,setError]=useState('');

    
    const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
    };
    
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'password') {
    setLoggedIn(true);
    }else{
      setError("Incorrect username or password");
    }
    
    setUsername('');
    setPassword('');
    };
    
    if (loggedIn) {
    return <AdminDashboard/>;
    }
    
    const divStyle={
        backgroundImage:`url(${BackgroundImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        height:"100vh"
      }
    return (
        <div>
          <div className="Admin" style={divStyle}>
            <center>
        <div class="row">
  <div class="col s12 m8 l4 offset-m2 offset-l4" style={{paddingTop:80,width:400}} >
    <div class="card" >
      
      <div class="card-action teal lighten-1 white-text">
      <i class="material-icons medium prefix">account_circle</i>
         <h3>Login Form</h3>
      </div>
        <form onSubmit={handleSubmit}>
      <div class="card-content">
      <div styles={{textAlign:"center"}}>
         {error && <p className="error-message" >{error}</p>}
         </div>
      <div class="form-field">
          <label for="username">Username</label>
          <input type="text" id="username"   value={username} onChange={handleUsernameChange}/>
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <input type="password" id="password"   value={password} onChange={handlePasswordChange}/>

        </div>

        <div class="form-field">
          <button class="btn-large waves-effect waves-dark" type='submit' styles="width:50%;">Login</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
</center>
</div>
</div>
    );
};

export default Admin;