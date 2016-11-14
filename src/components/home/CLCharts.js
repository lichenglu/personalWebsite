/**
 * Created by chengluli on 13/11/2016.
 */
import React from 'react';

import {Doughnut, Radar, Bar} from 'react-chartjs';
import Chart from 'chart.js';

import CLConstance from '../utils/Constance';

Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = "rgba(255,255,255,1)";

export default (props) => {

    const chartsData = CLConstance.staticData.chartsData;
    const radarOption = {
        angleLineColor: "rgba(255,255,255,1)",
        pointLabelFontColor: "rgba(255,255,255,1)"
    };

    const chartOption = {
        scaleGridLineColor: "rgba(255,255,255,1)",
        scaleGridLineWidth: 0.5,
        pointLabelFontColor: "rgba(255,255,255,1)",
        scaleFontColor: "rgba(255,255,255,1)"
    };

    console.log(Chart.defaults.global.defaultFontColor);
    return(
        <div className="col-sm-12 col-md-12 text-center" id={CLConstance.styles.ids.charts}>

            <div className="col-sm-4 col-md-4">
                <p>Strengths and Weaknesses</p>
                <Radar data={chartsData.radar} options={radarOption} />
            </div>

            <div className="col-sm-4 col-md-4">
                <p>StackOverview</p>
                <Bar data={chartsData.bar} options={chartOption} />
            </div>

            <div className="col-sm-4 col-md-4">
                <p>Number of Projects</p>
                <Doughnut data={chartsData.doughnut} />
            </div>

        </div>
    )
}