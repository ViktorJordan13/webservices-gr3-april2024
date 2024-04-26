const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const fileUpload = require("express-fileupload");

const config = require("./pkg/config");
require("./pkg/db");

const {
  login,
  resetPassword,
  register,
  refreshToken,
  forgotPassword,
} = require("./handlers/auth");
const {
  upload,
  download,
  listFiles,
  removeFile,
} = require("./handlers/storage");

// require movies from handlers
const {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    removeMovie
} = require("./handlers/movies")

const api = express();

api.use(express.json());
api.use(fileUpload());
api.use(
  jwt({
    secret: config.getSection("development").jwt,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/v1/auth/login",
      "/api/v1/auth/register",
      "/api/v1/auth/refreshToken",
      "/api/v1/forgotPassword",
      "/api/v1/auth/resetPassword",
    ],
  })
);

api.post("/api/v1/auth/login", login);
api.post("/api/v1/auth/register", register);
api.post("/api/v1/refreshToken", refreshToken);
api.post("/api/v1/forgotPassword", forgotPassword);
api.post("/api/v1/auth/resetPassword", resetPassword);

api.post("/api/v1/storage", upload);
api.get("/api/v1/storage/:filename", download);
api.get("/api/v1/storage", listFiles);
api.delete("/api/v1/storage/:filename", removeFile);

api.get("/api/v1/movies", getAllMovies);
api.get("/api/v1/movies/:id", getSingleMovie);
api.post("/api/v1/movies", createMovie);
api.put("/api/v1/movies/:id", updateMovie);
api.delete("/api/v1/movies/:id", removeMovie);

api.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedAccess") {
    res.status(401).send("Invalid token...");
  }
  console.error(err); // Add this line to log the error
  res.status(500).send("Internal Server Error!");

});

api.listen(config.getSection("development").port, (err) => {
  err
    ? console.error(err)
    : console.log(
        `Server started at port ${config.getSection("development").port}`
      );
});
