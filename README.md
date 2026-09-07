# IU-DLBCSPJWD01 - Travel Forever - Phase 3 COMPLETED

A responsive full-stack tour booking website.

## Live Deployment
- **Frontend (Vercel):** https://iu-dlbcspjwd01-travelforever.vercel.app
- **Backend (Render):** https://iu-dlbcspjwd01-travelforever-backend.onrender.com
- **Backend API Test:** /api/tours -> returns all tours from data.json

## What's Done - Phase 3
- [x] Backend API: GET /api/tours built with Express
- [x] Data: All tours stored in Backend/data.json and served via API
- [x] Frontend: Dynamic loading of tour cards via fetch()
- [x] Search: Live search filter by city/location
- [x] Sort: Sort by Price (Low to High, High to Low)
- [x] Features: Tour images, "Book Now" button with localStorage, YouTube embed (Goa)
- [x] Error States: "No tours found" message
- [x] Responsive styling
- [x] Deployed to Vercel + Render

## Project Structure

├── Backend/
│ ├── app.js (Express server)
│ ├── data.json (Tour data)
│ └── package.json
├── Frontend/
│ ├── index.html
│ ├── script.js
│ └── style.css
└── README.md
Note: Backend/data.json is the source of  data (database). Frontend/data.json is a build copy for Vercel static hosting.

## Tech Stack
- Frontend: HTML, CSS, JavaScript (fetch API)
- Backend: Node.js, Express.js, CORS
- Deployment: Vercel (Frontend), Render (Backend)

## How to Run Locally
1. Clone repo:
   git clone https://github.com/pulkit130705-rgb/iu-dlbcspjwd01-travelforever.git
2. Run Backend:
   cd Backend
   npm install
   node app.js
   Output: Backend running on http://localhost:3000
3. Run Frontend:
   Open Frontend/index.html with "Live Server" in VS Code
4. Test API:
   Open http://localhost:3000/api/tours

Last Updated: 06 Sep 2026 