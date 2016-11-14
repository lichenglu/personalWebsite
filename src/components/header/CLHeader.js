/**
 * Created by chengluli on 12/11/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import CLConstance from '../utils/Constance';

class CLHeader extends Component {

    generateNavItems() {
        const data = CLConstance.staticData.navItems;
        return data.map((item, idx) => {
            return(
                <NavItem
                    eventKey={idx}
                    onClick={this.props.didClickNavItem.bind(this, item.url)}
                    key={idx}
                    className={this.props.currentRoute === item.url ? 'active' : ''}
                >
                    <Glyphicon glyph={item.iconName} />

                    {"  " + item.title}
                </NavItem>
            )
        });
    }

    render() {

        const placeholders = CLConstance.placeholders;
        const routes = CLConstance.staticData.routes;

        return (
            <Navbar inverse collapseOnSelect fixedTop id={CLConstance.styles.ids.navBar}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={routes.home}>{placeholders.navBarTitle}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        { this.generateNavItems() }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CLHeader;