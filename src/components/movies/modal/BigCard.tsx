import React, { useEffect, useState } from 'react'

import defaultImage from '../../../resources/images/defaultImageMoviePoster.png'
import Loader from '../../loader/Loader';
import Meta from './tools/Meta';
import Header from './tools/Header';
import Cast from './tools/Cast';

type BigCardProps = {
    close: () => void;
    poster: string;
    id: string;
    title: string;
    year: string;
}

type DataProps = {
    description: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    language: string;
    country: string;
    awards: string;
    ratings: [];
    imdbRating: string;
    imdbVotes: string;
    boxOffice: string;
}

const defaultState: DataProps = {
      description: "",
      rated: "PG-13",
      released: "01 Oct 2010",
      runtime: "120 min",
      genre: "",
      director: "",
      writer: "",
      actors: "",
      language: "English, Hindi",
      country: "United States of America",
      awards: "",
      ratings: [],
      imdbRating: "",
      imdbVotes: "",
      boxOffice: ""
}


const BigCard = ({ title, id, poster, year, close
}: BigCardProps) => {

    const [data, setData] = useState<DataProps>(defaultState);

    const {
      description,
      rated,
      released,
      runtime,
      genre,
      director,
      writer,
      actors,
      language,
      country,
      awards,
      ratings,
      imdbRating,
      imdbVotes,
      boxOffice,
    } = data;

    const [cardLoading, setCardLoading] = useState<boolean>(true)

    useEffect(() => {
      let isOpen: boolean = true

      const fetchData = async () => {
        
        try {
          const getData = await fetch(
            `https://www.omdbapi.com/?apikey=e76becda&i=${id}`
          );

          const json = await getData.json()

          if(isOpen) {
            setData({
              ...data,
              description: json.Plot,
              rated: json.Rated,
              released: json.Released,
              runtime: json.Runtime,
              genre: json.Genre,
              director: json.Director,
              writer: json.Writer,
              actors: json.Actors,
              boxOffice: json.BoxOffice ,
              language: json.Language,
              country: json.Country,
              awards: json.Awards,
              imdbRating: json.imdbRating,
              imdbVotes: json.imdbVotes,
            });
          }

          setCardLoading(false)
        } catch (error) {
          setCardLoading(false)
        }
      }

      fetchData()

      return () => {
        isOpen = false
      }

    }, [data, id])


  return (
    <>
      <div className='big-card'>
        <Header
          country={country}
          language={language}
          poster={poster}
          defaultImage={defaultImage}
          year={year}
          title={title}
        />
        {cardLoading ? (
          <div className='flex_middle' style={{ margin: '50px 0 70px 0' }}>
            <Loader size={30} thickness={6} />
          </div>
        ) : (
          <>
            <div className='description'>{description}</div>
            <Cast director={director} writer={writer} actors={actors} />
            <Meta
              rated={rated}
              released={released}
              runtime={runtime}
              genre={genre}
              awards={awards}
              ratings={ratings}
              imdbRating={imdbRating}
              imdbVotes={imdbVotes}
              boxOffice={boxOffice}
            />
          </>
        )}
        <div className='flex_column' style={{ marginBottom: "-1em" }}>
          <div className='close flex_middle' onClick={close}>
            close
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCard