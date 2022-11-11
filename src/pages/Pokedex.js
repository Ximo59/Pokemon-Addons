import Navigation from "../components/Navigation";
import React, { Component } from "react";
import PokeList from "../components/PokeList";
import DetailView from "../components/DetailView";
import Pokemon from "../components/Pokemon";
import Logo from "../components/Logo";

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="pokedex">
        <div className="pokedex-page">
          <Navigation />
          <Logo />
        </div>

        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default Pokedex;
