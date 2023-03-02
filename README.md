# OMDb API Project

### _A small project showcasing the OMDb Movie API_

The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by users. Check it out [here](http://omdbapi.com).

#### Check out the app [here](https://calm-cajeta-d1c26b.netlify.app/)

## Features

- OMDb API to fetches a list of movies and their details.
- A search bar is used as the input field. The API fetches movies based on the title (case-insensitive).
- A modal is displayed when the user clicks on a movie card with the movie details (title, year, director, etc.).
- Has infinite loading functionality.
- Site is completely responsive.

## Tech

The packages/libraries/technologies used are as follows:

- [ReactJS](https://reactjs.org/) - A JS libraray used to build UI
- [Typescript](https://www.typescriptlang.org/) - Language used to build the application
- [CSS3](https://www.tutorialrepublic.com/css-tutorial/) - To design the UI
- [Material UI](https://mui.com/) - React UI library for faster production
- [dotenv](https://www.npmjs.com/package/dotenv) - Load environment variables

## Installation

The OMDb API project can be cloned and used on your own device.
clone the project, install the dependencies and start the react app.

```sh
git clone https://github.com/aunshx/omdb_api.git
npm i
npm run start
```

_You will need an OMBd API key which can be gotten from the OMDb Website_

## Working

#### Part 1

- In the search bar type the title of the movie you want.
- Search will show multiple movies which map to the title
- Scroll further if movie not found (lazy loading).
-

_The images in the gif seem distorted due to compressed gif that had to be uploaded_

[![HV0J3Eg.md.gif](https://iili.io/HV0J3Eg.md.gif)](https://freeimage.host/i/HV0J3Eg)

#### Part 2

- Click on any movie card to open modal and check its details

![](https://i.postimg.cc/QM6QXzHF/omdbapi-2.gif)

#### Part 3

- Completely response. Good to use on mobile as well as computer.

![](https://i.postimg.cc/5t95WJNc/omdbapi-3.gif)

## License

MIT
