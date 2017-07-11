import React, { Component } from 'react';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    // we needed to bind 'this' to the method
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }


  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
      artist.name.toLowerCase().includes(inputValue.toLowerCase()));
      {/* need to change artist.name and input value to lowercase so that they'll match */}

      { console.log('IMPUT VALUE: ', inputValue);}

    return (
      <div>
        <FilterInput handleChange={ this.handleChange } />
        <Artists artists={ filteredArtists } />
      </div>
    );
  }

}


