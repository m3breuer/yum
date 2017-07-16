mapboxgl.accessToken = 'pk.eyJ1IjoibWVicmV1ZXIiLCJhIjoiY2l4czJzN3kyMDZheDJwbDkyY2ExY3EyeiJ9.3CQSpkTnT5iKI-pFgaBjrA';

// This adds the map to your page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mebreuer/cj56zmk733lqq2spf0gwxgop6',
  // initial position in [lon, lat] format
  center: [-77.034084, 38.909671],
  // initial zoom
  zoom: 14
});