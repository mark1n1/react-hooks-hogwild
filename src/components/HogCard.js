import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react"

function HogCard({ name, image, greased, weight, specialty, highestMedal}) {
  const [displayCard, setDisplayCard] = useState(true);
  const [hideCard, setHideCard] = useState(false);

  function handleHogClick(event) {
    setDisplayCard(!displayCard);
  }

  function handlehideClick() {
    setHideCard(!hideCard);
  }

  return (
    <Card style={{ cursor: "pointer", display: hideCard ? "none" : "" }} onClick={ handleHogClick } >
      <Image src={ image }/>
      <Card.Content >
        <Card.Header>{ name }</Card.Header>
        <Card.Content style={{ display: displayCard ? "" : "none" }}>
          <Card.Meta >
            <span className="date">Weight: { weight } lb</span>
          </Card.Meta>
          <Card.Description>Specialty: { specialty }</Card.Description>
          <Card.Description>Greased: { greased ? "Yes":"No" }</Card.Description>
          <Card.Description>Highest medal achieved: { highestMedal }</Card.Description>
          <Button basic onClick={ handlehideClick }>Hide Hog</Button>
        </Card.Content>
      </Card.Content>
    </Card>
  )
}

export default HogCard;