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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [demoModal2, setDemoModal2] = React.useState(false);

  
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        <h3 className="title mb-5"></h3>
          {/* Sart Demo Modal */}
          <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">참가신청</h4>
            </div>
            <div className="modal-body">
              <p>큰사넷 학생공지게시판</p>
              <p>참가신청: 2023. 05 22 (월) 23시까지</p>
              <p>큰사넷 설문조사 선착순 100명</p>
            </div>
            <div className="modal-footer">
              <Button color="default" type="button" href="https://student.cnsa.hs.kr">
                큰사넷 바로가기
              </Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* End Demo Modal */}
          {/* Start Mini Modal */}
          <Modal
            modalClassName="modal-mini modal-primary modal-mini"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setMiniModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="modal-profile">
                <i className="tim-icons icon-single-02" />
              </div>
            </div>
            <div className="modal-body">
              <p>Always have an access to your profile</p>
            </div>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button">
                Back
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setMiniModal(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal>
          

          <Modal isOpen={demoModal2} toggle={() => setDemoModal2(false)}>

            <div className="modal-header justify-content-center">

              <button className="close" onClick={() => setDemoModal2(false)}>

                <i className="tim-icons icon-simple-remove" />

              </button>

              <h4 className="title title-up">큰퀴즈 온더 블럭</h4>

            </div>

            <div className="modal-body">

              <p>
              참가신청: 2023. 05. 18(목) 23시까지
              </p>

              <p>
              참가방법: 구글폼 제출
              </p>
              <p>
              자세한 사항은 큰사넷 참고
              </p>
         
            </div>

            <div className="modal-footer">
              <Button color="default" type="button" href="https://forms.gle/ovPymvFmie7pAw1a6">
                참가 신청
              </Button>
              <Button

                color="danger"

                type="button"

                onClick={() => setDemoModal2(false)}

              >

                Close

              </Button>

            </div>

          </Modal>   
          
          
          {/* End Mini Modal */}
          {/* Start Form Modal */}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in with</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." src={require("assets/img/github.svg")} />
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." src={require("assets/img/google.svg")} />
                </Button>
              </div>
              <div className="text-center text-muted mb-4 mt-3">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal */}

      </Container>
      <div className="section">
        <Container>
          <div className="title">
            <h3>행사 공지</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                영어 말하기 Challenge
              </h1>
              <p className="text-white mt-4">
                세계 공용어인 영어를 더 쉽게 접할 수 있는 기회 "글로벌 미래 인재"에게 필요한 
                외국어 소통 능력 향상.
              </p>
              <Button
                className="mt-4"
                color="warning"
                onClick={() => setDemoModal(true)}
              >
                참가방법
              </Button>

            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <div className="title">
            <h3></h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                큰퀴즈 온더 블럭
              </h1>
              <p className="text-white mt-4">
                세계 공용어인 영어로 청중들 앞에서 자신의 관심 주제와 관련된 인터뷰를 함으로써 외국어 소통 능력을 향상.
              </p>
              <Button
                className="mt-4"
                color="warning"
                onClick={() => setDemoModal2(true)}
              >
                참가방법
              </Button>

            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}
