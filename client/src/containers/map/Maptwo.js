import React, { useEffect, useState} from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVqb3ZpdHMiLCJhIjoiY2tseGgzZnhkMTB1ODJucGw0ajE0azJlOCJ9.u7EY8qnSg0jNVthBXv-Q4g";

export default function Map () {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}