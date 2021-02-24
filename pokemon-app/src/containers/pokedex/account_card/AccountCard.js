import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './AccountCard.scss';

const AccountCard = ({ account: { name, balance, background, detail } }) => (
  <Card
    className="mgb-8 account-card"
    style={{ background }}
  >
    <Card.Body className="pd-8">
      <Card.Title className="font-weight-normal fs-14">
        { name }
      <Card.Text className="text-right font-weight-bold fs-14">
        { balance }
      </Card.Text>
      </Card.Title>
      <Button className="fs-14 mb-0 footer-button done">
        { detail } 
      </Button>
    </Card.Body>
  </Card>
);

AccountCard.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountCard;
