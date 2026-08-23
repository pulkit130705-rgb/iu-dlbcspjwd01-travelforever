# 1u-dlbcspjwd01-travelforever

# Travel Forever - Phase 2

A responsive full-stack tour booking website. Users can view all tour packages and search by city.

## What's Done
- [x] Backend API: `GET /api/tours` built with Node.js + Express
- [x] Load data from `data.json` using fetch
- [x] Display tour cards dynamically
- [x] Live search filter by city/location
- [x] Responsive basic styling
- [x] Error States: "No tours found" message

## Next Steps
- [ ] Add tour images
- [ ] Add "Book Now" button
- [ ] Embed YouTube video
- [ ] Deploy to Render/Vercel

## Features Completed
- **Backend API**: `GET /api/tours` built with Node.js + Express
- **Data**: All tours stored in `data.json`
- **Frontend**: Dynamic loading of tours using Fetch API
- **Live Search**: Filter tours by location in real-time
- **Responsive Design**: Works on mobile, tablet, desktop

## Tech Stack
**Backend**: Node.js, Express.js, CORS 
**Frontend**: HTML5, CSS3, Vanilla JavaScript 
**Data**: JSON

## Project Structure
learning-js/
├── Backend/
│   ├── app.js          # Express server
│   ├── data.json       # Tour data
│   └── package.json
├── Frontend/
│   ├── index.html      # Main page
│   ├── style.css       # Styling
│   └── script.js       # Fetch + Search logic
└── screenshots/        # App screenshots

## ▶️ How to Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/your-username/travel-forever.git
cd travel-forever
```
cd Backend
npm install express cors
node app.js
Output: Backend running on http://localhost:3000

Open Frontend/index.html with "Live Server" in VS Code
Test API
Open http://localhost:3000/api/tours to see JSON data

### Last Updated: 22 AUG 2026

