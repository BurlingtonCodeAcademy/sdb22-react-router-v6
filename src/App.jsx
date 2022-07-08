import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import NotFound from './components/404';
/* 
  * 1. Install react router DOM [ npm i react-router-dom@6 ]
  * 2. import BrowserRouter and Routes from "react-router-dom"
    * BrowserRouter is a wrapper encompassing all components in a routing system.
    * Routes (formerly Switch v5 & below) - declare where each dynamic component will belong
    * Route
      * an individual route specifying the component to be rendered when hit
*/
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="*" element={ <NotFound /> }/>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about/:username" element={ <AboutMe /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/mainroute">
          <Route path="subroute" element={ <NotFound /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
