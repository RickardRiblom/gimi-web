/**
 * Created by amitava on 23/02/17.
 */
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <section className="hero-bg" style={{backgroundImage: 'url(/assets/uploads/2015/10/Veckopengen_Barn_styrelse_MORK-1600x766.jpg)'}}>
                        <div className="row">
                            <div className="medium-8 large-6 medium-push-2 large-push-3 columns">
                                <h2 className="fadeInRight wow">Det här är family business! </h2>

                                <div className="fadeInRight wow"><p><strong>Vi gör en app för alla barn och föräldrar som vill att det ska vara roligt och lärorikt att hantera pengar. </strong></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-us">
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="about-us__content">
                                    <h2 className="fadeInLeft wow">Låt veckopengen leva vidare!</h2>

                                    <div className="content fadeInLeft wow">
                                        <p><strong>Jag växte upp med mina föräldrar och fem syskon på 90-talet. Jag hade 200 meter till kiosken, en cykel med 21 växlar och tolv stycken spaghettikulor. Jag var åtta år och kung varje lördag då jag fick en guldtia i veckopeng. Guldtian låg inte bara härligt i min hand, i kiosken kunde jag byta den mot en piggelin och fortfarande ha sex kronor att lägga i spargrisen. Man kan säga att jag hade superkrafter.</strong></p>
                                        <p>Jag var ganska bra på att tjata på den tiden. Även om jag pekade och ”ville ha” fick jag oftast spara eller hålla mig till julafton. När jag hade sparat en tid slog jag oftast till med något stort som spelkulor eller hockeykort till min pärm. Länge hoppades jag på att få Mario Lemieux, en center i Pittsburgh Penguins. När han en dag låg i paketet tjöt jag av glädje. Mamma bad mig springa två varv runt huset för att jag skulle lugna ned mig lite. Man kan säga att jag var energisk. Och även om jag nu slutat springa varv runt huset blir jag än idag glad då jag tänker på hur Mario ligger inramad i hockeypärmen på vinden.</p>
                                        <p>Jag saknar min barndom. Jag saknar Björnes magasin, att palla äpplen och att gå till kiosken på lördagar. Och på något sätt har den saknaden gjort att jag skapat Veckopengen. För idag är det annorlunda. Idag får många barn inte vara kungar för en dag eller någon veckopeng på lördagar. Visst, piggelinen kostar inte längre fyra kronor och kiosken runt hörnet kanske har klappat igen. Saker och ting har förändrats. Men! Jag tror vi kan skapa nya sätt för guldtior, veckopengar och spargrisar att leva vidare i den digitala världen. Så att också dagens barn får känna att lördagar är världens bästa dag.</p>
                                        <p><em>Philip Haglund, Grundare av Veckopengen</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="feature__delimiter short-delimiter"></div>
                    <section className="child-council collection">
                        <div className="row">
                            <div className="medium-12 columns fadeInLeft wow">
                                <h2>Barnrådet</h2>
                            </div>

                            <div className="child-council__description medium-12 columns fadeInLeft wow">
                                Hos oss på Veckopengen står barnen i centrum. Inte bara i användningen, utan också i skapandet. Barnrådet är
                                vår samling unga experter som diskuterar, utvärderar, och sprutar ut ideér för att Veckopengen ska bli så
                                bra som möjligt. Vill du komma i kontakt med Barnrådet får du gärna maila till dem på
                                barnradet@veckopengen.se.
                            </div>

                            <div className="medium-12 columns fadeInLeft wow">
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Amanda_12ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Amanda</span>, 12 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Axel_12ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Axel</span>, 12 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Calle_8ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Calle</span>, 8 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Caroline_8ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Caroline</span>, 8 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Felix_12ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Felix</span>, 12 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Gabriel_15ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Gabriel</span>, 15 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Irma-li_12ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Irma-li</span>, 12 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Noel_12ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Noel</span>, 12 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Theodor_10ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Theodor</span>, 10 år
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Wilhelmina_8ar.jpg" alt=""/>

                                    <div><span
                                        className="blue">Vilhelmina</span>, 8 år
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="board collection">
                        <div className="row">
                            <div className="medium-12 columns fadeInLeft wow">
                                <h2>Styrelsen</h2>
                            </div>
                            <div className="medium-12 columns fadeInLeft wow">
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Patrik_Parnfors-Styrelseordforande.jpg" alt=""/>

                                    <div>
                                        <span className="blue">Patrik Parnfors</span>
                                        <br/>
                                        Patrik är vår egna styrelseordförande och en pådrivare som med mycket energi och många skratt gillar
                                        att utmana och förändra såväl företag och branscher till det bättre.
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/MATILDA.jpg" alt=""/>

                                    <div>
                                        <span className="blue">Matilda Hannäs</span>
                                        <br/>
                                        Matilda är en positiv kraft som har lätt för att se moderna, digitala och effektiva lösningar.
                                        Hennes skarpa analyser har gjort henne till en lysande stjärna med flera års erfarenheter av
                                        tillväxtmodeller och B2C marknadsföring.
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Stefan_-Persson1.jpg" alt=""/>

                                    <div>
                                        <span className="blue">Stefan Persson</span>
                                        <br/>
                                        Stefan vet hur man skapar digitala verktyg med fokus på användarna. Han har en förkärlek för ny typ
                                        av kommunikation och att alltid sätta familjen i första rummet.
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/NY-SALEN.jpg" alt=""/>

                                    <div>
                                        <span className="blue">Oscar Salén</span>
                                        <br/>
                                        Oscar har en tydlig ådra av entreprenörskap med engagemang i flera branscher och en släkt som under
                                        generationer varit med och tagit svensk skepparindustri till nya nivåer.
                                    </div>
                                </div>
                                <div className="flow medium-3 columns">
                                    <img src="/assets/uploads/2015/10/Stefan_Arenbalk.jpg" alt=""/>

                                    <div>
                                        <span className="blue">Stefan Arenbalk</span>
                                        <br/>
                                        Stefan är en entreprenör och investerare som älskar att få både siffror och användarlösningar att
                                        hamna i harmoni.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer/>
            </div>
        )
    }
}