function renderBadge({ openCount, todayCount, labelCounts, theme }) {
  const labelsArray = Object.entries(labelCounts);
  const baseHeight = 90;
  const lineHeight = 25;
  const height = baseHeight + labelsArray.length * lineHeight;

  let labelsSvg = "";
  labelsArray.forEach(([label, count], i) => {
    const y = baseHeight + (i + 1) * lineHeight;
    labelsSvg += `
  <text x="200" y="${y}" class="label">🔖 ${label}:</text>
  <text x="300" y="${y}" class="value">${count}</text>`;
  });

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="${height}">
  <style>
    .bg { fill: ${theme.bg}; stroke: ${theme.stroke}; stroke-width: 1; rx: 10; }
    .title { font: bold 14px sans-serif; fill: ${theme.text}; }
    .label { font: 13px sans-serif; fill: ${theme.label}; }
    .value { font-weight: bold; fill: ${theme.text}; }
  </style>
  <rect width="360" height="${height}" class="bg" />
  <text x="20" y="25" class="title">📊 GitHub Issue Stats</text>
  <text x="20" y="50" class="label">🐞 Open:</text>
  <text x="120" y="50" class="value">${openCount}</text>
  <text x="20" y="75" class="label">🆕 Today:</text>
  <text x="120" y="75" class="value">${todayCount}</text>
  ${labelsSvg}
</svg>`;
}

module.exports = { renderBadge };
