import React from 'react'
import Modal from 'react-responsive-modal'
// import { Container, Nav } from 'reactstrap'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { Link } from 'react-router'
import { LINKS } from '../constants'

export default class Footer extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {isModalOpen: false}
  }

  openModal () {
    this.setState({isModalOpen: true})
  }

  closeModal () {
    this.setState({isModalOpen: false})
  }

  componentDidMount () {
    veckopengen.counter.footerCounter() // eslint-disable-line
  }

  render (): * {
    const {lang} = this.props

    return (
      <footer>
        <div className='media'>
          <div className='row'>
            <div className='medium-12 columns'>
              <ul>
                <li className='media__logo'>
                  <a href='http://www.di.se/di/artiklar/2015/4/1/koll-pa-hur-det-rullar/'>
                    <img src='/assets/uploads/2015/11/di.png' alt='' />
                  </a>
                </li>

                <li className='media__logo'>
                  <a href='http://www.expressen.se/dinapengar/surf-ar-barnens-nya-hardvaluta/'>
                    <img src='/assets/uploads/2015/11/EXPRESSEN.png' alt='' />
                  </a>
                </li>

                <li className='media__logo'>
                  <a href='http://www.va.se/nyheter/2015/11/12/appen-som-ska-ersatta-spargrisen/' className=''>
                    <img src='/assets/uploads/2015/11/veckans-affarer.png' alt='' />
                  </a>
                </li>

                <li className='media__logo'>
                  <a href='http://www.svd.se/sveriges-hetaste-startups'>
                    <img src='/assets/uploads/2015/11/svd.png' alt='' />
                  </a>
                </li>

                <li className='media__logo'>
                  <a href='http://breakit.se/artikel/1053/fotbollsstjarnan-som-vill-lara-barn-spara-plockar-in-miljonbelopp'>
                    <img src='/assets/uploads/2015/11/breakit.png' alt='' />
                  </a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='row'>

            <div className='medium-6 medium-push-6 large-4 large-push-8 columns'>

              <div className='footer-bottom__counter'>
                <div className='footer-counter' />
                <span className='kr'>kr</span>
              </div>

              <FormattedMessage tagName='p' id='footer.amout_paid_out' />

              <div className='footer-bottom__appstore-links'>

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
                <img className='vidiggar medium' src='assets/uploads/2015/11/vidiggar.png'
                  alt='' />
              </div>
            </div>

            <div className='medium-6 medium-pull-6 large-4 large-pull-4 columns'>
              <div className='footer-bottom__content'>
                <FormattedMessage id='footer.about_companyname' tagName='h5' />
                <FormattedMessage id='footer.about' tagName='p' />
                <FormattedHTMLMessage tagName='p' id='footer.about2' values={{email: 'info@veckopengen.se'}} />

                <FormattedMessage tagName='p' id='footer.newsletter' />

                <div id='mc_embed_signup'>
                  <form
                    action='http://veckopengen.us11.list-manage.com/subscribe/post?u=dd1fcf21d5484198d5b22b548&amp;id=bec2661b2f'
                    method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form'
                    className='validate' target='_blank' noValidate>
                    <div id='mc_embed_signup_scroll'>

                      <div className='mc-field-group'>
                        <input type='email' name='EMAIL' className='required email' id='mce-EMAIL'
                          placeholder='Email address' />
                        <button type='submit'>
                          <img
                            src='/assets/images/submit-button-arrow.png'
                            alt='Subscribe'
                            name='subscribe' id='mc-embedded-subscribe' />
                        </button>
                      </div>

                      <div id='mce-responses'>
                        <div className='response' id='mce-error-response' style={{display: 'none'}} />
                        <div className='response' id='mce-success-response' style={{display: 'none'}} />
                      </div>
                      <div style={{position: 'absolute', left: -5000}}>
                        <input type='text' name='b_dd1fcf21d5484198d5b22b548_bec2661b2f' value='' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className='large-4 large-pull-4 columns'>
              <img className='vidiggar large' src='/assets/uploads/2015/11/vidiggar.png' alt='' />
            </div>
          </div>
        </div>

        <div className='footer-copyright'>
          <div className='row'>
            <div className='medium-5 columns'>
              <p>Copyright 2016 - Gimi AB - All rights reserved</p>

            </div>
            <div className='medium-3 columns'>
              <div className='footer-social-nav-menu'>
                <div className='menu-social-nav-se-container'>
                  <ul id='menu-social-nav-se' className=''>
                    <li id='menu-item-203'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-203'>
                      <a target='_blank' href='https://www.facebook.com/veckopengen/'><span className='fb' /></a>
                    </li>
                    <li id='menu-item-204'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-204'>
                      <a target='_blank' href='https://twitter.com/veckopengen'><span className='tw' /></a>
                    </li>
                    <li id='menu-item-205'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-205'>
                      <a target='_blank' href='https://www.instagram.com/veckopengen/'><span
                        className='ig' /></a>
                    </li>
                    <li id='menu-item-491'
                      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-491'>
                      <a href='#ex1' onClick={() => this.openModal()}>
                        <span className='sc' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='medium-4 columns'>
              <div className='footer-nav-menu'>
                <div className='menu-footer-nav-se-container'>
                  <ul id='menu-footer-nav-se' className=''>
                    <li className='menu-item'><Link to={`/${LINKS[lang].news}`}><FormattedMessage id='footer.press' /></Link></li>
                    <li className='menu-item'><Link to={`/terms`}><FormattedMessage id='footer.terms' /></Link></li>
                    <li className='menu-item'>
                      <a href={`${LINKS[lang].faq || 'faq'}`}><FormattedMessage id='footer.faq' /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={this.state.isModalOpen} onClose={() => this.closeModal()} modalStyle={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 10}} little>
          <h3>Följ oss på snapchat</h3>
          <h3><p>På snapchat kan du följa utvecklingen av Veckopengen, du kan också skicka frågor direkt till oss om det är något du undrar! Skanna koden i snapchat!</p></h3>
          <img src='/assets/uploads/2015/11/snapchat_code.png' alt='' />
        </Modal>
      </footer>
    )
  }
}
