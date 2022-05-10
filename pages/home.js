import { Context } from "../pages/_app";
import { useContext } from "react";
import Cards from "../components/card";
import Grid from "@mui/material/Grid";

export default function Home({images}) {
  console.log(images)
  const { value, dispatch } = useContext(Context);
  return (
    <>
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
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(`${process.env.api}/api/list`).then(res=>res.json())
  return {
    props: {
      images:data.lists
    }, // will be passed to the page component as props
  }
}