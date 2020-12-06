import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Pdf } from '../../Icons';

function PaperInfo() {
    return (
        <div className='paperInfo__contant wrapper__container' >
            <Container>
                <Row className='paperInfo__title titleOne' >
                    <Col className='titleOne__wrapper' >
                        <span>Ամփոփ հաշվետվություն</span>
                    </Col>
                </Row>
                <Row className='paperInfo__bodyWrapper' >
                    <Col className='paperInfo__body' >
                        <Row className='paperInfo__items handle__row25' >
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                            <Col className='paperInfo__item pdfItem handle__col25' lg={4} >
                                <div className='pdfItem__wrapper' >
                                    <div className='pdfItem__body' >
                                        <div className='pdfItem__img' >
                                            <Pdf className='pdfItem__image' />
                                        </div>
                                        <div className='pdfItem__title' >
                                            <span>Հաշվետվություն 1</span>
                                        </div>
                                    </div>
                                    <div className='pdfItem__line' ></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='paperInfo__linkWrapper' >
                    <Col className='paperInfo__link' >
                        <Link>
                            <span>ՏԵսնել բոլորը</span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PaperInfo;