import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { RouteTransition } from 'react-router-transition';

import CLHeader from './header/CLHeader';
import CLFooter from './footer/CLFooter';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentRoute: '',
        }
    }

    didClickNavItem(url) {
        this.props.router.push(url);
        this.setState({currentRoute: url});
    }

    render() {

        return (
            <div className="App">

                <CLHeader
                    didClickNavItem={ this.didClickNavItem.bind(this) }
                    currentRoute={ this.state.currentRoute }
                />

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

                <CLFooter />

            </div>
        );
    }
}

const AppWithRouters = withRouter(App);

export default AppWithRouters;
