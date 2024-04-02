import * as React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'; // Import Chip component
import img1 from '../../assets/images/logo_kmutnb.png';
import img2 from '../../assets/images/logo_technic.png';
import { Card, CardHeader, Box, Badge, Typography, Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Education | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Education </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Card variant="outlined" sx={{
          backgroundColor: '#2e2e2e',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0px 0px 20px 5px rgba(255, 255, 255, 0.5)',
          }
        }}>
          <CardHeader
            title={
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <img src={img1} alt="TNC_LOGO" height={59} />
                    </Grid>
                    <Grid item>
                      <Box px={2} textAlign="left">
                        <Typography fontWeight={600} color="white">King Monkut's Unversity of Technology North Bangkok</Typography>
                        <Typography color="white">Electronics Computer Technology</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'gray', display: 'inline-block', fontSize:'10px', padding:'3px'}}>BACHELOR</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography fontWeight={300} color="white">2022 - Present</Typography>
                </Grid>
              </Grid>
            }
          />
        </Card><br/>
        <Card variant="outlined" sx={{
          backgroundColor: '#2e2e2e',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0px 0px 20px 5px rgba(255, 255, 255, 0.5)',
          }
        }}>
          <CardHeader
            title={
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <img src={img2} alt="TNC_LOGO" height={59} />
                    </Grid>
                    <Grid item>
                      <Box px={2} textAlign="left">
                        <Typography fontWeight={600} color="white">Chanthaburi Technical College</Typography>
                        <Typography color="white">Technology Computer</Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', backgroundColor: 'gray', display: 'inline-block', fontSize:'10px', padding:'3px'}}>VOC. CERT. | HIGH VOC CERT.</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography fontWeight={300} color="white">2017 - 2022</Typography>
                </Grid>
              </Grid>
            }
          />
        </Card>
      </Container>
    </HelmetProvider>
  );
};
