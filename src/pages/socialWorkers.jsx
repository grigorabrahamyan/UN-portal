import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SocialWorkerImg } from '../components/Icons';

function SocialWorkers() {
  return (
    <div className="socialWorker__contant wrapper__container">
      <Container>
        <Row className="socialWorker__title titleOne yellow">
          <Col className="titleOne__wrapper">
            <span>Առաջարկվող սոցիալական ծառայություններ</span>
          </Col>
        </Row>
        <Row className="socialWorker__menusType">
          <Col className="socialWorker__menu" lg={1}>
            <div className="socialWorker__menuWrapper">
              <p>
                <span>Տեսակներ</span>
              </p>
              <p>
                <span>Աշխարհագրություն</span>
              </p>
              <p>
                <span>Տևողություն</span>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="paperInfo__bodyWrapper">
          <Col className="paperInfo__body">
            <Row className="paperInfo__items handle__row25">
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
              <Col className="paperInfo__item pdfItem active noPadding handle__col25" lg={4}>
                <div className="pdfItem__wrapper">
                  <div className="pdfItem__body">
                    <div className="pdfItem__img">
                      <SocialWorkerImg className="pdfItem__image" />
                    </div>
                    <div className="pdfItem__title">
                      <span>Հաշվետվություն 1</span>
                    </div>
                  </div>
                  <div className="pdfItem__line"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SocialWorkers;
