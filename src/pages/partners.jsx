import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import googleImg from '../assets/img/googleImg.png';

function Partners() {
  return (
    <div className="partnersPage__contant wrapper__container">
      <Container>
        <Row className="partnersPage__title titleOne">
          <Col className="titleOne__wrapper">
            <span>Մեր գործընկերները</span>
          </Col>
        </Row>
        <Row className="partnersPage__body handle__row15">
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
          <Col className="partnersPage__item handle__col15" lg={3}>
            <div className="partnersPage__itemWrapper">
              <div className="partnersPage__img">
                <img src={googleImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Partners;
