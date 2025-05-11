// api/issues-badge.js
const { getIssues } = require('../lib/github');
const { renderBadge } = require('../lib/renderBadge');
const { renderError } = require('../lib/renderError');
const themes = require('../lib/themes');

module.exports = async (req, res) => {
  const { repo, theme = 'light', label = '' } = req.query;

  if (!repo) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(renderError('Missing `repo` parameter', 'Try: ?repo=username/repo'));
  }

  const selectedTheme = themes[theme];
  if (!selectedTheme) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(renderError('Unknown theme', 'Use: ?theme=light,dark,terminal'));
  }

  const [owner, repoName] = repo.split('/');
  if (!owner || !repoName) {
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(renderError('Invalid repo format', 'Use: username/repo'));
  }

  const labels = label.split(',').map(l => l.trim()).filter(Boolean);

  try {
    const { openCount, todayCount, labelCounts } = await getIssues(owner, repoName, labels);
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=300');
    return res.send(renderBadge({ openCount, todayCount, labelCounts, theme: selectedTheme }));
  } catch (err) {
    let title = 'Internal Error';
    let msg = 'Something went wrong';
    if (err.message === 'not_found') {
      title = 'Repository not found';
      msg = 'Check username/repo';
    } else if (err.message === 'rate_limited') {
      title = 'Rate limit exceeded';
      msg = 'Use a GitHub token';
    }
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(renderError(title, msg));
  }
};