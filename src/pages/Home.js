// Importing the necessary React components and external modules
import React from "react";
import MapLeaflet from "../component/MapLeaflet.jsx";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// Functional component representing the Home page
const Home = () => {
  return (
    // Main container for the Home page content
    <div className="App">
      <Navbar expand="lg" className="bg-black w-100">
        <Container>
          <Navbar.Brand className="text-light" href="#">
            Maps app
          </Navbar.Brand>
        </Container>
      </Navbar>

      <MapLeaflet />
      <footer>copyright Maps app</footer>
    </div>
  );
};
export default Home;
