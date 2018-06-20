import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from './styles.scss';

export default function Home(props) {
  return (
    <Container
      className={[
        styles.outerContainer,
        'd-flex flex-column justify-content-center align-items-center',
        styles[`class${(props.hazmatClass && props.hazmatClass.id) || '0'}`],
      ]}
      fluid
    >
      <Row>
        <Col className="text-center">
          <input
            type="text"
            placeholder="Enter a UN Number"
            className={styles.unNumberInput}
            onChange={props.onFormChange}
            value={props.hazmatNumber}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h4>{`Class${props.hazmatClass ? `: ${props.hazmatClass.id}` : ''}`}</h4>
          <h6>{props.hazmatClass && props.hazmatClass.description ? props.hazmatClass.description : 'N/A'}</h6>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h4>Description</h4>
          <h6>{props.hazmatData && props.hazmatData.description ? props.hazmatData.description : 'no description'}</h6>
        </Col>
      </Row>
    </Container>
  );
}
