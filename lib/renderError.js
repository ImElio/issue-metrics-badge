// lib/renderError.js
const { renderBadge } = require('./renderBadge');
const themes = require('./themes');

function renderError(title, msg, themeKey = 'light', params = {}) {
  const theme = themes[themeKey] || themes.light;

  const normalSvg = renderBadge({ ...params, theme });

  const placeholderSvg = renderBadge({
    openCount: '??',
    todayCount: '??',
    labelCounts: {},
    theme
  });

  const strip = s => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');

  const normalInner      = strip(normalSvg);
  const placeholderInner = strip(placeholderSvg);

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="110">
  <defs>
    <filter id="blurFilter"><feGaussianBlur in="SourceGraphic" stdDeviation="3"/></filter>
  </defs>

  <g opacity="0.3">
    ${normalInner}
  </g>

  <g filter="url(#blurFilter)" opacity="0">
    ${placeholderInner}
    <animate attributeName="opacity" begin="2s" dur="0.5s" values="0;1" fill="freeze"/>
  </g>

  <rect x="0" y="0" width="360" height="90" fill="#00000060" rx="10"/>
  <text x="180" y="40" text-anchor="middle" font="bold 14px sans-serif" fill="#ffdddd">
    ❗ ${title}
  </text>
  <text x="180" y="65" text-anchor="middle" font="12px sans-serif" fill="#ffdddd">
    ${msg}
  </text>
</svg>`;
}

module.exports = { renderError };
