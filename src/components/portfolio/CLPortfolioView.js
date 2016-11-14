/**
 * Created by chengluli on 13/11/2016.
 */
import React from 'react';

import CLConstance from '../utils/Constance';
import CLPortfolioCell from './CLPortfolioCell';

export default (props) => {

    const portfolios = CLConstance.staticData.portfolios;
    const cells = portfolios.map((portfolio, idx) => {
        return (
            <CLPortfolioCell
                description={portfolio.description}
                imgURL={portfolio.imgURL}
                key={idx}
            />
        )
    });

    return(
        <div className="col-md-12">
            {cells}
        </div>
    );
}