/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

import config from 'src/config';
import { countDecimalDigits } from 'src/utils/CommonUtils';
import { clamp, debounce, get } from 'lodash-es';
import { googleAddressSearchAPI } from 'src/api/GoogleMapApi';

const defaultLat = 28.586559;
const defaultLng = 77.087852;

const containerStyle = {
    width: '100%',
    height: '400px',
};

function GoogleMapComponent({
    lat,
    lng,
    label,
    zoom,
    onLatLngChange,
}) {
    const [
, // map
        setMap,
    ] = React.useState(null);

    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);
    const onUnmount = React.useCallback(() => {
        setMap(null);
    }, []);

    const center = {
        lat: Number(lat) || defaultLat,
        lng: Number(lng) || defaultLng,
    };
    const zoomLevel = clamp(zoom || countDecimalDigits(center.lat) * 2, 1, 20);

    // fetch data from google api
    const fetchLatLngByAddress = useRef(debounce(async (address) => {
        try {
            // GOOGLE API REQUEST
            const response = await googleAddressSearchAPI({
                address,
            });

            // GET LAT LNG
            const location = get(response, 'data.results[0].geometry.location');

            // LET CONSUMER KNOW ABD LET IT UPDATE
            if (location) {
                onLatLngChange(location);
            }
        }
        catch (error) {
            console.error('LOG: fetchLatLngByAddress -> error', error);
        }
    }, 1000), []);

    return (
        <LoadScript
            googleMapsApiKey={config.googleMapsApiKey}
        >
            <div className="form-group">
                <label>Search Address</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => fetchLatLngByAddress.current(e.target.value)}
                />
            </div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoomLevel}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    animation="DROP"
                    position={center}
                    label={label}
                    draggable
                    onDragEnd={(e) => {
                        onLatLngChange({
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng(),
                        });
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
}

GoogleMapComponent.propTypes = {
    label: PropTypes.string,
    lat: PropTypes.any,
    lng: PropTypes.any,
    zoom: PropTypes.number,
    onLatLngChange: PropTypes.func,
};

GoogleMapComponent.defaultProps = {
    label: '',
    lat: defaultLat,
    lng: defaultLng,
    zoom: 0,
    onLatLngChange: () => { },
};

export default React.memo(GoogleMapComponent);
