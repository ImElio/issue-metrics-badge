const fetch = require("node-fetch");

async function getIssues(owner, repo, labels = []) {
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const url = `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=100`;
  const resp = await fetch(url, { headers });

  if (resp.status === 404) throw new Error("not_found");
  if (resp.status === 403) throw new Error("rate_limited");

  const issues = await resp.json();
  const today = new Date().toDateString();
  const todayCount = issues.filter(i => new Date(i.created_at).toDateString() === today).length;

  const labelCounts = {};
  labels.forEach(label => {
    labelCounts[label] = issues.filter(issue =>
      issue.labels.some(lb => lb.name.toLowerCase() === label.toLowerCase())
    ).length;
  });

  return { openCount: issues.length, todayCount, labelCounts };
}

module.exports = { getIssues };
