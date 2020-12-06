import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Goal() {
  return (
    <div className="goal__contant wrapper__container">
      <Container>
        <Row className="goal__title titleOne">
          <Col className="titleOne__wrapper">
            <span>Նպատակ</span>
          </Col>
        </Row>
        <Row className="goal__body subtitle">
          <Col className="subtitle__text">
            <p>
              Սոցիալական Շտապ Օգնության նպատակը կյանքին և առողջությանը վտանգ սպառնացող, արտակարգ իրավիճակներում
              հայտնված, անհետաձգելի օգնության կարիք ունեցող անձանց և ընտանիքների սոցիալական խնդիրների լուծման հարցում
              արագ արձագանքելն է:
            </p>
            <p>
              {' '}
              Ծրագրի վերջնական նպատակը` կարճաժամկետ աջակցության միջոցով օգնության կարիք ունեցող քաղաքացուն կամ ընտանիքին
              կյանքի դժվարին իրավիճակից դուրս բերելն է, իսկ հետագայում` նույն գործընթացին մասնակից դարձնելը՝ արդեն որպես
              աջակցություն ցուցաբերող:
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Goal;
