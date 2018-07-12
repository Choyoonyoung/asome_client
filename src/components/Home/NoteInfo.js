import React from 'react';

import styled from './HomeStyle';

export default class NoteInfo extends React.Component {
  render() {
    return (
      <styled.MemoData onClick={this.props.onClick}>
        {this.props.contact.name}
      </styled.MemoData>
    );
  }
}
