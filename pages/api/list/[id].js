import lists from "../../../db/list.json";

export default async function handler(req, res) {
  const { id } = req.query;
  const li = lists.list.filter((a) => a.id == id);
  if (li.length) {
    res.status(200).send({ success: true, list: li });
  } else {
    res.status(200).send({ success: false, message: "Data Not Found" });
  }
}
