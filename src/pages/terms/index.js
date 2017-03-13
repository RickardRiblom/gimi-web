/**
 * Created by amitava on 24/02/17.
 */
import React from 'react'
import DocumentTitle from 'react-document-title'
import { FormattedMessage, injectIntl } from 'react-intl'
import English from './English'
import No from './No'
import Se from './Se'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

@injectIntl
export default class Terms extends React.Component {
  render () {
    const {lang} = this.props
    const title = this.props.intl.formatMessage({id: 'title.terms'})

    let body = null
    if (lang == 'se') {
      body = <Se />
    } else if (lang == 'no') {
      body = <No />
    } else {
      body = <English />
    }

    return (
      <DocumentTitle title={title}>
        <div className='page-template-default'>
          <Header lang={lang} />
          <div>
            {body}
          </div>
          <Footer lang={lang} />
        </div>
      </DocumentTitle>
    )
  }
}
