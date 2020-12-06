import React, { useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AddressIcon } from '../components/Icons';
import Map from '../components/map/map';

function ReservedPoints() {
  return (
    <div className="reservedPoints__wrapper">
      <div className="reservedPoints__contant-title wrapper__container">
        <Container>
          <Row className="reservedPoints__title titleOne">
            <Col className="titleOne__wrapper">
              <span>Պահեստային կետեր</span>
            </Col>
          </Row>
        </Container>
      </div>
      <Map />
      <div className="reservedPoints__contant-address wrapper__container">
        <Container>
          <Row>
            <Col>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>ԵՐԵՎԱՆ</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>ԿՈՏԱՅՔ</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Գեղարքունիք</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Սյունիք</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Արմավիր</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Տավուշ</span>
                    </td>
                    <td>
                      <div className="reservedPoints__address">
                        <div className="reservedPoints__address-img">
                          <AddressIcon className="reservedPoints__address-image" />
                        </div>
                        <div className="reservedPoints__address-info">
                          <p>հասցե</p>
                          <p>ՀՀ, ք․ Երեվան, Ազատության 22/2</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ReservedPoints;
