// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "../../models/user";
import { connectDB } from "../../middleware/mongodb";

export default async function handler(req, res) {
  await connectDB();

  const { username, password } = JSON.parse(req.body);
  if (username && password) {
    // const user = users.users.filter(
    //   (a) => a.name === username && a.password === password && a
    // );
    const user = await User.findOne({ $and: [{ name: username }, { password: password }] })
    console.log(user)
    if (user) {
      res.status(200).json({
        message: "user alive",
        data: { username: user.name, token: user.token },
        success: true,
      });
    } else {
      res.status(400).json({ message: "user not found", success: false });
    }
  } else {
    res.status(400).json({ message: "All fields required", success: false });
  }
}
