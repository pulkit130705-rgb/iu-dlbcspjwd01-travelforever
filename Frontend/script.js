const API_URL = "https://iu-dlbcspjwd01-travelforever-backend.onrender.com/api/tours";
const toursContainer = document.getElementById("tours-container");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
let allTours = [];
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// 1. LOADING STATE FOR RENDER COLD START - THIS FIXES IT
toursContainer.innerHTML = "<p style='text-align:center; padding:20px;'>Loading tours... Please wait 30s (Render free tier cold start) ⏳</p>";

// 2. FETCH FROM LIVE BACKEND
fetch(API_URL)
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then(data => {
    allTours = data;
    displayTours(allTours);
  })
  .catch(error => {
    console.error(error);
    toursContainer.innerHTML = "<p style='color:red; text-align:center;'>Failed to load tours. Backend is waking up, please refresh after 30 seconds.</p>";
  });

// 3. DISPLAY FUNCTION (REUSABLE FOR SEARCH/SORT)
function displayTours(tours) {
  toursContainer.innerHTML = "";
  if (tours.length === 0) {
    toursContainer.innerHTML = "<p>No tours found.</p>";
    return;
  }
  tours.forEach(tour => {
  const isBooked = bookings.includes(tour.id);  
  const btnLabel = isBooked ? "Booked ✓" : "Book Now";    
    const card = `
      <div class="tour-card">
        <img src="${tour.image}" loading="lazy" alt="${tour.location}">
        <h3>${tour.location}</h3>
        <p>Price: Rs.${tour.price}</p>
        <p>${tour.description || 'Amazing tour package'}</p>
        <button onclick="bookTour(${tour.id})" ${isBooked ? "disabled" : ""}>${btnLabel}</button>
      </div>
    `;
    toursContainer.innerHTML += card;
  });
  updateBookingCount();
}

// 4. SEARCH
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allTours.filter(t => t.location.toLowerCase().includes(query));
  displayTours(filtered);
});

// 5. SORT BY PRICE
sortSelect.addEventListener("change", (e) => {
  let sorted = [...allTours];
  if (e.target.value === "low") sorted.sort((a,b) => Number(a.price) - Number(b.price));
if (e.target.value === "high") sorted.sort((a,b) => Number(b.price) - Number(a.price));
  displayTours(sorted);
});

// 6. BOOKING WITH LOCALSTORAGE PERSISTENCE
function bookTour(id) {
  bookings.push(id);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  updateBookingCount();
  displayTours(allTours); // re-render so button shows Booked
}

function updateBookingCount() {
  const countEl = document.getElementById("booking-count");
  if (countEl) countEl.textContent = `Bookings:${bookings.length}`;
}