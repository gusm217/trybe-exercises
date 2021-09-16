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
//   {$and: [
//     {ratings: {$gt: 64}},
//     {ratings: {$lt: 105}},
//     {ratings: {$mod: [9, 0]}}
//   ]},
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

// 13 - Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .
db.newClass.find(
  { $or: [{category: "sci-fi"}, {ratings: {$gt: 199}}]},
  {title: 1, ratings: 1, category: 1, _id: 0} 
);

// 14 - Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family" , mas que não tenha o imdbRating menor que 7.
db.newClass.find(
  { $and: [
    {ratings: {$size: 4}},
    {category: {$in: ["adventure", "family"]}},
    {imdbRating: {$gt: 7}}
  ]},  
);

// 15 - Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
db.newClass.updateOne(
  {title: "Batman"},
  {$set: {
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  } 
);

// 16 - Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .
db.newClass.updateOne(
  {title: "Godzilla"},
  {$set: {
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    }
  } 
);

// 17 - Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." .
db.newClass.updateOne(
  {title: "Home Alone"},
  {$set: {
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation." 
    }
  } 
);

// 18 - Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .
db.newClass.find(
  {description: {$regex: /^The/}}
);

// 19 - Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .
db.newClass.find(
  {description: {$regex: /humanity.$/}}
);

// 20 - Crie um índice do tipo text no campo description .
db.newClass.createIndex(
  {description: "text"}
);

// 21 - Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .
db.newClass.find(
  {$text: {
    $search: "vacation"
  }}
);

// 22 - Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" ou "criminal" .
db.newClass.find(
  {$text: {
    $search: "monstrous criminal"
  }}
);

// 23 - Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .
db.newClass.find(
  {$text: {
    $search: "\"when he is accidentally\""
  }}
);

