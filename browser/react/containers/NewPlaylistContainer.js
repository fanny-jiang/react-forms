import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      invalid: true,
      changeOccurred: false
    }
    // we needed to bind 'this' to the method
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
    this.makePlaylist = this.makePlaylist.bind(this);
  }


  handleChange (event) {
    let value = event.target.value;
    let invalidBool = !(value && value.length <= 16);
    this.setState({
      inputValue: value,
      invalid: invalidBool,
      changeOccurred: true
    });
    console.log('change ocurrred? ', this.state.changeOccurred);
  }

  makePlaylist (value) {
    axios.post('/api/playlists', { name: value })
    .then(res => res.data)
    .then(result => {
      console.log(result) // response json from the server!
    });
  }

  submitChange (event) {
    event.preventDefault();
    let val = this.state.inputValue
    this.makePlaylist(val);
    console.log('submitted val!, ', this.state.inputValue);
    this.setState({
      inputValue: ""
    })

  }


  render () {
    return (
      <div>
        <NewPlaylist handleChange={ this.handleChange } submitChange={ this.submitChange } value={ this.state.inputValue } invalid={ this.state.invalid } changeOccurred= { this.state.changeOccurred } />
      </div>
    );
  }

}


