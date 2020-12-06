import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CovidImg, GetHelpsImg } from '../components/Icons';

function Links() {
    return (
        <div className='links__contant wrapper__container' >
            <Container>
                <Row className='links__title titleOne' >
                    <Col className='titleOne__wrapper' >
                        <span>Հղումներ</span>
                    </Col>
                </Row>
                <Row className='links__cards linksCards handle__row25' >
                    <Col className='linksCards__wrapper handle__col25' lg={4} >
                        <div className='linksCards__body' >
                            <div className='linksCards__icon' >
                                <CovidImg className='linksCards__img' />
                            </div>
                            <div className='linksCards__titleWrapper' >
                                <div className='linksCards__title' >
                                    <p>Նախարարություն</p>
                                </div>
                                <div className='linksCards__email' >
                                    <p>g.r.abrahamyan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='linksCards__wrapper handle__col25' lg={4} >
                        <div className='linksCards__body' >
                            <div className='linksCards__icon' >
                                <CovidImg className='linksCards__img' />
                            </div>
                            <div className='linksCards__titleWrapper' >
                                <div className='linksCards__title' >
                                    <p>Կովիդ 19</p>
                                </div>
                                <div className='linksCards__email' >
                                    <p>g.r.abrahamyan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='linksCards__wrapper handle__col25' lg={4} >
                        <div className='linksCards__body' >
                            <div className='linksCards__icon' >
                                <GetHelpsImg className='linksCards__img' />
                            </div>
                            <div className='linksCards__titleWrapper' >
                                <div className='linksCards__title' >
                                    <p>Ստացեք օգնություն</p>
                                </div>
                                <div className='linksCards__email' >
                                    <p>g.r.abrahamyan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='links__arrow' >
                    <Col className='links__arrowWrapper' >
                        <div className="links__arrowItem arrow__component">
                            <div className="arrow__component-body">
                                <span>Ստացե´ք օգնություն</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Links;