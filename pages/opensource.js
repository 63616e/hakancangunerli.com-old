// research.js

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(1),
  width: "100%",
  height: "100%",
}));

export default function OpenSource() {
  return (
    <>
      
      <div>
        <p style={{  }}>
          i'm very open to contributing to open source projects. I'm quite
          active on GitHub, and I'm always looking for new projects to
          contribute to. Generally, I build multiple projects with varying
          levels of complexity and length, and they're always combined within a
          single repository. Some examples can see seen below:
        </p>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={"auto"}>
            <Item>
              {" "}
              <a href="https://github.com/hakancangunerli/python-projects">
                <img src="https://gh-card.dev/repos/hakancangunerli/python-projects.svg" />
              </a>
            </Item>
          </Grid>

          <Grid item xs={"auto"}>
            <Item>
              <a href="https://github.com/hakancangunerli/InnovationLabProject">
                <img src="https://gh-card.dev/repos/hakancangunerli/InnovationLabProject.svg" />
              </a>{" "}
            </Item>
          </Grid>
          <Grid item xs={"auto"}>
            <Item>
              <a href="https://github.com/hakancangunerli/kripto">
                <img src="https://gh-card.dev/repos/hakancangunerli/kripto.svg" />
              </a>
            </Item>
          </Grid>
          <Grid item xs={"auto"}>
            <Item>
              <a href="https://github.com/hakancangunerli/tcs-lectures">
                <img src="https://gh-card.dev/repos/hakancangunerli/tcs-lectures.svg" />
              </a>
            </Item>
          </Grid>
  
          <Grid item xs={"auto"}>
            <Item>
              <a href="https://github.com/hakancangunerli/ITURobotics-cpp">
                <img src="https://gh-card.dev/repos/hakancangunerli/ITURobotics-cpp.svg" />
              </a>
            </Item>
          </Grid>
          <Grid item xs={"auto"}>
            <Item>
              <a href="https://github.com/hakancangunerli/ayar-yukselt">
                <img src="https://gh-card.dev/repos/hakancangunerli/ayar-yukselt.svg" />
              </a>
            </Item>
          </Grid>
      
        </Grid>
    
      </div>
    </>
  );
}
