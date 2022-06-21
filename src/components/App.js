import React from "react";
import Nav from "./Nav";
import CardContainer from "./CardContainer"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<CardContainer hogs={ hogs }/>
		</div>
	);
}

export default App;
