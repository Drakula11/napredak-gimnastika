const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function setHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', setHeader, {
  passive: true
});

setHeader();

toggle.addEventListener('click', function () {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(function (element) {
  observer.observe(element);
});

document.getElementById('year').textContent = new Date().getFullYear();
