mapboxgl.accessToken = 'pk.eyJ1IjoibWVicmV1ZXIiLCJhIjoiY2l4czJzN3kyMDZheDJwbDkyY2ExY3EyeiJ9.3CQSpkTnT5iKI-pFgaBjrA';

// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mebreuer/cj56zmk733lqq2spf0gwxgop6',
  // initial position in [lon, lat] format
  center: [-73.953,40.762],
  // initial zoom
  zoom: 11
});

var stores = client.listFeatures('cj571ptly0uy833p6vihu984u', {}, function(err, collection) {
  				console.log(collection);
			});

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});