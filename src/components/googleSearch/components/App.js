import React, {Component} from 'react';

import '../index.css';

import Constance from '../utils/Constance';
import SearchBox from './SearchBox';
import MapView from './MapView';

const google = window.google;

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedPlace: {},
        }
    }

    onPlaceChanged(searchedPlace) {
        this.setState({searchedPlace})
    }

    onConfirmBtnClicked() {
        const place = this.state.searchedPlace;
        const addressComponents = place.address_components;
        let locality;

        if(!addressComponents) {
            console.log('Invalid address');
            return
        }

        for (let key in addressComponents) {
            if(addressComponents[key].types[0] == 'locality') {
                locality = (addressComponents[key].short_name).toLowerCase();
            }
        }

        if(Constance.whitelist.indexOf(locality) === -1) {
            alert('We’re not in your area yet, but we are expanding quickly!')
        }else {
            alert('Yay! We have service in this area!')
        }

    }

    render() {
        const bgImgURL = 'https://imgdrop.imgix.net/577315b68e784bd0b9fca1220be02dba.jpg?w=1920';
        const style = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImgURL})`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        };

        const styles = Constance.styles;
        return (
            <div style={style} className="text-center" id={styles.ids.root}>

                <h1 className={styles.classes.noMargin}>
                    AMNE Housing, a demo for Richard Chang :p
                </h1>

                <SearchBox
                    onPlaceChanged={this.onPlaceChanged.bind(this)}
                    searchedPlace={this.state.searchedPlace}
                />

                <MapView
                    onConfirmBtnClicked={this.onConfirmBtnClicked.bind(this)}
                    searchedPlace={this.state.searchedPlace}
                />

            </div>
        );
    }
}