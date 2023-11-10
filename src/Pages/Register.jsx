import { useState } from 'react';
import { backendUrl } from '../../config';
import { Navigate,useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setName('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your registration logic here, e.g., sending the data to an API

    const registerResponse = await fetch(`${backendUrl}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await registerResponse.json();
    console.log(data);
    
    if (registerResponse.status === 409) {
        alert('User Alredy Exist');
      } else {
        alert('Registered Successfully');
        handleReset();
      }
  };

  if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <div>
      <h2 style={{paddingTop:"10%",marginLeft:"20%"}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name   </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
            style={{marginLeft:"30px"}}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            style={{marginLeft:"35px"}}
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
            style={{marginLeft:"15px"}}
          />
        </div>
        <button class="btn btn-success" type="submit" style={{marginLeft:"35%"}}>Register</button>
        <button class="btn btn-warning" type="submit" onClick={()=>{
            navigate('/login') }} style={{marginLeft:"20px"}} >Login</button>
      </form>
    </div>
  );
};

export default Register;