import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, Card, Col, Row,
} from 'react-bootstrap';
import './HistoryList.scss';

const HistoryList = ({
  history: {
    date,
    totalAmount,
    data,
  },
}) => (
  <Accordion className="history-list-card">
    <Card className="mgb-12">
      <Accordion.Toggle as={Card.Header} className="mb-0 d-flex justify-content-between align-items-center pdy-14 px-2">
        <p className="mb-0 font-weight-bold fs-12">{ date }</p>
        <p className="mb-0 font-weight-bold fs-12">{`Rp ${totalAmount}`}</p>
      </Accordion.Toggle>
      {
          data.map((historyData, index) => (
            <Accordion.Toggle as={Card.Header} className="mb-0 py-1 px-2" key={index}>
              <Row>
                <Col xs={6} className="d-flex justify-content-start align-items-center">
                  <div className="d-flex align-items-center justify-content-center mr-2 box">
                    <img src="/images/icons/food-drinks.svg" alt="food-drinks" />
                  </div>
                  <div className="text-truncate">
                    <p className="text-truncate mb-0 fs-12">{ historyData.name }</p>
                    <p className="mb-0 fs-8">
                      { historyData.day }
                      ,
                      {' '}
                      { historyData.time }
                    </p>
                  </div>
                </Col>
                <Col xs={6} className="d-flex justify-content-end align-items-center">
                  <img src={`/images/icons/${historyData.type}.svg`} alt={`${historyData.type}-icon`} />
                  <p className="mb-0 ml-2 font-weight-bold fs-12">
                    Rp
                    {' '}
                    { historyData.amount }
                  </p>
                </Col>
              </Row>
            </Accordion.Toggle>
          ))
        }
    </Card>
  </Accordion>
);

HistoryList.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HistoryList;
