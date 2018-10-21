import './dashboard.css';
import React, {Component} from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


class ChartLine extends Component {

    data = [

        {miesiąc: 'Kwiecień', użytkownicy: 10},
        {miesiąc: 'Maj', użytkownicy: 140},
        {miesiąc: 'Czerwiec', użytkownicy: 256},
        {miesiąc: 'Lipiec', użytkownicy: 460},
        {miesiąc: 'Sierpień', użytkownicy: 879},
        {miesiąc: 'Wrzesień', użytkownicy: 1300},
        {miesiąc: 'Październik', użytkownicy: 2600},
    ];

    render() {
        return (
            <Grid
                direction="row"
                alignItems="center"
            >
                <Typography color="inherit" style={{fontSize: '30', fontWeight: 'bold', color: '#444444', margin: 10, textAlign: 'center'}}>
                    LICZBA UŻYTKOWNIKÓW
                </Typography>
                <Typography color="inherit" style={{fontSize: '16', width: 400, margin: 10, textAlign: 'center'}}>
                    Co miesiąc dołącza do aplikacji co raz większa liczba użytkowników.
                     Dołącz i Ty!
                </Typography>
                <LineChart width={500} height={240} data={this.data}
                           margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <XAxis dataKey="miesiąc"/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="użytkownicy" stroke="#C6596F"/>
                </LineChart>


            </Grid>
        )
    }
}
export default ChartLine;