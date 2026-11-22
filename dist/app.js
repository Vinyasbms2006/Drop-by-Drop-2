const projects = [
  {
    id: 'avaada', title: 'Avaada Solar Power Plant', location: 'Karnataka & Maharashtra', category: 'industrial', tag: 'SOLAR & INDUSTRIAL', image: 'page08-02.webp',
    summary: 'Rainwater harvesting at the scale of a solar power campus.', highlight: '8 sites · 8,000 acres', status: 'Implemented',
    description: 'Drop By Drop designed and implemented rainwater harvesting structures across multiple Avaada solar power sites. The project brought site-specific water conservation to a large industrial footprint.',
    facts: [['8 sites', '6 in Karnataka, 2 in Maharashtra'], ['8,000 acres', 'Total project area']],
    work: ['Designed and executed rainwater harvesting structures across the sites.', 'Adapted the approach to the needs of large solar power installations.'], source: 'Company profile, page 8.'
  },
  {
    id: 'temple-bell', title: 'Temple Bell Apartment', location: 'Yeshwanthpur, Bengaluru', category: 'residential', tag: 'APARTMENT COMMUNITY', image: 'page09-02.webp',
    summary: 'A customised approach to water storage and groundwater recharge.', highlight: 'A community of 450 flats', status: 'Implemented',
    description: 'Temple Bell Apartment faced water scarcity without a rainwater harvesting system. Following a detailed site survey, the team implemented a customised solution that combined water storage with groundwater recharge.',
    facts: [['450 flats', 'Residential community']],
    work: ['Conducted a site survey to understand the property’s water requirements.', 'Implemented rainwater storage and groundwater recharge systems.'], source: 'Company profile, page 9.'
  },
  {
    id: 'victory-harmony', title: 'Victory Harmony Apartment', location: 'Hebbal, Bengaluru', category: 'residential', tag: 'APARTMENT COMMUNITY', image: 'page09-03.webp',
    summary: 'Reducing dependence on external water supplies during the rains.', highlight: '150 to 2–3 tankers / month in the rainy season', status: 'Implemented',
    description: 'Victory Harmony relied on borewells, Cauvery water and around 150 tanker supplies per month. The company profile reports that, after rainwater harvesting was implemented, the complex required only 2–3 tanker supplies per month during the rainy season. This is a project-specific result and varies with rainfall and site conditions.',
    facts: [['150 / month', 'Previously reported tanker supplies'], ['2–3 / month', 'Reported during the rainy season']],
    work: ['Implemented a rainwater harvesting solution for the apartment complex.', 'Used available rainfall to reduce dependence on external supplies.'], source: 'Company profile, page 9. Figures are reported for this site; they are not a guarantee for other properties.'
  },
  {
    id: 'schools', title: 'Water-wise government schools', location: 'Bengaluru', category: 'education', tag: 'EDUCATION & CSR', image: 'page10-02.webp',
    summary: 'Rainwater harvesting that supports schools and their communities.', highlight: 'Supported by Gokaldas Exports CSR', status: 'Completed & handed over',
    description: 'With CSR support from Gokaldas Exports, Drop By Drop completed rainwater harvesting work at government schools in Bengaluru and handed over the project to the schools.',
    facts: [['Community impact', 'Government-school installations']],
    work: ['Rainwater harvesting work at GPS Bagalagunte, GHPS Chikkabidarakal and SNPS Mallasandra.', 'Collaboration between schools, the installation team and a CSR partner.'], source: 'Company profile, pages 10–11.'
  },
  {
    id: 'reitzel', title: 'Reitzel India', location: 'Kunigal, Tumakuru', category: 'industrial', tag: 'INDUSTRIAL CAMPUS', image: 'page12-03.webp',
    summary: 'A campus system designed to collect, store and recharge rainwater.', highlight: 'One borewell · four sumps', status: 'System design described in the profile',
    description: 'The rainwater harvesting design for Reitzel India combines collection and storage in four campus sumps with recharge of one borewell. The profile describes simple online filters as part of the collection and storage approach.',
    facts: [['1 borewell', 'Recharge in the system design'], ['4 sumps', 'Storage in the system design']],
    work: ['Designed an integrated approach to rainwater storage and recharge.', 'Specified online filtration to collect rainwater for the campus sumps.'], source: 'Company profile, page 12. The text describes the system design and does not state a completion date.'
  },
  {
    id: 'baldwin', title: 'Baldwin PU College', location: 'Bengaluru', category: 'education', tag: 'EDUCATIONAL INSTITUTION', image: 'page13-03.webp',
    summary: 'Practical rainwater harvesting for an educational campus.', highlight: 'Storage & recharge on campus', status: 'Implemented',
    description: 'Drop By Drop successfully implemented rainwater harvesting at Baldwin Boys and Girls Pre-University College in Bengaluru. The company profile states that the work followed KSCST and Central Water Board guidelines.',
    facts: [['Education', 'Rainwater harvesting on campus']],
    work: ['Implemented campus rainwater harvesting.', 'Applied the guidelines referenced in the organisation’s profile.'], source: 'Company profile, page 13.'
  },
  {
    id: 'megha', title: 'Megha Engineering & Infrastructure', location: 'Anantapur', category: 'industrial', tag: 'INDUSTRIAL SITE', image: 'page08-01.webp',
    summary: 'Turning a rainy-season flooding problem into a conservation opportunity.', highlight: 'Rainwater & runoff management', status: 'Implemented',
    description: 'Megha Engineering and Infrastructure partnered with Drop By Drop to address flooding during the rainy season. The team designed and executed a rainwater harvesting system to help conserve water and mitigate flooding risks.',
    facts: [['Site-specific design', 'Rainy-season water management']],
    work: ['Designed a system in response to the site’s flooding challenges.', 'Executed rainwater harvesting structures to conserve runoff.'], source: 'Company profile, page 8.'
  },
  {
    id: 'texport', title: 'Texport Industries', location: 'Yeshwanthpur, Bengaluru', category: 'industrial', tag: 'INDUSTRIAL PLANNING', image: 'page09-01.webp',
    summary: 'An integrated plan for filtration, borewell recharge and storage.', highlight: 'Filtration · recharge · storage', status: 'Proposed approach in the profile',
    description: 'The company profile identifies opportunities to conserve rainwater at Texport Industries through a system combining a sand filter, borewell recharge and water storage. The text describes expected benefits and does not confirm completion.',
    facts: [['Integrated approach', 'Filtration, storage and recharge']],
    work: ['Proposed rainwater filtering through a simple sand filter.', 'Combined borewell recharge and water storage in the recommended approach.'], source: 'Company profile, page 9. Described as a proposed approach; no measured outcome is stated.'
  },
  {
    id: 'aambis', title: 'AAMBIS Food Factory', location: 'Kunichi, Tirupattur district', category: 'industrial', tag: 'WATER MANAGEMENT DESIGN', image: 'page08-03.webp',
    summary: 'A customised rainwater harvesting model for a water-intensive factory.', highlight: 'Custom campus model prepared', status: 'Design / planning stage in the profile',
    description: 'The profile reports peak-summer water use of two lakh litres a day at AAMBIS Food Factory. With the existing tube well supply falling short, Drop By Drop prepared a customised rainwater harvesting model map for the factory campus. The document describes preparation of the model, rather than a completed installation.',
    facts: [['2 lakh litres / day', 'Reported peak-summer water use']],
    work: ['Prepared a custom rainwater harvesting model map.', 'Planned around the campus’s water supply challenges.'], source: 'Company profile, page 8. Proposed benefits are not presented here as measured results.'
  }
];

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', expanded);
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const grid = document.querySelector('#project-grid');
const moreButton = document.querySelector('#more-projects');
let activeFilter = 'all';
let expandedProjects = false;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]));

