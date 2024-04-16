// index.js - (toa e ovoj fajl kade sto pisuvame sega, glavniot entry point) i tuka gi setirame rutite, i na tie ruti gi povikuvame handlerite
// handleri - komuniciraat so serverot i klientot
// pkg/cars - osnovni funkcii za REST resursot cars, koi go manipuliraat cars.json fajlot
// pkg/files - gi koristime za citanje i zapisuvanje na podatoci vo cars.json

// pkg/cars komunicira so pkg/files i so handlers
// handler komunicira so index.js (ovoj fajl kade sto e ova celoto napisano i fajlot kade sto go definirame express)

const express = require("express");
const api = express();

api.use(express.json());

const {
    getAll,
    getById,
    create,
    update,
    remove
} = require ("./handlers/cars");

//GET
api.get("/cars", getAll);
api.get("/cars/:id", getById);
//POST
api.post("/cars", create);
//PUT
//za ovaa logika na ovoj cas nema da ni treba put ruta, bidejki koristime patch vo logikata
//PATCH
api.patch("/cars/:id", update);
//DELETE
api.delete("/cars/:id", remove);

api.listen(10000, (err) => {
    err ? console.error(err) : console.log("Server started at port 10000!");
});


