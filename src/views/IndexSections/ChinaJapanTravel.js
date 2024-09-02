import React from "react";
// reactstrap components
import { Container, Row, Col} from "reactstrap";
import 'assets/css/new.css';

export default function Download() {
  return (
    <div className="section section-download"
      data-background-color="black"
      id="download-section">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                [2024.09.05 THU EP1] 중 일 문화탐방
              </h2>
              <h4 className="description">
                
              </h4>
            </Col>
            <Col sm="6" >
                <img
                alt="..."
                className="img-raised"
                src={require("assets/img/GA_China.jpg")}
                style={{ width: "100%" }}/>
            </Col>
            
                  
          </Row>
            <p data-ke-size="size16">&nbsp;</p>
            <p data-ke-size="size16">&nbsp;</p>
          <Row className="justify-content-md-center">

            <Col sm="6">
                <iframe width="100%" height="200%" src="https://www.youtube.com/embed/neeHXnHma6M" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="video"/>
              </Col>      
          </Row>   
        </Container>
    </div>
  )
}

