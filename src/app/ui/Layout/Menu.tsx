import * as React from "react";

import {Link, Route} from "react-router-dom";

import './menu.css';

import logo from './img.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faList, faBookReader } from '@fortawesome/free-solid-svg-icons'


library.add(faHome, faUser, faList, faBookReader)

const MenuItem = ({
    to,
    label,
    activeOnlyWhenExact = false,
    children
}: {
    activeOnlyWhenExact?: boolean;
    to: string;
    label: string;
    children: React.ReactNode;
}) =>
      <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={<li className="text-white">
          <Link to={to} title={label}>{children}</Link>
      </li>}/>

const Menu = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" role="navigation">
            <div className="container offset-1">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </div>
            </div>
            <div className="container offset-1">
            <div id="main-navbar">
                <ul className="navbar-nav navbar-right">
                    <MenuItem activeOnlyWhenExact={true} to="/" label="home page">
                        <FontAwesomeIcon icon="home"/>&nbsp;
                        <span>Home</span>
                    </MenuItem>
                    <MenuItem to="/owner" label="Owners">
                        <FontAwesomeIcon icon="user"/>&nbsp;
                        <span>Owners</span>
                    </MenuItem>
                    <MenuItem to="/vets" label="veterinarians">
                        <FontAwesomeIcon icon="list"/>&nbsp;
                        <span>Veterinarians</span>
                    </MenuItem>
                    <MenuItem to="/specialties" label="Specialties">
                        <FontAwesomeIcon icon="book-reader"/>&nbsp;
                        <span>Specialties</span>
                    </MenuItem>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Menu;