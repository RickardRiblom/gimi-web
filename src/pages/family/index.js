/**
 * Created by amitava on 23/02/17.
 */
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Family extends React.Component {
    render() {
        return (
            <main>
                <Header/>

                <section className="why">
                    <div className="why-veckopengen">
                        <div className="row">
                            <div className="medium-7 columns fadeInLeft wow">
                                <div className="why-veckopengen__content">
                                    <h2>Familjerna i Veckopengen</h2>

                                    <p>… håller just nu på att bli självlärda superhjältar i ekonomi. De sparar, delar uppgifter och
                                        håller enkelt koll på sina vecko- och månadspengar. Här kan du följa deras resa mot att bättre
                                        kunna hantera pengar inom familjen!
                                    </p>
                                </div>
                            </div>

                            <div className="medium-5 columns fadeInRight wow">
                                <div className="why-veckopengen__image">
                                    <img src="/assets/images/veckopengen-children.png"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="why-timeline fadeInUp wow">
                        <div className="owl-carousel why-timeline__carousel">
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/5.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">
                                        <p className="number">20 kr</p>
                                        <p>Genomsnittlig veckopeng</p>
                                        <p className="number">Diska efter maten</p>
                                        <p>Vanligaste uppgiften</p>
                                        <p className="number">Biobesök</p>
                                        <p>Populäraste sparmålet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/7.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">
                                        <p className="number">26 kr</p>
                                        <p>Genomsnittlig veckopeng</p>
                                        <p className="number">
                                            <span style={{lineHeight: 1.5}}>Städa rummet</span>
                                        </p>
                                        <p>Vanligaste uppgiften</p>
                                        <p className="number">Lego</p>
                                        <p>Populäraste sparmålet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/9.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">

                                        <p className="number">33 kr</p>
                                        <p>Genomsnittlig veckopeng</p>
                                        <p className="number">
                                            <span style={{lineHeight: 1.5}}>Bädda sängen</span>
                                        </p>
                                        <p>Vanligaste uppgiften</p>
                                        <p className="number">Mobiltelefon</p>
                                        <p className="number">Populäraste sparmålet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/11.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">
                                        <p className="number">48 kr</p>
                                        <p>Genomsnittlig veckopeng</p>
                                        <p>Bära ut soporna</p>
                                        <p>Vanligaste uppgiften</p>
                                        <p className="number">Airboard</p>
                                        <p>Populäraste sparmålet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/13.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">
                                        <p className="number">490 kr</p>
                                        <p>Genomsnittlig månadspeng</p>
                                        <p className="number">Hjälpa med tvätten</p>
                                        <p>Vanligaste uppgiften</p>
                                        <p className="number">Dataspel</p>
                                        <p>Populäraste sparmålet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="row item">
                                <div className="medium-6 columns">
                                    <div className="why-timeline__image">
                                        <img src="/assets/uploads/2015/10/15.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="why-timeline__content">
                                        <p className="number">690 kr</p>
                                        <p>Genomsnittlig månadspeng</p>
                                        <p>Klara läxor</p>
                                        <p>Vanligaste uppgiften</p>
                                        <p>Drönare</p>
                                        <p>Populäraste sparmålet</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="why-timeline__timeline">

                                    <div className="timeline-bar">
                                        <div className="timeline-point point-1">
                                            <div className="timeline-point__content">
                                                5-6 år
                                            </div>
                                        </div>

                                        <div className="timeline-point point-2">
                                            <div className="timeline-point__content">
                                                7-8 år
                                            </div>
                                        </div>

                                        <div className="timeline-point point-3">
                                            <div className="timeline-point__content">
                                                9-10 år
                                            </div>
                                        </div>

                                        <div className="timeline-point point-4">
                                            <div className="timeline-point__content">
                                                11-12 år
                                            </div>
                                        </div>

                                        <div className="timeline-point point-5">
                                            <div className="timeline-point__content">
                                                13-14 år
                                            </div>
                                        </div>


                                        <div className="timeline-point point-6">
                                            <div className="timeline-point__content">
                                                15-16 år
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row navigation">
                            <div className="small-1 columns">
                                <a className="timeline-prev">
                                    <img
                                        src="/assets/images/arrow-left.png" alt="Prev"/>
                                </a>
                            </div>
                            <div className="small-1 columns small-offset-10">
                                <a className="timeline-next">
                                    <img
                                        src="/assets/images/arrow-right.png" alt="Next"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="saved-money">

                    <div className="saved-money-counter fadeInUp wow">

                        <div className="row">
                            <div className="counter"></div>
                        </div>


                        <div className="row">
                            <div className="medium-8 medium-push-2 columns">
                                <div className="saved-money-counter__content">

                                    <h2>kronor har sparats av barn genom Veckopengen</h2>
                                    <p>Det motsvarar</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="saved-money-goals fadeInUp wow">
                        <div className="row">
                            <div className="medium-4 columns">
                                <div className="saved-money-goals__goal">
                                    <img src="/assets/images/konsol.png" alt=""/>

                                    <p className="number" id="consolesNumber"></p>

                                    <p>Spelkonsoler</p>
                                </div>
                            </div>

                            <div className="medium-4 columns">
                                <div className="saved-money-goals__goal">
                                    <img src="/assets/images/funfair.png" alt=""/>

                                    <p className="number" id="funfairNumber"></p>

                                    <p>Tivoli-besök</p>
                                </div>
                            </div>

                            <div className="medium-4 columns">
                                <div className="saved-money-goals__goal">
                                    <img src="/assets/images/ball.png" alt=""/>

                                    <p className="number" id="ballsNumber"></p>

                                    <p>Fotbollar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="why-save-money">
                        <div className="row">

                            <div className="medium-8 columns">

                                <div className="why-save-money__content">
                                    <div className="fadeInLeft wow">
                                        <h2>Räntan som hjälper till 100 %</h2>
                                        <p>
                                            <p>För att barnen i Veckopengen ska lyckas nå sina sparmål kan föräldrarna sätta en ränta
                                                som får pengarna i spargrisen att växa. Det gör att allt fler barn når sina sparmål.
                                                Just nu är genomsnittsräntan:
                                                <span style={{color: '#ffff00'}}>1,5%</span>
                                            </p>
                                        </p>
                                    </div>
                                    <div className="features__appstore-badges fadeInLeft wow">
                                        <div className="features__tip">
                            <span className="features__tip-pointer">
                                <img src="/assets/images/tip-pointer.png"
                                     alt="Tip pointer"/>
                            </span>
                                            <span className="features__tip-text">Ladda ner appen här!</span>
                                        </div>

                                        <a href="#">
                                            <img className="appstore-badge"
                                                 src="/assets/images/apple-badge.png"
                                                 alt=""/>
                                        </a>

                                        <a href="#">
                                            <img className="appstore-badge"
                                                 src="/assets/images/google-badge.png"
                                                 alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div className="medium-4 columns">

                                <div className="why-save-money__progress fadeInRight wow">

                                    <div className="progress-bar-wrapper">
                        <span className="progress-bar">
                        </span>
                                    </div>

                                    <p className="progress-percent">0%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="common-tasks">
                    <div className="common-tasks__content">
                        <div className="row">
                            <div className="medium-10 medium-push-1 columns fadeInDown wow">
                                <h2>Populäraste uppgifterna</h2>
                                <p>
                                    <p>Tusentals barn utför varje dag uppgifter som bidrar till hemmen och en ökad förståelse för
                                        pengar. Bland våra användare finns det barn som har gjort däckbyten, klippt häcken, suttit
                                        barnvakt, målat garaget, nattat småsyskon, lärt sig hjula och hållit sig från att äta godis på
                                        en hel vecka.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="common-tasks-bubbles">
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">9 %</span>
                                            Bär ut soporna
                                        </div>
                                    </div>
                                </div>
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">26 %</span>
                                            Diska efter maten
                                        </div>
                                    </div>
                                </div>
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">12 %</span>
                                            Bädda sängen
                                        </div>
                                    </div>
                                </div>
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">9 %</span>
                                            Tvätta
                                        </div>
                                    </div>
                                </div>
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">16 %</span>
                                            Städa rummet
                                        </div>
                                    </div>
                                </div>
                                <div className="common-tasks-bubbles__bubble wow">
                                    <div className="common-tasks-bubbles__bubble__content">
                                        <div className="inner">
                                            <span className="percents">8 %</span>
                                            Läxor
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="economical-training">
                    <div className="economical-training__content">
                        <div className="row">

                            <div className="medium-12 columns">
                                <h2 className="fadeInLeft wow">Alla barn ska ha rätt till ekonomisk träning</h2>
                                <div className="medium-9 fadeInLeft wow">
                                    <p>Det är i hemmet som barn pratar och lär sig om pengar. Veckopengen har därför
                                        samlat tips och
                                        trix till alla föräldrar som vill ha kul med sina barn och samtidigt hjälpa dem
                                        i deras resa mot
                                        en bättre förståelse för pengar. Kika in på ekonomisk träning för att bli en
                                        superförälder!
                                    </p>
                                    <p>&nbsp;</p>
                                </div>

                                <div className="training-link__content fadeInLeft wow">
                                    <a href="/traning"
                                       className="button button-dark">Ekonomisk träning
                                    </a>
                                    <div className="features__tip">
                                        <span className="features__tip-pointer">
                                            <img src="/assets/images/tip-pointer.png" alt="Tip pointer"/>
                                        </span>
                                        <span className="features__tip-text">Bli en superförälder</span>
                                    </div>
                                </div>
                                <img className="fadeInRight wow"
                                     src="/assets/images/economical-training.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </main>
        )
    }
}