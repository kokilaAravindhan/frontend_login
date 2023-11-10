import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { backendUrl } from '../../config';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleReset = () => {
      setEmail('');
      setPassword('');
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // You can add your login logic here, e.g., sending the email and password to an API
  
      const loginResponse = await fetch(`${backendUrl}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await loginResponse.json();
  
      if (loginResponse.status === 401) {
        alert('Login failed');
      } else {
        alert('Login Success');
        localStorage.setItem('user', JSON.stringify(data));
        handleReset();
      }
    };
  
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
      return <Navigate to={'/'} replace />;
    }
  
    return (
      <div >
        <h2 style={{paddingTop:"10%",marginLeft:"20%"}}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div >
            <label >Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{marginLeft:"30px"}}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{marginLeft:"10px"}}
            />
          </div>
          <button class="btn btn-success" type="submit" style={{marginLeft:"35%"}}>Login</button>
            
         <button  class="btn btn-warning" type="button" onClick={()=>{
            navigate('/register')
            }} style={{marginLeft:"15px"}} >New User</button>
          
          <button  class="btn btn-info" type="button" onClick={()=>{
            navigate('/verify')
            }} style={{marginLeft:"15px"}} >Forgot Password</button>
        </form>
      </div>
    );
  };
  
  export default Login;