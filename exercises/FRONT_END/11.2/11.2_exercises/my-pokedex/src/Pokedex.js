import React from 'react';  
import Pokemon from './Pokemon';
// import PropTypes from 'prop-Types';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
    <div>
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokeStatics={pokemon} />
      ))}
    </div>
    );
  }
}

// Pokedex.PropTypes = ({
//   pokemons: PropTypes.arrayOf(PropTypes.object),
//   pokeStatics: PropTypes.exact ({
//     name: PropTypes.string,
//     type: PropTypes.string,
//     value: PropTypes.number,
//     measurement: PropTypes.string,
//     image: PropTypes.string,
//   })
// });

export default Pokedex;
