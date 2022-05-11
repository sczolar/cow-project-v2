// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import lists from "../../../db/list.json";
import Nego from "../../models/nego";
import { connectDB } from "../../middleware/mongodb";


export default async function handler(req, res) {
    const data= JSON.parse(req.body)
    const  {name,address,price,phonenum} =data.from
    await connectDB()
    const list = await new Nego({ name, price, phonenum, address,negoid:data.id })
    list.save()
    res.status(200).send({ success: true,list })
}
