/**
 * Created by amitava on 23/02/17.
 */
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Training extends React.Component {
    render() {
        return (
            <main>
                <Header/>

                <section className="tips">
                    <div className="row">
                        <div className="medium-10 large-8 medium-offset-1 large-offset-2 columns">
                            <div className="tips__heading fadeInDown wow">
                                <h2>Ekonomisk träning för
                                    <br/>
                                    framtidens superföräldrar.
                                </h2>

                                <p>Här ger vi dig som är förälder tips på hur du kan ge dina barn en bättre förståelse
                                    för pengar
                                    och mer än bara en veckopeng.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="quick-tips fadeInUp wow">
                        <h3></h3>

                        <div className="owl-carousel quick-tips__carousel">
                            <div className="item row">
                                <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                    <div className="tips__tip">
                                        <div className="tips__tip-headline">
                                            <div className="tips__list-circle">1</div>
                                            <p>Prata pengar!</p>
                                        </div>

                                        <p>Barn pekar och vill ha. Genom att betala åt barnen får de inte en uppfattning
                                            om var pengar
                                            kommer ifrån eller vad som krävs för att spara ihop till något värdefullt.
                                            Se till att
                                            diskutera vad dina barn ska få och vad de ska betala för själva. Det är
                                            först när det finns
                                            en idé om hur pengar kan användas som de får ett riktigt värde.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item row">
                                <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                    <div className="tips__tip">
                                        <div className="tips__tip-headline">
                                            <div className="tips__list-circle">2</div>
                                            <p>Använd mobilen!</p>
                                        </div>

                                        <p>Använd ett betalkort eller pengar i telefonen. Då lär sig barnen om digitala
                                            pengar och att
                                            de ofta förekommer som siffror på en skärm. Det är så pengar kommer att
                                            användas i framtiden
                                            och därför ett bra sätt att förbereda sina barn för vuxenlivet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item row">
                                <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                    <div className="tips__tip">
                                        <div className="tips__tip-headline">
                                            <div className="tips__list-circle">3</div>
                                            <p>Börja tidigt!</p>
                                        </div>

                                        <p>I tidig ålder är det som lättast att lära ut ett bra förhållningssätt till
                                            pengar. Men du kan
                                            lika gärna använda en annan belöning än just pengar, det kan vara
                                            lördagsgodis i utbyte mot
                                            en veckas ordentlig tandborstning. Försök att belöna positiva beteenden, de
                                            är dem du vill
                                            se mer av!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row navigation">
                            <div className="small-1 columns">
                                <a className="quick-tips-prev">
                                    <img
                                        src="/assets/images/arrow-left.png" alt="Prev"/>
                                </a>
                            </div>
                            <div className="small-1 columns small-offset-10">
                                <a className="quick-tips-next">
                                    <img
                                        src="/assets/images/arrow-right.png" alt="Next"/>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>

                <section id="tips-tabs" className="tips-tabs">
                    <div className="row tips-tabs__tab-wrapper">
                        <a className="medium-4 columns tips-tabs__tab tips-tabs__tab--active">
                            <div className="fadeInGrow wow">
                                <p>
                                    <img className="wallet-tab-icon"
                                         src="/assets/images/training.png"
                                         alt=""/>
                                    Ekonomiskt träning
                                </p>
                            </div>
                        </a>
                        <a className="medium-4 columns tips-tabs__tab">
                            <div className="fadeInGrow wow">
                                <p>
                                    <img className="pig-tab-icon"
                                         src="/assets/images/phone.png"
                                         alt=""/>
                                    Digitala hjälpmedel
                                </p>
                            </div>
                        </a>
                        <a className="medium-4 columns tips-tabs__tab">
                            <div className="fadeInGrow wow">
                                <p>
                                    <img className="tasks-tab-icon"
                                         src="/assets/images/tasks-tab-icon.png"
                                         alt=""/>
                                    Övning och lärande
                                </p>
                            </div>
                        </a>
                    </div>
                </section>

                <section id="tips-tab-content-1" className="tips-tab-content tips-tab-content-1">
                    <div className="row medium-collapse">
                        <div className="medium-7 columns fadeInLeft wow">
                            <div className="tips-tab-content__content">
                                <blockquote>Det handlar inte om mängden pengar, utan om förhållandet till dem.
                                </blockquote>
                                <p>
                                    <b>Introducera och agera bollplank</b>
                                    <br/>
                                    De flesta barn får sin första veckopeng mellan 7-10 år och då uppgår den oftast till
                                    20 kr. I
                                    takt med att barnet mognar och blir äldre kan du öka veckopengen och slutligen
                                    ansvaret genom
                                    att gå över till månadspeng. Tänk på att du inte bara ska ge ut pengar, utan snarare
                                    diskutera
                                    med ditt barn om de är nöjda med sina val och hur de har valt att använda sina
                                    pengar.
                                </p>
                                <p>
                                    <strong>Middagsbordet är inte fel</strong>
                                    <br/>
                                    Att prata om pengar vid middagsbordet är inte fel. Pengar ska vara kul och inte
                                    ångestdrabbat
                                    eller på tals då de är slut eller barnet vill köpa något. Många gräl mellan
                                    föräldrar och barn
                                    handlar just om pengar, därför ska man prata om det ofta och inte bara när det
                                    kniper i
                                    plånboken. Ett bra tillfälle är då du ger ut vecko- eller månadspengarna till
                                    barnet.
                                </p>
                                <p>
                                    <strong>Förhandla med dina barn
                                        <br/>
                                    </strong>
                                    Förhandla med ditt barn om vad pengarna ska räcka till och kom överens. En lagom
                                    nivå på
                                    veckopengen är då de har råd att köpa det som de behöver och samtidigt ha lite
                                    pengar kvar till
                                    att spara. Om ditt barn säger att andra har mer i veckopeng kan du förklara varför
                                    de har
                                    mindre, det är viktigt att du förklarar att alla människor inte har lika mycket
                                    pengar.
                                </p>
                                <p>
                                    <b>Säg nej när pengarna är slut</b>
                                    <br/>
                                    Genom att vara överens om en vecko- eller månadspeng kan dina barn själva ta ansvar
                                    för vad de
                                    vill handla eller spara till. De kan på så sätt vänta sig att få pengar vid vissa
                                    tillfällen och
                                    på så sätt disponera sina pengar och ta ansvar för vad de vill köpa. Och om pengarna
                                    är slut, ja
                                    då är de slut och barnet får vänta till nästa veckopeng.
                                </p>
                                <p>
                                    <strong>Låt dina barn köpa fel saker</strong>
                                    <br/>
                                    Små barn köper godis för den största delen av sina veckopengar. För pojkar är TV-
                                    och dataspel
                                    mer vanligt och för tjejer är det smink och kläder. Även om du som förälder inte
                                    gillar något
                                    som dina barn vill köpa är det viktigt att de får bestämma själva över sin
                                    veckopeng. De måste
                                    få lära sig att göra val och att göra fel val. Det egna valet är hela idén och om vi
                                    tar bort
                                    det hindrar vi också våra barn från att tänka, lära och prova sig fram.
                                </p>
                            </div>
                        </div>
                        <div className="medium-5 columns">
                            <aside className="tips-tab-content__box fadeInRight wow">
                                <div className="tips-tab-content__profile">
                                    <div className="row">
                                        <div className="large-2 columns no-padding">
                                            <img className="tips-tab-content__avatar"
                                                 src="/assets/uploads/2015/10/emma34.png"/>
                                        </div>

                                        <div className="large-10 columns">
                                            <p>
                                                <strong>Emma Persson</strong>
                                            </p>
                                            <p className="profession">Ekonom</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Emma Persson är f.d. privatekonom för unga på Nordea Bank. Hon har länge lärt ut
                                    kunskap inom
                                    pengar och ekonomi för hela familjen.
                                </p>
                                <p>
                                    <strong style={{lineHeight: 1.5}}>Emmas tips</strong>
                                </p>
                                <ul>
                                    <li>Veckopengen kan bli en grund till att prata om drömmar, sparande och
                                        möjligheter. Missa inte
                                        den.
                                    </li>
                                    <li>Dra av på veckopengen när du betalar åt barnet, då blir det en tydlig gräns
                                        mellan dina och
                                        dina barns pengar.
                                    </li>
                                </ul>
                            </aside>

                            <div className="tips-tab-content__bubbles">
                                <div
                                    className="tips-tab-content__bubble wow">
                    <span
                        className="text">I Sverige får två av tre barn en vecko- eller månadspeng av sina föräldrar.
                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="tips-tab-content-2" className="tips-tab-content tips-tab-content-2">
                    <div className="row medium-collapse">
                        <div className="medium-7 columns fadeInLeft wow">
                            <div className="tips-tab-content__content">
                                <blockquote>Appar och digitala hjälpmedel är bra för barnets inlärning.</blockquote>
                                <p>
                                    <strong>Lärande som inte är skadligt
                                        <br/>
                                    </strong>
                                    Det finns ingen forskning som visar att det skulle vara skadligt för barn, stora som små,
                                    att använda en surfplatta eller mobil. Att surfplattan eller mobilen ska sända ut skadlig
                                    strålning eller göra att ett barn på något sätt får sämre inlärning är bara en myt. Det finns
                                    däremot en risk då vi låter bli att lära våra barn om digitala tjänster och plattfomar, via
                                    mobiler och läsplattor, vilket leder till barnen inte lär sig den teknik som resten av samhället
                                    har anammat.
                                </p>
                                <p>
                                    <strong>Ge utrymme för ny form av lärande
                                        <br/>
                                    </strong>
                                    Som föräldrar är vi ofta känslostyrda och vi människor har överlag svårt att relatera till
                                    nya saker i samhället. Att använda digitala verktyg till barnen för att underlätta vardagen ses
                                    av många som skamligt. På samma sätt som vi har skepsis mot mobiler och surfplattor har vi
                                    bemött boken och tv:n när de var nya i samhället. Men låt inte dina egna ideal av barndomen
                                    styra.
                                </p>
                                <p>
                                    <strong>Pengar i mobilen
                                        <br/>
                                    </strong>
                                    Mobilen<strong></strong>är för vuxna det vanligaste sättet att hålla koll på pengarna. Så
                                    bör det även vara för barnen. Idag har de flesta barn en egen mobil och de har en bra förståelse
                                    för hur den används. Därför är det bara bra att de också kan hantera sina pengar i telefonen.
                                    Använd appar som är förståeliga för barn för att förklara pengars värde och symboliken med att
                                    spara och slösa.
                                </p>
                                <p>
                                    <strong>Digitala köp är också köp</strong>
                                    <br/>
                                    Det är svårare för barn att förstå att köp i mobilen eller på nätet också kostar pengar.
                                    Eftersom de inte får något i handen som de kan ta eller känna på är det viktigt att du som
                                    förälder upplyser om att digitala köp i telefonen också kostar riktiga pengar. En av tio
                                    ungdomar uppger nämligen att de har köpt något som de först trodde var gratis och varannan har
                                    handlat något på nätet de senaste tre månaderna.
                                </p>
                                <p>
                                    <strong>Låt det digitala främja kreativiteten</strong>
                                    <br/>
                                    En annan myt är den om att mobiler och surfplattor hämmar kreativiteten hos barn, jämfört med
                                    t.ex. Lego. Men om man tittar på ett paket Lego, så står det ju precis vad man ska bygga, jämför
                                    det med Minecraft t.ex, där finns inga gränser till vad man kan skapa och bygga med oändligt
                                    antal ”lego-bitar”. Nästa generations digitala plattformar kommer utan tvekan att överväga den
                                    fysiska världens begränsningar vad det gäller kreativitet.
                                </p>
                            </div>
                        </div>
                        <div className="medium-5 columns">
                            <aside className="tips-tab-content__box fadeInRight wow">
                                <div className="tips-tab-content__profile">
                                    <div className="row">
                                        <div className="large-2 columns no-padding">
                                            <img className="tips-tab-content__avatar"
                                                 src="/assets/uploads/2015/10/bodil-ny1.png"
                                                 alt=""/>
                                        </div>

                                        <div className="large-10 columns">
                                            <p>
                                                <strong>Bodil Hallin</strong>
                                            </p>
                                            <p className="profession">Budgetrådgivare</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Bodil har länge arbetat med familjens ekonomi och hur man på nya sätt och med nya verktyg kan
                                    förbättra barnens lärande kring pengar.
                                </p>
                                <p>
                                    <strong>Bodils tips</strong>
                                </p>
                                <ul>
                                    <li>Använd digitala hjälpmedel för att lära barn om pengar.</li>
                                    <li>Ladda ner spel som pedagogiskt låter barn hantera pengar i en fiktiv värld.</li>
                                    <li>Upplys dina barn om att köp som appar, musik eller spel på nätet kostar pengar.</li>
                                </ul>
                            </aside>

                            <div className="tips-tab-content__bubbles">
                                <div
                                    className="tips-tab-content__bubble wow">
                    <span
                        className="text">84% av alla barn i Sverige i åldern 5-8 har tillgång till en surfplatta.
                    </span>
                                </div>
                                <div
                                    className="tips-tab-content__bubble wow">
                    <span
                        className="text">Av våra ungdomar har varannan handlat något på nätet de senaste tre månaderna.
                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="tips-tab-content-3" className="tips-tab-content tips-tab-content-3">
                    <div className="row medium-collapse">
                        <div className="medium-7 columns fadeInLeft wow">
                            <div className="tips-tab-content__content">
                                <blockquote>Om man saknar pengar är det inte bara att gå till automaten.</blockquote>
                                <p>
                                    <strong>Förbered dina barn för vuxenlivet
                                        <br/>
                                    </strong>
                                    Precis som det går att träna på matematik, balanssinne och fotboll går det att lära sig att
                                    vara ekonomisk. Ett bra sätt att lära barnen om ekonomi är att ge dem viss frihet att
                                    ifrågasätta och tänka själva. Om vi under barnens uppväxt låter dem göra egna val kommer de att
                                    göra både drömaffärer och dåliga köp. Även de dålig valen leder till lärande och att barnen
                                    nästa gång ändrar sitt beteende. Ge dina barn viss frihet att välja själva.
                                </p>
                                <p>
                                    <strong>Ge möjlighet till en extra slant
                                        <br/>
                                    </strong>
                                    Att ge sina barn uppgifter i hemmet eller skolan är ett bra sätt att låta barnen förstå att
                                    pengar ofta kräver en motprestation. När barn tjänar egna pengar får de en större förståelse för
                                    att pengarna har ett värde och en större känsla av att pengarna är deras. Dessutom kan det vara
                                    bra för känslan av familjär gemenskap i hemmet att alla hjälper till. Dock så bör inte barnet få
                                    pengar för allt, då får de uppfattningen att man får betalt så fort man gör något.
                                </p>
                                <p>
                                    <strong>Lek och lär
                                        <br/>
                                    </strong>
                                    Att leka med pengar och spela spel som Monopol är ett bra sätt att introducera nya begrepp
                                    och skapa en förståelse för intäkter och utgifter. När dina barn leker affär hemma, har de kul
                                    samtidigt som de får inblick i begrepp som pengar och handel. Har du äldre barn kan ni börja
                                    ”investera” i riktiga eller fiktiva företag och låta det bli en lek där ni jämför med den
                                    riktiga marknaden och tävlar om vem som lyckats satsa i rätt företag!
                                </p>
                                <p>
                                    <strong>Ge ut sparbonus
                                        <br/>
                                    </strong>
                                    Genom att ge barnen en sparränta ökar du möjligheten för att de ska vilja spara sina
                                    pengar. Att spara är viktigt och om barn förstår att det ofta krävs tid för att ha råd med
                                    någonting dyrt har man kommit långt. Låt barnen sätta upp sparmål och låt dem förstå att pengar
                                    som sparas växer med tiden. Det är en realistisk bil av hur vår värld ser ut idag.
                                </p>
                                <p>
                                    <strong>När pengarna tar slut
                                        <br/>
                                    </strong>
                                    Om pengarna inte räcker till det barnet önskar bör ni ha ett snack kring varför, om det är
                                    så att ditt barn får för lite pengar eller om han eller hon spenderar pengarna alldeles för
                                    lätt. Oförutsedda utgifter är en sak, men om du lär barnet att de alltid kan ta ut mer pengar
                                    kommer barnet inte förstå att pengars värde.
                                </p>
                            </div>
                        </div>
                        <div className="medium-5 columns">
                            <aside className="tips-tab-content__box fadeInRight wow">
                                <div className="tips-tab-content__profile">
                                    <div className="row">
                                        <div className="large-2 columns no-padding">
                                            <img className="tips-tab-content__avatar"
                                                 src="/assets/uploads/2015/10/liv.png"
                                                 alt=""/>
                                        </div>

                                        <div className="large-10 columns">
                                            <p>
                                                <strong>Liv Svirsky</strong>
                                            </p>
                                            <p className="profession">Leg. psykolog och leg. psykoterapeut</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Liv har lång erfarenhet av att arbeta med barn, ungdomar och familjer och hon har gett ut flera
                                    böcker i ämnet för att hjälpa familjer runt om i landet.
                                </p>
                                <p>
                                    <strong>Livs tips</strong>
                                </p>
                                <ul>
                                    <li>Låt barnen skapa en affär i hemmet för att förstå sig på handel.</li>
                                    <li>Att lära sig konsekvenser av sina beteenden är lärorikt för alla barn och Veckpengen kan
                                        hjälpa till med det.
                                    </li>
                                </ul>
                            </aside>

                            <div className="tips-tab-content__bubbles">
                                <div
                                    className="tips-tab-content__bubble wow">
                    <span
                        className="text">Tänk på att det bästa sättet att påverka barns beteende är att uppmuntra det
                        man vill se mer av.
                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="employee collection">
                    <div className="row">
                        <div className="medium-12 columns fadeInLeft wow">
                            <h2>Teamet</h2>
                        </div>
                        <div className="medium-12 columns fadeInLeft wow">
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/PHILIP.jpg" alt=""/>

                                <div>
                                    <span className="blue">Philip Haglund</span>
                                    <br/>
                                    Philip är en visionär som genom åren samlat på sig såväl högskolepoäng som gula kort på
                                    fotbollsplanen. På Veckopengen jobbar han för att teamet och produkten ska gå hand i hand.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/Caj-Westlund.jpg" alt=""/>

                                <div>
                                    <span className="blue">Caj Westlund</span>
                                    <br/>
                                    Caj är en social nytänkare som gärna är i naturen eller tar ett samtal om segling. Med Veckopengen
                                    hoppas Caj kunna ge barn och ungdomar en röst i vuxenvärlden.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/Anders.jpg" alt=""/>

                                <div>
                                    <span className="blue">Anders Bäck</span>
                                    <br/>
                                    Anders är en tuggummi-älskande kodare som förutom tidiga morgnar gillar saker som går fort och
                                    effektivt. När han tar rast kan du se honom träna sin långa forehand vid pingisbordet.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/Niclas.jpg" alt=""/>

                                <div>
                                    <span className="blue">Niclas Blomqvist</span>
                                    <br/>
                                    Niclas är en av medgrundarna på Veckopengen och en entreprenör som med stort driv och envishet tar
                                    såväl samarbeten som nya idéer hela vägen från skissbordet till lansering.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/Martin1.jpg" alt=""/>

                                <div>
                                    <span className="blue">Martin Agnälv</span>
                                    <br/>
                                    Martin är en stilmedveten motorcyklist som gillar när kod blir till en kul och vacker upplevelse för
                                    användaren. Och ja, Martin är väldigt glad över att för tillfället inneha företagets största
                                    bildskärm.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/ANDY1.jpg" alt=""/>

                                <div>
                                    <span className="blue">Andy Sun</span>
                                    <br/>
                                    Andy är vår nya superstjärna bakom tangentbordet. Han är uppväxt med databaser som kvällsläsning och
                                    ett förhållningssätt till java-kod som gör att han ibland dagdrömmer fram vår nya strukturer på
                                    Veckopengen.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/FRIDA.jpg" alt=""/>

                                <div>
                                    <span className="blue">Frida Berggren</span>
                                    <br/>
                                    Som världens första Kids and Family Manager har Frida som jobb att hjälpa familjerna i Veckopengen
                                    och att göra appen mer pedagogisk. Hon är civilingenjör från KTH och utbildad lärare!
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/JOAKIM.jpg" alt=""/>

                                <div>
                                    <span className="blue">Joakim Bäck</span>
                                    <br/>
                                    När Joakim inte sjunger hårdrock med sina kompisar så pluggar han datateknik på KTH, på Veckopengen
                                    så chefar Joakim över alla tester som görs i appen.
                                </div>
                            </div>
                            <div className="flow medium-3 columns">
                                <img src="/assets/uploads/2015/10/MATHIAS.jpg" alt=""/>

                                <div>
                                    <span className="blue">Mathias Eriksson</span>
                                    <br/>
                                    Mathias är en modern kreatör som uttrycker sig i kod, med en gitarr eller på en skateboard, på
                                    Veckopengen så jobbar han med front end.
                                </div>
                            </div>
                            <div className="flow medium-3 columns apply fadeInLeft wow">
                                <a href="mailto:philip@veckopengen.se">
                                    Vill du joina vårat team?
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="feature__delimiter short-delimiter"></div>
                <section className="diggar-barncancer-fonden">
                    <img className="diggar fadeInLeft wow" src="/assets/uploads/2015/10/diggar.png" alt=""/>
                    <div className="row">
                        <div className="medium-12 columns fadeInLeft wow">
                            <p className="end_test">Att hjälpa barn och ungdomar är ett arbete som vi tar på största allvar. Därför försöker vi inte bara utbilda unga i hanterandet av pengar. Varje månad bidrar vi med pengar till Barncancerfonden för att hjälpa dem i deras viktiga arbete i kampen mot cancer.<br />
                            </p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        )
    }
}