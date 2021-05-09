import React from "react";
import {
  Card as BootstrapCard,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Card({ item }) {
  return (
    <BootstrapCard>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </BootstrapCard>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <Card item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <Card item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <Card item={props.leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
