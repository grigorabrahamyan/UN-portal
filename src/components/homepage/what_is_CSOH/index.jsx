import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function WhatIsCSOH() {
    return (
        <div className='csoh__contant wrapper__container' >
            {/* <div className='csoh__wrapper all__container' > */}
                <Container className='csoh__wrapper' >
                    <Row className='csoh__titleWrapper' >
                        <div className='csoh__title' >
                            <span>Ինչ է իրենից ներկայացնում ՍՇՕՀ-ն</span>
                        </div>
                    </Row>
                    <Row className='csoh__text' >
                        <span>
                            ՍՇՕՀ-ի նպատակն է նպաստել Հայաստանի բնակչության շրջանում փոխօգնության հանրային վարվելակերպի տարածումը ինչպես նաև արագ արձագանքել, կյանքին վտանգ սպառնող իրավիճակում հայտնված, անհետաձգելի օգնության կարիք ունեցող անձանց։
                        </span>
                    </Row>
                    <Row className='csoh__button' >
                        <div className="csoh__arrow arrow__component">
                            <div className="arrow__component-body">
                                <span>Իմանալ ավելին</span>
                            </div>
                        </div>
                    </Row>
                </Container>
            {/* </div> */}
        </div>
    );
};

export default WhatIsCSOH;