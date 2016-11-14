/**
 * Created by chengluli on 12/11/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import Scroll from 'react-scroll';
import classNames from 'classnames';

import CLConstance from '../utils/Constance';
import CLCharts from './CLCharts';
import CLTravelView from './CLTravelView';

const ScrollLink = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

class CLHome extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    generateDetailView(idx) {

        if(idx === 0) {
            return null
        }else if (idx === 1) {
            return(
                <CLCharts />
            )
        }else if (idx === 2) {
            return (
                <CLTravelView />
            )
        }
    }

    generatePages() {
        const pageData = CLConstance.staticData.homePages;
        const classes = CLConstance.styles.classes;
        const routes = CLConstance.staticData.routes;

        return pageData.map((page, idx) => {

            const style = {
                backgroundImage: `${page.gradient}, url(${page.imgURL})`,
                backgroundSize: 'cover'
            };

            let classObj = {};
            classObj[classes.centeredDiv] = (idx === 0);
            classObj['row'] = (idx !== 0);
            classObj[classes.pageContentDiv] = classObj['row'];
            const pageDivClass = classNames(classObj);

            return (
                <div
                    style={style}
                    className={classes.fullPage}
                    key={idx}
                >
                    <div className={pageDivClass}>
                        <h1>{page.title}</h1>
                        <p>{page.content}</p>

                        <Link
                            to={routes.portfolio}
                            hidden={true}
                            className="btn btn-danger"
                        >
                            See My Profile!
                        </Link>
                    </div>

                    <div className="container">
                        { this.generateDetailView(idx) }
                    </div>

                </div>
            )
        })
    }

    render() {

        return (
            <div id={CLConstance.styles.ids.homePage} className="text-center">
                {this.generatePages()}
            </div>
        );
    }
}

export default CLHome;