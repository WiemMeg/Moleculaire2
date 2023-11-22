import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cartes ({ data }) {
  console.log(data);
  return (
    <Card
      style={{
        border: "1px solid black",
        display: "flex",
        width: "900px",
        height: "1090px",
        borderRadius: "20%",
        flexDirection: "column",
        padding: "4%",
        justifyContent: "",
        alignmentBaseline: "baseline",
        marginTop: "5%",
        marginLeft: "25%",
        backgroundColor: "rgb(158, 146, 158)",
        boxShadow: "20px 20px 18px black",
        hovertransform: "rotateY 180 deg",
      }}
    >
      <Card.Img variant="top" src={data.image} />
      <Card.Body
        style={{
          marginTop: "30px",
          fontSize: "larger",
          fontFamily: "cursive",
          fontStyle: "inherit",
          colorRendering: "",
          fontWeight: "bolder",
          textAlign: "center",
          textShadow: "black",
          letterSpacing: ".1em",
          opacity: "",
        }}
      >
        <Card.Title> name : {data.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          style={{
            fontSize:"larger",
            fontFamily:"cursive",
            fontStyle:"inherit",
            fontWeight:"bolder",
            letterSpacing:".1em",
          }} >
          technique: {data.technique}
        </ListGroup.Item>
        <ListGroup.Item className="description">
          description: {data.description}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Cartes;