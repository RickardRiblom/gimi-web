/**
 * Created by amitava on 23/02/17.
 */
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import DocumentTitle from 'react-document-title'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

@injectIntl
export default class About extends React.Component {
  render () {
    const {lang} = this.props
    const title = this.props.intl.formatMessage({id: 'title.about'})

    return (
      <DocumentTitle title={title}>
        <div className='page-template page-template-page-about'>
          <Header lang={lang} />
          <main>
            <section className='hero-bg' style={{backgroundImage: 'url(/assets/uploads/2015/10/Veckopengen_Barn_styrelse_MORK-1600x766.jpg)'}}>
              <div className='row'>
                <div className='medium-8 large-6 medium-push-2 large-push-3 columns'>
                  <h2 className='fadeInRight wow'>
                      <FormattedMessage id='about.header' />
                    </h2>

                  <div className='fadeInRight wow'><p>
                      <strong>
                          <FormattedMessage id='about.subtitle' />
                        </strong></p>
                    </div>
                </div>
              </div>
            </section>
            <section className='about-us'>
              <div className='row'>
                <div className='medium-12 columns'>
                  <div className='about-us__content'>
                      <h2 className='fadeInLeft wow'>
                          <FormattedMessage id='about.section1.header' />
                        </h2>

                      <div className='content fadeInLeft wow'>
                          <div>
                            <FormattedMessage tagName='strong' id='about.section1.block1' />
                          </div>
                          <br />
                          <FormattedMessage tagName='p' id='about.section1.block2' />
                          <FormattedMessage tagName='p' id='about.section1.block3' />
                          <p><FormattedMessage tagName='em' id='about.section1.footer' /></p>
                        </div>
                    </div>
                </div>
              </div>
            </section>
            <div className='feature__delimiter short-delimiter' />
            <section className='child-council collection'>
              <div className='row'>
                <div className='medium-12 columns fadeInLeft wow'>
                  <FormattedMessage tagName='h2' id='about.section2.header' />
                </div>

                <div className='child-council__description medium-12 columns fadeInLeft wow'>
                  <FormattedMessage id='about.section2.content' />
                </div>

                <div className='medium-12 columns fadeInLeft wow'>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Amanda_12ar.jpg' alt='' />

                      <div><span
                          className='blue'>Amanda</span>, 12 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Axel_12ar.jpg' alt='' />

                      <div><span
                          className='blue'>Axel</span>, 12 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Calle_8ar.jpg' alt='' />

                      <div><span
                          className='blue'>Calle</span>, 8 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Caroline_8ar.jpg' alt='' />

                      <div><span
                          className='blue'>Caroline</span>, 8 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Felix_12ar.jpg' alt='' />

                      <div><span
                          className='blue'>Felix</span>, 12 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Gabriel_15ar.jpg' alt='' />

                      <div><span
                          className='blue'>Gabriel</span>, 15 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Irma-li_12ar.jpg' alt='' />

                      <div><span
                          className='blue'>Irma-li</span>, 12 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Noel_12ar.jpg' alt='' />

                      <div><span
                          className='blue'>Noel</span>, 12 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Theodor_10ar.jpg' alt='' />

                      <div><span
                          className='blue'>Theodor</span>, 10 <FormattedMessage id='years' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Wilhelmina_8ar.jpg' alt='' />

                      <div><span
                          className='blue'>Vilhelmina</span>, 8 <FormattedMessage id='years' />
                        </div>
                    </div>
                </div>
              </div>
            </section>
            <section className='board collection'>
              <div className='row'>
                <div className='medium-12 columns fadeInLeft wow'>
                  <FormattedMessage tagName='h2' id='about.section3.header' />
                </div>
                <div className='medium-12 columns fadeInLeft wow'>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Patrik_Parnfors-Styrelseordforande.jpg' alt='' />

                      <div>
                          <span className='blue'>Patrik Parnfors</span>
                          <br />
                          <FormattedMessage id='about.section3.patrik' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/MATILDA.jpg' alt='' />

                      <div>
                          <span className='blue'>Matilda Hannäs</span>
                          <br />
                          <FormattedMessage id='about.section3.matilda' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Stefan_-Persson1.jpg' alt='' />

                      <div>
                          <span className='blue'>Stefan Persson</span>
                          <br />
                          <FormattedMessage id='about.section3.stefan' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/NY-SALEN.jpg' alt='' />

                      <div>
                          <span className='blue'>Oscar Salén</span>
                          <br />
                          <FormattedMessage id='about.section3.oscar' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Stefan_Arenbalk.jpg' alt='' />

                      <div>
                          <span className='blue'>Stefan Arenbalk</span>
                          <br />
                          <FormattedMessage id='about.section3.arenbalk' />
                        </div>
                    </div>
                </div>
              </div>
            </section>
            <section className='employee collection'>
              <div className='row'>
                <div className='medium-12 columns fadeInLeft wow'>
                  <FormattedMessage id='about.section4.header' tagName='h2' />
                </div>
                <div className='medium-12 columns fadeInLeft wow'>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/PHILIP.jpg' alt='' />

                      <div>
                          <span className='blue'>Philip Haglund</span>
                          <br />
                          <FormattedMessage id='about.section4.philip' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Caj-Westlund.jpg' alt='' />

                      <div>
                          <span className='blue'>Caj Westlund</span>
                          <br />
                          <FormattedMessage id='about.section4.caj' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Anders.jpg' alt='' />

                      <div>
                          <span className='blue'>Anders Bäck</span>
                          <br />
                          <FormattedMessage id='about.section4.anders' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Niclas.jpg' alt='' />

                      <div>
                          <span className='blue'>Niclas Blomqvist</span>
                          <br />
                          <FormattedMessage id='about.section4.nic' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/Martin1.jpg' alt='' />

                      <div>
                          <span className='blue'>Martin Agnälv</span>
                          <br />
                          <FormattedMessage id='about.section4.martin' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/ANDY1.jpg' alt='' />

                      <div>
                          <span className='blue'>Andy Sun</span>
                          <br />
                          <FormattedMessage id='about.section4.andy' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/FRIDA.jpg' alt='' />

                      <div>
                          <span className='blue'>Frida Berggren</span>
                          <br />
                          <FormattedMessage id='about.section4.frida' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/JOAKIM.jpg' alt='' />

                      <div>
                          <span className='blue'>Joakim Bäck</span>
                          <br />
                          <FormattedMessage id='about.section4.joa' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns'>
                      <img src='/assets/uploads/2015/10/MATHIAS.jpg' alt='' />

                      <div>
                          <span className='blue'>Mathias Eriksson</span>
                          <br />
                          <FormattedMessage id='about.section4.mat' />
                        </div>
                    </div>
                  <div className='flow medium-3 columns apply fadeInLeft wow'>
                      <a href='mailto:philip@veckopengen.se'>
                          <FormattedMessage id='about.section4.join' />
                        </a>
                    </div>
                </div>
              </div>
            </section>
            <div className='feature__delimiter short-delimiter' />
            <section className='diggar-barncancer-fonden'>
              <img className='diggar fadeInLeft wow' src='/assets/uploads/2015/10/diggar.png' />
              <div className='row'>
                <div className='medium-12 columns fadeInLeft wow'>
                  <p className='end_test'>
                      <FormattedMessage id='about.section5' />
                    </p>
                </div>
              </div>
            </section>
          </main>
          <Footer lang={lang} />
        </div>
      </DocumentTitle>
    )
  }
}
