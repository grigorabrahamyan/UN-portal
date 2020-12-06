import React, { useCallback } from 'react';
import { Container, Row, Col,  } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { LabelRequired, AvSelect, ImageUpload } from 'components/formFields';
import { Title } from 'components/common';

function Sale() {
  const handleSubmit = useCallback((event, value) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
  }, []);
  return (
    <div className="page-sale">
      <Container>
        <Title title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց" />
        <Row>
          <Col lg="4"></Col>
          <Col lg="8">
            <AvForm onValidSubmit={handleSubmit} model={{}} key={'form'}>
              <Row>
                <Col sm="4">
                  <AvField
                    required
                    name="firstname"
                    // errorMessage={''}
                    labelClass="label"
                    inputClass="input"
                    label={<LabelRequired>Անուն </LabelRequired>}
                  />
                </Col>
                <Col sm="4">
                  <AvField
                    name="lastname"
                    // errorMessage={''}
                    className="input"
                    labelClass="label"
                    label={<LabelRequired>Ազգանուն</LabelRequired>}
                    required
                  />
                </Col>
                <Col sm="4">
                  <AvField
                    name="surename"
                    // errorMessage={''}
                    label={<LabelRequired>Հայրանուն</LabelRequired>}
                    className="input"
                    labelClass="label"
                    required
                  />
                </Col>
              </Row>
              <Row>
              <ImageUpload className="lg" name="file"/>
              </Row>
              <Row>
                <Col sm="4">
                  <AvSelect
                    required
                    name="day"
                    // errorMessage={''}
                    labelClass="label"
                    options={[]}
                    inputClass="input"
                    label={<LabelRequired>Ծննդյան</LabelRequired>}
                  />
                </Col>
                <Col sm="4">
                  <AvSelect
                    name="month"
                    // errorMessage={''}
                    label={'Ծննդյան'}
                    className="input"
                    labelClass="label"
                    options={[]}
                    required
                  />
                </Col>
                <Col sm="4">
                  <AvSelect
                    name="year"
                    label={'Ծննդյան'}
                    options={[]}
                    className="input"
                    labelClass="label"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <AvSelect
                    label={<LabelRequired>ԲՈՒՀ-ի անվանումը</LabelRequired>}
                    name="university"
                    inputClass="text-capitalize input"
                    labelClass="label"
                    options={[]}
                    required
                  />
                </Col>
                <Col sm="6">
                  <AvSelect
                    label={<LabelRequired>Որակավորում</LabelRequired>}
                    name="qualification"
                    inputClass="text-capitalize input"
                    labelClass="label"
                    options={[]}
                    required
                  />
                </Col>
                <Col sm="6">
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
            </AvForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sale;
