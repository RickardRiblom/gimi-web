/**
 * Created by amitava on 22/02/17.
 */
import React from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

window.footerCounterValue = 173672608;
window.counterValue = 74931501;

export default class Home extends React.Component {
    componentDidMount() {
        var send = true
        $(".open-movie").before("<div><span class='smsHeader'>SMS:a mig appen:</span><br/><input class='smsButton' type='submit' value='Skicka'><input value='+46' placeholder='SKRIV DITT NUMMER HÄR' class='smsInput' type='text'></div>")
        $(".open-movie").after("<a id='success-lightbox' style='display:none;' href='#' data-featherlight='#mylightbox'>Open element in lightbox</a>")
        $(".open-movie").after("<div id='mylightbox' class='lightbox'></div>")
        $(".smsButton").click(function () {
            var number = $(".smsInput").val().toString()
            if (number.startsWith("07")) {
                number = number.substring(1, 10)
                number = "+46" + number
            }
            console.log(number)
            if (!send)
                return
            window.jQuery.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: "POST",
                url: "http://vp-live.herokuapp.com/v0.5/send-sms/",
                data: '{"phoneNo" : "' + number + '"}',
                dataType: 'json',
                success: function () {
                    console.log("success")
                    send = false
                    $(".smsInput").val("+46")
                    $(".smsButton").val("Skickat")
                    $(".smsButton").addClass("sent")
                },
                error: function (e) {
                    console.log(e)
                }
            });
        });
    }

    render() {
        return (
            <div className="home page-template-page-home">
                <Header/>
                <main>
                    <section className="landing-hero">
                        <div className="row">
                            <div className="landing-hero__image">
                                <img src="http://veckopengen.se/uploads/2015/10/NYNY-PHONE-NYHEMSIDA.png" alt=""/>
                            </div>
                        </div>
                        <div className="landing-hero-bg-slider">
                            <div className="landing-hero-slide equal-height" style={
                                {   backgroundSize: 'cover',
                                    backgroundPosition: 'cover',
                                    backgroundImage: 'url(/assets/images/slide1.jpg)'}}>
                                <div className="landing-hero__see-more">
                                    <a href="#" id="slideDown">
                                        <img src="/assets/images/arrow-down-large-colored.png"
                                             alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="landing-hero-slide equal-height" style={
                                {   backgroundSize: 'cover',
                                    backgroundPosition: 'cover',
                                    backgroundImage: 'url(/assets/images/slide2.jpg)'}}>
                                <div className="landing-hero__see-more">
                                    <a href="#" id="slideDown">
                                        <img src="/assets/images/arrow-down-large-white.png"
                                             alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="landing-hero-slide equal-height" style={
                                {   backgroundSize: 'cover',
                                    backgroundPosition: 'cover',
                                    backgroundImage: 'url(/assets/images/slide2.jpg)'}}>
                                <div className="landing-hero__see-more">
                                    <a href="#" id="slideDown">
                                        <img src="/assets/images/arrow-down-large-white.png"
                                             alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="landing-hero-content equal-height">
                            <div className="landing-hero-content__inner">
                                <div className="landing-hero-content-slider">
                                    <div className="row">
                                        <div className="medium-8 medium-push-4 columns">
                                            <div className="landing-hero-content-slider__content">
                                                <FormattedMessage tagName="h2" id="home.slide1.header"/>

                                                <div className="large-10">
                                                    <p className="p1"><span className="s1">
                                                        <FormattedMessage id="home.slide1.desc"/>
                                                    </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="medium-8 medium-push-4 columns">
                                            <div className="landing-hero-content-slider__content">
                                                <FormattedMessage tagName="h2" id="home.slide2.header"/>

                                                <div className="large-10">
                                                    <FormattedHTMLMessage tagName="p" id="home.slide2.desc"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="medium-8 medium-push-4 columns">
                                            <div className="landing-hero-content-slider__content">
                                                <FormattedMessage tagName="h2" id="home.slide3.header"/>

                                                <div className="large-10">
                                                    <FormattedHTMLMessage tagName="p" id="home.slide3.desc"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                    <Section/>
                    <Footer/>
                </main>
                <div className="video-player">
                    <div className="close-video">
                        <svg x="0px" y="0px" viewBox="0 0 357 357">
                            <g>
                                <g id="close">
                                    <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"/>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="video-wrapper">
                        <video width="100%" height="100%" id="veckopengen-video" preload="none">
                            <source src="/assets/uploads/2015/11/VECKOPENGEN-FILM.m4v" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        )
    }
}