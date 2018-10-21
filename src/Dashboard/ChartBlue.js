import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
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
    width: 600,
    height: 450,
    dataFormat: 'json',
    dataSource: myDataSource,
};

class ChartBlue extends React.Component {
    render() {
        return (
            <Grid
                direction="row"
                alignItems="center"
            >
                <Typography color="inherit" style={{fontSize: '45', fontWeight: 'bold', color: '#444444',  margin: 10, textAlign: 'center'}}>
                    LICZBA SKLEPIKÓW OSIEDLOWYCH
                </Typography>
                <Typography color="inherit" style={{fontSize: '18', width: 400, margin: 10, textAlign: 'center'}}>
                    Co raz więcej sklepików osiedlowych. Sprawdź jakie są w Twojej okolicy

                </Typography>
                <ReactFC {...chartConfigs}/>
            </Grid>
        );
    }
}

export default ChartBlue