import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './AccountCard.scss';

const PokemonDetail = ({ pokemon: { names, picture, type, moves, description } }) => (

            <Card className="text-center">
              <Card.Header>{names}</Card.Header>
                <Card.Body>
                  <Card.Title>{picture}</Card.Title>
                  <Card.Text>
                  {description}
                  </Card.Text>
                  <Button variant="secondary">Moves : {moves}</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Type : <Button variant="primary">{type}</Button></Card.Footer>
              </Card>
);

PokemonDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetail;
