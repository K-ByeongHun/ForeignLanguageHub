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
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/po1.jpg")}
              style={{ width: "250px" }}
            />
            <Button
              className="btn-simple btn-round"
              color="primary"
              tag={Link}
            >
              제 1회 영어 말하기 Challenge
            </Button>
          </Col>
          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/cqp.jpg")}
              style={{ width: "250px" }}
            />
            <Button
              className="btn-simple btn-round"
              color="primary"
              tag={Link}
            >
              큰퀴즈 온더 블럭
            </Button>
          </Col>
        </Row>
        <Row>
          <center>
            <video src="https://drive.google.com/file/d/1wjtarbFZ0V7bY4_JtjhUzSPAVl36xL0X/preview" width="280" height="158"controls="controls">
            </video>
          </center>
        </Row>
      </Container>
    </div>
  );
}
