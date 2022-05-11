import { Context } from "../../pages/_app";
import { useContext } from "react";
import Cards from "../../components/card";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function Buy({ images }) {
  return (
    <>
      <Grid container justifyContent="center" className="listprodect">
        {images.map((a) => (
          <Link key={a._id} href={`/buy/${a._id}`}>
            <Grid  item className="buy-list">
              <Cards {...a} className="buy-card" />
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(`${process.env.api}/api/list`).then((res) =>
    res.json()
  );
  return {
    props: {
      images: data.lists,
    }, // will be passed to the page component as props
  };
}
