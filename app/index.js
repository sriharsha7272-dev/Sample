const http = require("http");

const PORT = 3000;

const hotels = [
  { id: 1, name: "Hotel Sunrise", city: "Hyderabad" },
  { id: 2, name: "Ocean View Resort", city: "Goa" }
];

const server = http.createServer((req, res) => {
  // CORS headers (important for mobile apps)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "UP" }));
  } 
  else if (req.url === "/api/hotels") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(hotels));
  } 
  else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hotel Booking API - DevOps Learning");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

