const route = (event) => {
  event.event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
}

const routes = {
  '/': '<h1>Home</h1>',
  '/about': '<h1>About</h1>',
  '/events': '<h1>Events</h1>',
  '/donate': '<h1>Donate</h1>',
  '/get_involved': '<h1>Get Involved</h1>',
  '/404': '<h1>404 Not Found</h1>'
};

const handleLocation = async () => {
  const path  = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();