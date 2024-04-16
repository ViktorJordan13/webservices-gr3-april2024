// index.js - (toa e ovoj fajl kade sto pisuvame sega, glavniot entry point) i tuka gi setirame rutite, i na tie ruti gi povikuvame handlerite
// handleri - komuniciraat so serverot i klientot
// pkg/cars - osnovni funkcii za REST resursot cars, koi go manipuliraat cars.json fajlot
// pkg/files - gi koristime za citanje i zapisuvanje na podatoci vo cars.json

// pkg/cars komunicira so pkg/files i so handlers
// handler komunicira so index.js (ovoj fajl kade sto e ova celoto napisano i fajlot kade sto go definirame express)

const api = express();

api.use(express.json());

//GET
api.get("/cars", );