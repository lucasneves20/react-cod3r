import React from "react";
import { Switch, Route } from "react-router-dom";
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'
import Home from '../../views/examples/Home'
import "./content.css";
import NotFound from "../../views/examples/notFound";

function Content(props) {
	return (
		<main className="Content">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/param/:id">
					<Param />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</main>
	);
}

export default Content;
