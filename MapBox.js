import "./styles.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHAtbnVuZXMiLCJhIjoiY2pqNHAxaHIxMDA3aTNrbW15OGx2NW4ybiJ9.pHzT2FAtpO-Xhnc3PzJsFA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",
  center: [-122.42795, 37.726335],
  zoom: 19,
  pitch: 50,
  bearing: 80,
  antialias: true
});

map.on("load", function() {
  map.addLayer({
    id: "extrusion",
    type: "fill-extrusion",
    source: {
      type: "geojson",
      data:
        "https://raw.githubusercontent.com/HP-Nunes/geojson_test/master/buildings_parcels2.geojson"
    },
    paint: {
      "fill-extrusion-color": ["get", "color"],
      // Get the fill-extrusion-color from the source 'color' property.
      // 'fill-extrusion-color': ['get', 'color'],

      // Get fill-extrusion-height from the source 'height' property.
      "fill-extrusion-height": ["get", "gnd1st_del"],

      // Get fill-extrusion-base from the source 'base_height' property.
      "fill-extrusion-base": 0,

      // Make extrusions slightly opaque for see through indoor walls.
      "fill-extrusion-opacity": 0.5
    }
  });
});

map.on("load", function() {
  map.addLayer({
    id: "extrusion_bld",
    type: "fill-extrusion",
    source: {
      type: "geojson",
      data:
        "https://raw.githubusercontent.com/HP-Nunes/geojson_test/master/excelsior_3D.geojson"
    },
    paint: {
      // Get fill-extrusion-height from the source 'height' property.
      "fill-extrusion-height": ["get", "gnd1st_del"],

      // Get fill-extrusion-base from the source 'base_height' property.
      "fill-extrusion-base": 0,

      // Make extrusions slightly opaque for see through indoor walls.
      "fill-extrusion-opacity": 0.5
    }
  });
});

map.on("load", function() {
  map.addLayer({
    id: "lots",
    type: "line",
    paint: {
      "line-width": 3,
      "line-color": ["get", "color"],
      "line-dasharray": [4, 1]
    },
    source: {
      type: "geojson",
      data:
        "https://raw.githubusercontent.com/HP-Nunes/geojson_test/master/edinLot.geojson"
    }
  });
});

// var mapillarySource = {
//   type: 'vector',
//   tiles: ['https://tiles3.mapillary.com/v0.1/{z}/{x}/{y}.mvt'],
//   minzoom: 0,
//   maxzoom: 14
// };
// map.addSource('mapillary', mapillarySource);
// map.addLayer({
//   'id': 'mapillary',
//   'type': 'line',
//   'source': 'mapillary',
//   'source-layer': 'mapillary-sequences',
//   'layout': {
//       'line-cap': 'round',
//       'line-join': 'round'
//   },
//   'paint': {
//       'line-opacity': 0.6,
//       'line-color': 'rgb(53, 175, 109)',
//       'line-width': 2
//   }
// });

