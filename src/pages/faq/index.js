/**
 * Created by amitava on 25/02/17.
 */
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import DocumentTitle from 'react-document-title'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

@injectIntl
export default class FAQ extends React.Component {
  componentDidMount () {
    veckopengen.faqAccordion.init()
  }

  componentWillUnmount () {
    veckopengen.faqAccordion.off()
  }

  renderFAQ (idx) {
    return (
      <li key={idx}>
        <section className='feature__faq'>
          <header className='feature__faq-toggle-trigger'>
            <FormattedMessage tagName='h1' id={`faq.q${idx}`} />
          </header>
          <div className='feature__faq-toggle'>
            <div className='feature__faq-content'>
              <FormattedMessage tagName='p' id={`faq.q${idx}.a`} />
            </div>
          </div>
        </section>
      </li>
    )
  }

  render () {
    const title = this.props.intl.formatMessage({id: 'title.faq'})

    const {lang} = this.props
    const group1 = []
    const group2 = []

    for (let i = 1; i < 11; i++) {
      group1.push(this.renderFAQ(i))
    }
    for (let i = 11; i < 20; i++) {
      group2.push(this.renderFAQ(i))
    }

    return (
      <DocumentTitle title={title}>
        <div className='page-template-page-faq'>
          <Header lang={lang} />
          <main role='main'>
            <div className='row'>
              <div className='small-12 columns fadeInLeft wow'>
                <FormattedMessage tagName='h1' id='faq.title' />
              </div>
            </div>
            <div className='row fadeInUp wow'>
              <div className=' medium-6 columns'>
                <ul className='feature__faqs'>
                  {group1}
                </ul>
              </div>
              <div className=' medium-6 columns'>
                <ul className='feature__faqs'>
                  {group2}
                </ul>
              </div>
            </div>
          </main>
          <Footer lang={lang} />
        </div>
      </DocumentTitle>
    )
  }
}
