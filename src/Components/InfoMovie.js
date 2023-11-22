import React from 'react'
import Card from "react-bootstrap/Card";
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player/youtube";

function InfoMovie({ props }) {
  const obj = useParams();
  const el = props.find((el) => el.id == obj.id);

  console.log(el);
  return (
    <>
      <Card>
        <ReactPlayer url={el.trailerSrc} width="250%"/>
        /*** */ <ReactPlayer url={el.posterUrl} width="250%"/>
        <Card.Body
          style={{ 
width: "50px",
height: "850px",
display: "flex",
justifyContent: "center",
padding: "10px",
paddingLeft: "-500px",
margin: "10px",
marginRight: "10px",
marginLeft: "200px",
marginTop: "900px",
marginBottom:"600px",
 }}
        >
          <Card.Text>{el.description}</Card.Text>
          /***** <Card.Text>{el.posterUrl}</Card.Text>*****/
        </Card.Body>
      </Card>

      <Link to={`/`}>
        <Button variant="outline-primary">Return home</Button>
      </Link>
    </>
  );
}

export default InfoMovie