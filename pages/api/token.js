// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import users from "../../db/users.json";

export default async function handler(req, res) {
  const { token } = req.cookies;
  if (token) {
    const user = users.users.filter(
      (a) => a.token === token && a
    );
    if (user.length) {
      res.status(200).json({
        message: "user alive",
        data: { username: user[0].name, token: user[0].token },
        success: true,
      });
    } else {
      res.status(400).json({ message: "token expired", success: false });
    }
  } else {
    res.status(400).json({ message: "token required", success: false });
  }
}
