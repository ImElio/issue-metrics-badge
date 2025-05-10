function renderError(title, msg) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="70">
  <style>
    .bg { fill: #fff1f2; stroke: #f43f5e; stroke-width: 2; rx: 10; }
    .title { font: bold 14px sans-serif; fill: #9f1239; }
    .msg { font: 12px sans-serif; fill: #881337; }
  </style>
  <rect width="360" height="70" class="bg" />
  <text x="20" y="28" class="title">❗ ${title}</text>
  <text x="20" y="50" class="msg">${msg}</text>
</svg>`;
}

module.exports = { renderError };
