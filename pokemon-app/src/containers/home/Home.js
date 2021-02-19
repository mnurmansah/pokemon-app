import React from 'react';
import {
  Button, Col, Row,
} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import NavigationBar from '../../components/navigation_bar/NavigationBar';
import './Home.scss';
//import { getCategories } from '../../utils/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      home: [],
      activeHome: 'all',
      isMobile: true
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
    const { activeHome } = this.state;

    return (
      <div className="home-container">
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
            <div className="d-flex justify-content-center align-items-center">
            <p className="home-bg"><img src="/images/ilustrations/pokemon-bg.png" alt="pokemon-bg" /></p>
            </div>
          </Col>
        </Row>

        <NavigationBar />
      </div>
    );
  }
}

export default Home;