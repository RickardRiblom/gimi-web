/**
 * Created by amitava on 23/02/17.
 */
import React from 'react'
import { Link } from 'react-router'
import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl'
import DocumentTitle from 'react-document-title'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LINKS } from '../../constants'

@injectIntl
export default class Family extends React.Component {
  componentDidMount () {
    veckopengen.timeline.init()
    veckopengen.progressScroll.init()
    veckopengen.counter.init()
  }

  componentWillUnmount () {
    veckopengen.progressScroll.off()
    veckopengen.timeline.off()
    veckopengen.counter.off()
  }

  renderSlides (idx) {
    return (
      <div className='medium-6 columns'>
        <div className='why-timeline__content'>
          <p className='number'>
            <FormattedMessage id={`family.slider${idx}.amount`} />
          </p>
          <FormattedMessage tagName='p' id={`family.slider${idx}.period`} />
          <p className='number'>
            <span style={{lineHeight: 1.5}}>
              <FormattedMessage id={`family.slider${idx}.task`} />
            </span>
          </p>
          <FormattedMessage tagName='p' id='family.slider1.common' />
          <p className='number'><FormattedMessage id={`family.slider${idx}.goal`} /></p>
          <p className='number'><FormattedMessage id={`family.slider${idx}.popular`} /></p>
        </div>
      </div>
    )
  }

  renderBullets () {
    return ['5-6', '7-8', '9-10', '11-12', '13-14', '15-16'].map((i, idx) => (
      <div className={`timeline-point point-${idx + 1}`} key={idx}>
        <div className='timeline-point__content'>
          {i} <FormattedMessage id='years' />
        </div>
      </div>
        ))
  }

