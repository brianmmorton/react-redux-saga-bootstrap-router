import React, { Component } from 'react';

export default class Profile extends Component {
  render () {
    return (
      <div>
        Email: {this.props.user.data.email}
      </div>
    )
  }
}
