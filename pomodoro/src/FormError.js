import React, {Component} from 'react';

export default class FormError extends Component {
  render() {
    return (
      <p style={{color: 'red'}}>Need a {this.props.name}</p>
    )
  }
}
