import Movie from "../components/Movie"
import { useState, useEffect } from "react"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
  
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])


  // 아래 방식도 사용 가능하지만, async로 더 간편하게 쓸 수 있음
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
  //   .then(response => response.json())
  //   .then(json => setMovies(json.data.movies))
  //   setLoading(false)
  // })

  return (
    <div>
      {loading 
        ? <h1>Loading...</h1> 
        : 
          <div>
            {movies.map((movie) => (
              <Movie movie={movie} id={movie.id} />
          ))}    
          </div>
      }
    </div>
  );
}

export default Home;