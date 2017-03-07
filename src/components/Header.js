import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link, IndexLink} from 'react-router';

import { LINKS, HOSTS } from '../constants';

const LOGO = {
    en: '/assets/images/gimi_logo.png',
    no: '/assets/images/gimi_logo.png',
    se: '/assets/uploads/2015/11/NYLOGGA_hem_gra.png'
};

const LOGO_SCROLL = {
    en: '/assets/images/gimi_logo_inverse.png',
    no: '/assets/images/gimi_logo_inverse.png',
    se: '/assets/uploads/2015/11/NYLOGGA_hem_vit.png'
};

export default class Header extends React.Component {

    componentDidMount() {
        veckopengen.navigation.init();
        veckopengen.siteHeader.init();
    }

    render() {
        const { lang = 'en', isHome}= this.props;
        const logo = isHome ?  LOGO[lang] :  LOGO_SCROLL[lang];
        const logo_alt = !isHome ? LOGO[lang] : LOGO_SCROLL[lang];
        const links = LINKS[lang];
        return (
            <header className="site-header" role="navigation">
                <div className="row">
                    <button className="nav-toggle" type="button" data-toggle="collapse" data-target="#bs-navbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="nav-logo">
                        <Link to="/" className="init">
                            <img src={logo} alt=""/>
                        </Link>

                        <Link to="/" className="scroll">
                            <img src={isHome ? logo : logo_alt} alt=""/>
                        </Link>
                    </div>

                    <div className="nav-logo-mobile">
                        <Link to="/">
                            <img src={isHome ? logo : logo_alt} alt=""/>
                        </Link>
                    </div>

                    <nav id="primary-navigation top-bar" className="site-navigation primary-navigation" role="navigation">
                        <div className="nav-menu">
                            <div className="menu-primary-nav-se-container">
                                <ul id="menu-primary-nav-se" className="">
                                    <li className="menu-item">
                                        <IndexLink to={`/`} activeClassName="current_page_item"><FormattedMessage id="header.home"/></IndexLink></li>
                                    <li className="menu-item">
                                        <Link to={`/${links.family}`} activeClassName="current_page_item"><FormattedMessage id="header.family"/></Link></li>
                                    <li className="menu-item">
                                        <Link to={`/${links.coaching}`} activeClassName="current_page_item"><FormattedMessage id="header.training"/></Link></li>
                                    <li className="menu-item">
                                        <Link to={`/${links.news}`} activeClassName="current_page_item"><FormattedMessage id="header.news"/></Link></li>
                                    <li className="menu-item">
                                        <Link to={`/${links.about}`} activeClassName="current_page_item"><FormattedMessage id="header.about"/></Link></li>
                                    <li className="menu-item">
                                        <a href="http://veckopengen.teamtailor.com/"><FormattedMessage id="header.job"/></a></li>
                                    <li className="lang-item lang-item-en menu-item">
                                        <a href={HOSTS.en} hrefLang="en-US" lang="en-US"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"
                                            title="English" alt="English"/></a></li>
                                    <li className="lang-item lang-item-nb menu-item">
                                        <a href={HOSTS.no} hrefLang="nb-NO" lang="nb-NO"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGSSURBVHjaYnzIAAVy//9zRV36skTnATPzPwaGf2BBCOMPEgkQQCxAUcHaaiD5////ngQpRkZG4aLC/3//MPz58x+Efv//DSL/Acnfv+9u2AQQQCxgg/7/e/IUSL18/weo7c+DB0AVDL+BioCqgejXv1+//v/6zSwrC7QBIIDAGv4CVf0F0f9ADvn/5xfI1F8gpSDVQD2/QCTT799AVwEEEIvM379AZ0Cc9Aeo8/9/gbUb/mMDQGUanz4BBBAjc/D5/mTpF+9///0HdvO/f0BtQA6I/AMk//3+CxIHikgJss7OOQ0QQIx///6FGP+f4X/JgmfdcZL/cQAmJqb3798DBBDLPWZmkdysP/fuC2zY9BvspLd21v9+gXzMAPLub6g3fv9hUVa6evocQACxAL35HxxkQKUgZ/3//+8nRMUvkCBIJ4jxD+iQP8DAZgAIILCGP3+YJEEuEeUDBRqzjCzTX1DAM4CDn/nPH5Dqv3//gR0PEECMV2FRqPD+vaDeibcXzK4JC/+BxTEkghlgJBAABBgA9J5akqVspaUAAAAASUVORK5CYII="
                                            title="Norsk Bokmål" alt="Norsk Bokmål"/></a></li>
                                    <li className="lang-item lang-item-sv menu-item">
                                        <a href={HOSTS.se} hrefLang="sv-SE" lang="sv-SE">
                                            <img src="/assets/images/sv_SE.png" title="Svenska" alt="Svenska" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}