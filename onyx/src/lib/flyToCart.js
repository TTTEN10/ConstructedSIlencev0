function getRect(el) {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (!Number.isFinite(r.left) || !Number.isFinite(r.top)) return null;
  return r;
}

export function flyToCart(fromEl, opts = {}) {
  const targetEl =
    opts.targetEl ??
    document.querySelector('#cart-fly-target') ??
    document.querySelector('[data-cart-fly-target="true"]');

  const from = getRect(fromEl);
  const to = getRect(targetEl);
  if (!from || !to) return;

  const size = Math.max(18, Math.min(30, Math.round(Math.min(from.height, from.width) * 0.45)));
  const startX = from.left + from.width / 2 - size / 2;
  const startY = from.top + from.height / 2 - size / 2;
  const endX = to.left + to.width / 2 - size / 2;
  const endY = to.top + to.height / 2 - size / 2;

  const token = document.createElement('div');
  token.setAttribute('aria-hidden', 'true');
  token.style.position = 'fixed';
  token.style.left = `${startX}px`;
  token.style.top = `${startY}px`;
  token.style.width = `${size}px`;
  token.style.height = `${size}px`;
  token.style.borderRadius = '9999px';
  token.style.border = '1px solid rgba(255,255,255,0.9)';
  token.style.background = 'rgba(0,0,0,0.22)';
  token.style.backdropFilter = 'blur(2px)';
  token.style.pointerEvents = 'none';
  token.style.zIndex = '99999';
  token.style.boxShadow =
    '0 0 0 1px rgba(255,255,255,0.10) inset, 0 12px 40px rgba(0,0,0,0.35)';

  document.body.appendChild(token);

  const dx = endX - startX;
  const dy = endY - startY;
  const lift = Math.max(50, Math.min(140, Math.abs(dx) * 0.12 + 70));

  const animation = token.animate(
    [
      { transform: 'translate3d(0,0,0) scale(0.95)', opacity: 0.0 },
      {
        transform: `translate3d(${dx * 0.12}px, ${dy * 0.12 - lift}px, 0) scale(1.18)`,
        opacity: 1.0,
        offset: 0.3,
      },
      {
        transform: `translate3d(${dx * 0.72}px, ${dy * 0.72 - lift * 0.25}px, 0) scale(1.02)`,
        opacity: 0.85,
        offset: 0.78,
      },
      { transform: `translate3d(${dx}px, ${dy}px, 0) scale(0.78)`, opacity: 0.0 },
    ],
    {
      duration: opts.durationMs ?? 3800,
      easing: opts.easing ?? 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards',
    },
  );

  animation.addEventListener(
    'finish',
    () => {
      token.remove();
    },
    { once: true },
  );

  animation.addEventListener(
    'cancel',
    () => {
      token.remove();
    },
    { once: true },
  );
}