  render () {
    const {lang} = this.props
    const title = this.props.intl.formatMessage({id: 'title.family'})

    return (
      <DocumentTitle title={title}>
        <div className='page-template page-template-page-why'>
          <Header lang={lang} />
          <main>
            <section className='why'>
              <div className='why-veckopengen'>
                <div className='row'>
                  <div className='medium-7 columns fadeInLeft wow'>
                    <div className='why-veckopengen__content'>
                          <FormattedMessage tagName='h2' id='family.section1.header' />
                          <FormattedMessage tagName='p' id='family.section1.desc' />
                        </div>
                  </div>

                  <div className='medium-5 columns fadeInRight wow'>
                    <div className='why-veckopengen__image'>
                          <img src='/assets/images/veckopengen-children.png' />
                        </div>
                  </div>
                </div>
              </div>

              <div className='why-timeline fadeInUp wow'>
                <div className='owl-carousel why-timeline__carousel'>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/5.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(1)}
                  </div>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/7.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(2)}
                  </div>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/9.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(3)}
                  </div>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/11.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(4)}
                  </div>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/13.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(5)}
                  </div>
                  <div className='row item'>
                    <div className='medium-6 columns'>
                          <div className='why-timeline__image'>
                            <img src='/assets/uploads/2015/10/15.svg' alt='' />
                          </div>
                        </div>
                    {this.renderSlides(6)}
                  </div>
                </div>
                <div className='row'>
                  <div className='medium-12 columns'>
                    <div className='why-timeline__timeline'>
                          <div className='timeline-bar'>
                            {this.renderBullets()}
                          </div>
                        </div>
                  </div>
                </div>

                <div className='row navigation'>
                  <div className='small-1 columns'>
                    <a className='timeline-prev'>
                          <img
                            src='/assets/images/arrow-left.png' alt='Prev' />
                        </a>
                  </div>
                  <div className='small-1 columns small-offset-10'>
                    <a className='timeline-next'>
                          <img
                            src='/assets/images/arrow-right.png' alt='Next' />
                        </a>
                  </div>
                </div>

              </div>
            </section>

            <section className='saved-money'>
              <div className='saved-money-counter fadeInUp wow'>
                <div className='row'>
                  <div className='counter' />
                </div>
                <div className='row'>
                  <div className='medium-8 medium-push-2 columns'>
                    <div className='saved-money-counter__content'>
                          <FormattedMessage tagName='h2' id='family.section2.header' />
                          <FormattedMessage tagName='p' id='family.section2.subtitle' />
                        </div>
                  </div>
                </div>
              </div>
              <div className='saved-money-goals fadeInUp wow'>
                <div className='row'>
                  <div className='medium-4 columns'>
                    <div className='saved-money-goals__goal'>
                          <img src='/assets/images/konsol.png' alt='' />
                          <p className='number' id='consolesNumber' />
                          <FormattedMessage tagName='p' id='family.section2.item1' />
                        </div>
                  </div>
                  <div className='medium-4 columns'>
                    <div className='saved-money-goals__goal'>
                          <img src='/assets/images/funfair.png' alt='' />
                          <p className='number' id='funfairNumber' />
                          <FormattedMessage tagName='p' id='family.section2.item2' />
                        </div>
                  </div>
                  <div className='medium-4 columns'>
                    <div className='saved-money-goals__goal'>
                          <img src='/assets/images/ball.png' alt='' />
                          <p className='number' id='ballsNumber' />
                          <FormattedMessage tagName='p' id='family.section2.item3' />
                        </div>
                  </div>
                </div>
              </div>
              <div className='why-save-money'>
                <div className='row'>
                  <div className='medium-8 columns'>
                    <div className='why-save-money__content'>
                          <div className='fadeInLeft wow'>
                            <FormattedMessage tagName='h2' id='family.section3.header' />
                            <p> <FormattedMessage id='family.section3.body' />
                                <span style={{color: '#ffff00'}}>1,5%</span>
                              </p>
                          </div>
                          <div className='features__appstore-badges fadeInLeft wow'>
                            <div className='features__tip'>
                                <span className='features__tip-pointer'>
                                    <img src='/assets/images/tip-pointer.png'
                                        alt='Tip pointer' />
                                  </span>
                                <span className='features__tip-text'>
                                    <FormattedMessage id='family.section3.download' />
                                  </span>
                              </div>
                            <a href='https://itunes.apple.com/se/app/veckopengen-for-barn-och-foraldrar/id935778197?mt=8'>
                                <img className='appstore-badge'
                                    src='/assets/images/apple-badge.png'
                                    alt='' />
                              </a>
                            <a href='https://play.google.com/store/apps/details?id=se.veckopengen.app&amp;hl=sv'>
                                <img className='appstore-badge'
                                    src='/assets/images/google-badge.png'
                                    alt='' />
                              </a>
                          </div>
                        </div>
                  </div>
                  <div className='medium-4 columns'>

                    <div className='why-save-money__progress fadeInRight wow'>

                          <div className='progress-bar-wrapper'>
                            <span className='progress-bar' />
                          </div>
                          <p className='progress-percent'>0%</p>
                        </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='common-tasks'>
              <div className='common-tasks__content'>
                <div className='row'>
                  <div className='medium-10 medium-push-1 columns fadeInDown wow'>
                    <FormattedMessage tagName='h2' id='family.section4.header' />
                    <FormattedMessage tagName='p' id='family.section4.body' />
                  </div>
                </div>
              </div>
              <div className='common-tasks-bubbles'>
                <div className='row'>
                  <div className='medium-12 columns'>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>9 %</span>
                                <FormattedMessage id='family.section4.item1' />
                              </div>
                          </div>
                        </div>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>26 %</span>
                                <FormattedMessage id='family.section4.item2' />
                              </div>
                          </div>
                        </div>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>12 %</span>
                                <FormattedMessage id='family.section4.item3' />
                              </div>
                          </div>
                        </div>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>9 %</span>
                                <FormattedMessage id='family.section4.item4' />
                              </div>
                          </div>
                        </div>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>16 %</span>
                                <FormattedMessage id='family.section4.item5' />
                              </div>
                          </div>
                        </div>
                    <div className='common-tasks-bubbles__bubble wow'>
                          <div className='common-tasks-bubbles__bubble__content'>
                            <div className='inner'>
                                <span className='percents'>8 %</span>
                                <FormattedMessage id='family.section4.item6' />
                              </div>
                          </div>
                        </div>

                  </div>
                </div>
              </div>
            </section>

            <section className='economical-training'>
              <div className='economical-training__content'>
                <div className='row'>

                  <div className='medium-12 columns'>
                    <h2 className='fadeInLeft wow'>
                          <FormattedMessage id='family.section5.header' />
                        </h2>
                    <div className='medium-9 fadeInLeft wow'>
                          <FormattedMessage id='family.section5.body' tagName='p' />
                          <p>&nbsp;</p>
                        </div>

                    <div className='training-link__content fadeInLeft wow'>
                          <Link to={`/${LINKS[lang].coaching}`}
                            className='button button-dark'>
                            <FormattedMessage id='family.section5.button' />
                          </Link>
                          <div className='features__tip'>
                            <span className='features__tip-pointer'>
                                <img src='/assets/images/tip-pointer.png' alt='Tip pointer' />
                              </span>
                            <span className='features__tip-text'>
                                <FormattedMessage id='family.section5.tip' />
                              </span>
                          </div>
                        </div>
                    <img className='fadeInRight wow'
                          src='/assets/images/economical-training.png' alt='' />
                  </div>
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
