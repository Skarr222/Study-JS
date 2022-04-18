// import modułów
let express = require("express");
let bodyParser = require("body-parser");

// tworzymy obiekt serwera
let app = express();

// zdefiniowanie metod wykorzystywanych przez serwer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//uruchomienie silnika szablonów ejs
app.set("view engine", "ejs");

app.listen(8080);
console.log("Serwer uruchomiony na porcie 8080")

app.get("/", function(req, res){
    res.render("index");
})