// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import lists from "../../db/list.json";

export default async function handler(req, res) {
  res.status(200).send({success:true,lists:lists.list})
}
