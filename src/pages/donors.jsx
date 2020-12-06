import React from 'react';
import { Container } from 'reactstrap';
import { Title } from 'components/common';
import DonorItem from 'components/donors/donorItem';

function Donors() {
  return (
    <div className="donors-page">
      <Container>
        <Title title="Նվիրատուներ" />
        <div className="donors-content">
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
          <DonorItem name="Անանուն" point="300" />
        </div>
      </Container>
    </div>
  );
}
export default Donors;
