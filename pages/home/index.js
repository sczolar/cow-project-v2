import { Context } from "../_app";
import { useContext } from "react";
import Cards from "../../components/card";
import Grid from "@mui/material/Grid";
import Listcard from "../../components/listcard"
import List from "../../db/list.json"


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
          <div className="list-type-home">
            {
              List.list.map(a => <Listcard key={a.id} {...a} />)
            }

          </div>
        </Grid>
      </div>

    </>
  );
}
