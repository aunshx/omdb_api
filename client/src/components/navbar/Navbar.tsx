import useWindow from 'react-window-size-simple'

import SearchBar from './search/SearchBar'

import { MovieData } from "../../App";

export type Props = {
    input: string;
    setInput: (val: string) => void; 
    loading: boolean;
    setLoading: (val: boolean) => void;
    error: {
        message: string;
        type: string;
    };
    setError: (val: {
        message: string;
        type: string;
    }) => void;
    movies: MovieData[];
    setMovies: (movies: MovieData[]) => void;
    setPage: (val: number) => void
}

const Navbar = ({
    input, 
    setInput, 
    loading, 
    setLoading,
    error,
    setError,
    movies,
    setMovies,
    setPage
}: Props) => {
const {width} = useWindow()

  return (
    <>
      <div className='navbar flex_between'>
        <div className='flex_middle cursor_pointer'>
          <a
            href='https://omdbapi.com'
            target={"_blank"}
            rel='noreferrer noopenner nofollow'
          >
            OMDb
          </a>
          <div style={{ marginLeft: "0.5em" }}>
            <SearchBar
                input={input}
                setInput={setInput}
                loading={loading}
                setLoading={setLoading}
                movies={movies}
                setMovies={setMovies}
                error={error}
                setError={setError}
                setPage={setPage}
            />
          </div>
        </div>
        {width > 700 && <div className='flex_right cursor_pointer'>
          <a
            href='https://omdbapi.com'
            target={"_blank"}
            rel='noreferrer noopenner nofollow'
            style={{ fontSize: "1em" }}
          >
            More
          </a>
        </div>}
      </div>
    </>
  );
};

export default Navbar;
