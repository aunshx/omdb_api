import React from "react";

import SearchBar from './search/SearchBar'

type Props = {
    input: string;
    setInput: (val: string) => void; 
    loading: boolean;
    setLoading: (val: boolean) => void;
}

const Navbar: React.FC<Props> = ({
    input, 
    setInput, 
    loading, 
    setLoading
}) => {
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
            />
          </div>
        </div>
        <div className='flex_right cursor_pointer'>
          <a
            href='https://omdbapi.com'
            target={"_blank"}
            rel='noreferrer noopenner nofollow'
            style={{ fontSize: "1em" }}
          >
            More
          </a>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
