/**
 * Created by amitava on 26/01/17.
 */
import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

export default class NavLinks extends React.Component {
    render() {
        return (
            <Nav className="justify-content-start" navbar>
                <NavItem className="hidden-sm-down">
                    <Link className="nav-link" to=""><FormattedMessage id="link.how_to"/></Link>
                </NavItem>
                <NavItem className="hidden-sm-down">
                    <Link className="nav-link" to=""><FormattedMessage id="link.security"/></Link>
                </NavItem>
                <NavItem className="hidden-sm-down">
                    <Link className="nav-link" to=""><FormattedMessage id="link.price"/></Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to=""><FormattedMessage id="link.qna"/></Link>
                </NavItem>
                <NavItem className="hidden-sm-down">
                    <Link className="nav-link" to="/about"><FormattedMessage id="link.about"/></Link>
                </NavItem>
                <NavItem className="hidden-sm-down">
                    <Link className="nav-link" to=""><FormattedMessage id="link.blog"/></Link>
                </NavItem>
            </Nav>
        )
    }
}