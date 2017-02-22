import React from 'react';
import { Container, Row, Col, Collapse, Label, Input, FormGroup } from 'reactstrap';
import { FormattedMessage,injectIntl } from 'react-intl';

import HelpCard from './HelpCard';

export default class QuestionGroup extends React.Component {
    static propTypes = {
        options: React.PropTypes.array,
        name: React.PropTypes.string,
        title: React.PropTypes.string,
        onChange: React.PropTypes.func,
        value: React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.array]),
        multi: React.PropTypes.bool,
        collapsible: React.PropTypes.bool
    };

    constructor() {
        super();
        this.state = {

        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    show(id) {
        this.setState({ [id]: true });
    }

    hide(id) {
        this.setState({ [id]: false });
    }

    onChange(e, id) {
        const { name, onChange, multi } = this.props;
        if(multi) {
            const { checked, value } = e.target;
            let _val = this.props.value;
            if(!_val || !_val.length) {
                _val = [];
            }
            if(checked) {
                _val.push(value);
                this.show(id);
            } else {
                const idx = _val.indexOf(value);
                _val.splice(idx, 1);
                this.hide(id);
            }
            onChange({
                target: {
                    name,
                    value: _val
                }
            });

        } else {
            onChange(e);
        }
    }

    render() {
        const { multi, title, options, name, collapsible, children } = this.props;

        const questions = options.map((o, idx) => (
            <div key={idx}>
                <FormGroup check>
                    <Label check size="lg">
                        {multi ? (
                            <Input type="checkbox" name={name} value={idx + 1} onChange={e => this.onChange(e, idx)} size="lg" />
                        ) : (
                            <Input type="radio" name={name} value={idx + 1} onChange={this.onChange} size="lg" />
                        )}
                        {' '}
                        <FormattedMessage id={o.label} />
                    </Label>
                </FormGroup>
                {collapsible ? (
                    <Collapse isOpen={this.state[idx]}>
                        <FormattedMessage id={o.description} tagName="p" />
                    </Collapse>

                    ) : <FormattedMessage id={o.description} tagName="p" />}
            </div>
        ));

        return (
            <section className="question-group">
                {/*<HelpCard className="hidden-md-up"/>*/}
                <Container>
                    <Row>
                        <Col xs="12" lg="8">
                            <FormattedMessage id={title} tagName="h2" />
                            {questions}
                            {children}
                        </Col>
                        <Col xs="12" lg="4">
                            <HelpCard/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}