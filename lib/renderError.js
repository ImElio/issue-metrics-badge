function renderError(title, msg, theme) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="90">
  <style>
    .bg {
      fill: #fff1f2;
      stroke: #f43f5e;
      stroke-width: 2;
      rx: 10;
      animation: blink 1s infinite;
    }
    .title {
      font: bold 14px sans-serif;
      fill: #9f1239;
    }
    .msg {
      font: 12px sans-serif;
      fill: #881337;
    }
    .footer {
      font: 10px sans-serif;
      fill: #6b7280;
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50%     { opacity: 0.5; }
    }
  </style>
  <!-- Pulsing badge background -->
  <rect width="360" height="70" class="bg"/>
  <!-- Error title & message -->
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
  <text x="20" y="50" class="msg">✨ visit now for customizable https://issue-metrics-website</text>
</svg>`;
}

module.exports = { renderError };
