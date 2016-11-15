/**
 * Created by chengluli on 13/11/2016.
 */
import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CLConstance from '../utils/Constance';

export default class CLPortfolioCard extends Component {

    didClickIcon() {
        const link = this.props.link;
        const win = window.open(link, '_blank');
        win.focus();
    }

    render() {
        const classes = CLConstance.styles.classes;
        const cardStyle = {
            marginBottom: "20px",
        };

        const cardImgStyle = {
            maxWidth: "30%",
            minWidth: "30%",
            paddingTop: "10px"
        };

        return (
            <Card containerStyle={cardStyle} className={CLConstance.styles.classes.portfolioCard}>
                <CardMedia
                >
                    <img src={this.props.imgURL} style={cardImgStyle} />
                </CardMedia>
                <CardTitle title={this.props.name} subtitle={'Built with ' + this.props.stacks} />
                <CardText
                >
                    {this.props.description}
                </CardText>
                <CardActions>
                    <i className={this.props.iconName} onClick={this.didClickIcon.bind(this)}/>
                </CardActions>
            </Card>
        );
    }
}