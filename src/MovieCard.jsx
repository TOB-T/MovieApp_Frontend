import React from "react";

const MovieCard = ({ movie }) => {
   
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img
          src={movie.poster }
          alt={movie.title}
        />
      </div>

      <div>
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;




// import React from "react";

// const MovieCard = ({ movie }) => {
//   // Check if 'movie' is defined before accessing its properties
//   if (!movie) {
//     return null; // or handle the case when movie is undefined
//   }

//   console.log(movie);

//   return (
//     <div className="movie-card">
//       <div className="movie-image">
//         <img
//           src={
//             movie.Poster !== "N/A"
//               ? movie.Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={movie.Title}
//         />
//       </div>

//       <div className="movie-details">
//         <h3 className="movie-title" style={{ color: "white" }}>
//           {movie.Title}
//         </h3>
//         <p className="movie-year" style={{ color: "white" }}>
//           Year: {movie.Year}
//         </p>
//         <p className="movie-type" style={{ color: "white" }}>
//           Type: {movie.Type}
//         </p>
//         <p className="movie-id" style={{ color: "white" }}>
//           ID: {movie.imdbID}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

// import React from "react";

// const MovieCard = ({ movie }) => {
//   // Check if 'movie' is defined before accessing its properties
//   if (!movie) {
//     return null; // or handle the case when movie is undefined
//   }

//   return (
//     <div className="movie">
//       <div>
//         <p>{movie.Year}</p>
//       </div>

//       <div>
//         <img
//           src={
//             movie.Poster !== "N/A"
//               ? movie.Poster
//               : "https://via.placeholder.com/400"
//           }
//           alt={movie.Title}
//         />
//       </div>

//       <div>
//         <span>{movie.Type}</span>
//         <h3>{movie.Title}</h3>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
