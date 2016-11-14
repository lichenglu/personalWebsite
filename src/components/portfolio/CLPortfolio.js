/**
 * Created by chengluli on 12/11/2016.
 */
import React, { Component } from 'react';

import CLConstance from '../utils/Constance';
import CLPortfolioView from './CLPortfolioView';

class CLPortfolio extends Component {
    render() {
        return (
            <div className="text-center" id={CLConstance.styles.ids.portfolio}>
                <CLPortfolioView />
            </div>
        );
    }
}

export default CLPortfolio;