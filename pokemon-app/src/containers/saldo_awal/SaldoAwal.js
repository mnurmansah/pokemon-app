import React from 'react';
import {
  Col, Row, FormControl,
} from 'react-bootstrap';
import CustomButton from '../../components/custom_button/CustomButton';
import './SaldoAwal.scss';

const SaldoAwal = () => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-left justify-content-center">
        <p className="saldo-awal text-center"><img src="/images/ilustrations/saldo-awal.png" alt="saldo-awal" /></p>
        <div className="float-left">
          <img src="/images/texts/text-saldo-awal.svg" alt="sort-icon" />
        </div>
        <br />
        <FormControl
          autoFocus
          type="text"
          placeholder="Saldo Awal"
        />
        <br />
        <CustomButton
          className="custom-button"
          text="Lanjut"
        />
        <br />
      </Col>
    </Row>

  </>
);

export default SaldoAwal;
