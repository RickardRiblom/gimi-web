/**
 * Created by amitava on 23/02/17.
 */
import React from 'react';
import DocumentTitle from 'react-document-title';
import { FormattedMessage, injectIntl, FormattedHTMLMessage } from 'react-intl';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

@injectIntl
export default class Training extends React.Component {

    componentDidMount() {
        veckopengen.tabs.init();
        veckopengen.quickTips.init();
    }

    componentWillUnmount() {
        veckopengen.tabs.off();
        veckopengen.quickTips.off();
    }

    render() {
        const {lang} = this.props;
        const title = this.props.intl.formatMessage({id: 'title.coaching'});

        return (
            <DocumentTitle title={title}>
                <div className="page-template page-template-page-tip">
                    <Header lang={lang}/>
                    <main>
                        <section className="tips">
                            <div className="row">
                                <div className="medium-10 large-8 medium-offset-1 large-offset-2 columns">
                                    <div className="tips__heading fadeInDown wow">
                                        <FormattedMessage tagName="h2" id="training.section1.header"/>
                                        <FormattedMessage tagName="p" id="training.section1.subtitle"/>
                                    </div>
                                </div>
                            </div>
                            <section className="quick-tips fadeInUp wow">
                                <div className="owl-carousel quick-tips__carousel">
                                    <div className="item row">
                                        <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                            <div className="tips__tip">
                                                <div className="tips__tip-headline">
                                                    <div className="tips__list-circle">1</div>
                                                    <FormattedMessage tagName="p" id="training.section1.point1.title"/>
                                                </div>
                                                <FormattedMessage tagName="p" id="training.section1.point1.desc"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item row">
                                        <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                            <div className="tips__tip">
                                                <div className="tips__tip-headline">
                                                    <div className="tips__list-circle">2</div>
                                                    <FormattedMessage tagName="p" id="training.section1.point2.title"/>
                                                </div>
                                                <FormattedMessage tagName="p" id="training.section1.point2.desc"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item row">
                                        <div className="medium-10 medium-offset-1 large-8 large-offset-2 columns">
                                            <div className="tips__tip">
                                                <div className="tips__tip-headline">
                                                    <div className="tips__list-circle">3</div>
                                                    <FormattedMessage tagName="p" id="training.section1.point3.title"/>
                                                </div>
                                                <FormattedMessage tagName="p" id="training.section1.point3.desc"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row navigation">
                                    <div className="small-1 columns">
                                        <a className="quick-tips-prev">
                                            <img src="/assets/images/arrow-left.png" alt="Prev"/>
                                        </a>
                                    </div>
                                    <div className="small-1 columns small-offset-10">
                                        <a className="quick-tips-next">
                                            <img src="/assets/images/arrow-right.png" alt="Next"/>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section id="tips-tabs" className="tips-tabs">
                            <div className="row tips-tabs__tab-wrapper">
                                <a className="medium-4 columns tips-tabs__tab tips-tabs__tab--active">
                                    <div className="fadeInGrow wow">
                                        <p>
                                            <img className="wallet-tab-icon"
                                                 src="/assets/images/training.png"
                                                 alt=""/>
                                            <FormattedMessage id="training.tab1.title"/>
                                        </p>
                                    </div>
                                </a>
                                <a className="medium-4 columns tips-tabs__tab">
                                    <div className="fadeInGrow wow">
                                        <p>
                                            <img className="pig-tab-icon"
                                                 src="/assets/images/phone.png"
                                                 alt=""/>
                                            <FormattedMessage id="training.tab2.title"/>
                                        </p>
                                    </div>
                                </a>
                                <a className="medium-4 columns tips-tabs__tab">
                                    <div className="fadeInGrow wow">
                                        <p>
                                            <img className="tasks-tab-icon"
                                                 src="/assets/images/tasks-tab-icon.png"
                                                 alt=""/>
                                            <FormattedMessage id="training.tab3.title"/>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </section>

                        <section id="tips-tab-content-1" className="tips-tab-content tips-tab-content-1">
                            <div className="row medium-collapse">
                                <div className="medium-7 columns fadeInLeft wow">
                                    <div className="tips-tab-content__content">
                                        <blockquote>
                                            <FormattedMessage id="training.tab1.header"/>
                                        </blockquote>
                                        <FormattedHTMLMessage tagName="div" id="training.tab1.content"/>
                                    </div>
                                </div>
                                <div className="medium-5 columns">
                                    <aside className="tips-tab-content__box fadeInRight wow">
                                        <div className="tips-tab-content__profile">
                                            <div className="row">
                                                <div className="large-2 columns no-padding">
                                                    <img className="tips-tab-content__avatar"
                                                         src="/assets/uploads/2015/10/emma34.png"/>
                                                </div>

                                                <div className="large-10 columns">
                                                    <p>
                                                        <strong>Emma Persson</strong>
                                                    </p>
                                                    <p className="profession">
                                                        <FormattedMessage id="training.tab1.person.title"/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <FormattedMessage tagName="p" id="training.tab1.person.about"/>
                                        <p>
                                            <strong style={{lineHeight: 1.5}}>
                                                <FormattedMessage id="training.tab1.person.tips"/>
                                            </strong>
                                        </p>
                                        <ul>
                                            <FormattedMessage id="training.tab1.person.tip1" tagName="li"/>
                                            <FormattedMessage id="training.tab1.person.tip2" tagName="li"/>
                                        </ul>
                                    </aside>

                                    <div className="tips-tab-content__bubbles">
                                        <div className="tips-tab-content__bubble wow">
                                    <span className="text">
                                        <FormattedMessage id="training.tab1.person.bubble"/>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="tips-tab-content-2" className="tips-tab-content tips-tab-content-2">
                            <div className="row medium-collapse">
                                <div className="medium-7 columns fadeInLeft wow">
                                    <div className="tips-tab-content__content">
                                        <blockquote>
                                            <FormattedMessage id="training.tab2.header"/>
                                        </blockquote>
                                        <FormattedHTMLMessage tagName="div" id="training.tab2.content"/>
                                    </div>
                                </div>
                                <div className="medium-5 columns">
                                    <aside className="tips-tab-content__box fadeInRight wow">
                                        <div className="tips-tab-content__profile">
                                            <div className="row">
                                                <div className="large-2 columns no-padding">
                                                    <img className="tips-tab-content__avatar"
                                                         src="/assets/uploads/2015/10/bodil-ny1.png"
                                                         alt=""/>
                                                </div>

                                                <div className="large-10 columns">
                                                    <p>
                                                        <strong>Bodil Hallin</strong>
                                                    </p>
                                                    <p className="profession">
                                                        <FormattedMessage id="training.tab2.person.title"/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <FormattedMessage tagName="p" id="training.tab2.person.about"/>
                                        <p>
                                            <FormattedMessage tagName="strong" id="training.tab2.person.tips"/>
                                        </p>
                                        <ul>
                                            <FormattedMessage id="training.tab2.person.tip1" tagName="li"/>
                                            <FormattedMessage id="training.tab2.person.tip2" tagName="li"/>
                                            <FormattedMessage id="training.tab2.person.tip3" tagName="li"/>
                                        </ul>
                                    </aside>

                                    <div className="tips-tab-content__bubbles">
                                        <div className="tips-tab-content__bubble wow">
                                <span className="text">
                                    <FormattedMessage id="training.tab2.bubble1"/>
                                </span>
                                        </div>
                                        <div className="tips-tab-content__bubble wow">
                                    <span className="text">
                                        <FormattedMessage id="training.tab2.bubble2"/>
                                    </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section id="tips-tab-content-3" className="tips-tab-content tips-tab-content-3">
                            <div className="row medium-collapse">
                                <div className="medium-7 columns fadeInLeft wow">
                                    <div className="tips-tab-content__content">
                                        <blockquote>
                                            <FormattedMessage id="training.tab3.header"/>
                                        </blockquote>
                                        <FormattedHTMLMessage tagName="div" id="training.tab3.content"/>
                                    </div>
                                </div>
                                <div className="medium-5 columns">
                                    <aside className="tips-tab-content__box fadeInRight wow">
                                        <div className="tips-tab-content__profile">
                                            <div className="row">
                                                <div className="large-2 columns no-padding">
                                                    <img className="tips-tab-content__avatar"
                                                         src="/assets/uploads/2015/10/liv.png"
                                                         alt=""/>
                                                </div>

                                                <div className="large-10 columns">
                                                    <p>
                                                        <strong>Liv Svirsky</strong>
                                                    </p>
                                                    <p className="profession">
                                                        <FormattedMessage id="training.tab3.person.title"/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <FormattedMessage id="training.tab3.person.about"/>
                                        <FormattedMessage id="training.tab3.person.tips"/>
                                        <p>
                                            <FormattedMessage tagName="strong" id="training.tab3.person.tips"/>
                                        </p>
                                        <ul>
                                            <FormattedMessage tagName="li" id="training.tab3.person.tip1"/>
                                            <FormattedMessage tagName="li" id="training.tab3.person.tip2"/>
                                        </ul>
                                    </aside>

                                    <div className="tips-tab-content__bubbles">
                                        <div className="tips-tab-content__bubble wow">
                                    <span className="text">
                                        <FormattedMessage id="training.tab3.bubble1"/>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer lang={lang}/>
                </div>
            </DocumentTitle>
        )
    }
}