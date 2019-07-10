import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Images(props) {
  return (
    <Container >
      <Row>
        {props.images.map((image, index)=>
          <Col xs={12} sm={6} md={4} lg={4} key={index} style={{marginTop: '3vh'}}>
            <Image src={image} rounded />
          </Col>
        )}
      </Row>
  </Container>
  )
}
