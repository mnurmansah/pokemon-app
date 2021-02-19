import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomButton from '../../../components/custom_button/CustomButton';
import '../SplashScreenContainer.scss';

const SplashScreen1 =  (
  <>
    <Row>
      <Col className="d-flex flex-column align-items-center justify-content-center pd-28 splash-screen">
        <img src="/images/icons/splash-screen1.svg" alt="404-illustration" />
        <p className="fs-12 mgy-27">Maaf, Halaman tidak ditemukan</p>
        <CustomButton
          className="splash-screen"
          text="Kembali"
        />
      </Col>
    </Row>
  </>
);

export default SplashScreen1;
