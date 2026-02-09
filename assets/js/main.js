const STORE_URL = 'https://chrome.google.com/webstore/detail/promptlator/bnofeolghpdiiaaijhkjgjdmehkmeadp';
const FORM_ENDPOINT = 'https://formspree.io/f/xkovgkyg';
const GA_MEASUREMENT_ID = 'G-XXXXXXX'; // replace when you have a GA4 property

const ctaIds = ['cta-store', 'cta-store-hero', 'cta-store-banner', 'cta-store-footer'];
ctaIds.forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  if (STORE_URL.includes('your')) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Chrome Web Store link is coming soon. Replace STORE_URL in assets/js/main.js when ready.');
    });
  } else {
    el.href = STORE_URL;
    el.target = '_blank';
    el.rel = 'noreferrer';
  }
});

const form = document.getElementById('email-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formNote = document.getElementById('form-note');
    const email = form.email.value.trim();
    const hp = form.website.value.trim();
    if (!email || hp) return;
    if (FORM_ENDPOINT.includes('your-id')) {
      formNote.textContent = 'Add your Formspree endpoint in assets/js/main.js to enable the form.';
      return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        form.reset();
        formNote.textContent = 'Thanks! You are on the list.';
      } else {
        formNote.textContent = 'Could not submit. Please try again later.';
      }
    } catch (err) {
      formNote.textContent = 'Network error. Please try again.';
    }
  });
}

(function initGA() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXX') return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} // eslint-disable-line
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
})();
