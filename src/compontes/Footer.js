import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 class="logo1">Portfolio</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/harshit-singhal-630047243"
                target="_blank" rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://www.facebook.com/harshit.singhal.7737769/"
                target="_blank" rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/harshitsinghal667/"
                target="_blank" rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="https://github.com/harshitsinghal6667?tab=repositories"
                target="_blank" rel="noreferrer"
              >
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p > Harshit Singhal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
