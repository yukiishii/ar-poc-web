AFRAME.registerComponent('message', {
  update: function() {
    var successFunc = (position) => {
      console.log('update');

      var message = 'lat: ' + position.coords.latitude + ',lon: ' + position.coords.longitude;

      console.log(message);

      var { latitude, longitude } = position.coords;

      this.el.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      this.el.setAttribute('value', 'marker');
    }
    var errorFunc = (error) => { console.error(error) }
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 30000,
    });
  }
})

const LAT_M = '0.000008983148616';
const LNG_M = '0.000010966382364';

window.onload = () => {
  scene = document.querySelector('a-scene');

  var successFunc = (position) => {
    var { latitude, longitude } = position.coords;


    for (var i = 0; i < 10; i++) {
      const model = document.createElement('a-entity');
      lat_update = latitude  + LAT_M * i;
      lng_update = longitude + LNG_M * i;
      model.setAttribute('gps-entity-place', `latitude: ${lat_update}; longitude: ${lng_update};`);
      model.setAttribute('value', 'marker');
      model.setAttribute('scale', '1 1 1');
      model.setAttribute('color', 'ref');

      scene.appendChild(model);
    }
  }

  var errorFunc = (error) => { console.error(error) }

  navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
    enableHighAccuracy: true,
    timeout: 8000,
    maximumAge: 30000,
  });
};
