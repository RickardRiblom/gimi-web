import React from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FormattedMessage,injectIntl } from 'react-intl';
import { Link } from 'react-router';

import imgLogo from '../../assets/logo.png';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div id="header" className={this.props.className}>
                <Navbar color="faded" light>
                    <NavbarBrand href="/">
                        <img className="logo" src={imgLogo} />
                    </NavbarBrand>
                    <NavbarToggler right onClick={this.toggleNavbar} />
                    <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to=""><FormattedMessage id="link.how_to"/></Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to=""><FormattedMessage id="link.security"/></Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to=""><FormattedMessage id="link.price"/></Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to=""><FormattedMessage id="link.qna"/></Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/about"><FormattedMessage id="link.about"/></Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to=""><FormattedMessage id="link.blog"/></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}