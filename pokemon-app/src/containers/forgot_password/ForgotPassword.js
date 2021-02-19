import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Row, FormControl,
} from 'react-bootstrap';
import CustomButton from '../../components/custom_button/CustomButton';
import './ForgotPassword.scss';

const ForgotPassword = () => (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-left justify-content-center">
        <div className="forgotpassword text-center">
          <img src="/images/ilustrations/forgot-password.png" alt="forgot-password" />
        </div>
        <div className="float-left pdb-19">
          <img src="/images/texts/text-forgot-password.svg" alt="sort-icon" />
        </div>
        <FormControl
          autoFocus
          type="email"
          placeholder="Email"
        />
        <br />
        <CustomButton
          onClick={() => { }}
          className="custom-button"
          text="Kirim Email"
        />
        <br />
        <p className="text-center fs-13" style={{ color: '#000000' }}>
          Sudah memiliki akun?
          <Link to="/login" style={{ color: '#7080b3' }}> Masuk </Link>
        </p>
      </Col>
    </Row>

  </>
);

export default ForgotPassword;
