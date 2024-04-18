const express = require("express");
const config = require("./pkg/config");
require("./pkg/db");

const {
    getAllHandler,
    getCarByIdHandler,
    addNewCarHandler,
    updateCarHandler,
    removeCarHandler
} = require("./handlers/cars");

const api = express();

api.use(express.json());

api.get("/cars", getAllHandler);
api.get("/cars/:id", getCarByIdHandler);
api.post("/cars", addNewCarHandler);
api.patch("/cars/:id", updateCarHandler);
api.delete("/cars/:id", removeCarHandler);

api.listen(config.getSection("development").port, (err) => {
    err 
        ? console.error(err)
        : console.log(
            `Server started at port ${config.getSection("development").port}`
        );
});