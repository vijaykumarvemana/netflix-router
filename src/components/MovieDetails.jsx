import { useState, useEffect } from "react"


const MovieDetails = (props) => {
   
   console.log(props.match.params.movieID)

   const [movieDetails,  setMovieDetails] = useState({})

   const fetchMvoieDetails = async() =>{
    try {
        const response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=8231abe8&i"+ props.match.params.movieID,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const moviesDetails = await response.json();
  
          setMovieDetails(moviesDetails);
        } else {
          console.log("this is Error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchMvoieDetails();
    }, []);
   
   
    return(
         <h2>movie details</h2>
    )
}

export default MovieDetails