import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Register.scss';

export default function Register() {
  const [email] = ('');
  const [password] = ('');
  const [cpassword] = ('');

  return (
    <>
      <div className="pd-0">
        <form>
          <p className="buat-akun"><img src="/images/texts/text_buat_akun.svg" alt="sort-icon" /></p>
          <FormGroup>
            <FormControl
              autoFocus
              type="email"
              value={email}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl
              value={password}
              placeholder="Kata Sandi"
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="cpassword">
            <FormControl
              value={cpassword}
              placeholder="Ulang Kata Sandi"
              type="password"
            />
          </FormGroup>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" />
            <p className="fs-13">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industrys standard dummy text ever since the 1500s
            </p>
          </div>
          <Link to="/login">
            <Button className="custom-button mgb-10" block type="submit">
              Masuk
            </Button>
          </Link>
        </form>
        <p className="text-center fs-13" style={{ color: '#000000' }}>
          Sudah memiliki akun?
          <Link to="/login" style={{ color: '#7080b3' }}> Masuk </Link>
        </p>
      </div>
    </>
  );
}
