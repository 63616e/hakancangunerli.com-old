// about.js
import Navinav from "../components/navinav";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export default function About() {
  return (
    <>
        <Navinav></Navinav>
        <span>heyo! </span>
        <div style={{paddingRight:"50px", paddingLeft:"50px"}}>
          My name is Hakan Can Gunerli. Well, my government name is that, I go by John here.
        I'm passionate about the Human side of Computer Science, particularly working towards how humans interact with computers and computer-based systems like Robots and the internet. I'm also interested in the future of Artificial Intelligence, especially how it will impact the way we interact with computers.
        <br/>
        Besides all that, I'm a big on reading, soccer (or football, depends where you're located) and buildings random things at midnight. also, big on memes. 
      </div>
      <br/>
      <div style={{paddingRight:"50px", paddingLeft:"50px"}}>
        I'm currently a student at the University of Georgia, studying Computer Science. I'm planning to graduate a semester early compared to my peers, but I'm not sure if I'll be able to do that. I'm currently a candidate for the Masters of Science in Computer Science combined program at the University of Georgia.

</div>

<center><img src="https://i.kym-cdn.com/entries/icons/original/000/034/135/adios.jpg" style={{width:"50%", height:"auto"}}></img></center>
For more info, you can contact me at <a href="mailto:hakancangunerli@uga.edu"> hakancangunerli at uga dot edu </a> 

    </>
  );
}
