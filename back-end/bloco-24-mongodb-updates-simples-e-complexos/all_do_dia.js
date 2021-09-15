// 1 - Adicione a categoria "superhero" ao filme Batman .
db.movies.updateOne(
  {title: "Batman"},
  { $push: {category: "superhero"}}
);

// 2 -  Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: [ "villain", "comic-based" ] } } }
);

// 3 - Remova a categoria "action" do filme Batman .
db.movies.updateOne(
  {title: "Batman"},
  { $pull: { "category": ["action"] } }
);

// 4 - Remova o primeiro elemento do array category do filme Batman .
db.movies.updateOne(
  {title: "Batman"},
  { $pop: { category: -1 } }
);

// 5 - Remova o último elemento do array category do filme Batman .
db.movies.updateOne(
  {title: "Batman"},
  { $pop: { category: 1 } }
);

// 6 - Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.
db.movies.updateOne(
  { title: "Batman" },
  { $addToSet: { category: "action" }}
);

// 7 - Adicione a categoria "90's" aos filmes Batman e Home Alone .
db.movies.updateMany(
  { $or: [ {title: "Batman"}, {title: "Home Alone"} ] },
  { $push: { "category": "90's" }}    
);

// 8 - Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
db.movies.updateOne(
  { title: "Home Alone"},
  { $push: { 
      cast: [
        {
          "actor": "Macaulay Culkin",
          "character": "Kevin"
        },
        {
          "actor": "Joe Pesci",
          "character": "Harry"
        },
        {
          "actor": "Daniel Stern"
        }
      ]
    }
  }
);

//  9 -Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone .