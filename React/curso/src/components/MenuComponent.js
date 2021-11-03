/*First of all we import React */
import React from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BreadcrumbItem } from "react-bootstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

/*Now we create the class, that is a component we'll export to our app */
function RenderMenuItem({ dish}) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <Card.Img src={baseUrl + dish.image} alt={dish.name} />
        <Card.ImgOverlay>
          <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = (props) => {
  /*here we use the props instead of the state, because now the data came from the App.js */
  const menu = props.dishes.dishes.map((dish) => {
    return (
      /* here we change the className to make the row flexible to shorw two elements */
      <Row key={dish.id} className="col-12 col-md-5 m-1 ">
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </Row>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Container>
        <Row>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </Row>
        <Row>
          <CardGroup>{menu}</CardGroup>
        </Row>
        <Row>
          {/* As we see this element will render the new card
          below the cardGroup in case that a card has been selected*/}
        </Row>
      </Container>
    );
  }
};

export default Menu;
