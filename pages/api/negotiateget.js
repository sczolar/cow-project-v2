import Nego from "../../models/nego";
import { connectDB } from "../../middleware/mongodb";


export default async function handler(req, res) {
    const { id } = req.query
    await connectDB()
    const list = await Nego.find({ negoid: id })
    res.status(200).send({ success: true, list })
}