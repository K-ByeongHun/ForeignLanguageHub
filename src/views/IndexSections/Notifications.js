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
import { UncontrolledAlert, Container } from "reactstrap";

export default function Notifications() {
  return (
    <div className="section section-notifications" id="notifications">
      <Container>
        <div className="space" />
        <h3>Notifications</h3>
        <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b>Congrats! -</b>
            This is a regular notification made with ".alert-primary"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b>제1회 영어 말하기 Challenge 진행 -</b>
            <p>일시: 2023. 5. 25 (목)</p>
            <p>대상: 전학년 (선착순 100명)</p>
            <p>장소: 갤럭시홀 & N401 계단식 강의실</p>
            <p>신청: 2023. 5. 22 (월) 23시까지 큰사넷 설문조사</p>
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="success">
          <span data-notify="icon" className="tim-icons icon-bell-55" />
          <span>
            <b>영어 말하기 Challenge 선착순! -</b>
            큰사넷 설문조사 선착순 100명
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="warning">
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            <b>Warning! -</b>
            This is a regular notification made with ".alert-warning"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="danger">
          <span data-notify="icon" className="tim-icons icon-support-17" />
          <span>
            <b>Oh snap! -</b>
            This is a regular notification made with ".alert-danger"
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
}
