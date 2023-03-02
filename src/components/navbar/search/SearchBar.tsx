import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import useWindow from 'react-window-size-simple'

import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import Loader from "../../loader/Loader";

import { Props } from "../Navbar";

const CssSearchField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "none",
    // borderColor: 'none',
    border: "1px solid gray",
    boxShadow: "0px 1px 3px 0px rgba(15, 15, 15, 0.75)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      // borderColor: 'none',
      border: "1px solid gray",
      fontSize: "0.9em",
    },
    borderRadius: "20px",
    border: "1px solid none",
  },
}));


type InputEvent = ChangeEvent<HTMLInputElement>;
type MouseEventHandle = MouseEvent<HTMLDivElement>;

const SearchBar = ({
    input, 
    setInput, 
    loading, 
    setLoading,
    movies,
    setMovies,
    setPage,
    error,
    setError
}: Props) => {

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { width } = useWindow()
  
  const changeSelected = (e: MouseEventHandle) => {
    setIsSelected(true);
  };

  const changeDeselected = (e: MouseEventHandle) => {
    setIsSelected(false);
  };

  useEffect(() => {
    let isOpen: boolean = true;

    const fetchData = async () => {
      let validInput = input.trim()
      if(validInput.length > 0){
        const data = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${validInput}&type=movie&page=1`
        );

        const json = await data.json();

        setLoading(false);

        if (json.Response === "False") {
          setMovies([]);
          setPage(1)
          setError({
            ...error,
            message: json.Error,
          });

          setTimeout(
            () =>
              setError({
                ...error,
                message: "",
              }),
            2500
          );
        } else {
          if (isOpen) {
              setMovies(json.Search);
          }
        }
      } else {
         setMovies([]);
          setLoading(false);
          setPage(1)
         setError({
           ...error,
           message: 'Please type valid movie name',
         });

         setTimeout(
           () =>
             setError({
               ...error,
               message: "",
             }),
           2500
         );
      }

    };

    if (input !== "") setLoading(true);

    // Send API request only after 1 second each
    const getData = setTimeout(() => {
      try {
        if(input !== '') {
          fetchData();
        } else {
          setMovies([]);
          setLoading(false)
        }
      } catch (e) {
        setLoading(false);
        return e;
      }
    }, 1000);

    // clean up the interval also isOpen to false to prevent race condition
    return () => {
      isOpen = false;
      clearInterval(getData);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, setLoading]);


  return (
    <>
      <div className='search'>
        <CssSearchField
        //   style={width < 635 ? {width: '200px'} : {}}
          size='small'
          placeholder={width < 635 ? 'Search Movie' : 'Search Movie By Title'}
          fullWidth
          onChange={(e: InputEvent) => setInput(e.target.value)}
          onMouseEnter={changeSelected}
          onMouseLeave={changeDeselected}
          value={input}
          name='input'
          InputProps={{
            endAdornment: (
              <div className='flex_end_everything'>
                <InputAdornment position='end'>
                  {loading ? (
                    <Loader size={17} thickness={4} />
                  ) : (
                    <>
                      {input.length > 0 ? (
                        <CloseIcon
                          style={{
                            fontSize: 18,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setInput("");
                            setPage(1);
                            setMovies([]);
                            setLoading(false);
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </InputAdornment>
              </div>
            ),
            startAdornment: (
              <InputAdornment position='start'>
                {isSelected ? (
                  <SearchIcon
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <SearchIcon />
                )}
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};

export default SearchBar
