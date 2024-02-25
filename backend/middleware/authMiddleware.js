import JWT from "jsonwebtoken";

//protected route

export const requireSignIn = async (req, res, next) => {
  try {
    // console.log("req.headers.authorization: ", req.headers);
    const decode = JWT.verify(req.headers.authorization, "Zenmonk");
    req.user = decode;
    console.log("req.user: ", req.user);
    next();
  } catch (error) {
    res.status(500).send({
      message: "error in user authentication",
      error,
    });
  }
};
