import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FormattedMessage } from 'react-intl';

export default class StrategyPicker extends React.Component {
    constructor() {
        super();
        this.renderIcon = this.renderIcon.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    renderIcon(next, prev) {
        return next <= this.props.value ?  <span className="star filled"></span> : <span className="star"></span>;
    }

    onClick(next, prev, name) {
        this.props.onClick(name, next);
    }

    render() {
        const { label, value, name } = this.props;
        return (
            <div className="strategy-picker">
                <div className="label">
                    <FormattedMessage id={label}/>
                </div>
                <div>
                    <StarRatingComponent
                        name={name}
                        editing={true}
                        renderStarIcon={this.renderIcon}
                        starCount={5}
                        value={value}
                        starColor="#0275d8"
                        emptyStarColor="#ffffff"
                        onStarClick={this.onClick}
                    />
                </div>
            </div>
        )
    }
}