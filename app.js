window.onload = () => {
  scene = document.querySelector('a-scene');

  const addLocation = () => {
    console.log('addLocation');

    var successFunc = (position) => {
      var { latitude, longitude } = position.coords;
  
      const model = document.createElement('a-entity');
      model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
      model.setAttribute('text', { value: 'marker', color: 'red' });
      model.setAttribute('scale', '10 10 10');
      model.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
      });
      scene.appendChild(model);
    }
  
    var errorFunc = (error) => { console.error(error) }
  
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0,
    });
  }

  $('#add-location').on('click', () => {
    addLocation();
  });
};
