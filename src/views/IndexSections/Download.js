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
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip, UncontrolledCarousel } from "reactstrap";

const carouselItems3 = [
  {
    src: require("assets/img/이뿌영1.png"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/이뿌영2.png"),
    altText: "Slide 2",
    caption: ""
  }
];


export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Challenge! 이뿌영_Day
            </h2>
            <h4 className="description">
              설명
            </h4>
          </Col>
          <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems3}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://enquiz.moveto.kr"
              role="button"
              size="lg"
            >
              이뿌영 Quiz 연습 바로가기
            </Button>
          </Col>
        </Row>   
      </Container>
    </div>
  );
}
