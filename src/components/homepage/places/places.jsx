import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from '../../../components/map/map';

function Places() {
    return (
        <div className='places__contant wrapper__container' >
            <div className='places__up' >
                <Container >
                    <Row className='places__upWrapper' >
                        <div className='places__upTitle' >
                            <span>
                                Պահեստային կետերի ցանկ
                            </span>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='places__down' >
                <Map />
            </div>
        </div>
    );
};

export default Places;