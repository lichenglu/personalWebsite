/**
 * Created by chengluli on 13/11/2016.
 */
import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import CLConstance from '../utils/Constance';

export default class CLPortfolioCell extends Component {

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
            <Card containerStyle={cardStyle}>
                <CardMedia
                >
                    <img src={this.props.imgURL} style={cardImgStyle} />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        );
    }
}