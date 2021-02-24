import React from 'react';
import {
  Col, Row, Button,
} from 'react-bootstrap';
import AccountCard from './account_card/AccountCard';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import PokemonDetail from './account_card/PokemonDetail';
import CustomModal from '../../components/custom_modal/CustomModal';
import './MyPokemon.scss';

class Mypokemon extends React.Component {
  constructor() {
    super();
    this.state = {
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
      ],
      pokemons: [
        {
          names: '#001 Bulbasaur',
          picture: 'Picture Bulbasaur',
          type: 'Grass, Poison',
          moves: 'Seed Bomb,Sludge Bomb,Power Whip, Frustration Shadow',
          description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'
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
    const { activeHome, accounts, showPokemonDetail, pokemons } = this.state;

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
              className="history-custom-modal" >
            <div className="px-3 my-4">
            {
              pokemons.map((pokemon) => (
              <PokemonDetail
                    pokemon={pokemon}    
                  />
              ))
            }
            </div>
              <div className="px-3">       
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
            <p className="mb-3 fs-12">My Pokemon List</p>
          </Col>
        </Row>
        <Row>
          {
              accounts.map((account, index) => (
                <Col xs={6} className={index % 2 === 0 ? 'pr-1' : 'pl-1'} key={index}>
                  <AccountCard
                    account={account}   
                    onClick={() => setTimeout(() => this.setState({ showPokemonDetail: !showPokemonDetail }), 300)} 
                  />
                </Col>
              ))
            }
        </Row>
        <NavigationBar />
      </div>
    );
  }
}

export default Mypokemon;