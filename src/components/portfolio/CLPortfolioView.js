/**
 * Created by chengluli on 13/11/2016.
 */
import React from 'react';

import CLConstance from '../utils/Constance';
import CLPortfolioCell from './CLPortfolioCell';

export default (props) => {

    const portfolios = CLConstance.staticData.portfolios;
    const numOfCardsPerRow = 2;
    let sections = [];
    const cards = portfolios.map((portfolio, idx) => {
        return (
            <CLPortfolioCell
                description={portfolio.description}
                imgURL={portfolio.imgURL}
                key={idx}
            />
        )
    });

    let tempArr = [];
    for (var i = 1; i <= cards.length; i++) {

        if(i % numOfCardsPerRow === 0) {

            tempArr.push(
                <div className={"col-md-" + `${12 / numOfCardsPerRow}` }>
                    { cards[i - 1] }
                </div>
            );

            sections.push(
                <div className={'col-md-12'}>
                    {tempArr}
                </div>
            );

            tempArr = [];

        }else {
            tempArr.push(
                <div className={"col-md-" + `${12/numOfCardsPerRow}` }>
                    { cards[i - 1] }
                </div>
            )
        }
    }

    return(
        <div>
            {sections}
        </div>
    );
}