import React from 'react';
import { ToGiveHelp, FreeFamily, FreeFamilyToHelp, Gifts, FreePeople, ToGetHelps } from '../../Icons';
import { Container, Row, Col } from 'reactstrap';

function OurWorks() {
    return (
        <div className='ourWorks__contant wrapper__container' >
            {/* <div className='ourWorks__wrapper all__container' > */}
            <Container className='ourWorks__wrapper' >
                {/* <div className='ourWorks__titleWrapper' > */}
                <Row className='ourWorks__titleWrapper' >
                    <div className='ourWorks__title' >
                        <span>Մեր աշխատանքները</span>
                    </div>
                </Row>
                {/* </div> */}
                {/* <div className='ourWorks__text' > */}
                <Row className='ourWorks__text' >
                    {/* <Col> */}
                        <span>
                            Արագ արձագանք, կյանքին վտանգ սպառնող իրավիճակում հայտնված, անհետաձգելի օգնության կարիք ունեցող անձանց։
                        </span>
                    {/* </Col> */}
                </Row>
                {/* </div> */}
                <Row className='ourWorks__infoWrapper handle__row' >
                    <Col className='ourWorks__infoBody handle__col' >
                        <div className='ourWorks__info info' >
                            <div className='info__img' >
                                <ToGiveHelp />
                            </div>
                            <div className='info__count' >
                                <span>125</span>
                            </div>
                            <div className='info__title' >
                                <span>Նվիրաբերած օգնություն</span>
                            </div>
                        </div>
                    </Col>
                    <Col className='ourWorks__infoBody handle__col' >
                        <div className='ourWorks__info info' >
                            <div className='info__img' >
                                <FreeFamilyToHelp />
                            </div>
                            <div className='info__count' >
                                <span>622</span>
                            </div>
                            <div className='info__title' >
                                <span>Կարիքավոր ընտանիք</span>
                            </div>
                        </div>
                    </Col>
                    <Col className='ourWorks__infoBody handle__col' >
                        <div className='ourWorks__info info' >
                            <div className='info__img' >
                                <FreeFamily />
                            </div>
                            <div className='info__count' >
                                <span>15</span>
                            </div>
                            <div className='info__title' >
                                <span>Կամավոր դարձած կարիքավոր</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Container className='ourWorks__helpsWrapper' >
                    <Row className='ourWorks__helpWrapper handle__row' >
                        <Col className='ourWorks__helpBody handle__col' >
                            <div className='ourWorks__help help' >
                                <div className='help__body' >
                                    <div className='help__img' >
                                        <Gifts />
                                    </div>
                                    <div className='help__text' >
                                        <span>Նվիրաբերել</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='ourWorks__helpBody handle__col' >
                            <div className='ourWorks__help active help' >
                                <div className='help__body' >
                                    <div className='help__img' >
                                        <FreePeople />
                                    </div>
                                    <div className='help__text active' >
                                        <span>Դառնալ կամավոր</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className='ourWorks__helpBody handle__col' >
                            <div className='ourWorks__help help' >
                                <div className='help__body' >
                                    <div className='help__img' >
                                        <ToGetHelps />
                                    </div>
                                    <div className='help__text' >
                                        <span>Ստանալ օգնություն</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* </div> */}
        </div>
    )
};

export default OurWorks;