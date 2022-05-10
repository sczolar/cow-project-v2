import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Context } from "../pages/_app";
import Loader from "../components/loader";

export default function Login() {
  const { value, dispatch } = useContext(Context);
  const router = useRouter();
  const [login, setlogin] = useState({ username: "", password: "" });
  console.log(value);
  //onchange handler for the value change
  const loginhandler = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  //while submit the value what would happen
  const submithandler = async () => {
    const { username, password } = login;
    if (username && password) {
      try {
        dispatch({ type: "loading" });
        const user = await fetch("api/login", {
          method: "POST",
          headers: {
            contentType: "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((res) => {
          return res.json();
        });
        if (user.success) {
          document.cookie = `token=${user.data.token}`;
          dispatch({ type: "login", value: user.data.username });
          router.push("/home");
        } else {
          dispatch({ type: "error", value: user.message });
        }
      } catch (err) {
        dispatch({ type: "error", value: err.message });
      }
    } else {
      dispatch({ type: "error", value: "All fields Required" });
    }
  };
  if (value.loading) {
    return <Loader />;
  }
  return (
    <div className="login">
      <Head>
        <title>Login</title>
        <meta name="description" content="login page" />
      </Head>
      {value.errorStatus && <span className="error-msg">{value.error}</span>}
      <div className="login-body">
        <h1>login</h1>
        <form>
          <TextField
            label="Username"
            variant="standard"
            name="username"
            onChange={loginhandler}
            value={login.username}
            type="text"
            color="primary"
            className="login-text"
          />
          <TextField
            label="Password"
            variant="standard"
            name="password"
            onChange={loginhandler}
            value={login.password}
            type="password"
            color="primary"
            className="login-text"
          />
          <Button
            className="loginbtn"
            variant="contained"
            onClick={submithandler}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
