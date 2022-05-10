import { Context } from "../pages/_app";
import { useContext } from "react";
import Cards from "../components/card";
import Grid from "@mui/material/Grid";

export default function Home({ images }) {
  const { value, dispatch } = useContext(Context);
  return (
    <>
      <div className="home-container">
        <div className="home-intro">

        </div>
        <h1> type of cow</h1>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="listprodect"
        >
          {images.map((a, i) => (
            <Grid key={i} item>
              <Cards {...a} />
            </Grid>
          ))}
        </Grid>
      </div>

    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(`${process.env.api}/api/list`).then(res => res.json())
  return {
    props: {
      images: data.lists
    }, // will be passed to the page component as props
  }
}