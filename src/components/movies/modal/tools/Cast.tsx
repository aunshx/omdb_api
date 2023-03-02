import React from 'react'

type CastProps = {
    director: string;
    writer: string;
    actors: string;
}

const Cast = ({ director, writer, actors }: CastProps) => {
  return (
    <>
      <div className='cast'>
        <div className='flex_around'>
          <div className='element flex_column'>
            <div style={{ fontWeight: "bold" }}>Director:</div>
            <div>{director || "N/A"}</div>
          </div>
          <div className='element flex_column'>
            <div style={{ fontWeight: "bold" }}>Writers:</div>
            <div>{writer || "N/A"}</div>
          </div>
        </div>
        <div className='flex_middle' style={{ marginTop: "1.5em" }}>
          <div className='element flex_column'>
            <div style={{ fontWeight: "bold" }}>Actors:</div>
            <div>{actors || "N/A"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cast