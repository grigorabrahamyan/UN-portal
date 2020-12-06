import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from 'components/common';
import OrganizedActionsItem from 'components/organized/OrganizedActions';
import Organized from '../assets/img/Organized.png';

function OrganizedActions(params) {
  return (
    <div className="organized-actions wrapper__container">
      <Container>
        <Title title="Կազմակերպվող ակցիաներ" />
        <Row className='organized-actions-wrapper' className='handle__row25'> 
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col className='organized-actions-item handle__col25' sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default OrganizedActions;
