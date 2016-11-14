/**
 * Created by chengluli on 13/11/2016.
 */
import React from 'react';

import CLConstance from '../utils/Constance';

export default (props) => {

    const travelData = CLConstance.staticData.travelDetailView;

    const imgStyle = {
        width: "70%",
        height: "auto"
    }

    const detailImg = travelData.map((imgSrc) => {
        return (
            <div className="col-xs-4">
                <img
                    src={imgSrc}
                    alt="travel"
                    className="CLCircular-Square"
                    style={imgStyle}
                />
            </div>
        )
    });

    return (
        <div className="col-xs-12" id=''>
            {detailImg}
        </div>
    )
}
