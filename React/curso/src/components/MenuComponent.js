/*First of all we import React */
import React from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
/*Now we create the class, that is a component we'll export to our app */
 function RenderMenuItem (props){
     
     return(
        <Card onClick={() =>props.onClick(props.dish.id)}>
        <Card.Img src={props.dish.image} alt={props.dish.name} />

        <Card.ImgOverlay>
          <Card.Title>{props.dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
   );
     }
const Menu=(props)=>{
   /*here we use the props instead of the state, because now the data came from the App.js */
   const menu = props.dishes.map((dish) => {
    return (
      /* here we change the className to make the row flexible to shorw two elements */
      <Row key={dish.id} className="col-12 col-md-5 m-1 ">
         <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>

      </Row>
    );
  });
  return (
    <Container>
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
 
  

export default Menu;
