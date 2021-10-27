// research.js

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fontSize } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Research() {
  return (
    <>
      
      <div style={{ }}>
        <span>
          My commitment to research and development is one of my strongest
          traits. I believe strongly that Research and development is the life
          supply of any startup/company that does Computer Software.{" "}
        </span>
      </div>
      <div style={{ }}>
        <p>
          {" "}
          I currently work at these Research Labs at the University of Georgia,
          with hoping to look for more opportunities;{" "}
        </p>
      </div>

      <div style={{ display: "flex",  margin: "auto",  }}>
        <Card sx={{ }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Heterogeneous Robotics Research Lab
              <img src="http://hero.uga.edu/wp-content/uploads/2021/04/herolab_newlogo_whitebg.png" />
              <br />
            </Typography>
            <Typography variant="body2">
              I worked with Nazish Tahir as well as Dr. Ramviyas Parasuraman of
              the Computer Science Department at the University of Georgia at
              building Human-Robot Interfaces. <br />
              {'"updates on that soon."'}
            </Typography>
          </CardContent>
        </Card>
        {/* lol i'm lazy here.  */}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Quinn Research Group
              <img src="https://quinngroup.github.io/images/qrg.png" />
            </Typography>
            <Typography variant="body2">
              I worked with a team of 5 Computer Science under the guidance of
              Dr. Shannon Quinn of the Computer Science department to build a
              modern web interface for CiliaWeb project
              <br />
              {'"updates on that soon."'}
            </Typography>
          </CardContent>
        </Card>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              University of Georgia College of Engineering- Innovation
              Laboratory
              <img src="https://www.engineering.uga.edu/styles/images/logo.png" />
            </Typography>
            <br />
            <br />
            <Typography variant="body2">
              I lead a team of 3 Engineers to build a Virtual replicate of the
              newly built B-Innovation Laboratory located at the
              Multidisciplinary STEM Research Center <br />
              {'"updates on that soon."'}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ padding: "10px"}}>
        <p>
          {" "}
          I am also big into teaching, here are courses/places I've taught.{" "}
        </p>
      </div>

      <div style={{ display: "flex" , margin: "auto",  }}>
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              theCoderSchool
              <img src="https://www.thecoderschool.com/locations/img/logostacked-white-shadow.png" />
              <br />
              <br />
            </Typography>
            <Typography variant="body2">
              I assessed 50+ students' progress throughout the year and design
              projects with other staff to create an immersive teaching
              experience. Taught web development, web design, mobile
              development, graphical user interface design, and web application
              design.
              <br />
            </Typography>
          </CardContent>
        </Card>
        {/* lol i'm lazy here.  */}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Istanbul Technical University: Robotics Club
              <center>
                {" "}
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHnnrgJcQ3QvA/company-logo_200_200/0/1576324294364?e=1643241600&v=beta&t=QelswduamNqPDiNVwTp9o520BBT7H5PmPGbb9OHnZJw" />
              </center>
            </Typography>
            <Typography variant="body2">
              <br />
              I'm currently teaching Introduction to C++ and Data Structures at
              the Istanbul Technical University's Robotics Club.
              <br />
            </Typography>
          </CardContent>
        </Card>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Card sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Sunshine STEM Academy
              <img src="https://yt3.ggpht.com/ytc/AKedOLQyXSrod7ZAHdPX1QBCJBpa5mEW5oEPn2TnMXjoHQ=s176-c-k-c0x00ffffff-no-rj" />
            </Typography>
            <br />
            <br />
            <Typography variant="body2">
              I taught introduction to Robotics, and LEGO Mindstorms
              fundamentals at Sunshine STEM Academy.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
