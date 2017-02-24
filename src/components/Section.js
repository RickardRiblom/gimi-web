import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

export default class Section extends React.Component {
    render() {
        return (
            <section className="features">
                <div className="features__header wow fadeInDown">
                    <div className="row">
                        <div className="medium-8 medium-push-2 columns">
                            <FormattedMessage tagName="h2" id="home.section1.header" />
                            <FormattedMessage tagName="p" id="home.section1.desc"/>
                        </div>
                    </div>
                </div>

                <div className="feature veckopengen">
                    <div className="row first-line"></div>
                    <div className="row">
                        <div className="medium-6 medium-push-6 columns fadeInRight wow">
                            <div className="anim-wrapper">
                                <div className="anim anim-7">
                                    <img className="wallet"
                                         src="/assets/images/animation/wallet-1.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-6.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-5.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-4.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-3.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-2.png"/>
                                    <img className="money"
                                         src="/assets/images/animation/money-1.png"/>
                                    <img className="wallet"
                                         src="/assets/images/animation/wallet-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="coin"
                                         src="/assets/images/animation/coin-2.png"/>
                                    <img className="wallet"
                                         src="/assets/images/animation/wallet-3.png"/>
                                </div>
                            </div>
                            <div className="anim-controlls">
                                <a href="#" id="wallet-minus-button">
                                    <img src="/assets/images/minus-circle.png"/>
                                </a>

                                <p className="wallet-value"><span>25</span> kr</p>
                                <a href="#" id="wallet-plus-button">
                                    <img src="/assets/images/plus-circle.png"/>
                                </a>
                            </div>
                        </div>

                        <div className="medium-6 medium-pull-6 columns">
                            <div className="feature__content wow fadeInLeft">
                                <FormattedMessage tagName="h3" id="home.section2.header"/>
                                <FormattedMessage tagName="p" id="home.section2.body"/>
                                <FormattedMessage tagName="h4" id="home.section2.subheader"/>
                                <FormattedMessage tagName="p" id="home.section2.superpower"/>
                            </div>
                        </div>

                    </div>
                    <div className="row second-line">

                    </div>
                </div>

                <div className="feature pig-bank">
                    <div className="row">
                        <div className="medium-6 columns fadeInLeft wow">

                            <div className="anim-wrapper pigbank-anim">
                                <div className="anim anim-1 frame-1">
                                    <img className="pig"
                                         src="/assets/images/animation/pig-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="pig"
                                        src="/assets/images/animation/pig-sleep.png"/>
                                </div>

                                <div className="anim anim-2 frame-1">
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="bankroll-1"
                                         src="/assets/images/animation/bankroll-1.png"/>
                                    <img className="pig"
                                         src="/assets/images/animation/pig-2.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img className="silver"
                                         src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                </div>

                                <div className="anim anim-3 frame-1">
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="safe"
                                         src="/assets/images/animation/safe-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                </div>

                                <div className="anim anim-4 frame-1">
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-2.png"/>
                                    <img className="safe"
                                         src="/assets/images/animation/safe-2.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="gold"
                                        src="/assets/images/animation/gold-1.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                    <img
                                        className="silver"
                                        src="/assets/images/animation/silver.png"/>
                                </div>

                                <div className="anim anim-5 frame-1">
                                    <img className="safe"
                                         src="/assets/images/animation/safe-3.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-2.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-2.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-2.png"/>
                                    <img className="gold"
                                         src="/assets/images/animation/gold-2.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img className="bankroll"
                                         src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                    <img
                                        className="bankroll"
                                        src="/assets/images/animation/bankroll-3.png"/>
                                </div>

                            </div>
                            <div className="anim-controlls">

                                <FormattedMessage tagName="p" id="home.section3.interest"/>
                                <a href="#" id="pig-minus-button">
                                    <img src="/assets/images/minus-circle.png"/>
                                </a>

                                <p className="pig-value"><span>50</span> kr</p>
                                <a href="#" id="pig-plus-button">
                                    <img src="/assets/images/plus-circle.png"/>
                                </a>
                            </div>

                        </div>
                        <div className="medium-6 columns">
                            <div className="feature__content wow fadeInRight">
                                <FormattedMessage tagName="h3" id="home.section3.header"/>
                                <FormattedMessage tagName="p" id="home.section3.body"/>
                                <FormattedMessage tagName="h4" id="home.section3.subheader"/>
                                <FormattedMessage tagName="p" id="home.section3.superpower"/>
                            </div>
                        </div>
                    </div>
                    <div className="row third-line"></div>
                </div>

                <div className="feature tasks">
                    <div className="row">
                        <div className="medium-6 medium-push-6 columns fadeInRight wow">

                            <div className="cutter-image">
                                <img className="coin"
                                     src="/assets/images/cutter.png"/>
                            </div>

                            <div className="anim-cutter">
                                <div className="anim-wrapper">
                                    <div className="anim anim-6 frame-1">
                                        <div className="grass"
                                             style={{backgroundImage: 'url(/assets/images/animation/grass-1.png)'}}></div>
                                        <div className="grass"
                                             style={{backgroundImage: 'url(/assets/images/animation/grass-2.png)'}}></div>
                                        <img className="coin"
                                             src="/assets/images/animation/coin.png"/>
                                        <img className="coin"
                                             src="/assets/images/animation/coin.png"/>
                                        <img className="coin"
                                             src="/assets/images/animation/coin.png"/>
                                        <img className="cutter"
                                             src="/assets/images/animation/cutter-2.png"/>
                                        <img className="cutter"
                                             src="/assets/images/animation/cutter-1.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="medium-6 medium-pull-6 columns">
                            <div className="feature__content wow fadeInLeft">
                                <FormattedMessage tagName="h3" id="home.section4.header"/>
                                <FormattedMessage tagName="p" id="home.section4.body"/>
                                <FormattedMessage tagName="h4" id="home.section4.subheader"/>
                                <FormattedMessage tagName="p" id="home.section4.superpower"/>
                            </div>
                        </div>
                    </div>
                    <div className="row fourth-line"></div>
                </div>

                <div className="feature save-objective">
                    <div className="row">
                        <div className="medium-6 columns fadeInLeft wow">

                            <div className="save-objective__slider">
                                <div className="save-objective__slider-item">
                                    <img src="/assets/images/funfair.png"/>
                                    <p>  <strong>33%</strong> <FormattedMessage id="home.section5.point1"/> </p>
                                </div>

                                <div className="save-objective__slider-item">
                                    <img src="/assets/images/konsol.png"/>
                                    <p> <strong>57%</strong> <FormattedMessage id="home.section5.point2"/> </p>
                                </div>

                                <div className="save-objective__slider-item">
                                    <img src="/assets/images/ball.png"/>
                                    <p> <strong>100%</strong> <FormattedMessage id="home.section5.point3"/> </p>
                                </div>
                            </div>

                            <div className="save-objective__progress-wrapper">
								<span className="save-objective__progress-bar">
								</span>
                            </div>

                        </div>
                        <div className="medium-6 columns">
                            <div className="feature__content wow fadeInRight">
                                <FormattedMessage tagName="h3" id="home.section5.header"/>
                                <FormattedMessage tagName="p" id="home.section5.body"/>
                                <FormattedMessage tagName="h4" id="home.section3.subheader"/>
                                <FormattedMessage tagName="p" id="home.section5.superpower"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="fifth-line">
                            <div className="delimiter"></div>
                        </div>
                    </div>
                </div>

                <div className="features__read-more">
                    <div className="row">
                        <div className="medium-12 columns">
                            <div className="features__appstore-badges fadeInLeft wow">
                                <div className="features__tip">
									<span className="features__tip-pointer">
										<img src="/assets/images/tip-pointer.png"
                                             alt="Tip pointer"/>
									</span>
                                    <span className="features__tip-text">
                                        <FormattedMessage id="home.section6.download_tip"/>
                                    </span>
                                </div>

                                <a href="https://itunes.apple.com/se/app/veckopengen-for-barn-och-foraldrar/id935778197?mt=8">
                                    <img className="appstore-badge"
                                         src="/assets/images/apple-badge.png"/>
                                </a>

                                <a href="https://play.google.com/store/apps/details?id=se.veckopengen.app&amp;hl=sv">
                                    <img className="appstore-badge"
                                         src="/assets/images/google-badge.png"/>
                                </a>
                            </div>
                            <div className="footer-carousel">
                                <blockquote className="features__quote fadeInUp wow">
                                    <FormattedMessage tagName="p" id="home.quote1"/>
                                    <footer>– <span className="features__quote-name">
                                        <FormattedMessage id="home.quote1_name"/>
                                    </span>,
                                        <span className="features__quote-age">
                                            <FormattedMessage id="home.quote1_sub"/>
                                        </span>
                                    </footer>

                                </blockquote>
                                <blockquote className="features__quote fadeInUp wow">
                                    <FormattedMessage tagName="p" id="home.quote2"/>
                                    <footer>– <span
                                        className="features__quote-name">
                                        <FormattedMessage id="home.quote2_name"/>
                                    </span>,
                                        <span className="features__quote-age">
                                            <FormattedMessage id="home.quote2_sub"/>
                                        </span>
                                    </footer>

                                </blockquote>
                                <blockquote className="features__quote fadeInUp wow">
                                    <FormattedMessage tagName="p" id="home.quote3"/>
                                    <footer>– <span
                                        className="features__quote-name"><FormattedMessage id="home.quote3_name"/></span>,
                                        <span className="features__quote-age">
                                            <FormattedMessage id="home.quote3_sub"/>
                                        </span>
                                    </footer>

                                </blockquote>
                                <blockquote className="features__quote fadeInUp wow">
                                    <FormattedMessage tagName="p" id="home.quote4"/>
                                    <footer>– <span
                                        className="features__quote-name"><FormattedMessage id="home.quote4_name"/></span>,
                                        <span className="features__quote-age">
                                            <FormattedMessage id="home.quote4_sub"/>
                                        </span>
                                    </footer>

                                </blockquote>
                                <blockquote className="features__quote fadeInUp wow">
                                    <FormattedMessage tagName="p" id="home.quote5"/>
                                    <footer>– <span
                                        className="features__quote-name"><FormattedMessage id="home.quote5_name"/></span>,
                                        <span className="features__quote-age">
                                            <FormattedMessage id="home.quote4_sub"/>
                                        </span>
                                    </footer>

                                </blockquote>
                            </div>
                            <a href="upplev-veckopengen/index.html"
                               className="button fadeInUp wow">
                                <FormattedMessage id="home.section6.button"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}