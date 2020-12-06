import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import img_01 from '../../../assets/img/img_01.png';
import { Link } from 'react-router-dom';

function BlogsAndNews() {
    return (
        <div className='blogAndNews__contant wrapper__container' >
            <Container>
                <Row className='blogAndNews__title titleOne' >
                    <Col className='titleOne__wrapper' >
                        <span>Բլոգ և նորություններ</span>
                    </Col>
                </Row>
                <Row className='blogAndNews__wrapper handle__row25' >
                    <Col className='blogAndNews__cardsWrapper handle__col25' lg={4} >
                        <div className='blogAndNews__card card' >
                            <div className='card__img' >
                                <img src={img_01} alt="" />
                            </div>
                            <div className='card__infoWrapper' >
                                <div>
                                    <div>
                                        <div className='card__infoTitle' >
                                            <p><span>7-10 նոյեմբեր</span> 2020</p>
                                        </div>
                                        <div className='card__infoText' >
                                            <div>
                                                <p>Մենք այստեղ ենք, որպեսզի օգնենք միմյանց</p>
                                                <span>Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել</span>
                                            </div>
                                            <div className='card__infoLink' >
                                                <Link to='/' >
                                                    <span className='card__link' >ՏԵսնել ավելին</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='blogAndNews__cardsWrapper handle__col25' lg={4} >
                        <div className='blogAndNews__card card' >
                            <div className='card__img' >
                                <img src={img_01} alt="" />
                            </div>
                            <div className='card__infoWrapper' >
                                <div>
                                    <div>
                                        <div className='card__infoTitle' >
                                            <p><span>7-10 նոյեմբեր</span> 2020</p>
                                        </div>
                                        <div className='card__infoText' >
                                            <div>
                                                <p>Մենք այստեղ ենք, որպեսզի օգնենք միմյանց</p>
                                                <span>Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել</span>
                                            </div>
                                            <div className='card__infoLink' >
                                                <Link to='/' >
                                                    <span className='card__link' >ՏԵսնել ավելին</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='blogAndNews__cardsWrapper handle__col25' lg={4} >
                        <div className='blogAndNews__card card' >
                            <div className='card__img' >
                                <img src={img_01} alt="" />
                            </div>
                            <div className='card__infoWrapper' >
                                <div>
                                    <div>
                                        <div className='card__infoTitle' >
                                            <p><span>7-10 նոյեմբեր</span> 2020</p>
                                        </div>
                                        <div className='card__infoText' >
                                            <div>
                                                <p>Մենք այստեղ ենք, որպեսզի օգնենք միմյանց</p>
                                                <span>Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել</span>
                                            </div>
                                            <div className='card__infoLink' >
                                                <Link to='/' >
                                                    <span className='card__link' >ՏԵսնել ավելին</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogsAndNews;