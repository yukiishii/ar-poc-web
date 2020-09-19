window.onload = () => {
  scene = document.querySelector('a-scene');

  navigator.geolocation.watchPosition((position) => {
    var { latitude, longitude } = position.coords;

    console.log('latitude', latitude);
    $('#log-latitude').text(latitude);
    $('#log-longitude').text(longitude);
  }, () => {});

  const addLocation = () => {
    console.log('addLocation');

    var successFunc = (position) => {
      var { latitude, longitude } = position.coords;

      const tag = $('#input-tag').val();
      console.log('tag', tag);
  
      const model = document.createElement('a-entity');
      model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      model.setAttribute('text', { value: tag, color: 'red' });
      model.setAttribute('scale', '10 10 10');
      scene.appendChild(model);
    }
  
    var errorFunc = (error) => { console.error(error) }
  
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 30000,
    });
  }

  $('#add-location').on('click', () => {
    addLocation();
  });
};
