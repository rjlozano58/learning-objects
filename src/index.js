// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!
let favoriteMovie = {
  movieTitle: "Kung Fu Panda",
  director: "Mark Osborne",
  releaseYear: 2008,
  actors: ["Jack Black", "Jackie Chan", "Angelina Jolie"],
  length: 92
};
// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.
console.log(favoriteMovie.movieTitle);
// task 3: Console log the director's name
console.log(favoriteMovie.director);
// task 4: Console log the release year.
console.log(favoriteMovie.releaseYear);
// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favoriteMovie.actors[1]);
// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
favoriteMovie.actors.push("Lucy Liu");
console.log(favoriteMovie.actors[3]);
// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.
favoriteMovie.actors.splice(0, 1);
console.log(favoriteMovie.actors);
// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.
favoriteMovie.length += 20;
console.log(favoriteMovie.length);

document.getElementById("title").innerHTML = favoriteMovie.movieTitle;
document.getElementById("length").innerHTML = favoriteMovie.length + " minutes";
document.getElementById("actors").innerHTML = favoriteMovie.actors.join(", ");
