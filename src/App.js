import React,{useState} from 'react';
import Login from './Login';
import axios from 'axios';

const App=()=>{
  const [data, setData] =useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  const {username,email,password,confirmPassword} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value}) 
  }
  const submitHandler = e =>{
  e.preventDefault();
  axios.post("https://dinesh-ea87e-default-rtdb.firebaseio.com/Login_form_details.json",
  data).then(()=> alert("Submitted Successfully"))

  if(username.length <= 5) {
    alert("Username must be atleast 5 characters");
  }
  else if (password !== confirmPassword){
    alert("Passwords are not matching");
  }
  else{
    console.log(data);
  }
}
	return(
		<div className="main">
      <div className="sub-main">
        <center>
		      <Login/>
          <form autoComplete="off" onSubmit={submitHandler} > 
          <h2>
            <input type="text" name="username" value={username} onChange={changeHandler} placeholder="Username" className="username" /> <br />
            <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Email" className="email" /> <br />
            <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" className="password" /> <br />
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} placeholder="Confirm Password" className="confirmPassword" /> <br />
            {password !== confirmPassword ? <p> Passwords are not matching</p>:null} 
            <input type="submit"  name="submit" className='submit'/> <br />
            </h2>
          </form> 
    </center>
    </div>
		</div>
	)
}

export default App 