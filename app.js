 //Fetch tours from data.json
fetch('data.json')
  .then(response => response.json())
  .then(tours => {
    console.log("Tours loaded:", tours); // check console
    displayTours(tours);
  })
  .catch(error => console.error("Error:", error));

// Function to show tours on page
function displayTours(tours) {
  const tourList = document.getElementById('tour-list');
  tourList.innerHTML = ''; // clear "Loading..."

  tours.forEach(tour => {
    const tourCard = `
      <div style="border:1px solid #ccc; padding:10px; margin:10px; border-radius:8px;">
        <h2>${tour.title}</h2>
        <p><b>Location:</b> ${tour.location}</p>
        <p><b>Days:</b> ${tour.days}</p>
        <p><b>Price:</b> ₹${tour.price}</p>
      </div>
    `;
    tourList.innerHTML += tourCard;
  });
}
