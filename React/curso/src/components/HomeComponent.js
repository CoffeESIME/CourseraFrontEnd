import React from "react";
/*Next we import our bootstrap components to use with react-bootstrap */
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

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
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <Card>
        <Card.Img src={baseUrl + item.image} alt={item.name} />
          <Card.Title>{item.name}</Card.Title>
          {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null }
          <Card.Text>{item.description}</Card.Text>
      </Card>
      </FadeTransform>
     );
 }


function Home(props) {
    return(
        <Container>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                    isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </Container>
    );
}

export default Home;