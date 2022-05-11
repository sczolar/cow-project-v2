import { Context } from "../../pages/_app";
import { useContext, useEffect, useState } from "react";
import Cards from "../../components/card";
import Grid from "@mui/material/Grid";
import Link from "next/link";
// import Loader from "../../components/loader";

export default function Buy() {
  // const { value, dispatch } = useContext(Context);
  const [images, setimages] = useState([])
  useEffect(() => {
      (async () => {
        const data = await fetch(`${process.env.api}/api/list`).then((res) =>
          res.json()
        );
        if (data.success) {
          setimages(data.lists)
        }
      })()

  }, [])

  return (
    <>
      <Grid container justifyContent="center" className="listprodect">
        {images.length && images.map((a) => (
          <Link key={a._id} href={`/buy/${a._id}`}>
            <Grid item className="buy-list">
              <Cards {...a} className="buy-card" />
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const data = await fetch(`${process.env.api}/api/list`).then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       images: data.lists,
//     }, // will be passed to the page component as props
//   };
// }
