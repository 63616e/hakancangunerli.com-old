import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Education() {
  return (
    <>
      <div className="education" style={{}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 80 }}>
                      <Img
                        alt="complex"
                        src="https://brand.uga.edu/wp-content/uploads/GEORGIA-FS-FC-1024x335.png"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          University of Georgia
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          MS Computer Science
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Combined 5 year program in BS and MS in CS
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        2022-Present
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 80 }}>
                      <Img
                        alt="complex"
                        src="https://brand.uga.edu/wp-content/uploads/GEORGIA-FS-FC-1024x335.png"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          University of Georgia
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          BS Computer Science
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        2021-2022
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {" "}
              <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 80 }}>
                      <Img
                        alt="complex"
                        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGmZa55fnRpAA/company-logo_200_200/0/1535032281120?e=1643241600&v=beta&t=cYTU6LOrDWDt8eg2AB18qAg7756UImTJgCocRAaODxA"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          GSU: Honors College
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          BS Computer Science
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        2020-2021
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 80 }}>
                      <Img
                        alt="complex"
                        src="https://commkit.gsu.edu/files/2019/06/PrimaryLogo3color.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Georgia State University
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          BS Pre-Computer Science
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        2019-2020
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
