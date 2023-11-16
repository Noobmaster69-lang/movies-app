const Actors = require("./Actors");
const Directors = require("./Directors");
const Genre = require("./Genre");
const Movies = require("./Movies");

Movies.belongsToMany(Actors, { through: "MoviesActors" });
Actors.belongsToMany(Movies, {through: "MoviesActors"});

Movies.hasMany(Actors);
Actors.hasMany(Movies);

Movies.belongsToMany(Directors, { through: "MoviesDirectors" });
Directors.belongsToMany(Movies, {through: "MoviesDirectors"});

Movies.hasMany(Directors);
Directors.belongsTo(Movies);

Movies.belongsToMany(Genre, { through: "MoviesGenres" });
Genre.belongsToMany(Movies, {through: "MoviesGenres"});

Movies.hasMany(Genre);
Genre.hasMany(Movies);

