/**
 * Created by amitava on 24/02/17.
 */
import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { SLIDES } from '../constants';

export default class Hero extends React.Component {
    render() {
        const { lang } = this.props;
        const slides = SLIDES[lang];

        return (
            <section className="landing-hero">
                <div className="row">
                    <div className="landing-hero__image">
                        <img src="http://veckopengen.se/uploads/2015/10/NYNY-PHONE-NYHEMSIDA.png" alt=""/>
                    </div>
                </div>
                <div className="landing-hero-bg-slider">
                    {slides.map((i, idx) => (
                        <div key={idx} className="landing-hero-slide equal-height" style={
                            {   backgroundSize: 'cover',
                                backgroundPosition: 'cover',
                                backgroundImage: `url(${i.image})`}}>
                            <div className="landing-hero__see-more">
                                <a href="#" id="slideDown">
                                    <img src="/assets/images/arrow-down-large-colored.png"
                                         alt=""/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="landing-hero-content equal-height">
                    <div className="landing-hero-content__inner">
                        <div className="landing-hero-content-slider">
                            {slides.map((i,idx) => (
                                <div className="row" key={idx}>
                                    <div className="medium-8 medium-push-4 columns">
                                        <div className="landing-hero-content-slider__content">
                                            <h2 style={!i.image ? {color: '#333'} : {}}>
                                                <FormattedHTMLMessage id={`home.slide${idx+1}.header`}/>
                                            </h2>

                                            <div className="large-10">
                                                <p className="p1">
                                                    <span className="s1" style={!i.image ? {color: '#333'} : {}}>
                                                        <FormattedHTMLMessage id={`home.slide${idx+1}.desc`}/>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="landing-hero__app-stores">
                            <div className="row">
                                <div className="landing-hero__app-stores-inner medium-push-4 columns">
                                    <a href="https://itunes.apple.com/se/app/veckopengen-for-barn-och-foraldrar/id935778197?mt=8">
                                        <img className="appstore-badge"
                                             src="/assets/images/apple-badge.png"
                                             alt=""/>
                                    </a>

                                    <a href="https://play.google.com/store/apps/details?id=se.veckopengen.app&amp;hl=sv">
                                        <img className="appstore-badge"
                                             src="/assets/images/google-badge.png"
                                             alt=""/>
                                    </a>

                                    <div className="open-movie">
                                        <a href="#" className="button button-movie">
                                            <img src="/assets/images/play-icon.png"
                                                 alt=""/>
                                            <FormattedMessage id="home.watch"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
