import React from 'react';
import {
   Col, Button, Row,
} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import AccountCard from './account_card/AccountCard';
import CustomModal from '../../components/custom_modal/CustomModal';
//import QuickHistory from './quick_history/QuickHistory';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import CustomDropdown from '../../components/custom_dropdown/CustomDropdown';
import './Dashboard.scss';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      activeHome: 'all',
      accounts: [
        {
          name: '#001 Bulbasaur',
          balance: 'Picture Bulbasaur',
          background: 'linear-gradient(135deg, #FFA8A8 0%, #FCFF00 100%)',
        },
        {
          name: '002 Eeve',
          balance: 'Picture Eeve',
          background: 'linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)',
        },
        {
          name: '003 Pikachu',
          balance: 'Picture Pikachu',
          background: 'linear-gradient(135deg, #FF6FD8 0%, #3813C2 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
        {
          name: '004 Plant',
          balance: 'Picture Plant',
          background: 'linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)',
        },
      ],
      showPokemonDetail: false,
    };
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 })
  }

  handleSetActiveHome = (value) => {
    const { activeHome } = this.state;
    if (activeHome === value) {
      this.setState({ activeHome: 'all' })
    } else {
      this.setState({ activeHome: value })
    }
  };


  render() {
    const { activeHome, accounts, showPokemonDetail  } = this.state;

    return (
      <div className="dashboard-container">
        <Row>
          <Col>
          <div className="d-flex justify-content-between text-center pdb-24">
            <img src="/images/icons/sort.svg" alt="sort-icon" />
            <p className="mb-0 fs-14">Pokemon App</p>
            <img src="/images/kirito.png" className="kirito" alt="mood-icon" />
          </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center mgy-24 mr-2 home-button-group">
                <Button
                  className="text-truncate fs-14 home-button"
                  onClick={() => this.handleSetActiveHome('pokedex')}
                  active={activeHome === 'pokedex'}
                >
                  Pokédex
                </Button>
                <Button
                  className="text-truncate fs-14 home-button"
                  onClick={() => this.handleSetActiveHome('mypokemon')}
                  active={activeHome === 'mypokemon'}
                >
                  My Pokemon
                </Button>
              </div>
            </div>
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
          </Col>
        </Row>
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

export default Dashboard;
