import TranslateIcon from "@mui/icons-material/Translate";
import FlagIcon from "@mui/icons-material/Flag";

type HeaderProps = {
    poster: string;
    title: string;
    year: string;
    defaultImage: string;
    language: string;
    country: string;
}

const Header = ({ poster, defaultImage, title, year, language, country }: HeaderProps) => {
  return (
    <>
      <div className='header'>
        <div className='image flex_left'>
          <img src={poster === "N/A" ? defaultImage : poster} alt='' />
        </div>
        <div className='flex_middle'>
          <div className='title flex_column'>
            <div className='title'>{title || "Movie title"}</div>
            <div className='year'>{year || "year"}</div>
            <div className='flex_middle details'>
              <div
                className='flex_middle'
                style={{ justifyContent: "flex-end", marginRight: "1.3em" }}
              >
                <TranslateIcon style={{ fontSize: 15, marginRight: "0.1em" }} />
                <div>{language}</div>
              </div>
              <div className='flex_middle'>
                <FlagIcon style={{ fontSize: 15, marginRight: "0.1em" }} />
                <div>{country}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
