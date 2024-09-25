
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from "./Pages/HomePage";

import MoviePage from "./Pages/MoviePage";

import './Styles/styles.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" Component = {HomePage} />
          <Route path="/movies/:id" Component = {MoviePage} />
        </Routes>
      </Router>
  );
}

export default App;
