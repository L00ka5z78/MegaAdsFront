import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'
import {SearchContext} from "../../context/search.context";
import {SimpleAdEntity} from 'types'

import './Map.css'
import 'leaflet/dist/leaflet.css';
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext)  //pobierasz context i go tu wkladasz
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:3001/ad/search/${search}`)
            const data = await res.json()

            setAds((data))
        })()
    }, [search])
    // add spinner to show that searching in progress

    return (
        <div className="map">

            <MapContainer center={[50.2657152, 18.9945008]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker  key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                               <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}