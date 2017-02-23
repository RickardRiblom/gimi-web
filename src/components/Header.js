import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {Link} from 'react-router';

export default class Header extends React.Component {
    render() {
        const { lang = 'en'}= this.props;

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
                            <img src="/assets/uploads/2015/11/NYLOGGA_hem_gra.png" alt=""/>
                        </Link>

                        <Link to="/" className="scroll">
                            <img src="/assets/uploads/2015/11/NYLOGGA_hem_gra.png" alt=""/>
                        </Link>
                    </div>

                    <div className="nav-logo-mobile">
                        <Link to="/">
                            <img src="/assets/uploads/2015/11/NYLOGGA_hem_gra.png" alt=""/>
                        </Link>
                    </div>

                    <nav id="primary-navigation top-bar" className="site-navigation primary-navigation" role="navigation">
                        <div className="nav-menu">
                            <div className="menu-primary-nav-se-container">
                                <ul id="menu-primary-nav-se" className="">
                                    <li id="menu-item-1236"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-44 current_page_item menu-item-1236">
                                        <Link to="/">Hem</Link></li>
                                    <li id="menu-item-253"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-253">
                                        <Link to={`/${lang}/family`}>Upplev veckopengen</Link></li>
                                    <li id="menu-item-254"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-254">
                                        <Link to={`/${lang}/training`}>Träning</Link></li>
                                    <li id="menu-item-611"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-611">
                                        <Link to={`/${lang}/news`}>Aktuellt</Link></li>
                                    <li id="menu-item-522"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-522">
                                        <Link to={`/${lang}/about`}>Om oss</Link></li>
                                    <li id="menu-item-1750"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1750">
                                        <a href="http://veckopengen.teamtailor.com/">JOBB</a></li>
                                    <li id="menu-item-1349-en"
                                        className="lang-item lang-item-27 lang-item-en menu-item menu-item-type-custom menu-item-object-custom menu-item-1349-en">
                                        <a href="http://gimitheapp.com/" hrefLang="en-US" lang="en-US"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"
                                            title="English" alt="English"/></a></li>
                                    <li id="menu-item-1349-nb"
                                        className="lang-item lang-item-43 lang-item-nb menu-item menu-item-type-custom menu-item-object-custom menu-item-1349-nb">
                                        <a href="http://no.gimitheapp.com/" hrefLang="nb-NO" lang="nb-NO"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGSSURBVHjaYnzIAAVy//9zRV36skTnATPzPwaGf2BBCOMPEgkQQCxAUcHaaiD5////ngQpRkZG4aLC/3//MPz58x+Efv//DSL/Acnfv+9u2AQQQCxgg/7/e/IUSL18/weo7c+DB0AVDL+BioCqgejXv1+//v/6zSwrC7QBIIDAGv4CVf0F0f9ADvn/5xfI1F8gpSDVQD2/QCTT799AVwEEEIvM379AZ0Cc9Aeo8/9/gbUb/mMDQGUanz4BBBAjc/D5/mTpF+9///0HdvO/f0BtQA6I/AMk//3+CxIHikgJss7OOQ0QQIx///6FGP+f4X/JgmfdcZL/cQAmJqb3798DBBDLPWZmkdysP/fuC2zY9BvspLd21v9+gXzMAPLub6g3fv9hUVa6evocQACxAL35HxxkQKUgZ/3//+8nRMUvkCBIJ4jxD+iQP8DAZgAIILCGP3+YJEEuEeUDBRqzjCzTX1DAM4CDn/nPH5Dqv3//gR0PEECMV2FRqPD+vaDeibcXzK4JC/+BxTEkghlgJBAABBgA9J5akqVspaUAAAAASUVORK5CYII="
                                            title="Norsk Bokmål" alt="Norsk Bokmål"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}