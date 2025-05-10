// lib/renderError.js
const errorTemplates = [
  // 1) Pulsing border + sliding circle + footer link
  (title, msg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg       { fill: #fff1f2; stroke: #f43f5e; stroke-width: 2; rx: 10; animation: blink 1s infinite; }
    .title    { font: bold 14px sans-serif; fill: #9f1239; }
    .msg      { font: 12px sans-serif; fill: #881337; }
    .footer   { font: 10px sans-serif; fill: #6b7280; }
    .repo-dot { fill: #f59e0b; }
    @keyframes blink { 50% { opacity: 0.5; } }
  </style>
  <!-- Background + border blink -->
  <rect width="360" height="70" class="bg"/>
  <!-- Sliding circle under the text -->
  <circle cx="20" cy="35" r="6" class="repo-dot">
    <animate attributeName="cx" from="20" to="340" dur="2s" repeatCount="indefinite" />
  </circle>
  <!-- Error text -->
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <!-- Footer link -->
  <text x="20" y="85" class="footer">
    ✨ visit now for customizable https://issue-metrics-website
  </text>
</svg>`,

  // 2) Static border + sliding circle + footer link
  (title, msg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg       { fill: #fef3c7; stroke: #f59e0b; stroke-width: 2; rx: 10; }
    .title    { font: bold 14px sans-serif; fill: #92400e; }
    .msg      { font: 12px sans-serif; fill: #78350f; }
    .footer   { font: 10px sans-serif; fill: #4b5563; }
    .repo-dot { fill: #dc2626; }
  </style>
  <rect width="360" height="70" class="bg"/>
  <circle cx="20" cy="35" r="6" class="repo-dot">
    <animate attributeName="cx" from="20" to="340" dur="2s" repeatCount="indefinite" />
  </circle>
  <text x="40" y="28" class="title">❗ ${title}</text>
  <text x="40" y="50" class="msg">${msg}</text>
  <text x="20" y="85" class="footer">
    👉 visit now for customizable https://issue-metrics-website
  </text>
</svg>`,

  // 3) Inverted colors + sliding circle + footer link
  (title, msg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg       { fill: #111827; stroke: #ef4444; stroke-width: 2; rx: 10; }
    .title    { font: bold 14px sans-serif; fill: #fca5a5; }
    .msg      { font: 12px sans-serif; fill: #f87171; }
    .footer   { font: 10px sans-serif; fill: #9ca3af; }
    .repo-dot { fill: #f43f5e; }
  </style>
  <rect width="360" height="70" class="bg"/>
  <circle cx="20" cy="35" r="6" class="repo-dot">
    <animate attributeName="cx" from="20" to="340" dur="2s" repeatCount="indefinite" />
  </circle>
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <text x="20" y="85" class="footer">
    🔥 visit now for customizable https://issue-metrics-website
  </text>
</svg>`
];

function renderError(title, msg) {
  const tpl = errorTemplates[Math.floor(Math.random() * errorTemplates.length)];
  return tpl(title, msg);
}

module.exports = { renderError };
