import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormControl from 'react-bootstrap/esm/FormControl';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import './Create.scss';

export default function Create() {
  return (
    <>
      <div className="Container">

        <div className="card card-body">
          Tambah catatan
          <div className="form-group">
            <label>Jumlah</label>
            <br />
            <input type="text" placeholder="Rp.100.000" />
          </div>
        </div>
        <div align="center" className="card card-footer">
          <ButtonGroup>
            <Button variant="btn btn-outline-success rounded-pill">Pemasukan</Button>
            <Button variant="btn btn-outline-success rounded-pill">Pengeluaran</Button>
            <Button variant="btn btn-outline-success rounded-pill">Transfer</Button>
          </ButtonGroup>
        </div>
        <div className="form-group">
          <table border="0" align="center" width="100%">
            <tbody>
              <tr>

                <td colSpan="2">
                  <FormControl className="form-rounded" as="select" defaultValue="Akun">
                    <option disabled>Akun</option>
                    <option>Opo</option>
                    <option>Gojex</option>
                    <option>Bank ABC</option>
                    <option>Tunai</option>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td>
                  <Form>
                    <FormControl className="form-rounded" type="text" placeholder="Tanggal" />
                  </Form>
                </td>
                <td>
                  <Form>
                    <FormControl className="form-rounded" type="text" placeholder="Waktu" />
                  </Form>
                </td>
              </tr>
              <tr>
                <td>
                  <FormControl className="form-rounded" as="select" defaultValue="Kategori">
                    <option disabled>Kategori</option>
                    <option>Makan</option>
                    <option>Minum</option>
                  </FormControl>
                </td>
                <td align="left">
                  <Link to="/" className="add"><img src="/images/icons/pokeball-icon.svg" alt="pokeball-icon" /></Link>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Form>
                    <FormControl className="form-rounded" as="textarea" placeholder="Catatan" />
                  </Form>
                </td>
              </tr>
              <td colSpan="2" align="center"><Button className="custom-button btn-color">Simpan</Button></td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
