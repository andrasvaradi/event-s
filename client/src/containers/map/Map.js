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
    // const marker = new mapboxgl.Marker()
    // .setLngLat([-0.207302,51.487815])
    // .addTo(map);

    // const getCoordinates = ({ longitude: centerLon, latitude: centerLat }) => {
    //   const r = 0.025 * Math.sqrt(Math.random());
    //   const theta = Math.random() * 2 * Math.PI;
    //   const latitude = centerLat + r * Math.cos(theta);
    //   const longitude = centerLon + r * Math.sin(theta);
    //   return { longitude, latitude };
    // };


    const fetchData = centerCoordinates => {
      const newFeaturesList = [];
      filteredEvents.forEach(el => {
        const id = el._id;
        const location = el.geolocation.split(',')
        const longitude = location[0];
        const latitude = location[1]
        newFeaturesList.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          properties: {
            id,
            name: `${el.name} #${id}`,
            description: `${el.description} #${id}`,
          },
        });
      })
      // for (let i = 0; i < 20; i++) {
      //   const id = i;
      //   const { longitude, latitude } = getCoordinates(centerCoordinates);
      //   newFeaturesList.push({
      //     type: 'Feature',
      //     geometry: {
      //       type: 'Point',
      //       coordinates: [longitude, latitude],
      //     },
      //     properties: {
      //       id,
      //       name: `Random Point #${id}`,
      //       description: `description for Random Point #${id}`,
      //     },
      //   });
      // }
      return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
      });
    };

    // map.on('load', () => {
    //   // add the data source for new a feature collection with no features
    //   map.addSource('random-points-data', {
    //     type: 'geojson',
    //     data: {
    //       type: 'FeatureCollection',
    //       features: [],
    //     },
    //   });
    //   // now add the layer, and reference the data source above by name
    //   map.addLayer({
    //     id: 'random-points-layer',
    //     source: 'random-points-data',
    //     type: 'symbol',
    //     layout: {
    //       // full list of icons here: https://labs.mapbox.com/maki-icons
    //       'icon-image': 'bakery-15', // this will put little croissants on our map
    //       'icon-padding': 0,
    //       'icon-allow-overlap': true,
    //     },
    //   });
    // });
    map.on('load', async () => {
      // get center coordinates
      const { lng, lat } = map.getCenter();
      // fetch new data
      const results = await fetchData({ longitude: lng, latitude: lat });
      // iterate through the feature collection and append marker to the map for each feature
      results.features.forEach(result => {
        const { id, geometry } = result;
        // create marker node
        // const markerNode = document.createElement('div');
        // ReactDOM.render(<Marker id={id} />, markerNode);
        // add marker to map
        new mapboxgl.Marker()
          .setLngLat(geometry.coordinates)
          .addTo(map);
      });
    });

    map.on('moveend', async () => {
      // get center coordinates
      const { lng, lat } = map.getCenter();
      // fetch new data
      const results = await fetchData({ longitude: lng, latitude: lat });
      // iterate through the feature collection and append marker to the map for each feature
      results.features.forEach(result => {
        const { id, geometry } = result;
        // create marker node
        // const markerNode = document.createElement('div');
        // ReactDOM.render(<Marker id={id} />, markerNode);
        // add marker to map
        new mapboxgl.Marker()
          .setLngLat(geometry.coordinates)
          .addTo(map);
      });
    });
    return () => map.remove();
  }, [filteredEvents]);


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