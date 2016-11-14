/**
 * Created by chengluli on 13/11/2016.
 */
import React, { Component } from 'react';

import CLConstance from '../utils/Constance';

export default class CLFooter extends Component {

    didClickIcon(isEmail, link, e) {

        console.log(e, isEmail, link);

        if(isEmail) {
            const subject = 'New Opportunity Available: ';
            const body = 'Hi Chenglu, ';
            window.location.href = `mailto:${link}?subject=${subject}&body=${body}`;
        }else {
            var win = window.open(link, '_blank');
            win.focus();
        }
    }

    generateIcons() {
        const icons = CLConstance.staticData.footer.socialIcons;
        const classes = CLConstance.styles.classes;

        return icons.map((icon, idx) => {
            return (
                <div className={"col-xs-4 " + classes.footerIcon} key={idx}>
                    <i
                        className={icon.iconURL}
                        onClick={this.didClickIcon.bind(this, icon.isEmail, icon.link)}
                    />
                    <p>{icon.name}</p>
                </div>
            )
        })
    }

    render() {

        const footerData = CLConstance.staticData.footer;

        return (
            <div id={CLConstance.styles.ids.footer} className="text-center">

                <h3>
                    { footerData.title }
                </h3>

                <div className="col-xs-12">
                    { this.generateIcons() }
                </div>

            </div>
        )
    }
}