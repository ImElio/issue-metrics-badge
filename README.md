## Issue-Metrics Badge Generator Documentation

Technical guide for the **Issue-Metrics Badge Generator**, hosted at:

```
https://issue-metrics-badge.vercel.app/api/issues-badge
```

Badges are generated SVGs. Minimum required parameter: `repo`.

> **Quick Customization:** For faster, interactive badge customization, visit the web UI at [Issue-Metrics-Website](https://issue-metrics-website.vercel.app/) to tweak parameters visually and preview in real time.

---

### 1. Base Endpoint & HTTP Details

* **Method:** `GET`
* **Path:** `/api/issues-badge`
* **Host:** `issue-metrics-badge.vercel.app`
* **Response:** `200 OK` with `Content-Type: image/svg+xml`
* **Cache-Control:** `s-maxage=300`

**Example:**

```
GET https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=dark&label=bug,documentation
```

---

### 2. Query Parameters

| Parameter | Required | Type   | Description                                                                        |
| --------- | -------- | ------ | ---------------------------------------------------------------------------------- |
| `repo`    | Yes      | string | GitHub repo as `owner/repo`. Example: `ImElio/issue-metrics-badge`.                |
| `theme`   | No       | enum   | `light` (default), `dark`, or `terminal`.                                          |
| `label`   | No       | string | **Experimental:** comma-separated labels (case-sensitive). E.g. `bug,enhancement`. |

---

### 3. Available Themes & Usage

Live embedded badges using **ImElio/issue-metrics-badge** example:

#### 3.1 Light (default)

![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge\&theme=light)

```markdown
![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=light)
```

#### 3.2 Dark

![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge\&theme=dark)

```markdown
![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=dark)
```

#### 3.3 Terminal

![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge\&theme=terminal)

```markdown
![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=terminal)
```

---

### 4. Label Filtering (Experimental)

Filter issues by one or more labels. **Experimental feature**; label names must match exactly.

```markdown
![Filtered Issues](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=dark&label=bug,help wanted)
```

---

### 5. Error Badges (SVG)

On invalid input or server errors, you get an SVG badge with the error message. Embed it directly. Live examples below:

| Error                    | Example Embed                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Missing `repo` parameter | ![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge)                                                                |
| Unknown theme            | ![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge\&theme=unknown)                 |
| Invalid repo format      | ![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=badformat)                                                 |
| Repository not found     | ![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=someuser/notexistingrepo)                                  |
| Internal Error           | Try Later or open an issue |

> **Tip:** Keep consistent alt text:
>
> ```markdown
> ![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge)
> ```

---

### 6. Embedding in README

Paste into `README.md`:

```markdown
# My Project

![Issue-Metrics](https://issue-metrics-badge.vercel.app/api/issues-badge?repo=ImElio/issue-metrics-badge&theme=light&label=bug)
```
