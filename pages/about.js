// about.js

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ReactTooltip from "react-tooltip";

const salutations = `<script>var example = ['hello!', 'merhaba!','bonjour!','hallo!','hola!', '!שלום', '68 65 6c 6c 6f '];textSequence(0);function textSequence(i) {if (example.length > i){setTimeout(function() {document.getElementById("sequence").innerHTML = example[i];textSequence(++i);}, 1000);} else if (example.length == i) {textSequence(0);}}</script> <div id="sequence"></div>`;

export default function About() {
  return (
    <>
      <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-black-600">
            <div dangerouslySetInnerHTML={{ __html: salutations }} />
          </span>
        </h1>
      </p>
      <div style={{}}>
        My name is{" "}
        <a data-tip="  /ˈhaːkan ˈdʒɑːn ɡʌnˈɜrli/">Hakan Can Gunerli</a>{" "}
        Well, my government name is that, I go by
        <a data-tip="  /ˈdʒɑːn/ -> en-US John" > John </a>
        
        
         here. I'm passionate
        about the Human side of Computer Science, particularly working towards
        how humans interact with computers and computer-based systems like
        Robots and the internet. I'm also interested in the future of Artificial
        Intelligence, especially how it will impact the way we interact with
        computers.
        <br />
        Besides all that, I'm a big on reading, linguistics, soccer - or
        football, depends where you're located - and buildings random things at
        midnight. also, big on memes.
        <br />
        I'm currently a student at the University of Georgia, studying Computer
        Science. I'm planning to graduate a semester early compared to my peers,
        but I'm not sure if I'll be able to do that. I'm currently a candidate
        for the Masters of Science in Computer Science combined program at the
        University of Georgia.
      </div>
      <ReactTooltip
        delayHide={1000}
        backgroundColor="#000000"
        effect="solid"
        html={true}
      />
      For more info, you can contact me at{" "}
      <a href="mailto:hakancangunerli@uga.edu">
        {" "}
        hakancangunerli at uga dot edu{" "}
      </a>
    </>
  );
}
