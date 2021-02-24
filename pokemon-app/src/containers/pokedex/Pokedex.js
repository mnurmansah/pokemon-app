import React, { Component } from "react";
import {
  Col, Button, Row,
} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import AccountCard from './account_card/AccountCard';
import CustomModal from '../../components/custom_modal/CustomModal';
//import QuickHistory from './quick_history/QuickHistory';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import CustomDropdown from '../../components/custom_dropdown/CustomDropdown';
import MyPokemon from '../mypokemon/MyPokemon';
import './Pokedex.scss';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isMobile: true,
      accounts: [
        {
          name: '#001 Bulbasaur',
          balance: 'Picture Bulbasaur',
          background: 'linear-gradient(135deg, #FFA8A8 0%, #FCFF00 100%)',
          detail: 'Detail',
        },
        {
          name: '002 Eeve',
          balance: 'Picture Eeve',
          background: 'linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)',
          detail: 'Detail',
        },
        {
          name: '003 Pikachu',
          balance: 'Picture Pikachu',
          background: 'linear-gradient(135deg, #FF6FD8 0%, #3813C2 100%)',
          detail: 'Detail',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
          detail: 'Detail',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
          detail: 'Detail',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
          detail: 'Detail',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
          detail: 'Detail',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
          detail: 'Detail',
        },
      ],
      showPokemonDetail: false,
    };  
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 })
  }


  render() {
    const {accounts, showPokemonDetail, showPokedex, showMyPokemon  } = this.state;
    return (
      <div className="dashboard-container">
            <CustomModal
              show={showPokemonDetail}
              className="history-custom-modal"
            >
              <div className="px-3">
                <div className="mx-auto mt-3 separator"></div>
                
                <div className="m-3 mb-0 text-center">
                  <CustomDropdown 
                    toggleText="Akun"
                    dropDirection="up"
                    className="mx-auto history-account-dropdown" 
                  />
                </div>
                <div className="my-3 mx-auto px-3 d-flex justify-content-between align-items-center history-modal-footer">
                  <Button 
                    className="py-2 mr-1 fs-14 footer-button cancel" 
                    onClick={() => setTimeout(() => this.setState({ showPokemonDetail: !showPokemonDetail }), 300)}>
                    Cancel
                  </Button>
                  <Button 
                    className="py-2 ml-1 fs-14 footer-button done" 
                    onClick={() => setTimeout(() => this.setState({ showPokemonDetail: !showPokemonDetail }), 300)}>
                    Cacth
                  </Button>
                </div>
              </div>
            </CustomModal>
        <Row>
          <Col className="d-flex justify-content-between my-2">
            <p className="mb-0 fs-12">List Pokemon</p>
          </Col>
        </Row>
        <Row>
        <p className="mgl-10"></p>
          {
              accounts.map((account, index) => (
                <Col xs={12} className={index % 2 === 2 ? 'pr-0' : 'pl-8'} key={index}>
                  <AccountCard
                    account={account}
                    
                  />
                  <Button 
                    className="fs-14 mb-2 footer-button done" 
                    onClick={() => setTimeout(() => this.setState({ showPokemonDetail: !showPokemonDetail }), 300)}>
                    Detail
                  </Button>
                </Col>
              ))
            }
        </Row>
        <NavigationBar />
      </div>
    );
  }
}

export default Pokedex;