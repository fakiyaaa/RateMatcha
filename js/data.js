// Store data management
const matchaStores = [
  { 
      id: 1, 
      name: "Matcha Cafe Maiko", 
      zip: "94102", 
      city: "San Francisco", 
      address: "Union Square", 
      distance: 0 
  },
  { 
      id: 2, 
      name: "Stonemill Matcha", 
      zip: "94102", 
      city: "San Francisco", 
      address: "Hayes Valley", 
      distance: 0.5 
  },
  { 
      id: 3, 
      name: "Matcha Love", 
      zip: "94103", 
      city: "San Francisco", 
      address: "SOMA District", 
      distance: 1.2 
  },
  { 
      id: 4, 
      name: "Shuei-Do Manju", 
      zip: "94115", 
      city: "San Francisco", 
      address: "Japantown", 
      distance: 2.3 
  },
  { 
      id: 5, 
      name: "Nana's Green Tea", 
      zip: "94080", 
      city: "South San Francisco", 
      address: "Tanforan Mall", 
      distance: 8.5 
  },
  { 
      id: 6, 
      name: "Matcha Suri", 
      zip: "94401", 
      city: "San Mateo", 
      address: "Downtown San Mateo", 
      distance: 15.2 
  },
  { 
      id: 7, 
      name: "Teaspoon", 
      zip: "94085", 
      city: "Sunnyvale", 
      address: "El Camino Real", 
      distance: 35.1 
  },
  { 
      id: 8, 
      name: "Asha Tea House", 
      zip: "94301", 
      city: "Palo Alto", 
      address: "University Ave", 
      distance: 28.5 
  },
  { 
      id: 9, 
      name: "Matcha Bar", 
      zip: "94607", 
      city: "Oakland", 
      address: "Jack London Square", 
      distance: 12.3 
  },
  { 
      id: 10, 
      name: "Matcha Mylkbar", 
      zip: "94610", 
      city: "Oakland", 
      address: "Piedmont Ave", 
      distance: 14.1 
  },
  { 
      id: 11, 
      name: "Matcha & Co", 
      zip: "94704", 
      city: "Berkeley", 
      address: "Telegraph Ave", 
      distance: 15.8 
  },
  { 
      id: 12, 
      name: "Japanese Tea Garden Cafe", 
      zip: "94118", 
      city: "San Francisco", 
      address: "Golden Gate Park", 
      distance: 3.2 
  }
];

// Get all stores
function getAllStores() {
  return matchaStores;
}

// Get store by ID
function getStoreById(id) {
  return matchaStores.find(store => store.id === id);
}

// Calculate distance between two ZIP codes (simplified)
function calculateDistance(zip1, zip2) {
  return Math.abs(parseInt(zip1) - parseInt(zip2)) / 100;
}

// Get stores sorted by distance from a ZIP code
function getStoresByDistance(zipCode) {
  return matchaStores.map(store => ({
      ...store,
      distance: calculateDistance(store.zip, zipCode)
  })).sort((a, b) => a.distance - b.distance);
}