function renderProjects() {
  const matching = projects.filter(project => activeFilter === 'all' || project.category === activeFilter);
  const visible = activeFilter === 'all' && !expandedProjects ? matching.slice(0, 6) : matching;
  grid.innerHTML = visible.map(project => `<article class="project-card">
    <div class="project-image"><img src="assets/${project.image}" alt="${escapeHTML(project.title)} rainwater harvesting project" width="600" height="400" loading="lazy"><span class="project-tag">${project.tag}</span></div>
    <h3>${escapeHTML(project.title)}</h3><p class="project-location">${escapeHTML(project.location)}</p>
    <p>${escapeHTML(project.summary)}</p><span class="project-detail">${escapeHTML(project.highlight)}</span>
    <button type="button" data-project="${project.id}" aria-label="View ${escapeHTML(project.title)} project details">View project</button>
  </article>`).join('');
  document.querySelector('.project-count').textContent = `${visible.length} ${activeFilter === 'all' && !expandedProjects ? 'selected projects' : 'projects'}`;
  moreButton.hidden = activeFilter !== 'all';
  moreButton.textContent = expandedProjects ? 'Show selected projects' : 'See more projects';
  moreButton.setAttribute('aria-expanded', String(expandedProjects));
  moreButton.setAttribute('aria-controls', 'project-grid');
  revealScan();
}
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  renderProjects();
}));
moreButton.addEventListener('click', () => {
  const wasExpanded = expandedProjects;
  expandedProjects = !expandedProjects;
  renderProjects();
  if (wasExpanded) document.querySelector('#projects').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let dialogOpener;
function openDialog(html, opener) {
  dialogOpener = opener;
  dialogContent.innerHTML = html;
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
}
function closeDialog() { dialog.close(); }
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (dialogOpener?.isConnected) dialogOpener.focus({ preventScroll: true });
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
});
grid.addEventListener('click', event => {
  const opener = event.target.closest('[data-project]');
  if (!opener) return;
  const project = projects.find(item => item.id === opener.dataset.project);
  if (!project) return;
  openDialog(`<img class="dialog-cover" src="assets/${project.image}" alt="${escapeHTML(project.title)} project photograph"><div class="dialog-body">
    <p class="eyebrow">${project.tag}</p><h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-location">${escapeHTML(project.location)}</p><span class="dialog-status">${escapeHTML(project.status)}</span>
    <p class="dialog-description">${escapeHTML(project.description)}</p><div class="dialog-facts">${project.facts.map(([value, label]) => `<div><strong>${escapeHTML(value)}</strong>${escapeHTML(label)}</div>`).join('')}</div>
    <h3>The approach</h3><ul>${project.work.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul><p class="dialog-source">${escapeHTML(project.source)}</p><a class="button dialog-contact" href="#contact">Discuss a similar project</a></div>`, opener);
  dialogContent.querySelector('.dialog-contact').addEventListener('click', () => {
    closeDialog();
    const type = project.category === 'education' ? 'School or institution' : project.category === 'residential' ? 'Home or apartment' : 'Business or industry';
    document.querySelector('#enquiry-project').value = type;
  });
});
document.querySelector('#training-photo').addEventListener('click', event => {
  openDialog('<img class="dialog-cover training-cover" src="assets/page02-01.webp" alt="Training certificate presentation photograph reproduced from the Drop By Drop profile"><div class="dialog-body"><p class="eyebrow">FROM OUR COMPANY PROFILE</p><h2 id="dialog-title">Specialist training</h2><p class="dialog-description">The organisation’s profile includes this training photograph and describes Suchethana’s certification from the Karnataka State Council for Science and Technology (KSCST).</p></div>', event.currentTarget);
});

