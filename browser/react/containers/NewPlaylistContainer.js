import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      invalid: true,
      displayWarning: 'none'
    }
    // we needed to bind 'this' to the method
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }


  handleChange (event) {
    let value = event.target.value;
    let invalidBool = !(value && value.length <= 16);
    let displayWarning = invalidBool ? 'block' : 'none';
    this.setState({
      inputValue: value,
      invalid: invalidBool,
      displayWarning: displayWarning
    });
  }

  submitChange (event) {
    event.preventDefault();
    console.log('submitted val!, ', this.state.inputValue);
    this.setState({
      inputValue: ""
    })
  }


  render () {
    return (
      <div>
        <NewPlaylist handleChange={ this.handleChange } submitChange={ this.submitChange } value={ this.state.inputValue } invalid={ this.state.invalid }/>
      </div>
      // <div className="alert alert-warning">Please enter a name</div>
    );
  }

}


