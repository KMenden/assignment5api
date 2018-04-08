import React, { Component } from 'react';
import logo from '../logo.svg';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

//add linkcontainer to invoke routes

class MovieHeader extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Movie App
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/movielist">
                            <NavItem eventKey={1}>Movie List</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/movie">
                            <NavItem eventKey={2}>Movie Detail</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <h1 className="App-title">{this.props.subTitle}</h1>
                </header>
            </div>

        );
    }
}

export default MovieHeader;