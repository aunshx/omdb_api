import React from 'react'

import SearchIcon from "@mui/icons-material/Search";

const Empty = () => {
  return (
    <div className='big-container flex_middle'>
      <div className='empty flex_middle'>
        <div className='flex_middle'>
          <SearchIcon style={{ marginRight: "0.1em", fontSize: 30 }} />
          <div>Search some movies</div>
        </div>
      </div>
    </div>
  );
}

export default Empty