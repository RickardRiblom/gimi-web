import React from 'react';
import { Container, Row, Col, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FormattedMessage,injectIntl } from 'react-intl';
import { Link } from 'react-router';

import NavLinks from './NavLinks';

import imgLogo from '../../assets/logo_white.png';

export default class Header extends React.Component {
    render() {
        return (
            <div id="header" className={this.props.className}>
                <div className="nav-primary">
                    <Container>
                        <Navbar toggleable>
                            <NavbarBrand href="/" className="mr-auto">
                                <img className="logo" src={imgLogo} />
                            </NavbarBrand>
                            <div>
                                <Button outline color="white" size="lg">
                                    <FormattedMessage id="log_in"/>
                                </Button>
                                {' '}
                                <Link to="/signup" className="btn btn-primary btn-lg">
                                    <FormattedMessage id="get_going"/>
                                </Link>
                            </div>
                        </Navbar>
                    </Container>
                </div>
                <div className="nav-secondary">
                    <Container>
                        <NavLinks/>
                    </Container>
                </div>
            </div>
        )
    }
}