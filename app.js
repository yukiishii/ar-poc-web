window.onload = () => {
  var LAT_M = '0.000008983148616';
  var LNG_M = '0.000010966382364';

  scene = document.querySelector('a-scene');

  var successFunc = (position) => {
    var { latitude, longitude } = position.coords;

    console.log('latitude', latitude);
    console.log('longitude', longitude);
    for (var i = 0; i < 10; i++) {
      const model = document.createElement('a-entity');
      lat_update = latitude  + LAT_M * i;
      lng_update = longitude + LNG_M * i;
      model.setAttribute('gps-entity-place', `latitude: ${lat_update}; longitude: ${lng_update};`);
      model.setAttribute('text', { value: 'marker', color: 'red' });
      model.setAttribute('scale', '10 10 10');
      model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
      });
      scene.appendChild(model);
    }
  }

  var errorFunc = (error) => { console.error(error) }

  navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 0,
  });
};
