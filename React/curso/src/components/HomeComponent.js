import React from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Loading } from './LoadingComponent';

/*Now we create the class, that is a component we'll export to our app */
function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
        <Card>
        <Card.Img src={item.image} alt={item.name} />
          <Card.Title>{item.name}</Card.Title>
          {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null }
          <Card.Text>{item.description}</Card.Text>
      </Card>
     );
 }


function Home(props) {
    return(
        <Container>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </Container>
    );
}

export default Home;