const tourList = document.getElementById('tour-list');
const searchInput = document.getElementById('search');
let allTours = [];
let filteredTours = [];
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
// Update counter on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('booking-count').innerText = `Bookings: ${bookings.length}`;
});


async function loadTours() {
  try {
    const res = await fetch('https://iu-dlbcspjwd01-travelforever-backend.onrender.com/api/tours');
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
  filteredTours = tours;
  
  tours.forEach(tour => {
    const isBooked = bookings.some(b => b.id === tour.id);
    const div = document.createElement('div');
    div.className = 'tour-card';
    div.innerHTML = `
      <h3>${tour.name} - ${tour.location}</h3>
      <p>Price: $${tour.price}</p>
      <button onclick="bookTour(${tour.id})" 
        style="background:${isBooked ? 'green' : '#ff6b00'}; color:white; padding:8px 15px; border:none; border-radius:5px; cursor:pointer;"
        ${isBooked ? 'disabled' : ''}>
        ${isBooked ? '✓ Booked' : 'Book Now'}
      </button>
    `;
    tourList.appendChild(div);
  });
}

function bookTour(id) {
  const tour = allTours.find(t => t.id === id);
  if (bookings.some(b => b.id === id)) {
    alert('Already booked!');
    return;
  }
  bookings.push(tour);
  localStorage.setItem('bookings', JSON.stringify(bookings));
  document.getElementById('booking-count').innerText = `Bookings: ${bookings.length}`;
  alert(`Booked: ${tour.name} for $${tour.price}`);
  displayTours(filteredTours);
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