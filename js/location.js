// Location handling - ZIP code only

// Show search screen
function showSearch() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  
  // Focus on the ZIP input
  setTimeout(() => {
      document.getElementById('zipInput').focus();
  }, 100);
}

// Validate ZIP code
function isValidZipCode(zip) {
  // Basic validation for 5-digit ZIP codes
  const zipPattern = /^\d{5}$/;
  return zipPattern.test(zip);
}