// lib/renderError.js
const { renderBadge } = require('./renderBadge');
const themes = require('./themes');

function renderError(title, msg, themeKey = 'light', params = {}) {
  const badgeSvg = renderBadge({ ...params, theme: themes[themeKey] });

  const inner = badgeSvg
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>$/, '');

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="110">
  <defs>
    <filter id="blurFilter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
    </filter>
  </defs>

  <!-- 1) Original badge at 30% opacity -->
  <g opacity="0.3">
    ${inner}
  </g>

  <!-- 2) Blurred badge with “??” placeholders -->
  <g filter="url(#blurFilter)" opacity="0">
    ${inner
      .replace(/>\s*[\d,]+\s*?</g, '> ?? <')  /* replace any numbers with “??” */
    }
    <animate attributeName="opacity" begin="2s" dur="0.5s" values="0;1" fill="freeze"/>
  </g>

  <!-- 3) Dark overlay -->
  <rect x="0" y="0" width="360" height="90" fill="#00000060" rx="10"/>

  <!-- 4) Centered error text -->
  <text x="180" y="40" text-anchor="middle" font="bold 14px sans-serif" fill="#ffdddd">
    ❗ ${title}
  </text>
  <text x="180" y="65" text-anchor="middle" font="12px sans-serif" fill="#ffdddd">
    ${msg}
  </text>
</svg>`;
}

module.exports = { renderError };
