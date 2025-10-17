// Main application initialization and global event handlers

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Bay Area Matcha Spots initialized');
  console.log('Total stores loaded:', matchaStores.length);
  
  // Add enter key support for ZIP search
  const zipInput = document.getElementById('zipInput');
  if (zipInput) {
      zipInput.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              searchByZip();
          }
      });
  }
});

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

// Test function to check if everything is loaded
function testSetup() {
  console.log('Stores:', matchaStores);
  console.log('Search function:', typeof searchByZip);
  console.log('Display function:', typeof displayStores);
}