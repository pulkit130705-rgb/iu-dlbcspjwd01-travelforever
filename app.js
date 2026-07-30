

document.addEventListener('DOMContentLoaded', () => {
  const tourList = document.getElementById('tour-list');
  const search = document.getElementById('search');

  fetch('./data.json')
    .then(res => res.json())
    .then(tours => {
      function displayTours(filteredTours) {
        tourList.innerHTML = ''; 
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
      displayTours(tours);
      search.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = tours.filter(tour => 
          tour.location.toLowerCase().includes(searchTerm)
        );
        displayTours(filtered);
      });
    })
    .catch(err => tourList.innerHTML = 'Error loading data');
});