document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#enquiry-project').value = link.dataset.service;
}));
const form = document.querySelector('#enquiry-form');
const phone = document.querySelector('#enquiry-phone');
phone.addEventListener('input', () => phone.setCustomValidity(''));
for (const name of ['name', 'location']) {
  form.elements[name].addEventListener('input', () => form.elements[name].setCustomValidity(''));
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(form));
  const digits = values.phone.replace(/\D/g, '');
  phone.setCustomValidity(digits.length < 7 || digits.length > 15 ? 'Please enter a phone number with 7–15 digits.' : '');
  for (const name of ['name', 'location']) form.elements[name].setCustomValidity(values[name].trim() ? '' : 'Please fill out this field.');
  if (!form.reportValidity()) return;
  const message = `Hello Drop By Drop, I would like to discuss a water solution.\n\nName: ${values.name.trim()}\nPhone: ${values.phone.trim()}\nProject: ${values.project}\nLocation: ${values.location.trim()}${values.message.trim() ? '\n\nDetails: ' + values.message.trim() : ''}`;
  const url = `https://wa.me/919482330176?text=${encodeURIComponent(message)}`;
  const fallback = document.querySelector('#whatsapp-fallback');
  fallback.href = url;
  document.querySelector('#form-feedback').hidden = false;
  document.querySelector('#form-feedback').firstChild.textContent = 'Your enquiry is ready. Open WhatsApp, review your message and tap Send when you’re ready. ';
  window.open(url, '_blank', 'noopener,noreferrer');
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => link.classList.toggle('current', link.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('#services, #projects, #story, #contact').forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
/* ---- Motion: scroll reveals, count-up, header state ---- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = '.section-heading,.service-card,.community-strip,.water-illustration,.water-copy>*,.project-toolbar,.project-card,.projects-bottom,.founder-visual,.founder-copy>*,.mission-inner>*,.faq-grid>div:first-child>*,.faq-list details,.contact-copy>*,.enquiry-form,.impact-grid>div';
const revealObserver = 'IntersectionObserver' in window && !reduceMotion ? new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-in'); obs.unobserve(entry.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
function revealScan() {
  document.querySelectorAll(revealTargets).forEach(el => {
    if (el.dataset.reveal) return;
    const siblings = [...el.parentElement.children].filter(child => child.matches(revealTargets));
    el.dataset.reveal = el.matches('.water-illustration,.founder-visual') ? 'left' : 'up';
    el.style.setProperty('--rd', Math.min(siblings.indexOf(el), 5) * 0.09 + 's');
    if (revealObserver) revealObserver.observe(el); else el.classList.add('is-in');
  });
}
function countUp(el) {
  const target = Number(el.dataset.count);
  const textNode = el.firstChild;
  const plain = 'plain' in el.dataset;
  const format = n => plain ? String(n) : n.toLocaleString('en-US');
  if (reduceMotion) return;
  const start = performance.now(), duration = 1700;
  const base = plain ? target - 40 : 0;
  (function tick(now) {
    const t = Math.min((now - start) / duration, 1), eased = 1 - Math.pow(1 - t, 4);
    textNode.textContent = format(Math.round(base + (target - base) * eased));
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}
if ('IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
    if (entry.isIntersecting) { countUp(entry.target); obs.unobserve(entry.target); }
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));
}
const servicesGrid = document.querySelector('#services-grid');
const servicesToggle = document.querySelector('.services-toggle-btn');
servicesToggle.addEventListener('click', () => {
  const opening = servicesGrid.dataset.collapsed === 'true';
  servicesGrid.dataset.collapsed = String(!opening);
  servicesToggle.setAttribute('aria-expanded', String(opening));
  servicesToggle.querySelector('.toggle-label').textContent = opening ? 'Show fewer' : 'Discover all services';
  if (!opening) {
    const top = document.querySelector('#services .section-heading').getBoundingClientRect().top;
    if (top < 0) document.querySelector('#services').scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' });
  }
});
const siteHeader = document.querySelector('.site-header');
const onScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
renderProjects();
