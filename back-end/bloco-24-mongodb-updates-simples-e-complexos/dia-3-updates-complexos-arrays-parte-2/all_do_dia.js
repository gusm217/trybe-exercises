// 1 - Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
db.newClass.find(
  { $and: [{ category: "action"}, {imdbRating: {$gte: 7}}]}  
);

// 2 - Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
db.newClass.find(
  { $and: [{ category: "action"}, {imdbRating: {$gte: 7}}]}
);

// 3 - Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
db.newClass.updateOne(
  {title: "Batman"},
  { $push: { 
    Rating: {
      $each: [85, 100, 102, 105] 
      } 
    }
  }
);

// 4 - Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
db.newClass.updateOne(
  {title: "Godzilla"},
  {$push: {
    ratings: {
      $each: [78, 52, 95, 102]
    }
  }}
);

// 5 - Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
db.newClass.updateOne(
  {title: "Home Alone"},
  {$push: {
    ratings: {
      $each: [200, 99, 65]
    }
  }}
);

// 6 - Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .
db.newClass.find(
  {ratings: { $gt: 103}},
  {title: 1, ratings: 1, _id: 0}
);

// 7 - Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
db.newClass.find(
  {$and: [
    { ratings: { $gt: 100 }}, 
    { ratings: { $lt: 105 }}
  ]},
  {title: 1, ratings: 1, _id: 0}
);

// 8 - Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .
// db.newClass.find(
//   {ratings: {
//     $all: [{ $gt: 64 }, { $lt: 105 }, {$mod: [9, 0]}] 
//   }},
//   {title: 1, ratings: 1, _id: 0}
// );

// 9 - Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category
db.newClass.find(
  { $and: [{ category: "adventure" }, {ratings: { $gt: 103}} ]}  ,
  {title: 1, ratings: 1, category: 1, _id: 0}
);

// 10 - Retorne somente o título de todos os filmes com dois elementos no array category 
db.newClass.find(
  { category: { $size: 2}},
  {title: 1, _id: 0}
);

// 11 - Retorne somente o título de todos os filmes com quatro elementos no array ratings .
db.newClass.find(
  { ratings: { $size: 4}},
  {title: 1, _id: 0}
);

// 12 - Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .
db.newClass.find(
  {$and: [
    {category: { $size: 2}}, 
    {budget: {$mod: [5,0]}}
  ]}  
);