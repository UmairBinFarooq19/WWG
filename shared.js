/* WildWays Global — Shared JavaScript */

// ── MOBILE NAV ──
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── MODAL ──
function openModal(dest) {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (dest) {
      const sel = document.getElementById('m-dest');
      if (sel) sel.value = dest;
    }
  }
}
function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── FORM SUBMIT ──
function submitForm() {
  const name = document.getElementById('m-name').value.trim();
  const phone = document.getElementById('m-phone').value.trim();
  const dest = document.getElementById('m-dest') ? document.getElementById('m-dest').value : '';
  const travellers = document.getElementById('m-travellers') ? document.getElementById('m-travellers').value : '2';
  const date = document.getElementById('m-date') ? document.getElementById('m-date').value : '';
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  const msg = encodeURIComponent(`Hi WildWays Global!\n\nI'd like to enquire about a tour:\n*Name:* ${name}\n*Destination:* ${dest || 'Gulmarg'}\n*Travellers:* ${travellers}\n*Date:* ${date || 'Flexible'}\n*Phone:* ${phone}\n\nPlease send me a quote. Thank you!`);
  window.open(`https://wa.me/919797877243?text=${msg}`, '_blank');
  closeModal();
}

// ── FAQ ACCORDION ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// ── REVEAL ON SCROLL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
