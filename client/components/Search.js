import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Search(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={10} md lg={9} >
            <InputGroup className="mb-3">
              <FormControl onChange={props.filter}
                placeholder="Breeds Name"
                aria-label="Breeds Name"
                aria-describedby="Breeds Name"
              />
              {/* <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append> */}
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
