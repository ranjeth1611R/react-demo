import React from "react"
import { Card,CardBody,CardSubtitle,CardTitle,CardText,Button } from "reactstrap"
import "./Cardcomp.css"

function CardComp(props){
    return(
<Card
  style={{
    // width: '18rem',

  }}
>
 <div className="img"><img width="200px" height="200px" alt="Sample" src={props.comp3} className="image"/></div>
  <CardBody>
    <CardTitle tag="h5">
      price: {props.comp2}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <div>
      <button className="btn1">37% off</button>
      <h6  className="deal">Deal of the Day</h6>
    </div>
    <Button>
      BUY
    </Button>
  </CardBody>
</Card>
    )
}
export default CardComp 