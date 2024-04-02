import * as React from "react";
import { useState } from 'react';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import resume from '../../assets/images/Resume.jpg';
import trascrip from '../../assets/images/Transcrip.jpg';

export const Home = () => {
  const [openResume, setOpenResume] = useState(false);
  const [openTranscrip, setOpenTranscrip] = useState(false);

  const handleOpenResume = () => {
    setOpenResume(true);
  };

  const handleCloseResume = () => {
    setOpenResume(false);
  };

  const handleOpenTranscrip = () => {
    setOpenTranscrip(true);
  };

  const handleCloseTranscrip = () => {
    setOpenTranscrip(false);
  };

  const handleDownloadResume = () => {
    window.location.href = `https://drive.google.com/uc?export=download&id=1RXrYaePfprlJ8_rgHbpk17yM3e410nGo`
  };

  const handleDownloadTranscrip = () => {
    window.location.href = `https://drive.google.com/uc?export=download&id=1BgwjVb25WH5tNIMiriLSFC1jRFXbjDor`
  };

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <div id="button_h" className="ac_btn btn" onClick={handleOpenResume}>
                    Resume
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                  <Modal
                    open={openResume}
                    onClose={handleCloseResume}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ width: 400 }}>
                      <img src={resume} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
                      <div  style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' , marginBottom: '10px'}}>
                      <Button variant="contained" onClick={handleDownloadTranscrip}>Download</Button>
                      </div>
                    </Box>
                  </Modal>
                  <div id="button_h" className="ac_btn btn" onClick={handleOpenTranscrip}>
                    Transcrip
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                  <Modal
                    open={openTranscrip}
                    onClose={handleCloseTranscrip}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ width: 400 }}>
                      <img src={trascrip} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
                      <div  style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' , marginBottom: '10px'}}>
                      <Button variant="contained" onClick={handleDownloadTranscrip}>Download</Button>
                      </div>
                    </Box>
                  </Modal>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
