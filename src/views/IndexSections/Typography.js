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
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 className="title">외국어과</h3>
        <div id="typography">
          <Row>
            <Col md="12">
              
              <div className="typography-line">
                <h4>
                  <span></span>
                  <p>외국어학과는 영어, 중국어, 일본어 교과로 구성되어 있습니다.</p>
                  <p>시계 시민으로서 리더십과 책임의식을 고양시키기 위해, 외국어의 정치·경제·문화에 
                  대한 호기심을 바탕으로 이문화에 대한 이해도를 높이고 미래 역량 4Cs (4Cs: Communication, 
                  Cooperation, Creativity, Critical Thinking)를 활용하여 수업을 실시합니다.</p>
                  <p>또한, 유창한 1학년, 정확성과 유창성이 함께 발전하는 2학년, 정확한 언어 능력으로 진로 
                  희망에 한 발짝 더 다가가는 3학년이 될 수 있도록 위계가 있으며 체계적인 외국어 수업을 위해, 
                  원어민교사를 포함한 외국어과 교사들이 다양한 노력을하고 있습니다.</p>
                </h4>
              </div>

              <div className="typography-line">
                <span>5월</span>
                <p className="text-primary">
                  영어 말하기 Challenge
                </p>
              </div>
              <div className="typography-line">
                <span>9월</span>
                <p className="text-info">
                  영어 토론 대회
                </p>
              </div>
              
              <div className="typography-line">
                <span>11월</span>
                <p className="text-warning">
                  중국문화 탐구대회
                </p>
                <p className="text-warning">
                  일본어 더빙대회
                </p>
              </div>
              
              <div className="typography-line">
                <span>3월~12월</span>
                <p className="text-success">
                  영단어 암기 아보카도
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="space-50" />
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <Row>
        
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p1.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p2.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p3.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/p4.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
  );
}
