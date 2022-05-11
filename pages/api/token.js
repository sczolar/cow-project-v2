
import User from "../../models/user";
import { connectDB } from "../../middleware/mongodb";

export default async function handler(req, res) {
  await connectDB()
  const { token } = req.cookies;
  if (token) {
    // const user = users.users.filter(
    //   (a) => a.token === token && a
    // );
    const user = await User.findOne({token})
    console.log(user)
    if (user) {
      res.status(200).json({
        message: "user alive",
        data: { username: user.name, token: user.token },
        success: true,
      });
    } else {
      res.status(400).json({ message: "token expired", success: false });
    }
  } else {
    res.status(400).json({ message: "token required", success: false });
  }
}
