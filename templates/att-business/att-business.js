/**
 * AT&T Business page template.
 * Styling lives in att-business.css; this decorator promotes the primary
 * calls-to-action to the filled AT&T-blue button variant.
 * @param {Document} doc
 */
export default function decorate(doc) {
  const main = doc.querySelector('main');
  if (!main) return;

  const PRIMARY = ['shop bundles', 'contact us'];
  main.querySelectorAll('.button-container > a').forEach((a) => {
    if (PRIMARY.includes(a.textContent.trim().toLowerCase())) {
      a.closest('.button-container').classList.add('att-primary');
    }
  });
}
