import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({ account: { name, balance, background } }) => (
  <Card
    className="mgb-8 account-card"
    style={{ background }}
  >
    <Card.Body className="pd-8">
      <Card.Title className="font-weight-normal fs-12">
        { name }
      </Card.Title>
      <Card.Text className="text-right font-weight-bold fs-14">
        { balance }
      </Card.Text>
    </Card.Body>
  </Card>
);

AccountCard.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountCard;
