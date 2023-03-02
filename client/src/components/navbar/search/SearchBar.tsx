import React, { ChangeEvent, useState, MouseEvent, useEffect } from "react";

import PropTypes from "prop-types";

import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import Loader from "../../loader/Loader";


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

type Props = {
    input: string;
    setInput: (val: string) => void; 
    loading: boolean;
    setLoading: (val: boolean) => void;
}

type InputEvent = ChangeEvent<HTMLInputElement>;
type MouseEventHandle = MouseEvent<HTMLDivElement>;

const SearchBar: React.FC<Props> = ({
    input, 
    setInput, 
    loading, 
    setLoading
}) => {

  const [isSelected, setIsSelected] = useState<boolean>(false);
  
  const changeSelected = (e: MouseEventHandle) => {
    setIsSelected(true);
  };

  const changeDeselected = (e: MouseEventHandle) => {
    setIsSelected(false);
  };


  return (
    <>
      <div className='search'>
        <CssSearchField
          size='small'
          placeholder='Search Movie By Title'
          fullWidth
          className='search_bar'
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

SearchBar.propTypes = {
};

export default SearchBar
