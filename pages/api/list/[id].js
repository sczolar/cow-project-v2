// import lists from "../../../db/list.json";
import List from "../../../models/list";
import { connectDB } from "../../../middleware/mongodb";

export default async function handler(req, res) {
  await connectDB()
  const { id } = req.query;
  // const li = lists.list.filter((a) => a.id == id);
  const li = await List.find({ _id: id })
  if (li.length) {
    res.status(200).send({ success: true, list: li });
  } else {
    res.status(200).send({ success: false, message: "Data Not Found" });
  }
}
