// import '../../../node_modules/mapbox-gl/src/css/mapbox-gl.css'
import './Map.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// default public token belo
// maboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVqb3ZpdHMiLCJhIjoiY2tseGZsemV4MHBhMzJ1cnp3b2ttYXc4YiJ9.b0_0duw9DfevPB-whkcQbw"
// mapboxgl.workerClass = MapboxWorker;

export default function Map () {
  const mapContainer = useRef();
// const [lng, setLng] = useState(-70.9);
// const [lat, setLat] = useState(42.35);
// const [zoom, setZoom] = useState(9);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [51.5074, 0.1278],
      zoom: 9,
    });
    // map.on('move', () => {
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    //   });
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    // const nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, "top-right");
    return () => map.remove();
  }, []);



  return <div id="mapContainer" className="map" ref={mapContainer}></div>;
}