/**
 * Created by chengluli on 24/11/2016.
 */
import React, {Component} from 'react';

const google = window.google;

export default class AMSearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedPlace: []
        }
    }

    INPUT_STYLE = {
        boxSizing: `border-box`,
        MozBoxSizing: `border-box`,
        border: `1px solid transparent`,
        width: `50%`,
        height: `32px`,
        marginTop: `25vh`,
        padding: `0 12px`,
        borderRadius: `1px`,
        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
        fontSize: `14px`,
        outline: `none`,
        textOverflow: `ellipses`,
        color: 'black',
    };

    handleSearchBoxMounted(searchBox) {
        if(searchBox) {
            this.searchBox = new google.maps.places.Autocomplete(searchBox);
            this.searchBox.addListener('place_changed', () => {
                const searchedPlace = this.searchBox.getPlace();
                this.props.onPlaceChanged(searchedPlace);
            });
            this.geolocate()
        }
    }

    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    geolocate() {

        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                const geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                const circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                this.searchBox.setBounds(circle.getBounds());
            });
        }
    }

    render() {

        if(this.props.searchedPlace.hasOwnProperty("address_components")) {
            return null
        }

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search Your Dream House!"
                    ref={this.handleSearchBoxMounted.bind(this)}
                    style={this.INPUT_STYLE}
                />
            </div>
        )
    }
}