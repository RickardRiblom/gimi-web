/**
 * Created by amitava on 22/02/17.
 */
import React from 'react'
import {FormattedMessage, injectIntl} from 'react-intl'
import DocumentTitle from 'react-document-title'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Section from './Section'

import { VIDEO } from '../../constants'

@injectIntl
export default class Home extends React.Component {
  componentDidMount () {
    veckopengen.heroHeader.init()
    veckopengen.counter.init()
    veckopengen.pigBankAnimation.init()
    veckopengen.walletAnimation.init()
    veckopengen.saveObjectiveSlider.init()
    veckopengen.footerQuote.init()
    veckopengen.videoPlayer.init()

    var send = true
  }

  componentWillUnmount () {
    veckopengen.heroHeader.off()
    veckopengen.pigBankAnimation.off()
    veckopengen.walletAnimation.off()
    veckopengen.saveObjectiveSlider.off()
    veckopengen.footerQuote.off()
    veckopengen.videoPlayer.off()
  }

  getSpecialContent (): * {
    var {lang} = this.props
    return lang === 'se' ? (
      <div>
        <div>
          <span className='smsHeader'>SMS:a mig appen:</span>
          <br />
          <input className='smsButton' type='submit' value='Skicka' />
          <input value='+46' placeholder='SKRIV DITT NUMMER HÄR' className='smsInput' type='text' />
        </div>
        <a id='success-lightbox' style='display:none;' href='#' data-featherlight='#mylightbox'>Open element in lightbox</a>
        <div id='mylightbox' className='lightbox' />
      </div>) : undefined
  }

  render (): * {
    const {lang} = this.props
    const title = this.props.intl.formatMessage({id: 'title.home'})
    var specialContent = this.getSpecialContent()
    return (
      <DocumentTitle title={title}>
        <div className='home page-template-page-home'>
          <Header lang={lang} isHome />
          <main>
            <Hero lang={lang} />
            <Section lang={lang} />
          </main>
          <Footer lang={lang} />
          <div className='video-player'>
            <div className='close-video'>
              <svg x='0px' y='0px' viewBox='0 0 357 357'>
                <g>
                  <g id='close'>
                    <polygon points='357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5' />
                  </g>
                </g>
              </svg>
            </div>

            <div className='video-wrapper'>
              <video width='100%' height='100%' id='veckopengen-video' preload='none'>
                <source src={VIDEO[lang]} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
