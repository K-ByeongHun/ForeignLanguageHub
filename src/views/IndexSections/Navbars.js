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
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Button,
  Modal,
  Col
} from "reactstrap";

export default function Navbars() {

  const [demoModal2, setDemoModal2] = React.useState(false);
  const [demoModal3, setDemoModal3] = React.useState(false);
  const [demoModal4, setDemoModal4] = React.useState(false);
  const [demoModal5, setDemoModal5] = React.useState(false);
  const [demoModal6, setDemoModal6] = React.useState(false);
  const [demoModal7, setDemoModal7] = React.useState(false);  


  return (       
    <div className="section section-navbars">
    
      <Modal isOpen={demoModal2} toggle={() => setDemoModal2(false)}>
        <div className="modal-header justify-content-center">
          <button className="close" onClick={() => setDemoModal2(false)}>
            <i className="tim-icons icon-simple-remove" />
          </button>
          <h4 className="title title-up">세계시민 교육반</h4>
        </div>
        <div className="modal-body">
          <p>
          - (목표) SDGs 관련 다양한 캠페인 활동을 통해 세계시민으로서의 
          협력 및 의사소통 능력을 기르며 다른 동아리와 연계하여 세계 시민 
          이슈관련 공연 활동에 적극 참여한다. 
          </p>
          <p>
          - (특징) 글로벌 이슈와 관련하여 봉사활동, 강의, 체험학습 등에 적극 참여 한다.
          </p>
        </div>
        <div className="modal-footer">
          <Button color="default" type="button">
            Nice Button
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
    
    
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container id="menu-dropdown">
        
        <h3 className="title mb-3">동아리</h3>
      </Container>
      <div id="navbar">
        <div className="navigation-example">
          {/* Navbar Primary */}
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  세계시민 교육반
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false} onClick={() => setDemoModal2(true)}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-world" />
                      Discover
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-single-02" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Primary */}
          {/* Navbar Info */}
          <Navbar className="bg-info" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  영어 저널 제작반 (Write Now)
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Discover
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Info */}
          {/* Navbar Success */}
          <Navbar className="bg-success" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  다문화 연구 동아리
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-world" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-single-02" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="tim-icons icon-settings-gear-63" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Success */}
          {/* Navbar Warning */}
          <Navbar className="bg-warning" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  영어토론반
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-square" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-google-plus" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-instagram" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Warning */}
          {/* Navbar Danger */}
          <Navbar className="bg-danger" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  영미문학동아리
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-square" />
                      Share
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-twitter" />
                      Tweet
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-pinterest" />
                      Pin
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Navbar className="bg-info" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  영어 동화책 창작반
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-square" />
                      Share
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-twitter" />
                      Tweet
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-pinterest" />
                      Pin
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Danger */}
          {/* Navbar Transparent */}
          <iframe src="https://cnsa-fld-wordgame.netlify.app/" title="" name="frame" width="100%" height="550px"></iframe>
  
          {/* End Navbar Transparent*/}
        </div>
      </div>
    </div>
  );
}
