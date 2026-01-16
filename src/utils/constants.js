// AI Engine (Gemini)
// Instead of "AIza...", use the process variable
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY;

// TMDB API Options
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};
