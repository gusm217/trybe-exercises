// exercício 1
db.movies.updateOne({title: "Batman"}, { $set: {imdbRating: 7.7}} );

// exercício 2
db.movies.updateOne({title: "Godzilla"}, { $set: {budget: 1}} );

// exercício 3
db.movies.updateOne({title: "Home Alone"}, { $set: {budget: 15, imdbRating: 5.5}} );

// exercício 4
db.movies.updateOne({title: "Batman"}, { $inc: {imdbRating: 2}} );

// exercício 5
db.movies.updateOne({title: "Home Alone"}, { $inc: {budget: 5}} );

// exercício 6
db.movies.updateOne({title: "Batman"}, { $mul: {imdbRating: 4}} );

// exercício 7
db.movies.updateOne({title: "Batman"}, { $rename: {"budget": "estimatedBudget"}} );

// exercício 8
db.movies.updateOne({title: "Home Alone"}, { $min: {budget: 5}} );