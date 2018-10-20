import './dashboard.css';

import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
        "caption": "Liczba sklepów rośnie w zawrotowym tempie",
        "subCaption": "rok 2018",
        "xAxisName": "Miesiące",
        "yAxisName": "Liczba sklepików",
        "theme": "fusion"
    },
    "data": [
               {
            "label": "Kwiecień",
            "value": "6"
        },
        {
            "label": "Maj",
            "value": "27"
        },
        {
            "label": "Czerwiec",
            "value": "58"
        },
        {
            "label": "Lipiec",
            "value": "158"
        },
        {
            "label": "Sierpień",
            "value": "256"
        },
        {
            "label": "Wrzesień",
            "value": "360"
        },
        {
            "label": "Październik",
            "value": "450"
        }
    ]
};

const chartConfigs = {
    type: 'column2d',
    width: 800,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

class Dashboard extends React.Component {
    render() {
        return (
            <ReactFC {...chartConfigs}/>
        );
    }
}

export default Dashboard