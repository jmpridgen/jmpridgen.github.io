import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Typist from 'react-typist';

import styles from './styles.scss';

// import Chart '../../components/Chart';
// import ErrorDisplay from '../../components/ErrorDisplay';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Jumbotron className={styles.homeJumbotron}>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-2">{'Hi, I\'m Max'}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Typist>
              <h2>{'I\'m a full stack Javascript developer'}</h2>
            </Typist>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
