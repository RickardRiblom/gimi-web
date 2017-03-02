/**
 * Created by amitava on 28/02/17.
 */
import React from 'react';
import DocumentTitle from 'react-document-title';
import { FormattedMessage, injectIntl } from 'react-intl';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

@injectIntl
export default class News extends React.Component {

    componentDidMount() {
        $('#blog').load(`/blog/${this.props.lang} main`)
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {lang} = this.props;
        const title = this.props.intl.formatMessage({id: 'title.news'});

        return (
            <DocumentTitle title={title}>
                <div className="page-template page-template-page-current">
                    <Header lang={lang}/>
                    <div id="blog" style={{minHeight: 1200}}>

                    </div>
                    <Footer lang={lang}/>
                </div>
            </DocumentTitle>
        )
    }
}