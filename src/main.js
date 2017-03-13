/**
 * Created by amitava on 22/02/17.
 */
import React from 'react'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en'
import no from 'react-intl/locale-data/no'
import se from 'react-intl/locale-data/se'
// import getLang from './utils/language'

import translations from './i18n'

addLocaleData([...en, ...no, ...se])

export default class Main extends React.Component {
  props: {route: Object, children: *}
  render (): * {
    const locale = this.props.route.lang
    const intlConfig = {
      locale: locale,
      messages: translations[locale] || translations.en
    }

    return (
      <IntlProvider {...intlConfig}>
        <div>
          {React.cloneElement(this.props.children, {lang: locale})}
        </div>
      </IntlProvider>
    )
  }
}
