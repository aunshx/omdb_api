import React from 'react'

type MetaProps = {
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    awards: string;
    ratings: [];
    imdbRating: string;
    imdbVotes: string;
    boxOffice: string;
}

const Meta = ({
  rated,
  released,
  runtime,
  genre,
  awards,
  ratings,
  imdbRating,
  imdbVotes,
  boxOffice,
}: MetaProps) => {
  return (
    <>
      <div className='meta flex_column'>
        <div className='flex_middle' style={{ alignItems: "flex-start" }}>
          <div className='flex_middle element'>{runtime || "N/A"}</div>
          &#183;
          <div className='flex_middle element'>{released || "N/A"}</div>
          &#183;
          <div className='flex_middle element'>Rated {rated || "N/A"}</div>
          &#183;
          <div className='element'>Rating {imdbRating || "N/A"}</div>
          &#183;
          <div className='element'>{genre || "N/A"}</div>
        </div>
        <div
          className='flex_middle'
          style={{ margin: "1em 0 0 0", alignItems: "flex-start" }}
        >
          <div className='flex_middle element'>{awards || "N/A"}</div>
          &#183;
          <div className='flex_middle element'>{boxOffice || "N/A"}</div>
          &#183;
          <div className='flex_middle element'>
            Imdb Votes {imdbVotes || "N/A"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meta