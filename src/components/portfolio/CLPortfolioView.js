/**
 * Created by chengluli on 13/11/2016.
 */
import React from 'react';

import CLConstance from '../utils/Constance';
import CLPortfolioCard from './CLPortfolioCard';

export default (props) => {

    const portfolios = CLConstance.staticData.portfolios;
    const numOfCardsPerRow = 3;
    let sections = [];
    const cards = portfolios.map((portfolio, idx) => {

        // If this is a dummy data, then we simply return an empty div
        // and use it for laying out beautifully
        if(portfolio.isDummy) {
            return (
                <div />
            )
        }

        return (
            <CLPortfolioCard
                description={portfolio.description}
                imgURL={portfolio.imgURL}
                name={portfolio.name}
                stacks={portfolio.stacks}
                link={portfolio.link}
                iconName={portfolio.iconName}
                key={idx}
            />
        )
    });

    /*
    * Algorithm for laying out cards in a 12-column div
    * */

    let tempArr = [];
    for (var i = 1; i <= cards.length; i++) {

        tempArr.push(
            <div className={"col-md-" + `${12 / numOfCardsPerRow}` } key={i}>
                { cards[i - 1] }
            </div>
        );

        if(i % numOfCardsPerRow === 0) {

            sections.push(
                <div className={'col-md-12'}>
                    {tempArr}
                </div>
            );

            tempArr = [];

        }
    }
    sections.push(
        <div className={'col-md-12'}>
            {tempArr}
        </div>
    );
    /*
     * End of the algorithm for laying out cards in a 12-column div
     * */

    return(
        <div>
            {sections}
        </div>
    );
}