import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip, UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";
import 'assets/css/new.css';
import 'views/IndexSections/button.css';

export default function Download() {
  return (
    <div className="section section-download"
      data-background-color="black"
      id="download-section">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
                
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              [Now Open]2024 제2회 영어 말하기 Challenge[2024.10.31 EP1]
            </h2>
            <h4 className="description">
              
            </h4>
          </Col>
          
          <Col sm="6" >
              <img
              alt="..."
              className="img-raised"
              src={require("assets/img/2024영어말하기.png")}
              style={{ width: "100%" }}/>
          </Col>

          <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-hover color-3"
                href="https://classroom.google.com/c/NzE3NDgzNzE1MDg1?cjc=x535slc"
                role="button"
                size="lg"
              >
                바로 영말챌 신청하러가기!!
              </Button>
          </Col>

        </Row>

          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
          <p className="font">영어 말하기 챌린지 안내영상! [참여시 필수시청!!]</p>

        <Row className="justify-content-md-center">
          <Col className="video">
              <iframe width="100%" height="315px" src="https://www.youtube.com/embed/Nf4D5o6WkYc" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>   
              </iframe>       
              {/* 영어말하기 챌린지 유튜브 영상 */}
          </Col>
        </Row>

          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>

        <Row className="justify-content-md-center">
          <Col className="video">
          <iframe width="100%" height="315px" src="https://www.youtube.com/embed/YtMzgLKVI8Q?si=J__AdOUcs-tt9UlC" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>   
              </iframe>
              {/* 영어말하기 챌린지 안내영상 */}
          </Col>

          <p data-ke-size="size16">&nbsp;</p>
          <p data-ke-size="size16">&nbsp;</p>
          
  
          <br/>

          {/* <Col className="text-center" lg="8">
            <Button
              className="btn-round"
              color="info"
              href="https://www.youtube.com/watch?v=WQWqXZ07Vrg"
              role="button"
              size="lg"
            >
              영말챌 연습문제 바로가기
            </Button>
          </Col> */}
                
          {/* <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://student.cnsa.hs.kr/login/"
              role="button"
              size="lg"
            >
              영말챌 신청 바로가기
            </Button>
          </Col> */}
        </Row>   
      </Container>
    </div>
  )
}

