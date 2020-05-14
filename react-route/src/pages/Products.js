import React, { Component } from 'react';
import { Container, Row, Card, CardImg, CardBody, Button, CardTitle, Col } from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        "id": "a48413bd-e544-408f-a479-ba8d45361526",
        "image": "http://dummyimage.com/103x190.bmp/5fa2dd/ffffff",
        "Name": "Chinh Phan"
      }, {
        "id": "857100b7-2e00-45d8-b08c-acf894fc448f",
        "image": "http://dummyimage.com/152x189.bmp/ff4444/ffffff",
        "Name": "Chinh Phan"
      }, {
        "id": "2be04857-2b03-4ad1-a9fe-075011084671",
        "image": "http://dummyimage.com/133x126.png/cc0000/ffffff",
        "Name": "Chinh Phan"
      }, {
        "id": "ea3de3f9-b9b1-411b-9c63-110dc58696d4",
        "image": "http://dummyimage.com/186x149.png/cc0000/ffffff",
        "Name": "Chinh Phan"
      }, {
        "id": "4d210cd7-8997-470c-98c4-8f90e819e760",
        "image": "http://dummyimage.com/102x203.bmp/ff4444/ffffff",
        "Name": "Chinh Phan"
      }]
    };
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
