import React from "react";
import "./menu.css";
import {Link} from 'react-router-dom'

function Menu(props) {
  	return (
		<aside className="Menu">
			<nav>
				<ul>
					<li>
						<Link to="/">Início</Link>
					</li>
					<li>
						<Link to="/Param/1">Param #01</Link>
					</li>
					<li>
						<Link to="/Param/propriedade">Param #02</Link>
					</li>
					<li>
						<Link to="/about">Sobre</Link>
					</li>
					<li>
						<Link to="/NaoExiste">Não Existe</Link>
					</li>
				</ul>
			</nav>
		</aside>	
	)
}

export default Menu;
