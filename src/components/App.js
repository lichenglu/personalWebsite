import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { RouteTransition } from 'react-router-transition';

import CLHeader from './header/CLHeader';

class App extends Component {

    didClickNavItem(url) {
        this.props.router.push(url);
    }

    render() {

        return (
            <div className="App">

                <CLHeader didClickNavItem={this.didClickNavItem.bind(this)} />

                <div>
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                    >
                        {this.props.children}
                    </RouteTransition>
                </div>

            </div>
        );
    }
}

const AppWithRouters = withRouter(App);

export default AppWithRouters;
