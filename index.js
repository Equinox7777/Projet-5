const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

dbo.connectToServer();

/*
suite du code ici       node index.js
*/
app.get("/", function (req, res) {
  res.send("Hello World!");
});



//Read (GET) -> récupération des pokemons
app.get("/pokemon/list", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("Pokemon")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });
      /*
      Bref lisez la doc, 
      il y a plein de manières de faire ce qu'on veut :) 
      */
      
  });
  

app.use(bodyParser.urlencoded({ extended: true }));


//Create (POST)-> ajout de pokemon dans la collection pokémon
app.post('/pokemon/insert', jsonParser, (req, res) => {
    const body = req.body;
    console.log('Got body:', body);
    const dbConnect = dbo.getDb();
    dbConnect
        .collection("Pokemon")
        .insertOne(body)
        .then(function (result, err) {
          if (err) {
            res.status(400).send("Error!");
          } else {
            res.json(result);
          }
        });
    //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!  node index.js
    res.json(`${body.name} a bien été ajouté`);
   
});


//Update (POST) -> modification des pokemons 
app.post('/pokemon/edit', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
      .collection("Pokemon")
      .updateOne(body)
      .then(function (result, err) {
        if (err) {
          res.status(400).send("Error!");
        } else {
          res.json(result);
        }
      });
  //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!  node index.js
  res.json(`${body.name} a bien été modifié`);
 
});


//Delete (DELETE) -> suppression de pokemons
app.delete('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
      .collection("Pokemon")
      .deleteOne(body)
      .then(function (result, err) {
        if (err) {
          res.status(400).send("Error!");
        } else {
          res.json(result);
        }
      });
  //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!  node index.js
  res.json(`${body.name} a bien été suprimé`);
 
});



//Create (POST) -> ajout de pokemon dans le pokédex
app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
      .collection("Pokedex")
      .insertOne(body)
      .then(function (result, err) {
        if (err) {
          res.status(400).send("Error!");
        } else {
          res.json(result);
        }
      });
  //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!  node index.js
  res.json(`${body.name} a bien été ajouté`);
 
});

//Read (GET) -> récupération des pokemon du pokédex
app.get("/pokedex/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("Pokedex")
    .find({}) 
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });

});

//Delete (DELETE) -> retirer un pokemon du pokédex
app.delete('/pokedex/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
      .collection("Pokedex")
      .deleteOne(body)
      .then(function (result, err) {
        if (err) {
          res.status(400).send("Error!");
        } else {
          res.json(result);
        }
      });
  //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!  node index.js
  res.json(`${body.name} a bien été suprimé`);
 
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});