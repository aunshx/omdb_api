import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState, FC } from 'react'
import "./App.css";

import Empty from './components/empty/Empty';
import Errors from './components/errors/Errors';
import Loader from './components/loader/Loader';
import MovieCard from './components/movies/MovieCard';

import Navbar from "./components/navbar/Navbar";

export type Movie = {
  id: string;
  poster: string;
  year: string;
  title: string;
}

export type MovieData = {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export type ErrorProps = {message: string; type: string;}



const App: FC = () => {

  const[input, setInput] = useState<string>("")
  const[movies, setMovies] = useState<MovieData[]>([])
  const[loading, setLoading] = useState<boolean>(false)
  const[lazyLoading, setLazyLoading] = useState<boolean>(false)
  const[error, setError] = useState<ErrorProps>({
    message: '',
    type: 'error'
  })
  const { message, type } = error
  const[page, setPage] = useState<number>(1);
  const [refChange, setRefChange] = useState<boolean>(false);

  const checker = useRef<IntersectionObserver | null>(null);

  const refElement = useCallback((node: HTMLDivElement) => {
    if (checker.current) {
      checker.current.disconnect();
    }
    const options = {
      root: null,
      threshold: 0,
    };
    checker.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setRefChange(true);
        setPage(page => page + 1)
        setLazyLoading(true)
      } else {
        setRefChange(false);
        setLazyLoading(false)
      }
    }, options);
    if (node) {
      checker.current.observe(node);
    }
  }, []);

  useEffect(() => {
    let isOpen: boolean = true 

    const fetchData = async () => {
      let validInput = input.trim()
      try {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${validInput}&type=movie&page=${page}`
        );

        const json = await data.json();

        if(json.Search){
          if (isOpen) {
          setMovies([...movies, ...json.Search]);
        } 
        }
        setLazyLoading(false)
      } catch (error) {
        setMovies([]);
        setLazyLoading(false)
        console.log(error)
      }
    }

      const getData = setTimeout(() => {
        if(refChange){
          fetchData();
        }
      }, 1000);

    return () => {
      isOpen = false
      clearInterval(getData)
    }
  }, [input, movies, page, refChange]);
  

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
                {movies.length > 0 ? (
                  <>
                    <div className='container'>
                    {movies.map((element, index) => (
                      <div key={element.imdbID}>
                        {index % 9 === 0 ? (
                          <div className='movie flex_middle' ref={refElement} >
                            <MovieCard
                              poster={element.Poster}
                              title={element.Title}
                              year={element.Year}
                              id={element.imdbID}
                            />
                          </div>
                        ) : (
                          <div className='movie flex_middle'>
                            <MovieCard
                              poster={element.Poster}
                              title={element.Title}
                              year={element.Year}
                              id={element.imdbID}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {lazyLoading && <div className="lazy_loading" >
                    Loading...
                  </div>}
                  </>
                ) : (
                  <Empty />
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
