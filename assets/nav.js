/* nav.js — shared across all pages */
(function () {
  function buildNav(activePath) {
    const links = [
      { href: '/',              label: 'Home' },
      { href: '/roadmap',       label: 'Roadmap' },
      { href: '/sovereignty',   label: 'Sovereignty & Linux' },
      { href: '/maritime',      label: 'Maritime & Comms' },
      { href: '/civic-commons', label: 'Civic Commons' },
      { href: '/open-data',     label: 'Open Data' },
      { href: '/fundraising',   label: 'Fundraising' },
      { href: '/cast',          label: 'CAST' },
      { href: '/annexes',       label: 'Annexes' },
    ];

    const nav = document.getElementById('site-nav');
    if (!nav) return;

    const brand = `
      <a href="/" class="nav-brand">
        <div class="nav-brand-mark">R</div>
        <div class="nav-brand-text">
          <strong>RNLI CDIO</strong>
          An independent thought experiment
        </div>
      </a>`;

    const ul = links.map(l => {
      const active = l.href === activePath ? ' class="active"' : '';
      return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
    }).join('');

    const mobileLinks = links.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join('');

    nav.innerHTML = `
      ${brand}
      <ul class="nav-links">${ul}</ul>
      <button class="nav-hamburger" id="hamburger" aria-label="Menu">&#9776;</button>
    `;

    const mobile = document.getElementById('mobile-menu');
    if (mobile) {
      mobile.innerHTML = mobileLinks;
    }

    document.getElementById('hamburger').addEventListener('click', () => {
      const m = document.getElementById('mobile-menu');
      m.classList.toggle('open');
    });
  }

  window.buildNav = buildNav;
})();
