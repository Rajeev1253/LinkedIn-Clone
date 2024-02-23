import JWT from "jsonwebtoken";

//protected route

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, "Zenmonk");
    req.user = decode;
    next(); 
  } catch (error) {
    res.status(500).send({
      message: "error in user authentication",
      error,
    });
  }
};
