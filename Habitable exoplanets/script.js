// script.js

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substr(1);
  if (hash) {
    document.getElementById(hash).scrollIntoView();
  }
});
