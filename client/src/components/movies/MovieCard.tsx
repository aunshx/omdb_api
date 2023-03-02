import React, { useEffect, useState } from 'react'
import { Tooltip, Zoom, Box, Fade, Modal } from "@mui/material";

// Importing components 
// import BigCard from "./modal/BigCard";

// Importing images
import defaultImage from '../../resources/images/defaultImageMoviePoster.png'

import Loader from '../loader/Loader';

import { Movie } from '../../App';

const style = {
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  border: "none",
  outline: "none",
  padding: "1em",
  // width: "70%",
  // height: "60%",
};

const MovieCard = ({ poster, title, year, id }: Movie) => {

  // Image loading for poster 
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)

  useEffect(() => {
    if(poster === "N/A") setIsImageLoading(false)
  }, [poster])

  // Card modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Open Modal when clicked
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Close the modal 
  const closeModal = () => {
    setIsModalOpen(false)
  }

   const onLoad = () => {
     setIsImageLoading(false);
   };

  return (
    <>
      <div className='card cursor_pointer' onClick={openModal}>
        <div
          style={{
            display: isImageLoading ? "block" : "none",
            width: "250px",
            height: "200px",
            marginBottom: "1em",
            borderRadius: "10px 10px 0 0",
            padding: '100px'
          }}
        >
          <div className='flex_middle'>
            <Loader size={17} thickness={4} />
          </div>
        </div>
        <div
          style={{
            display: isImageLoading ? "none" : "block",
          }}
        >
          <img
            src={poster !== "N/A" ? poster : defaultImage}
            alt={`${title} movie`}
            onLoad={onLoad}
          />
        </div>
        <div className='title flex_column'>{title || "Movie title"}</div>
        <div className='year flex_column'>{year || "year"}</div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            {/* <BigCard
              close={closeModal}
              poster={poster}
              id={id}
              title={title}
              year={year}
            /> */}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default MovieCard