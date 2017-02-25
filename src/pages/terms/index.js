/**
 * Created by amitava on 24/02/17.
 */
import React from 'react';
import English from './English';
import No from './No';
import Se from './Se';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Terms extends React.Component {
    render() {
        const {lang} = this.props.params;
        let body = null
        if(lang == 'se') {
            body = <Se />
        } else if(lang == 'no') {
            body = <No />
        } else {
            body = <English />
        }
        return (
            <div className="page-template-default">
                <Header lang={lang}/>
                <div>
                    {body}
                </div>
                <Footer lang={lang}/>
            </div>
        )
    }
}