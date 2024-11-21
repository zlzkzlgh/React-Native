import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchPopularMovies, searchMovies } from "./api/tmdb";
import MovieDetail from "./components/MovieDetail";

// 인기 영화 목록 표시
const MovieList = ({ movies, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieRecommendationApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 인기 영화 목록 가져오기
  useEffect(() => {
    const getPopularMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };

    getPopularMovies();
  }, []);

  // 영화 검색 기능
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query) {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } else {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    }
  };

  return (
    <Router>
      <div className="app">
        <h1>영화 추천</h1>
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={movies} onSearch={handleSearch} />}
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MovieRecommendationApp;
