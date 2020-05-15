import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Card, CardImg, CardBody, Button, CardTitle, Col } from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('https://9vs97.sse.codesandbox.io/products').then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Product</h2>
        <Row>
          { products.map(product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                </CardBody>
                <Button>Add To Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default About;
