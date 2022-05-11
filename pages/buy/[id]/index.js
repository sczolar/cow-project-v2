import Images from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";

export default function ListProduct({ list }) {
  console.log(list);
  const product = list.list[0];
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
            <Link className="buy-btn" href={`/buy/${product._id}/negotiate`}>
              <button>buy</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const list = await fetch(`${process.env.api}/api/list/${id}`).then((res) =>
    res.json()
  );
  return {
    props: { list },
  };
}
