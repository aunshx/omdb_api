import { useState, FC } from 'react'
import "./App.css";
import Errors from './components/errors/Errors';
import Loader from './components/loader/Loader';

import Navbar from "./components/navbar/Navbar";

export type Movie = {
  id: string;
  poster: string;
  year: string;
  title: string;
}

export type ErrorProps = {message: string; type: string;}

const App: FC = () => {

  const[input, setInput] = useState<string>("")
  const[movies, setMovies] = useState<Movie[]>([])
  const[loading, setLoading] = useState<boolean>(false)
  const[error, setError] = useState<ErrorProps>({
    message: '',
    type: 'error'
  })
  const { message, type } = error
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
      <div className="flex_column">
        {loading ? (
          <div className="big-container flex_middle">
            <Loader size={30} thickness={5}  />
          </div>
        ) : (
          <>
            {error.message.length > 0 ? (
              <Errors message={message} type={type} />
            ) : (
              <>
                Movies Array
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
