import { useState } from 'react'
import "./App.css";

import Navbar from "./components/navbar/Navbar";

export type Movie = {
  id: string;
  poster: string;
  year: string;
  title: string;
}

const App: React.FC = () => {

  const[input, setInput] = useState<string>("")
  const[movies, setMovies] = useState<Movie[]>([])
  const[loading, setLoading] = useState<boolean>(false)
  const[error, setError] = useState<{message: string; type: string;}>({
    message: '',
    type: 'error'
  })
  const[page, setPage] = useState<number>(1);

  return (
    <>
      <Navbar
        input={input}
        setInput={setInput}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        movies={movies}
        setMovies={setMovies}
        setPage={setPage}
      />
    </>
  );
}

export default App;
