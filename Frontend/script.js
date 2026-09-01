const tourList = document.getElementById('tour-list');
const searchInput = document.getElementById('search');
let allTours = [];

async function loadTours() {
  try {
    const res = await fetch('http://localhost:3000/api/tours');
    allTours = await res.json();
    displayTours(allTours);
  } catch (err) {
    tourList.innerHTML = '<p style="color:red">Error: Could not load tours. Is backend running?</p>';
    console.error(err);
  }
}

function displayTours(tours) {
  tourList.innerHTML = '';
  if (tours.length === 0) {
    tourList.innerHTML = '<p>No tours found</p>';
    return;
  }
  tours.forEach(tour => {
    tourList.innerHTML += `
      <div class="tour-card">
        <h3>${tour.name}</h3>
        <p><b>Location:</b> ${tour.location}</p>
        <p><b>Price:</b> ₹${tour.price}</p>
        <p>${tour.description}</p>
      </div>
    `;
  })
}

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = allTours.filter(t => t.location.toLowerCase().includes(searchTerm));
  displayTours(filtered);
});

loadTours(); // <-- This line calls it when page loads
const sortSelect = document.getElementById('sortSelect');
sortSelect.addEventListener('change', () => {
  let sorted = [...allTours];
  if(sortSelect.value === 'low') {
    sorted.sort((a,b) => a.price - b.price);
  } else if(sortSelect.value === 'high') {
    sorted.sort((a,b) => b.price - a.price);
  }
  displayTours(sorted);
});