import React, { useState } from "react";
import HogCard from "./HogCard"
import {Card} from "semantic-ui-react";
import FilterHogs from "./FilterHogs";

function CardContainer({ hogs }) {
  const [sortBy, setSortBy] = useState("");
  const [showGreased, setShowGreased] = useState(false);

  function handleHogs() {
    const hogsCopy = showGreased ? hogs.filter((hog) => hog.greased) : [...hogs];

    if(!sortBy) return hogsCopy;

    if(sortBy === "Weight") return hogsCopy.sort((firstHog, secondHog) => firstHog.weight - secondHog.weight);

    if(sortBy === "Name") return hogsCopy.sort((firstHog, secondHog) => (firstHog.name > secondHog.name ? 1 : -1));

    return hogsCopy
  }

  function handleShowGreasedClick() {
    setShowGreased(!showGreased);
  }

  function handleSortChange(event) {
    setSortBy(event.target.textContent);
  }

  return (
    <React.Fragment>
      <FilterHogs
        handleShowGreasedClick={ handleShowGreasedClick }
        handleSortChange={ handleSortChange }
        showGreased={ showGreased }
      />
      <Card.Group itemsPerRow={3}>
        { handleHogs().map((hog) => {
          return <HogCard 
                    key={hog.name} 
                    name={ hog.name } 
                    image={ hog.image }
                    greased={ hog.greased }
                    weight={ hog.weight }
                    specialty={ hog.specialty }
                    highestMedal={ hog["highest medal achieved"] }
                  />
        })}
      </Card.Group>
    </React.Fragment>
  );
}

export default CardContainer;