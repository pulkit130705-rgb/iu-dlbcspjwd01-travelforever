


console.log('app.js started');

const tours = [
  { "title": "Goa Beach Trip", "location": "Goa", "price": 12000, "days": 3 },
  { "title": "Mumbai City Tour", "location": "Mumbai", "price": 5000, "days": 1 },
  { "title": "Kerala Backwaters", "location": "Kerala", "price": 15000, "days": 5 },
  { "title": "Delhi Heritage", "location": "Delhi", "price": 8000, "days": 2 }
];

const tourList = document.getElementById('tour-list');
const search = document.getElementById('search');

function displayTours(filteredTours) {
  tourList.innerHTML = ''; 
  if(filteredTours.length === 0){
    tourList.innerHTML = '<p>No tours found</p>';
    return;
  }
  filteredTours.forEach(tour => {
    tourList.innerHTML += `
      <div class="tour-card">
        <h3>${tour.title}</h3>
        <p><b>Location:</b> ${tour.location}</p>
        <p><b>Days:</b> ${tour.days} Days</p>
        <p><b>Price:</b> ₹${tour.price}</p>
      </div>
    `;
  });
}

displayTours(tours); // Show tours immediately

search.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = tours.filter(tour => 
    tour.location.toLowerCase().includes(searchTerm) || 
    tour.title.toLowerCase().includes(searchTerm)
  );
  displayTours(filtered);
});
