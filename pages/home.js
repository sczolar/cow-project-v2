import { Context } from "../pages/_app";
import { useContext } from "react";
import Cards from "../components/card";
import Grid from "@mui/material/Grid";

export default function Home() {
  const { value, dispatch } = useContext(Context);
  return (
    <>
      <div className="home-container">
        <div className="home-intro">
          <div className="home-welcome">
            <span>welcome to</span>
            <span>cow market</span>
          </div>
        </div>
        <Grid
          container
          className="breeds-types"
        >
          <h1>Breeds of Cattle and Buffalo</h1>
        </Grid>
      </div>

    </>
  );
}
