import * as React from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Grid } from "@mui/material";
import {
  dataabout,
  meta,
  services,
} from "../../content_option";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaReact,FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Grid container spacing={3} className="mb-5 mt-3 pt-md-3">
          <Grid item lg={12}>
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Grid>
        </Grid>
        <Grid container spacing={3} className="sec_sp">
          <Grid item lg={5}>
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Grid>
          <Grid item lg={7}>
            <p>{dataabout.aboutme}</p>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="sec_sp">
          <Grid item lg={5}>
            <h3 className="color_sec py-4">My Skills</h3>
          </Grid>
          <Grid item lg={7}>
            <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FaReact style={{color:'cyan'}}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="React" style={{ color: 'black' }} /> 
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <IoLogoJavascript style={{color:'yellow'}}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Java Script" style={{ color: 'black' }} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FaJava style={{color:'orange'}}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Java" style={{ color: 'black' }} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </HelmetProvider>
  );
};
