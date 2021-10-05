import React from "react";
import Menu from "../components/layout/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../components/layout/Content";

import "./app.css";

function App(props) {
	return (
		<div className="App">
			<Router>
				<Menu />
				<Content />
			</Router>
		</div>
	);
}

export default App;
