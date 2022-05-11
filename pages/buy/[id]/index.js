import Images from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Negoard from "../../../components/negocard"
import { useEffect, useState } from "react"

export default function ListProduct({ list, negolist }) {
  const [product, setproduct] = useState([])
  const [nego, setnego] = useState([])
  useEffect(() => {
    (async () => {
      const id = location.pathname.split("/");
      const list = await fetch(`/api/list/${id[2]}`).then((res) =>
        res.json()
      );
      if (list.success) {
        console.log("li", list)
        setproduct(list.list)
      }
      const negolist = await fetch(`/api/negotiateget?id=${id[2]}`).then((res) =>
        res.json()
      );
      if (negolist.success) {
        setnego(negolist.list)
      }
    })()

  }, [])




  // const product = list.list[0];
  // const nego = negolist.list;
  console.log("ne", nego)
  console.log("pro", product)
  return (
    <>
      {
        nego.length && product.length ?
          <>
            <Grid container className="buy-product">
              <Grid item className="buy-body">
                <Paper elevation={0} className="buy-paper">
                  <Images
                    alt="cow"
                    className="buy-img"
                    src={product[0].link}
                    width={600}
                    height={600}
                  />
                </Paper>
              </Grid>
              <Grid className="buy-body">
                <Paper elevation={0} className="buy-paper">
                  <h1>{product[0].name}</h1>
                  <p>{product[0].detail}</p>
                  {product[0].dlist.map((a) => (
                    <ol key={a}>
                      <li>{a}</li>
                    </ol>
                  ))}
                  <h2>price:{product[0].price}</h2>
                  <Link className="buy-btn" href={`/buy/${product[0]._id}/negotiate?id=${product[0]._id}`}>
                    <button>buy</button>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
            <div className="negolist">
              <h2>negotiated list</h2>
              <div className="nego-li">
                {
                  nego.map(a => (
                    <Negoard key={a._id} {...a} />
                  )
                  )
                }
              </div>
            </div>
          </> : ""
      }

    </>
  );
}

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const list = await fetch(`/api/list/${id}`).then((res) =>
//     res.json()
//   );
//   const negolist = await fetch(`/api/negotiateget?id=${id}`).then((res) =>
//     res.json()
//   );
//   return {
//     props: { list, negolist },
//   };
// }
