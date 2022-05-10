import "../styles/globals.scss";
import { useReducer, createContext, useEffect } from "react";
import { Reducer, Reducervalue } from "../components/reducer/reducer";
import Router from "next/router";
import Loginchecker from "../components/logincheck";
import Loader from "../components/loader";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "../components/appbar";

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
          <AppBar name={value.username} dispatch={dispatch} />
        )}
        <Component {...pageProps} />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
