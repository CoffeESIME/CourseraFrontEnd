/*First of all we import React */
import React, { Component } from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FigureImage from "react-bootstrap/FigureImage";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
/*Now we create the class, that is a component we'll export to our app */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "assets/images/zucchipakoda.png",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "assets/images/vadonut.png",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "assets/images/elaicheesecake.png",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }
  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <ListGroupItem>
          <Row key={dish.id} className="col-12 mt-5">
            <Col xs={2}>
              <FigureImage src={dish.image} alt={dish.name}></FigureImage>
            </Col>
            <Col xs={10}>
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
            </Col>
          </Row>
        </ListGroupItem>
      );
    });
    return (
      <Container>
        <Row>
          <ListGroup>{menu}</ListGroup>
        </Row>
      </Container>
    );
  }
}
export default Menu;
