import React from 'react';
import logo from './logo.svg';
// import useSound from 'use-sound';
import './App.css';
// import { Link, NavLink } from 'react-router-dom'; will be used in the future for navigation 
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const can = 'can.mp3';
const cna = 'cna.mp3';
function playCan() {
  var audio = new Audio('can.mp3');
  audio.play();
}

function playCna() {
  var audio = new Audio('cna.mp3');
  audio.play();
}



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
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div style={{ "textAlign": "center", color: 'red' }}>please note that this website is still very much in the work so you can use this sound to soothe yourself in the meantime. </div> */}
      <div className="App-header">
        <audio autoPlay id="audioPlayer" controls>
          <source src="music.mp3" type="audio/mpeg" />
        </audio>
        <br />
        <div style={{}} className="App-logo">
          hi
        </div>
        <br />

        <div className="App-header-content">

          <div className="#home">
            <span> I am </span>
            <span onMouseOver={playCan} className="span-text">can</span>/
            <span onMouseOver={playCna} className="span-text">cna</span>/
            <span onMouseOver={playCan} className="span-text">john</span>/
            <span className="span-text">
              63616e
            </span> depends where we met.
            <br />
            I study intelligent systems and human computer interaction at Georgia Tech.
            <br />
            I'm interested in:
            <br />
            Human-Centered Computing (Human-Computer Interaction/Human-Robot Interaction in particular)
            <br />
            Robotics (Multi-Robot systems, Human-robot interfaces)
            <br />
            Previously been involved  Quinn Research Group, HeroLab and the University of Georgia.
            <br />
            Currently involved with Brown Lab at Georgia Tech.
          </div>
          <Button variant="outline-primary">
            <span style={{ color: "white" }}>LinkedIn</span>
          </Button>{' '}
          <Button variant="outline-dark">
            <span style={{ color: "white" }}>GitHub</span></Button>{' '}
          <Button variant="outline-danger"><span style={{ color: "white" }}>Twitter</span></Button>{' '}
        </div>

      </div>
      <div id="projects" className="projects">

        I love building things. I truly believe that the only way to learn is by building, especially in the cs medium. If you have the time and patience to check my GitHub, you can take a look at all the projects I have worked on. Here's some I'm pretty happy with.
      </div>

    </div>



  );
}

export default App;
