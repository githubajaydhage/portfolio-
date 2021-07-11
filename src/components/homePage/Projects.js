// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from 'react-bootstrap/Badge'
import Img from 'react-cool-img';

const myProjects = [
  {
    image: "/images/img1.jpg",
    title: "Whatsapp Clone",
    description:
      "Tried to replicate WhatsApp UI, and some features also. - Can Create Groups - Can Switch B/w the groups - send messages to any groups Used Firebase for the databases",
    source: "https://github.com/githubajaydhage/whatsapp-clone",
    demoLink: "https://whatsapp-clone-53d8c.web.app/rooms/QIPEvsdzwLBr8AcT1WVD",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=4DTHrXOLHnQ&t=52s"
  },
  {
    image: "/images/fbclone.jpg",
    title: "Facebook Clone",
    description:
      "The aim of this project is to make a pixel-perfect clone of Facebook. I used the BEM naming Convention Used Firebase for the databases",
    source: "https://github.com/githubajaydhage/Facebook-Clone",
    demoLink: "https://facebook-clone-ccd54.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=_5Q8vTcpjhI"
  },
  {
    image: "/images/linkedclone.jpg",
    title: "Linkedin Clone",
    description:
      "This page is designed using HTML, CSS and Reactjs , redux , reduxthunk , json mocker User can upload post Like and comment on other post also.",
    source: "https://github.com/githubajaydhage/Linkedin-Clone",
    demoLink: "https://linkedin-clone-a7ba5.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=CA1xCJvSCw8&t=32s"
  },
  {
    image: "/images/invoice.png",
    title: "Invoice Application",
    description:
      "User can Signup with google api and from inserting own data. After Login They can create a invoice Bonus- Can generate bill in form of PDF",
    source: "https://github.com/githubajaydhage/kontext-invoice-app",
    badge:"ReactJS"
    // demoLink: "https://headphoonestore.netlify.app/",
  },
  {
    image: "/images/Screenshot 2020-10-14 115302.jpg",
    title: "Shopping Cart",
    description:
      "Concept used ContextApi, Axios, Styled-Components, React-Router-Dom. User can Filter thrughout the Products ex - Sort Price , filter category",
    source: "https://github.com/githubajaydhage/Basic-Shopping-Cart",
    demoLink: "https://shopping-cart-a0d9a.web.app/",
    badge:"ReactJS",
    liveweb:"https://www.youtube.com/watch?v=ukYdUnHidq8"
  },
  {
    image: "/images/covid.png",
    title: "Covid Vaccine Slot Availability",
    description:
      "User can Get the Detail of Availability of Slots of Vaccine on one click",
    source: "https://github.com/githubajaydhage/covidSaharsa",
    demoLink: "https://covidsaharsa.netlify.app/",
    badge:"ReactJS",
  },
  {
    image: "/images/invoice.png",
    title: "Invoice Application",
    description:
      "User can Signup with google api and from inserting own data. After Login They can create a invoice Bonus- Can generate bill in form of PDF",
    source: "https://github.com/githubajaydhage/kontext-invoice-app",
    badge:"ReactJS"
    // demoLink: "https://headphoonestore.netlify.app/",
  },
  {
    image: "/images/project-music-player.png",
    title: "Music Player Web-App based on Django",
    description:
      "Tools: Django, HTML, CSS, Bootstrap, SQLite, AWS S3, Heroku Register/login to the web app(with OAuth-based Google Sign-In). Search and filter songs based on language and singer. Create multiple playlists and add/remove songs to/from playlist. Scroll through recently played/viewed songs",
    source: "https://github.com/githubajaydhage/music-player",
    demoLink: "https://galvanic-music.herokuapp.com/",
    badge:"Django", "HTML", "CSS", "Bootstrap", "SQLite", "AWS S3", "Heroku",
  }
  {
    image: "/images/project-music-player.png",
    title: "Music Player Web-App based on Django",
    description:
      "Tools: Django, HTML, CSS, Bootstrap, SQLite, AWS S3, Heroku Register/login to the web app(with OAuth-based Google Sign-In). Search and filter songs based on language and singer. Create multiple playlists and add/remove songs to/from playlist. Scroll through recently played/viewed songs",
    source: "https://github.com/githubajaydhage/music-player",
    demoLink: "https://galvanic-music.herokuapp.com/",
    badge:"Django", "HTML", "CSS", "Bootstrap", "SQLite", "AWS S3", "Heroku",
  }
];
<a href="https://github.com/githubajaydhage" target="_blank">
  <Button> View More Projects </Button>
</a>
<div className="mt-5">
                <Row className="tabs mb-2">
                  <Col
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab custom-mr-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5 a href="https://github.com/githubajaydhage" target="_blank">View More Projects</h5>
                  </Col>

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                <Badge className="lmckdncd" pill variant="warning">
                  {project.badge}
                  </Badge>
                {
                  project.liveweb &&   <Badge className="jdnkcjd" pill variant="danger" >
                     <a href={project.liveweb} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:'white'}}>Youtube</a>
                      </Badge>
                }
                  <div className="project-card">
                    <div className="img-section">
                    <Img
                      placeholder="/images/loading.gif"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
