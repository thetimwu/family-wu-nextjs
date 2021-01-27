import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const secret = "mysecret";
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end();
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "tim" && password === "tim",
      },
      secret
    ),
  });
};
