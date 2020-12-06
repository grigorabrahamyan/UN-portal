import React, { useCallback, useState } from 'react';
import { Nav, Row, Col, NavLink, NavItem, Container } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { LabelRequired, AvSelect, ImageUpload } from 'components/formFields';
import { Title } from 'components/common';

function Donate() {
  const [type, setType] = useState('legal');

  const handleSubmit = useCallback((event, value) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
  }, []);
  return (
    <div className="page-sale">
      <Container>
        <Title title="Նվիրատվություն" />
        <div className="donate">
          <AvForm onValidSubmit={handleSubmit} model={{}} key={'form'}>
            <Nav className="donate-nav">
              <NavItem>
                <NavLink
                  className={type === 'legal' ? 'active' : ''}
                  onClick={() => {
                    setType('legal');
                  }}
                >
                  Իրավաբանական անձ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={type === 'physical' ? 'active' : ''}
                  onClick={() => {
                    setType('physical');
                  }}
                >
                 Ֆիզիկական անձ
                </NavLink>
              </NavItem>
            </Nav>
            <Row>
              <Col sm="4">
                <AvSelect
                  label={<LabelRequired>ԲՈՒՀ-ի անվանումը</LabelRequired>}
                  name="university"
                  inputClass="text-capitalize input"
                  labelClass="label"
                  options={[]}
                  required
                />
              </Col>
              <Col sm="4">
                <AvSelect
                  label={<LabelRequired>Որակավորում</LabelRequired>}
                  name="qualification"
                  inputClass="text-capitalize input"
                  labelClass="label"
                  options={[]}
                  required
                />
              </Col>
              <Col sm="4">
                <AvSelect
                  label={<LabelRequired>Տարեթիվ</LabelRequired>}
                  className="text-capitalize input"
                  labelClass="label"
                  name="year"
                  options={[]}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <ImageUpload className="lg" name="file" />
              </Col>
              <Col sm="6">
                <AvField
                  name="description"
                  labelClass="label"
                  className="input"
                  label={<LabelRequired>Նկարագիր</LabelRequired>}
                  type="textarea"
                  rows="4"
                />
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <AvField
                  name="army1"
                  // errorMessage={''}
                  label={<LabelRequired>Ծառայության սկիզբ</LabelRequired>}
                  className="input"
                  labelClass="label"
                  required
                />
              </Col>
              <Col sm="6">
                <AvField
                  name="army2"
                  // errorMessage={''}
                  label={<LabelRequired>Ծառայության ավարտ</LabelRequired>}
                  className="input"
                  labelClass="label"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <AvField
                  name="place"
                  // errorMessage={''}
                  label={<LabelRequired>Վայրը</LabelRequired>}
                  className="input"
                  labelClass="label"
                  required
                />
              </Col>
              <Col sm="6">
                <AvField
                  name="times"
                  // errorMessage={''}
                  label={<LabelRequired>Ժամաքանակը</LabelRequired>}
                  className="input"
                  labelClass="label"
                  required
                />
              </Col>
            </Row>
          </AvForm>
        </div>
      </Container>
    </div>
  );
}

export default Donate;
