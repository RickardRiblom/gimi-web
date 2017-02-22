import React from 'react';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

import imgLady from '../../assets/lady.jpg';

const styles = {
    img: {
        borderRadius: '50%'
    }
}

export default class HelpCard extends React.Component {
    render() {
        return (
            <div className={cx("help-card pull-right", this.props.className)}>
                <img src={imgLady} style={styles.img} />
                <FormattedMessage tagName="h4" id="help_title"/>
                <FormattedMessage tagName="p" id="help_line1"/>
                <FormattedMessage tagName="div" id="help_phone" values={{value: '08 123 123'}}/>
                <FormattedMessage tagName="p" id="help_weekdays"/>
                <p>Email: info@monea.se</p>
            </div>
        )
    }
}