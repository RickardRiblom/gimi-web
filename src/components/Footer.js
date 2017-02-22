import React from 'react';
import { Container, Nav } from 'reactstrap';
import { FormattedMessage,injectIntl } from 'react-intl';
import { Link } from 'react-router';

import NavLinks from './NavLinks';
import Copyright from './Copyright';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={this.props.className}>
                <Container>
                    <div className="nav-secondary">
                       <NavLinks/>
                    </div>
                    <Copyright/>
                    <div className="hidden-md-up text-center">
                        <i className="icon fb" />
                        <i className="icon twitter" />
                        <i className="icon youtube" />
                        <i className="icon linkedin" />
                    </div>
                </Container>
            </footer>
        )
    }
}