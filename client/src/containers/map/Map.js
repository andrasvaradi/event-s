import './Map.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// default public token below
// maboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVqb3ZpdHMiLCJhIjoiY2tseGZsemV4MHBhMzJ1cnp3b2ttYXc4YiJ9.b0_0duw9DfevPB-whkcQbw";


export default function Map ({ filteredEvents }) {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-0.1);
  const [lat, setLat] = useState(51.5);
  const [zoom, setZoom] = useState(9.8);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    // console.log(map)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    // const nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, "top-right");
    const marker = new mapboxgl.Marker()
    .setLngLat([-0.2, 51.5])
    .addTo(map);
    return () => map.remove();
  }, []);


  return (
    <div className='relative-container'>
      <div className="relative" >
        <div>
          <div id="mapContainer" className="map" ref={mapContainer}></div>
        </div>
      </div>
    </div>
  )
}