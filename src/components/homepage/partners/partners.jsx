import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-elastic-carousel'
import logo_1 from '../../../assets/img/logo_1.png';
import logo_2 from '../../../assets/img/logo_2.png';
import logo_3 from '../../../assets/img/logo_3.png';
import logo_4 from '../../../assets/img/logo_4.png';

function Partners() {
    return (
        <div className='partners__contant wrapper__container' >
            <Container className='partners__wrapper' >
                <Row className='partners__title titleOne' >
                    <Col className='titleOne__wrapper' >
                        <span>Գործընկերներ</span>
                    </Col>
                </Row>
                <Row className='partners__wrapper' >
                    <Col className='partners__body' >
                        <div className='partners__bodyWrapper' >
                            <Carousel
                                itemsToShow={5}
                                pagination={false}
                            >
                                <div className='partners__item' >
                                    <img src={logo_1} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_3} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_4} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_1} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_2} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_3} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_4} alt="" />
                                </div>
                                <div className='partners__item' >
                                    <img src={logo_1} alt="" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;