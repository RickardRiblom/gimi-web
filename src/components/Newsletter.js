import React from 'react';
import { UncontrolledAlert,  Button, FormGroup, Label, Input } from 'reactstrap';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import cx from 'classnames';

@injectIntl
export default class Newsletter extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            submitting: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmit(e) {
        e.preventDefault();
        const { name, email, submitting } = this.state;
        if(name && email) {
            this.setState({submitting: true});
            this.props.handleSubmit({name, email}).then(
                () => this.setState({submitting: false, success: true, email: '', name: ''}),
                () => this.setState({submitting: false}),
            );
        }
    }

    render() {
        const namePlaceholder = this.props.intl.formatMessage({id: 'hint.name'});
        const emailPlaceholder = this.props.intl.formatMessage({id: 'hint.email'});

        return (
            <div className={cx('newsletter', this.props.className)}>
                <FormattedMessage id="subscribe_newsletter" tagName="h5"/>
                <div>
                    {this.state.success && (
                        <UncontrolledAlert color="success" className="alert-fixed">
                            <FormattedHTMLMessage id="newsletter_success"/>
                        </UncontrolledAlert>
                    )}
                    <form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Input name="name" value={this.state.name} onChange={this.onChange} placeholder={namePlaceholder} />
                            <Input name="email" value={this.state.email} onChange={this.onChange} type="email" placeholder={emailPlaceholder} />
                            <Button disabled={this.state.submitting} block color="primary">
                                {this.state.submitting ? <span className="spinner" /> : <FormattedMessage id="subscribe"/>}
                            </Button>
                        </FormGroup>
                    </form>
                </div>
            </div>
        )
    }
}