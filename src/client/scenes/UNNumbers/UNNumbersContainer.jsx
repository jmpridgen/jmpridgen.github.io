import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import styles from './styles.scss';
import hazmatData from './UN-Numbers.json';
import hazmatClasses from './UN-Classes.json';

// import Chart '../../components/Chart';
// import ErrorDisplay from '../../components/ErrorDisplay';
// import Loader from '../../components/Loader';

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
      ? hazmatClasses.find(data => {console.log(myHazmatData.UNClass); return parseInt(data.id, 10) === parseInt(myHazmatData.UNClass, 10)})
      : null;
    console.log('myHazmatClass', myHazmatClass);
    console.log(myHazmatClass && myHazmatClass.id || '0');

      return (
        <Container
          className={[
            styles.outerContainer,
            'd-flex flex-column justify-content-center align-items-center',
            styles[`class${myHazmatClass && myHazmatClass.id || '0'}`],
          ]}
          fluid
        >
          <Row>
            <Col className="text-center">
              <input
                type="text"
                placeholder="Enter a UN Number"
                className={styles.unNumberInput}
                onChange={this.handleFormChange}
                value={this.state.hazmatNumber}
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h4>{`Class${myHazmatClass ? `: ${myHazmatClass.id}` : ''}`}</h4>
              <h6>{myHazmatClass && myHazmatClass.description ? myHazmatClass.description : 'N/A'}</h6>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h4>Description</h4>
              <h6>{myHazmatData && myHazmatData.description ? myHazmatData.description : 'no description'}</h6>
            </Col>
          </Row>
        </Container>
      );
  }
}
