import { Link } from "react-router-dom"

function Movie({movie, id}) {
    return (
        <div key={movie.id}>
            <h2>
                <Link to={`/movie/${id}`}>{movie.title}</Link>
            </h2>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movie;