// Orizon Branding
export const LOGO = "https://i.ibb.co/LzNf0Ym/orizon-logo-orange.png" 
export const BACKDROP = '/bg.jpg'
export const DP = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0RN1rfgQ3wvx01TOc_5dyRGoW8SRGWTtmg&s"

// TMDB API Configurations
export const TMDB_MOVIE_LIST_TYPES = ["Now Playing", "Popular", "Top Rated"]
export const TMDB_MOVIE_URL = (movieType) => `https://api.themoviedb.org/3/movie/${movieType.toLowerCase().replace(' ', '_')}?page=1`
export const TMDB_MOVIE_SEARCH = ({name,year}) => `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&page=1&year=${year}`
export const TMDB_MOVIE_VIDEO_URL = (id) => `https://api.themoviedb.org/3/movie/${id}/videos`

export const TMDB_SERIES_LIST_TYPES = ["Airing Today", "Popular", "Top Rated"]
export const TMDB_SERIES_URL = (seriesType) => `https://api.themoviedb.org/3/tv/${seriesType.toLowerCase().replace(' ', '_')}?page=1`
export const TMDB_SERIES_SEARCH = ({name,year}) => `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&page=1&year=${year}`
export const TMDB_SERIES_VIDEO_URL = (id) => `https://api.themoviedb.org/3/tv/${id}/videos`

export const TMDB_IMAGE_URL = (path) => `https://image.tmdb.org/t/p/w500${path}`

// Video Player Config
export const YOUTUBE_EMBEDDED_URL = (key) => `https://www.youtube.com/embed/${key}?&amp;controls=0&modestbranding=1&disablekb=1&fs=0&rel=0&iv_load_policy=3&autoplay=1&mute=1&loop=1&playlist=${key}`

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};

// AI Engine (Gemini) - Updated to 10 results
export const GEMINI_KEY = "AIzaSyCu3QFU_y6uRn61zPAzRbSxXo5Y7FPXJs4";

export const GPT_QUERY = 
  "Act as a Orizon Movie Recommendation system. Query: ";

export const GPT_QUERY_SECONDARY = 
  ". Only give me names of 10 movies or series, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, De Dana Dan, Welcome, Hera Pheri, Drishyam, Kantara";
