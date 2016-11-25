/**
 * Created by chengluli on 25/11/2016.
 */
import React, {Component} from 'react';

import Constance from '../utils/Constance';
const google = window.google;

export default class MapView extends Component {

    handleMapDivMounted(div) {
        this.map = new google.maps.Map(div, {
            zoom: 13,
        });
        this.onPlaceChanged();
    }

    onPlaceChanged() {

        let markers = [];
        const place = this.props.searchedPlace;

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();

        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }
        const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
            map: this.map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
        }));

        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }

        this.map.fitBounds(bounds);
    }

    render() {

        if(!this.props.searchedPlace.hasOwnProperty("address_components")) {
            return null
        }

        const styles = Constance.styles;

        return (
            <div className="row" id={styles.ids.mapView}>
                <div className="col-sm-8 col-sm-offset-2" id={styles.ids.mapConatiner}>
                    <div
                        ref={this.handleMapDivMounted.bind(this)}
                        style={{height: "350px"}}
                    />

                    <br />

                    <p>
                        Is this the correct address?
                    </p>

                    <h4>
                        {this.props.searchedPlace["formatted_address"] || "N/A"}
                    </h4>

                    <span className="col-sm-2" />

                    <div className="col-sm-4">
                        <button
                            className="btn btn-primary col-sm-12"
                            onClick={this.props.onConfirmBtnClicked}
                        >
                            Yes, that's right
                        </button>
                    </div>

                    <div className="col-sm-4">
                        <button className="btn btn-info col-sm-12">
                            Add unit # or fix address
                        </button>
                    </div>

                    <span className="col-sm-offset-2" />
                </div>
            </div>
        )
    }
}