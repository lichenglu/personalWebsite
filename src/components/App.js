import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { RouteTransition } from 'react-router-transition';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
injectTapEventPlugin();

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
            <MuiThemeProvider muiTheme={getMuiTheme()}>
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
            </MuiThemeProvider>
        );
    }
}

const AppWithRouters = withRouter(App);

export default AppWithRouters;
