import React, { useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { LabelRequired, AvSelect, ImageUpload } from 'components/formFields';
import { Title } from 'components/common';

function Volunteer() {
  const handleSubmit = useCallback((event, value) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
  }, []);
  return (
    <div className="page-sale">
      <Container>
        <Title title="Դառնալ կամավոր" />
        <div className="volunteer">
          <AvForm onValidSubmit={handleSubmit} model={{}} key={'form'}>
            <Row>
              <Col sm="8">
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
              </Col>
              <Col sm="4">
                <Row>
                  <Col sm="4">
                    <AvSelect
                      required
                      name="birthday"
                      // errorMessage={''}
                      labelClass="label"
                      options={[]}
                      inputClass="input"
                      label={<LabelRequired>Ծննդյան</LabelRequired>}
                    />
                  </Col>
                  <Col sm="4">
                    <AvSelect
                      name="birthday2"
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
                      name="birthday3"
                      label={'Ծննդյան'}
                      options={[]}
                      className="input"
                      labelClass="label"
                      required
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
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
                  name="army"
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

export default Volunteer;
