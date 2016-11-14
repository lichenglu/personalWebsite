/**
 * Created by chengluli on 13/11/2016.
 */
import React, { Component } from 'react';

import CLConstance from '../utils/Constance';

export default class CLPortfolioCell extends Component {

    render() {
        const classes = CLConstance.styles.classes;
        const style = {
            backgroundImage: `url(${this.props.imgURL})`
        };

        return (
            <div className="col-md-3">

                <div className={"col-md-12 " + classes.portfolioCell} style={style}>
                    <div className={classes.overlay}>
                        {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
}