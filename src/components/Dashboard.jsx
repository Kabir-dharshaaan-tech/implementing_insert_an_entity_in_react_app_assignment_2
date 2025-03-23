



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MovieCard from './MovieCard';
// import './Dashboard.css';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Movie data with working image URLs
//   const [movies, setMovies] = useState([
//     {
//       id: 1,
//       title: 'Inception',
//       director: 'Christopher Nolan',
//       genre: 'Science Fiction',
//       releaseYear: 2010,
//       synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
//       posterUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
//     },
//     {
//       id: 2,
//       title: 'The Matrix',
//       director: 'The Wachowskis',
//       genre: 'Action',
//       releaseYear: 1999,
//       synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
//       posterUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
//     },
//   ]);

//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1>Movie Collection</h1>
//         <button className="add-movie-btn" onClick={() => navigate('/add-movie')}>
//           Add Movie
//         </button>
//       </header>
//       <div className="movie-list">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import './Dashboard.css';

const Dashboard = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <button className="add-movie-btn" onClick={() => navigate('/add-movie')}>
          Add Movie
        </button>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
