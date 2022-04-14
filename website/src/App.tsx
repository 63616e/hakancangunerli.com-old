import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Link, NavLink } from 'react-router-dom'; will be used in the future for navigation 
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">


      <Navbar>
        <Container>
          <Navbar.Brand href="#home">can</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Item>
                <Nav.Link href="https://github.com/63616e/cv-resume/blob/master/MOST%20RECENT%20Hakan%20C.%20Gunerli%20.pdf">Resume</Nav.Link>
              </Nav.Item>
              
            </Navbar.Text>
            <Nav.Link eventKey="disabled" disabled> Experience</Nav.Link>
            <Nav.Link eventKey="disabled" disabled> Blog</Nav.Link>
            <Nav.Link eventKey="disabled" disabled> Projects</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App-header">
        <img src="https://images.roadtrafficsigns.com/img/lg/X/road-work-ahead-sign-x-w20-1-a.png"className="App-logo" alt="logo" />
        {/* play the music.mp3 file */}
        <audio autoPlay id="audioPlayer" controls>
          <source src="music.mp3" type="audio/mpeg" />
        </audio>
        <div style={{"textAlign":"center", color:'red'}}>please note that this website is still very much in the work so you can use this sound to soothe yourself in the meantime. </div>
        <div className="App-header-content">
        
          <div className="centered">
            Hi! I'm can, or john or cna or even 63616e. depends where we met. 
            <br />
            Computer Science student @ the Georgia Institute of Technology.
            <br />
            I'm interested in:
            <br />
            Human-Centered Computing (Human-Computer Interaction/Human-Robot Interaction)
            <br />
            Robotics (Multi-Robot systems, Human-robot interfaces)
            <br />

            Previously at Quinn Research Group, HeroLab and the University of Georgia.
          </div>

        </div>
      </div>
    </div>


  );
}

export default App;
