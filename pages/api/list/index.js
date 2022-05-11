// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import lists from "../../../db/list.json";
import List from "../../../models/list";
import { connectDB } from "../../../middleware/mongodb";
export default async function handler(req, res) {
  await connectDB()
  const list = await List.find({})
  res.status(200).send({success:true,lists:list})
}
