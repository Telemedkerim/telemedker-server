require("dotenv").config();

module.exports = () => (req, res, next) => {
  if (req.originalUrl === "/payment/webhook") {
    return next();
  }
  const corsWhitelist = [
    "http://localhost:3001",
    "https://pickup2.netlify.app",
    process.env.FRONTEND_DOMAIN,
    "http://localhost:8888/",
  ];

  const origin = req.headers.origin;

  if (corsWhitelist.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "HEAD, OPTIONS, GET, POST, PUT, DELETE,PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");

    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Max-Age", "86400"); // 24 hours
      return res.status(204).end();
    }
  } else {
    res.status(403).json({ message: "CORS policy does not allow this origin" });
    return;
  }

  next();
};
