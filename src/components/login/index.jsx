import React, { useState} from 'react';
import {useNavigate} from "react-router-dom"
import {getSHA256} from "../../hooks/useHash";
import './style.css';



const Login = ({ setToken, isError ,setLoginCounter}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser =({ username, password }) =>{
    return getSHA256(username.concat(password)).toString();
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      password
    });
    setToken(token);
    navigate('/');
    setLoginCounter((count)=>(count+1));
  }

  return (
    <div id='login_page'>
      <div id='ovrly'></div>
      <div id="login">
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='Uživatelské jméno' className='txt' type="text" onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <input placeholder='Heslo' className='pswd' type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Přihlásit</button>
        </div>
        <div>
          {isError?<label className="error_message">Uživateleké jmeno nebo heslo není správné.</label>:null}       
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;