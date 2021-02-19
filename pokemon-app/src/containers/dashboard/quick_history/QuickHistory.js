import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import './QuickHistory.scss';

const QuickHistory = ({
  history: {
    name, day, time, type, amount,
  }, index,
}) => (
  <Accordion.Toggle as={Card.Header} eventKey={index} className="py-1 px-2 mb-0 quick-history-list">
    <Row>
      <Col xs={6} className="d-flex justify-content-start align-items-center">
        <div className="d-flex align-items-center justify-content-center mr-2 box">
          <img src="/images/icons/food-drinks.svg" alt="food-drinks" />
        </div>
        <div className="text-truncate">
          <p className="mb-0 text-truncate fs-12">{ name }</p>
          <p className="mb-0 fs-10">
            { day }
            ,
            {' '}
            { time }
          </p>
        </div>
      </Col>
      <Col xs={6} className="d-flex justify-content-end align-items-center">
        <img src={`/images/icons/${type}.svg`} alt={`${type}-icon`} />
        <p className="mb-0 ml-2 font-weight-bold fs-12">
          Rp
          {' '}
          { amount }
        </p>
      </Col>
    </Row>
  </Accordion.Toggle>
);

QuickHistory.propTypes = {
  history: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuickHistory;
