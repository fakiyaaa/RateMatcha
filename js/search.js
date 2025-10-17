// Search functionality
function searchByZip() {
  const zip = document.getElementById('zipInput').value.trim();
  
  console.log('Searching for ZIP:', zip); // Debug
  
  if (!zip) {
      alert('Please enter a ZIP code');
      return;
  }
  
  // Validate ZIP code (5 digits)
  const zipPattern = /^\d{5}$/;
  if (!zipPattern.test(zip)) {
      alert('Please enter a valid 5-digit ZIP code');
      return;
  }

  // Get stores sorted by distance
  const stores = getStoresByDistance(zip);
  console.log('Found stores:', stores); // Debug
  
  // Display the stores
  displayStores(stores);
}

// Display stores in the grid
function displayStores(stores) {
  const grid = document.getElementById('storesGrid');
  
  console.log('Displaying stores:', stores.length); // Debug log
  
  if (!grid) {
      console.error('storesGrid element not found!');
      return;
  }
  
  if (stores.length === 0) {
      grid.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 40px;">No matcha spots found. Please try a different ZIP code.</p>';
      return;
  }
  
  grid.innerHTML = stores.map(store => createStoreCard(store)).join('');
  console.log('Cards rendered successfully');
}

// Create HTML for a single store card
function createStoreCard(store) {
  try {
      const storeRatings = getStoreRatings(store.id) || [];
      const avgRating = storeRatings.length > 0 
          ? (storeRatings.reduce((sum, r) => sum + (r.stars || 0), 0) / storeRatings.length).toFixed(1)
          : 0;
      const starDisplay = getStarDisplay(avgRating);
      const reviewsHTML = getReviewsHTML(store.id) || '';
      
      return `
          <div class="store-card">
              <h3>${store.name || 'Unknown Store'}</h3>
              <div class="store-info">
                  <div>${store.address || 'Address not available'}</div>
                  <div>${store.city || 'Unknown'}, CA ${store.zip || '00000'}</div>
                  <div><strong>${(store.distance || 0).toFixed(1)} miles away</strong></div>
              </div>
              <div class="rating-display">
                  <span class="stars">${starDisplay}</span>
                  <span>${avgRating > 0 ? avgRating : 'No rating'} (${storeRatings.length} reviews)</span>
              </div>
              
              <div class="rating-form">
                  <h4>Rate this spot:</h4>
                  <div class="star-rating" id="stars-${store.id}">
                      ${createStarButtons(store.id)}
                  </div>
                  <textarea id="review-${store.id}" placeholder="Write your review..."></textarea>
                  <button class="btn-small" onclick="submitRating(${store.id})">Submit Review</button>
              </div>
              
              ${reviewsHTML}
          </div>
      `;
  } catch (error) {
      console.error('Error creating card for store:', store, error);
      return `
          <div class="store-card">
              <h3>${store.name || 'Unknown'}</h3>
              <p>Error loading store details. Please refresh the page.</p>
          </div>
      `;
  }
}

// Create star rating buttons
function createStarButtons(storeId) {
  return [1, 2, 3, 4, 5]
      .map(n => `<button class="star-btn" onclick="selectRating(${storeId}, ${n})">★</button>`)
      .join('');
}