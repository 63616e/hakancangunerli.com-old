// TODO: smooth scroll to search.js

import ReactTooltip from "react-tooltip";
import Link from "next/link";
import Moment from "react-moment";
import React, { useState } from "react";
import "moment-timezone";
import { SocialIcon } from "react-social-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { palette } from "@mui/system";
const picture = "/9358D3D5-DF3F-4F59-86CB-56C3090F86E5_4_5005_c.jpeg";
import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// TODO: you have your own handwriting font, use that here.

export default function Home() {
  return (
    <>
      <div className="split left">
        <div className="centered">
          <SocialIcon url="https://twitter.com/hakancangunerli" />
          <SocialIcon url="https://linkedin.com/in/hakancangunerli" />
          <SocialIcon url="https://github.com/hakancangunerli" />
          <SocialIcon url="https://instagram.com/hakancangunerli" />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <Box component="p" sx={{ p: 2.5, bgcolor: "black" }}>
            <Link href="https://github.com/hakancangunerli/python-projects">
              <Button>Small Python Projects</Button>
            </Link>
          </Box>

          <Box component="p" sx={{ p: 2.5, bgcolor: "pink" }}>
            <Link href="https://github.com/hakancangunerli/multi-translate">
              <Button>Multilingual Translator</Button>
            </Link>
          </Box>

          <center>
            {" "}
            <Box component="p" sx={{ p: 2.5, bgcolor: "lightblue" }}>
              <Link href="https://github.com/hakancangunerli/robot_packages">
                <Button> Robotics code</Button>
              </Link>
            </Box>
          </center>
          <Box component="p" sx={{ p: 2.5, bgcolor: "lightgreen" }}>
            <Link href="https://github.com/hakancangunerli/kripto">
              <Button>Crypto dashboard project </Button>
            </Link>
          </Box>

          <center>
            <Box component="p" sx={{ p: 2.5, bgcolor: "lightyellow" }}>
              <Link
                href="https://github.com/hakancangunerli/tanakh-quoter
"
              >
                <Button>Tanakh quoter </Button>
              </Link>
            </Box>
          </center>
          <center>
            <Box component="p" sx={{ p: 2.5, bgcolor: "purple" }}>
              <Link
                href="https://github.com/hakancangunerli/ayar-yukselt
"
              >
                <Button>Ayaryukselt </Button>
              </Link>
            </Box>
          </center>
          <Box component="p" sx={{ p: 2.5, bgcolor: "darkblue" }}>
            <Link
              href="https://github.com/hakancangunerli/gsu-code
"
            >
              <Button>GSU Coding Projects </Button>
            </Link>
          </Box>
        </div>
      </div>

      <div className="centered-handwriting">
        <div id="example1">
          <div className="hello">
            <p> From: hakan can gunerli </p>
            <p>
              {" "}
              To:{" "}
              {/* Todo: maybe we can put something like "a person from this location"  */}{" "}
              <form onInput="x.value=(a.value)">
                <input type="text" id="a" placeholder="your name here" />
                <output name="x" htmlFor="a"></output>
              </form>
            </p>
            <p>
              Date: <Moment format="YYYY/MM/DD" />
            </p>
            Hello (name will come here), <br />
          </div>

          <br />
          <div className="center-handwriting">
            <p>
              {" "}
              i am a third-year student at tech pursuing a bachelor's of science
              in computer science with threads in people and devices. i am
              interested in human-computer interaction and/or robotics.
              previously. 
            </p>
          </div>

          <div className="center-handwriting">
            <p>
              <br />i love the work i do. so, i've worked all types of places
              ranging from <a href="https://www.peero.io">startups</a> to{" "}
              <a href="https://www.isbank.com.tr/en">big corps.</a> I even{" "}
              <a href="https://www.linkedin.com/company/40953112/">
                {" "}
                had my own startup for a while,
              </a>{" "}
              which had unfortunately failed after its second year of operation.
            </p>
          </div>

          <div className="center-handwriting">
            <p>
              <br />
              besides work, i try to contribute to the communities i care about
              the most. i'm quite active on the underserved communities within
              turkey, who only are able to awe at the opportunities we take
              granted in the US, as well as the teaching community.
            </p>
          </div>

          <div className="center-handwriting">
            <p>
              <br />
              when i have the freetime to do things, i'd usually be dealing with
              things that are related to linguistics and building funny/weird
              things. you might see five projects finished in the course of a
              day in my github one day, that is quite normal, don't worry about
              it :)
              <br />
              <br />
              <Link href="./readable" passHref>
                <Button variant="contained" color="primary">
                  If you can't read text above, click here.{" "}
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
