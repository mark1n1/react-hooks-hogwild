import React from "react";
import { Button, Select } from "semantic-ui-react";

function FilterHogs({ handleShowGreasedClick, handleSortChange, showGreased }) {

    const options = [
      { key: 'na', value: 'na', text: 'Name' },
      { key: 'we', value: 'we', text: 'Weight' },
    ]

  return (
    <React.Fragment>
      <Button.Group>
        <Button onClick={ handleShowGreasedClick }>{ showGreased ? "Show All hogs" : "Show Greased Hogs" }</Button>
      </Button.Group>
      <Select placeholder='Sort By' options={ options } onChange={ handleSortChange }/>
    </React.Fragment>
  )
}

export default FilterHogs;