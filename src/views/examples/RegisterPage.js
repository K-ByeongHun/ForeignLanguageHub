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
        
          
        <div className="section">
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
          </Container>   
        </div>
                      
        <div className="section">
          <Container>
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
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/15uSfhpLk4tQwONDsAb2aZiZ4fPhomasQ/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  4강
                </h1>
                <p className="text-white mt-4">
                  04강 under_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1_2TXu7UCsiENJ_SwowutlIbYvAd--eFn/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  5강
                </h1>
                <p className="text-white mt-4">
                  05강 sur_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1CrzWBodIUZAYz_ZU5L-3M_ULdp9jsUMs/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  6강
                </h1>
                <p className="text-white mt-4">
                  06강 up_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1uynjabrifaPAC4DXEtpV5J35KeDQhL0C/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  7강
                </h1>
                <p className="text-white mt-4">
                  07강 super_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/193MyiHk0Aypuj6CW4q_tOANKXEmYQSuD/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  8강
                </h1>
                <p className="text-white mt-4">
                  08강 over_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1YUnQU8SeV2xqiZPcJxETmsjJ7O1Klusq/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  9강
                </h1>
                <p className="text-white mt-4">
                  09강 ex_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/10S-8xq2I9Y0hkvlUPmL5i5TiPOnmlAVO/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  10강
                </h1>
                <p className="text-white mt-4">
                  10강 out_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1eC2TIXDbzk1ylqlDEg0mHcWaxCfBU6mU/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  11강
                </h1>
                <p className="text-white mt-4">
                  11강 pro_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1ZJBWtYBWy74jyyijIPNblA7GTkItqKfY/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  12강
                </h1>
                <p className="text-white mt-4">
                  12강 fore_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1W0960tM8y9VZeIVfY1vomFrSWusOFNLg/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  13강
                </h1>
                <p className="text-white mt-4">
                  13강 pre_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1rQwzRV7VuQJSoVl9w7HkeXVr0TnmbOLD/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  14강
                </h1>
                <p className="text-white mt-4">
                  14강 post_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1EhguoiDKjtPwKIIZ57SVvdGlaM8X3_Fy/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  15강
                </h1>
                <p className="text-white mt-4">
                  15강 un_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1pIvxi0ZryOfxDpbRlnMhl1QpKqocItcJ/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>

        <div className="section">
          <Container>
            <div className="space" />
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  3강
                </h1>
                <p className="text-white mt-4">
                  03강 sub_(공통-기본)
                </p>
              </Col>
              <Col lg="6">
                <iframe width="100%" height="315px" src="https://drive.google.com/file/d/1zVfxDpJrYVtu5UftdMyOJtc-DOLSzFKf/preview" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </Col>
            </Row>   
          </Container>   
        </div>
                    
        <Footer />
      </div>
    </>
  );
}
