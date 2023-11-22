import React from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player/youtube";

function MovieCard ({props}) {
  return (
    <Card>
      <ReactPlayer url={props.trailerSrc} />
      <img src={props.posterUrl} />
      <Card.Body>
        <Card.Title style={{
    fontSize:"30px",
    
        }}   >{props.title}</Card.Title>

       
      </Card.Body>
    </Card>
  );
}

export default MovieCard