let allTours = [];
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const toursContainer = document.getElementById("tours-container");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

async function loadTours() {
  const res = await fetch("./data.json");
  allTours = await res.json();
  displayTours(allTours);
  updateBookingCount();
}

function displayTours(tours) {
  toursContainer.innerHTML = "";
  tours.forEach(tour => {
    const isBooked = bookings.includes(tour.id);
    const btnLabel = isBooked ? "Booked ✓" : "Book Now";
    const card = `
      <div class="tour-card">
        <img src="${tour.image}" alt="${tour.city}" style="width:100%; height:180px; object-fit:cover; border-radius:8px;">
        <h3 style="color:#0ea5e9;">${tour.city}</h3>
        <p>Price: Rs.${tour.price}</p>
        <p>${tour.description || 'Amazing tour package'}</p>
        <button onclick="bookTour(${tour.id})" ${isBooked ? "disabled" : ""} style="${isBooked ? 'background:grey;' : ''}">${btnLabel}</button>
      </div>
    `;
    toursContainer.innerHTML += card;
  });
}

function bookTour(id) {
  if (!bookings.includes(id)) {
    bookings.push(id);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    updateBookingCount();
    displayTours(allTours);
  }
}

function updateBookingCount() {
  const countEl = document.getElementById("booking-count");
  if (countEl) countEl.textContent = `Bookings:${bookings.length}`;
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = allTours.filter(t => t.city.toLowerCase().includes(keyword));
  displayTours(filtered);
});

sortSelect.addEventListener("change", (e) => {
  let sorted = [...allTours];
  if (e.target.value === "low") {
    sorted.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (e.target.value === "high") {
    sorted.sort((a, b) => Number(b.price) - Number(a.price));
  }
  displayTours(sorted);
});

loadTours();