// lib/renderError.js
const templates = {
  default: (title, msg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg       { fill: #fff1f2; stroke: #f43f5e; stroke-width: 2; rx: 10; animation: blink 1s infinite; }
    .title    { font: bold 14px sans-serif; fill: #9f1239; }
    .msg      { font: 12px sans-serif; fill: #881337; }
    .footer   { font: 10px sans-serif; fill: #6b7280; }
    .repo-dot { fill: #f59e0b; }
    @keyframes blink { 50% { opacity: 0.5; } }
  </style>
  <rect width="360" height="70" class="bg"/>
  <circle cx="20" cy="35" r="6" class="repo-dot">
    <animate attributeName="cx" from="20" to="340" dur="2s" repeatCount="indefinite" />
  </circle>
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <text x="20" y="85" class="footer">
    ✨ visit now for customizable https://issue-metrics-website
  </text>
</svg>`,

  noDot: (title, msg, colors) => {
    const { bgFill, border, titleFill, msgFill, footerFill } = colors;
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg       { fill: ${bgFill}; stroke: ${border}; stroke-width: 2; rx: 10; animation: blink 1s infinite; }
    .title    { font: bold 14px sans-serif; fill: ${titleFill}; }
    .msg      { font: 12px sans-serif; fill: ${msgFill}; }
    .footer   { font: 10px sans-serif; fill: ${footerFill}; }
    @keyframes blink { 50% { opacity: 0.5; } }
  </style>
  <rect width="360" height="70" class="bg"/>
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <text x="20" y="85" class="footer">
    ✨ visit now for customizable https://issue-metrics-website
  </text>
</svg>`;
  }
};

function renderError(title, msg) {
  if (title === 'Invalid repo format' || title === 'Unknown theme') {
    return templates.noDot(title, msg, {
      bgFill: '#fff1f2',
      border: '#f43f5e',
      titleFill: '#9f1239',
      msgFill: '#881337',
      footerFill: '#6b7280'
    });
  }
  return templates.default(title, msg);
}

module.exports = { renderError };
