import Images from "next/image";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import List from "../../db/list.json"
import { useEffect, useState } from "react"


export default function Homeid() {
    const [product, setproduct] = useState([])

    useEffect(() => {
        const id = location.pathname.split("/")
        const list = List.list.filter(a => a.id == id[2])
        console.log(list)
        setproduct(list)
    }, [])
    return (
        <>
            {
                product.length ?
                    <Grid container className="buy-product">
                        <Grid item className="buy-body">
                            <Paper elevation={0} className="buy-paper">
                                <Images
                                    alt="cow"
                                    className="buy-img"
                                    src={`/${product[0].link}`}
                                    width={600}
                                    height={600}
                                />
                            </Paper>
                        </Grid>
                        <Grid className="buy-body">
                            <Paper elevation={0} className="buy-paper">
                                <h1>{product[0].name}</h1>
                                <p>{product[0].details}</p>
                                {product[0].dlist.map((a) => (
                                    <ul key={a}>
                                        <li>{a}</li>
                                    </ul>
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>
                    : "loading..."
            }
        </>
    )
}