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
    };

    const detailImg = travelData.map((imgSrc, idx) => {
        return (
            <div className="col-sm-4 col-md-4 " key={idx}>
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
        <div className="col-sm-12 col-md-12" id=''>
            {detailImg}
        </div>
    )
}
