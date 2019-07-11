import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Labels(props) {
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} sm={10} md lg={9}>
          <Row>
          {props.result.slice(0,12).map((breed, index)=> 
            <Col className="mt-2" lg={3} md={3} sm={4} xs={6} key={index}>
              <Button variant="info" value={breed.match("^[^(]+")} onClick={props.search}>{breed}</Button>
            </Col>
          )}
          </Row>
        </Col>
      </Row>
  </Container>
  )
}
