/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>

              <div className="space" />
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">
                    1강
                  </h1>
                  <p className="text-white mt-4">
                    01강 a ac ad_(공통-기본)
                  </p>
                  
                </Col>
                <Col lg="6">
                  <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1cs8MIdeamGPKfhkHiCraDruPbdKfMFgO/preview" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                  </iframe>
                </Col>
              </Row>

              <div className="space" />
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">
                    2강
                  </h1>
                  <p className="text-white mt-4">
                    02강 de_(공통-기본)
                  </p>
                </Col>
                <Col lg="6">
                  <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                  </iframe>
                </Col>
              </Row>
                      
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
