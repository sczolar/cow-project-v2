import Images from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Negoard from "../../../components/negocard"

export default function ListProduct({ list, negolist }) {
  const product = list.list[0];
  const nego = negolist.list;
  console.log(nego)
  return (
    <>
      <Grid container className="buy-product">
        <Grid item className="buy-body">
          <Paper elevation={0} className="buy-paper">
            <Images
              alt="cow"
              className="buy-img"
              src={product.link}
              width={600}
              height={600}
            />
          </Paper>
        </Grid>
        <Grid className="buy-body">
          <Paper elevation={0} className="buy-paper">
            <h1>{product.name}</h1>
            <p>{product.detail}</p>
            {product.dlist.map((a) => (
              <ol key={a}>
                <li>{a}</li>
              </ol>
            ))}
            <h2>price:{product.price}</h2>
            <Link className="buy-btn" href={`/buy/${product._id}/negotiate?id=${product._id}`}>
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
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const list = await fetch(`/api/list/${id}`).then((res) =>
    res.json()
  );
  const negolist = await fetch(`/api/negotiateget?id=${id}`).then((res) =>
    res.json()
  );
  return {
    props: { list, negolist },
  };
}
