import React from 'react';
import { connect } from 'react-redux';

import UNNumbers from './UNNumbers';

import hazmatData from './UN-Numbers.json';
import hazmatClasses from './UN-Classes.json';

@connect(store => ({ ...store }))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hazmatNumber: '' };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(formElement) {
    this.setState({ hazmatNumber: formElement.target.value });
  }

  render() {
    const myHazmatData = hazmatData.find(data => data.id === this.state.hazmatNumber);
    const myHazmatClass = myHazmatData
      ? hazmatClasses.find(data => parseInt(data.id, 10) === parseInt(myHazmatData.UNClass, 10))
      : null;

    return (
      <UNNumbers
        hazmatClass={myHazmatClass}
        onFormChange={this.handleFormChange}
        hazmatNumber={this.state.hazmatNumber}
        hazmatData={myHazmatData}
      />
    );
  }
}
