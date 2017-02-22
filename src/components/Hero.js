import React from 'react';
import { Container, Navbar, Col, Button, Nav, NavItem } from 'reactstrap';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import imgLogo from '../../assets/logo_white.png';

export default class Hero extends React.Component {
    render() {
        return (
            <div className={cx("hero", this.props.className)}>
                <div className="overlay"></div>
                <div className="hero-inner">
                    <div className="cover-container">
                        <div className="hero-header hidden-md-down">
                            <Container>
                                <Navbar className="justify-content-between">
                                    <img className="navbar-brand" src={imgLogo} />
                                    <div>
                                        <div>
                                            <Button size="lg" outline color="white"><FormattedMessage id="log_in"/></Button>
                                            { ' '}
                                            <Link to="/signup" className="btn btn-primary btn-lg"><FormattedMessage id="get_going"/></Link>
                                        </div>
                                    </div>
                                </Navbar>
                            </Container>
                            <Container className="nav-secondary">
                                <Nav className="justify-content-start" navbar>
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
                            </Container>
                        </div>
                        <div className="text-center cover">
                            <FormattedMessage id="hero_title_1" tagName="h1" />
                            <FormattedMessage id="hero_title_2" tagName="h2" />
                            <br/>
                            <Link to="/signup" className="btn btn-lg btn-outline-white">
                                <FormattedMessage id="hero_btn"/>
                            </Link>
                            <div className="hidden-sm-up dots">
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}