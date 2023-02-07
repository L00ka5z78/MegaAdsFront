import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import 'leaflet/dist/leaflet.css';
import './Map.css'
import {SearchContext} from "../../context/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext)  //pobierasz context i go tu wkladasz

        useEffect(() => {
            console.log('make req to search for ', search);
        }, [search])

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[50.2657152, 18.9945008]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2657152, 18.9945008]}>
                    <Popup>
                        <h2>IT Focus</h2>
                        <p>Firma IT</p>
                    </Popup>
                </Marker>

                <Marker position={[50, 18.9945008]}>
                    <Popup>
                        <h2>Not IT Focus</h2>
                        <p>Somewhere.....</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}