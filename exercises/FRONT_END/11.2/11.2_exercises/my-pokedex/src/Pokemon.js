import React from 'react';
import './App.css';
// import PropTypes from 'prop-Types';

class Pokemon extends React.Component {
  render() {
    const { pokeStatics: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="poke-div">
        <span className="pokeStatics">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weigth: {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </span>
        <span className="pokeStatics">
          <img src={image} />
        </span>
      </div>
    );
  }
}

// Pokemon.propTypes = ({
//   pokeStatics: PropTypes.exact ({
//     name: PropTypes.string,
//     type: PropTypes.string,
//     averageWeight: PropTypes.exact({
//       value: PropTypes.number,
//       measurement: PropTypes.string,
//     }),
//     image: PropTypes.string,
//   }).isRequired,
// });

export default Pokemon;
