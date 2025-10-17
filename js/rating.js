// Location handling and geolocation
function findMyLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          handleLocationSuccess,
          handleLocationError
      );
  } else {
      showMainContent('📍 Geolocation is not supported by your browser. Enter your ZIP code to find matcha spots');
  }
}

// Handle successful location detection
function handleLocationSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  showMainContent(`
      <strong>📍 Location detected!</strong><br>
      Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}<br>
      Enter your ZIP code below to find nearby matcha spots
  `);
}

// Handle location error
function handleLocationError(error) {
  let message = '';
  
  switch(error.code) {
      case error.PERMISSION_DENIED:
          message = '📍 Location access denied. Enter your ZIP code to find matcha spots';
          break;
      case error.POSITION_UNAVAILABLE:
          message = '📍 Location information unavailable. Enter your ZIP code to find matcha spots';
          break;
      case error.TIMEOUT:
          message = '📍 Location request timed out. Enter your ZIP code to find matcha spots';
          break;
      default:
          message = '📍 Enter your ZIP code to find matcha spots';
          break;
  }
  
  showMainContent(message);
}

// Show main content and hide welcome screen
function showMainContent(locationMessage) {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  document.getElementById('locationInfo').innerHTML = locationMessage;
}

// Validate ZIP code
function isValidZipCode(zip) {
  // Basic validation for 5-digit ZIP codes
  const zipPattern = /^\d{5}$/;
  return zipPattern.test(zip);
}