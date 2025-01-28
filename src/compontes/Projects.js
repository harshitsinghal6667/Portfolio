import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Tasky Application",
      description: "Design & Development for Task Management",
      imgUrl: projImg1,
      repoLink: "https://github.com/harshitsinghal6667/tasky-application/tree/complete_project"
    },
    {
      title: "Stories Book", 
      description: "Design & Development for Children's Stories",
      imgUrl: projImg2,
      repoLink: "https://github.com/harshitsinghal6667/Stories_Project"
    },
    {
      title: "Sign-in/Sign-up Page",
      description: "Design & Development for Authentication Page with the help of Firebase",
      imgUrl: projImg3,
      repoLink: "https://github.com/harshitsinghal6667/login-register"
    },
    {
      title: "Health Monitoring System Using ECG and PPG Techniques",
      description: "Design & Development for Health Monitoring System",
      imgUrl: projImg4,
      repoLink: "https://github.com/harshitsinghal6667/Health-monitoring-system/tree/master"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      repoLink: "https://github.com/harshitsinghal6667/tasky-application/tree/complete_project"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      repoLink: "https://github.com/harshitsinghal6667/tasky-application/tree/complete_project"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have worked on Each of these projects has been carefully
                    designed and implemented, showcasing my ability to create
                    solutions that are both functional and user-friendly. Also I
                    take pride in ensuring that all my projects are responsive
                    and designed to provide a seamless user experience across
                    devices.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row md={3}>
                          {projects.map((project) => (
                            <a
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              <ProjectCard {...project} />
                            </a>

                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          The first project I'd like to share is the Tasky
                          Application, which I developed using HTML, CSS, and
                          JavaScript. This application enables users to add
                          tasks along with a title, image, and description,
                          offering an intuitive interface for task management.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          The second project, called Stories Book, is a platform
                          designed for children to explore and read various
                          stories. Built with PHP and MySQL, this project
                          highlights my ability to create a seamless backend
                          system to support engaging user experiences.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt ="backgroundimg" src={colorSharp2}></img>
    </section>
  );
};
