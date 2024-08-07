"use client"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin
} 
from "@vis.gl/react-google-maps"
import { useEffect, useState } from 'react';

const GoogleMap = (props) => {
    const position = props.position;
    const url = props.url;

    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapID = process.env.NEXT_PUBLIC_MAP_ID;

    useEffect(() => {
      console.log("Google Maps API Key:", key)
      console.log("Google Maps Map ID:", mapID)
    }, [key, mapID])

    const handleOpenNewWindow = () => {
      window.open(url, "_blank");
    };

    if (!key || !mapID) {
      console.error("Google Maps API Key or Map ID is missing");
      return <div>Loading...</div>; // or another fallback UI
    }

    return (
      <APIProvider apiKey={key}>
        <div className="h-[50vh] min-h-[300px] min-w-[300px] w-[80vw] md:h-[60vh] max-w-[1000px]">
          <Map
            zoom={15}
            center={position}
            mapId={mapID}
          >  
            <AdvancedMarker position={position} onClick={handleOpenNewWindow}>
              <Pin borderColor="black" glyphColor="black"/>
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    );
};

export default GoogleMap;
