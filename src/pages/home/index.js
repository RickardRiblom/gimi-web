/**
 * Created by amitava on 22/02/17.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <FormattedMessage id="hi" />
            </div>
        )
    }
}