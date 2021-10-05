import './Menu.css'
import React from 'react'

import { NavLink } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Início</NavLink>
                </li>
                <li>
                    <NavLink to="/useState">useState</NavLink>
                </li>
                <li>
                    <NavLink to="/useEffect">useEffect</NavLink>
                </li>
                <li>
                    <NavLink to="/useRef">useRef</NavLink>
                </li>
                <li>
                    <NavLink to="/useMemo">useMemo</NavLink>
                </li>
                <li>
                    <NavLink to="/useCallback">useCallback</NavLink>
                </li>
                <li>
                    <NavLink to="/useContext">useContext</NavLink>
                </li>
                <li>
                    <NavLink to="/useReducer">useReducer</NavLink>
                </li>
                <li>
                    <NavLink to="/useCustom">useMyHook</NavLink>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu