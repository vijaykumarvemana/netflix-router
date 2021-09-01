import { useEffect } from "react";
import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
const ShowMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=8231abe8&s=titanic",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const moviesData = await response.json();

        setMovies(moviesData.Search);
      } else {
        console.log("this is Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
      <section>

    <Container md={2} className="mt-5">
      <Row >
        {movies.slice(0,6).map((movie) => (
          <Col xs={6} md={2}>
            <Card>
              <Card.Img variant="top" src={movie.Poster}  />
              <Card.Title>{movie.Title}</Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      </section>
  );
};
export default ShowMovies;