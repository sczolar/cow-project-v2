import "../css/main.css";
import "../css/util.css";
import "../vendor/bootstrap/css/bootstrap.min.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../fonts/iconic/css/material-design-iconic-font.min.css"
import "../vendor/animate/animate.css"
import "../vendor/css-hamburgers/hamburgers.min.css"
import "../vendor/animsition/css/animsition.min.css"
import "../vendor/select2/select2.min.css"
import "../vendor/daterangepicker/daterangepicker.css"
import "../styles/globals.scss";
import { useReducer, createContext, useEffect } from "react";
import { Reducer, Reducervalue } from "../components/reducer/reducer";
import Router from "next/router";
import Loginchecker from "../components/logincheck";
import Loader from "../components/loader";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "../components/appbar";
import Menu from "../components/menu"

export const Context = createContext();

const Theme = createTheme({
  palette: {
    primary: {
      main: "#00ddb3",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = Router.useRouter();
  const [value, dispatch] = useReducer(Reducer, Reducervalue);
  useEffect(() => {
    Loginchecker(value, dispatch, router);
  }, []);
  Router.events.on("routeChangeStart", (url) => {
    dispatch({ type: "loading" });
  });
  Router.events.on("routeChangeComplete", (url) => {
    dispatch({ type: "loadingstop" });
  });
  if (value.loading) return <Loader />;
  return (
    <ThemeProvider theme={Theme}>
      <Context.Provider value={{ value, dispatch }}>
        {location.pathname.slice(1) === "login" ? (
          ""
        ) : location.pathname === "/" ? (
          ""
        ) : (
          // <AppBar name={value.username} dispatch={dispatch} />
          <Menu />
        )}
        <Component {...pageProps} />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
