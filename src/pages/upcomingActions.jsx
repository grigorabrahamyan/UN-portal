import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Title } from 'components/common';
import OrganizedActionsItem from 'components/organized/OrganizedActions';
import Organized from 'assets/img/upcomingActions.png';

function UpcomingActions() {
  return (
    <div className="organized-actions">
      <Container>
        <Title title="Առաջիկա ակցիաներ" />
        <Row>
          <Col sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
              btn
            />
          </Col>
          <Col sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col sm="4">
            <OrganizedActionsItem
              img={Organized}
              date="7 նոյեմբեր 2020"
              title="Մենք այստեղ ենք, որպեսզի օգնենք միմյանց"
              text="Մեր հաճախորդների աջակից թիմը համոզվելու է, որ դուք պետք չէ միայնակ քարոզարշավ անցկացնել"
            />
          </Col>
          <Col sm="4">
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
export default UpcomingActions;
