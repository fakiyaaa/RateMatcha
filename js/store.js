async function loadStore() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const response = await fetch("../data/stores.json");
  const data = await response.json();

  const store = data.stores.find(s => s.id === id);

  if (!store) {
    document.getElementById("store-details").innerHTML = "<p>Store not found.</p>";
    return;
  }

  document.getElementById("store-details").innerHTML = `
    <h1>${store.name}</h1>
    <p><strong>Address:</strong> ${store.address}</p>
    <p><strong>City:</strong> ${store.city}</p>
    <p><strong>Zip:</strong> ${store.zip}</p>
    <p><strong>Hours:</strong> ${store.hours}</p>
    <p><strong>Phone:</strong> ${store.phone}</p>
    <p><strong>Website:</strong> 
      <a href="${store.website}" target="_blank">${store.website}</a>
    </p>

    <button onclick="window.history.back()">← Back</button>
  `;
}

loadStore();
