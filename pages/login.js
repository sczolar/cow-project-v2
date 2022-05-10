import { useState, useContext, forwardRef } from "react";
import { useRouter } from "next/router";
import { Context } from "../pages/_app";
import Loader from "../components/loader";
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const { value, dispatch } = useContext(Context);
  const router = useRouter();
  const [login, setlogin] = useState({ username: "", password: "" });
  //onchange handler for the value change
  const loginhandler = (e) => {
    dispatch({ type: "clear" })
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  //while submit the value what would happen
  const submithandler = async (e) => {
    e.preventDefault();
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
    <div className="container-login100">
      <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form className="login100-form validate-form" method="post" onSubmit={submithandler}>
          {value.errorStatus &&
              <Alert className="error-msg" severity="error">{value.error}</Alert>
          }
          <span className="login100-form-title p-b-49 text-white">
            Login
          </span>
          <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
            <span className="label-input100 text-white">Username</span>
            <input
              className="input100"
              type="text"
              value={login.username}
              onChange={loginhandler}
              name="username"
              placeholder="Type your username"
            />
            <span className="focus-input100" data-symbol="&#xf206;"></span>
          </div>

          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <span className="label-input100 text-white">Password</span>
            <input
              className="input100"
              type="password"
              value={login.password}
              onChange={loginhandler}
              name="password"
              placeholder="Type your password"
            />
            <span className="focus-input100" data-symbol="&#xf190;"></span>
          </div>

          <div className="text-right p-t-8 p-b-31">
            <a href="#">
              Forgot password?
            </a>
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn"></div>
              <button className="login100-form-btn" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
