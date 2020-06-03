import React, {useState} from "react";
import axios from 'axios';

const Login = (props) => {

  const [login, setLogin] = useState(
    {
      username: "",
      password: ""
    }
  );

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log(login)
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/api/login", login)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      props.history.push("/protected");
    })
    .catch(err =>
      console.log(
        err.message)
      );
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleInput}
          />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleInput}
          />
          <button>Log in!</button>
      </form>
    </>
  );
};

export default Login;