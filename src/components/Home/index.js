import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import NoteCreate from './NoteCreate';
import NoteInfo from './NoteInfo';
import NoteShow from './NoteShow';
import update from 'react-addons-update';

import styled from './HomeStyle';

const propTypes = {};

const defaultProps = {};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [
        {
          name: '고양이',
          phone:
            '고양이는 귀엽다 고양이는 귀엽다 고양이는 귀엽다 고양이는 귀엽다 고양이는 귀엽다',
        },
        {
          name: '강아지',
          phone:
            '강아지는 귀엽다 강아지는 귀엽다강아지는 귀엽다 강아지는 귀엽다 강아지는 귀엽다',
        },
        {
          name: '오리',
          phone:
            '꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥꽥',
        },
        {
          name: '리액트',
          phone:
            '리액트는 어렵다 리액트는 어렵다 리액트는 어렵다 리액트는 어렵다 리액트는 어렵다 리액트는 어렵다',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleClick(key) {
    this.setState({
      selectedKey: key,
    });

    console.log(key, 'is selected');
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] }),
    });
  }

  handleRemove() {
    if (this.state.selectedKey < 0) {
      return;
    }
    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]],
      }),
      selectedKey: -1,
    });
  }

  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone },
        },
      }),
    });
  }
  render() {
    const mapToComponents = data => {
      data.sort();
      data = data.filter(contact => {
        return (
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
        );
      });
      return data.map((contact, i) => {
        return (
          <NoteInfo
            contact={contact}
            key={i}
            onClick={() => this.handleClick(i)}
          />
        );
      });
    };
    return (
      <styled.Container>
        <styled.Chat />
        <styled.Memo>
          <styled.Title>Memo</styled.Title>
          <styled.Input
            name="keyword"
            placeholder="Search"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          <styled.Info>{mapToComponents(this.state.contactData)}</styled.Info>
          <NoteShow
            isSelected={this.state.selectedKey !== -1}
            contact={this.state.contactData[this.state.selectedKey]}
            onRemove={this.handleRemove}
            onEdit={this.handleEdit}
          />
          <NoteCreate onCreate={this.handleCreate} />
        </styled.Memo>
      </styled.Container>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
