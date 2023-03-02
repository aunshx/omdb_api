import { useEffect, useState, MouseEvent } from 'react'
import { Box, Fade, Modal } from "@mui/material";
import useWindow from 'react-window-size-simple';

// Importing components 
import BigCard from "./modal/BigCard";

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
};

const styleSmall = {
 position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  border: "none",
  outline: "none",
  padding: "1em",
}

const MovieCard = ({ poster, title, year, id }: Movie) => {

 const { width } = useWindow()

  // Image loading for poster 
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)

  useEffect(() => {
    if(poster === "N/A") setIsImageLoading(false)
  }, [poster])

  // Card modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Open Modal when clicked
  const openModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
  }

  // Close the modal 
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
  }

   const onLoad = () => {
     setIsImageLoading(false);
   };

  return (
    <div onClick={openModal}>
      <div className='card cursor_pointer' data-aos={width < 786 ? '' : 'fade-up'} data-aos-offset={20} >
        <div
          style={width < 786 ? {
            display: isImageLoading ? "block" : "none",
            width: "200px",
            height: "150px",
            marginBottom: "1em",
            borderRadius: "10px 10px 0 0",
            padding: '60px'
          } : {
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
          <Box sx={width < 600 ? styleSmall : style}>
            <BigCard
              close={closeModal}
              poster={poster}
              id={id}
              title={title}
              year={year}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default MovieCard