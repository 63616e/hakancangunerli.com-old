import React from 'react';
// import useSound from 'use-sound';
import './App.css';
// import { Link, NavLink } from 'react-router-dom'; will be used in the future for navigation 
import { Nav, Navbar, Container, Button, Col, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// eslint-disable-next-line
const can = 'can.mp3';
// eslint-disable-next-line
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
          <Navbar.Brand href="#home"><span style={{fontSize:"30px"}}>can</span></Navbar.Brand>
          &nbsp;
          <Nav.Item><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" width="30" height="30" /> </Nav.Item> &nbsp;
          {/* add svg logo of github  */}

          
              {/* add svg logo for linkedin */}
          <Nav.Item> 
        
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="linkedin" width="30" height="30" />
          
             </Nav.Item> &nbsp;
          <Nav.Item> <img src="data:image/png;base64,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" alt="twitter" width="30" height="30" /> </Nav.Item> &nbsp;
          <Nav.Item> 
            {/* add instagram logo  */}
            <img src="data:image/jpeg;base64,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" alt="Instagram" width="30" height="30" />
    
            
             </Nav.Item>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Item>
                <Nav.Link href="https://github.com/63616e/cv-resume/blob/master/MOST%20RECENT%20Hakan%20C.%20Gunerli%20.pdf">Resume</Nav.Link>
              </Nav.Item>

            </Navbar.Text>
            <Nav.Link href="#experience" > Experience</Nav.Link>
            <Nav.Link eventKey="disabled" disabled> Blog</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App-header">
        {/* <audio autoPlay id="audioPlayer" controls>
          <source src="music.mp3" type="audio/mpeg" />
        </audio> */}
        <br />
        <div style={{}} className="App-logo">
          hi
        </div>
        <br />

        <div className="App-header-content">

          <div id="#home">
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
          <Button href= "https://linkedin.com/in/hakancangunerli" variant="outline-primary">
            <span style={{ color: "white" }}>LinkedIn</span>

          </Button>{' '}
          <Button href="https://github.com/hakancangunerli"variant="outline-dark">
            
            <span style={{ color: "white" }}>GitHub</span></Button>{' '}
          <Button href="https://twitter.com/hakancangunerli"variant="outline-danger"><span style={{ color: "white" }}>Twitter</span></Button>{' '}

        </div>

      </div>
    
      <div id="experience">

        {/* TODO: don't make this h1, make this "responsive" based on pagesize */}
        <div className="experience-content">
          <h1>Experience/Affiliations</h1>


          Here's some of my work experience, if you need the entire list, please check my LinkedIn, or get the optimized list from my resume.
          
          <br />
          <br />

          <h2>lab involvements</h2>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Frontend Lead (2021) &  Head of UI/UX (2022) </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">University of Georgia- Quinn Research Group</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>


              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Head of Web Development
                      <br />
                      <br />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Georgia Institute of Technology Brown Laboratory<br /></Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                      <br />
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Undergraduate Research Assistant:Human-Robot Interaction </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">University of Georgia Heterogeneous Robotics Laboratory</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>




              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Undergraduate Student Assistant:Lab Fellowship </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">University of Georgia College of Engineering: Innovation Lab</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>

          <br />

          <h2>startup involvements</h2>


          <Container>
            <Row>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title> Owner </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">tal-labs</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>


              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> Cloud Engineering Intern </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">uVox</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title> Chief Product Officer  </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Peero</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card></Col>
            </Row>

          </Container>
<br/>
          <br />

        </div>
      </div>
    
      <div id="projects" className="projects">
    

       <div className="projects-content">
        <h1>Projects</h1>
        {/* TODO: don't make this h1, make this "responsive" based on pagesize */}
        I have several projects I've been working on, some of which are listed below. If you need the whole list, please check my GitHub.
        </div>
        <br />
        <br />
        <div className="projects-svgs">
        <img src="https://gh-card.dev/repos/63616e/average-oecd-countries.svg" alt="63616e" />
        <img src="https://gh-card.dev/repos/63616e/frame-unifying-content-combiner.svg" alt="63616e" />
          <img src="https://gh-card.dev/repos/63616e/airspace_map.svg" alt="63616e" />



        <br/>
          <br />
          <br />
    </div>

      </div>


    
    </div>
    



  );
}

export default App;
