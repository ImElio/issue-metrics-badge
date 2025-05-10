// lib/renderError.js
const themes = require('./themes');

function renderError(title, msg, themeKey = 'light') {
  const t = themes[themeKey] || themes.light;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="100">
  <style>
    .bg {
      fill: ${t.bg};
      stroke: ${t.accent};
      stroke-width: 2;
      rx: 10;
      animation: blink 1s infinite;
    }
    .title {
      font: bold 14px sans-serif;
      fill: ${t.text};
    }
    .msg {
      font: 12px sans-serif;
      fill: ${t.subtext};
    }
    .footer {
      font: 10px sans-serif;
      fill: ${t.subtext};
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.5; }
    }
  </style>
  <!-- Rettangolo ora alto 100px per includere footer -->
  <rect width="360" height="100" class="bg"/>
  <!-- Titolo & messaggio -->
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <!-- Footer, ora dentro la cornice -->
  <text x="20" y="80" class="footer">
    ✨ visit now for customizable https://issue-metrics-website
  </text>
</svg>`;
}

module.exports = { renderError };
