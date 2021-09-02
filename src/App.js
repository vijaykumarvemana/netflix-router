
import './App.css';
import ShowMovies from './components/ShowMovies';
import MovieDetails from './components/MovieDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
  <Router>
      
      <Route path="/" exact component={ShowMovies}/>
      <Route path="/details/:movieID" component={MovieDetails} />

  </Router>

      
    </div>
  );
}

export default App;
