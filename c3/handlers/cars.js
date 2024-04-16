const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    removeCar
} = require("../pkg/cars");

// pkg/cars/index.js -> lokalni funkncii koi rabotat so podatocite od cars.json
// handlerite (fajlov kade sto se naogame sega i go pisuvame ova) - tuka gi koristime lokalnite funkcii od pkg/cars/index.js
// (ovie sto gi importirame najgore) za da manipuliraat so cars.json ( preku req i res )

// Task
// Podsetete se od Node.js i MongoDB modulite kako se pravea handlers (vo niv koristevme MVC design pattern, pa tamu ni bea controllers)
// i napravete gi slednive handler funkcii koi ke gi povikuvaat funkciite koi gi importiravme od pkg/cars
// SOLID 
// S - single responsibility
// Napravete gi slednive handler funkcii: getAll, getById, create, update, remove
// exportirajte gi i importirajte gi vo glavniot vlez na aplikacijata index.js (tamu kade sto ke go definirame express)
