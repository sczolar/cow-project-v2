import Images from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function ListProduct({ list }) {
  const product = list.list[0];
  return (
    <>
      <Grid container className="buy-product">
        <Grid item className="buy-body">
          <Paper elevation={0} className="buy-paper">
            <Images className="buy-img" src={"/" + product.link} width={600} height={600}/>
          </Paper>
        </Grid>
        <Grid className="buy-body">
          <Paper elevation={0} className="buy-paper">
            <h1>{product.name}</h1>
            <p>{product.details}</p>
            {product.dlist.map((a) => (
              <ul key={a}>
                <li>{a}</li>
              </ul>
            ))}
            <h2>price:{product.price}</h2>
            <button>buy</button>
            <button>add to cart</button>
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
