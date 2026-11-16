# Neha Patel – Portfolio Website

A personal portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step. It works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html                  Page structure and the fixed text (Home, About)
├── css/style.css               Colours, fonts, layout
├── js/script.js                Your content (top of file) + page behaviour
├── assets/
│   ├── images/                 profile.jpg, project-lms.jpg (project screenshots go here)
│   ├── certificates/           Certificate images and the IBM PDF
│   └── documents/resume.pdf    Your resume
└── README.md
```

## 1. What is already included

- Your photo (`assets/images/profile.jpg`) and resume (`assets/documents/resume.pdf`).
- The LMS screenshot (`assets/images/project-lms.jpg`).
- Eight certificates in `assets/certificates/`, each with a "View certificate" link. AI Literacy also has a "Verify online" link.

To replace any of them, add a new file with the **same name** in the same folder.

## 2. Edit your content

Open `js/script.js`. The `PORTFOLIO` object at the top holds your email, phone, links, education, skills, projects, training and certifications. Edit the text between the quotes, or copy an existing `{ ... }` block to add another project or certificate.

Anything left as `""` (empty) is hidden automatically, so you never get empty boxes or dead buttons. A missing image shows a coloured block instead.

The Home headline and About text are in `index.html`. Search for `id="home"` and `id="about"`.

## 3. Things still to fill in

Search for `TODO` in `js/script.js` and `index.html`:

- [ ] `github` (your GitHub profile link)
- [ ] `contribution` for Event Management System and School Management System
- [ ] `tech` for School Management System
- [ ] Screenshots: `assets/images/project-event.jpg` and `assets/images/project-school.jpg`
- [ ] `liveUrl` and `repoUrl` for each project
- [ ] PMKVY 4.0 certificate file (add it to `assets/certificates/` and set its `file` path)
- [ ] Training duration: the Techpile certificate says 28 days, but the Training section says 45 days. Check `training.duration` in `js/script.js`.
- [ ] After publishing, the `og:url` line in `index.html`

## 3b. Before you publish: certificate privacy

The certificate images are public once the site is online. Some show certificate numbers, an admission number (Unnati) or QR codes. To keep one private, delete its image from `assets/certificates/` and set its `file` to `""` in `js/script.js`.

## 4. Change colours or fonts

At the top of `css/style.css` the `:root` blocks hold all colours (one for the light theme, one for the dark theme) and the two fonts.

## 5. Preview on your computer

Open `index.html` in a browser. For the most accurate preview, run a tiny local server from this folder and open http://localhost:8000:

```
python -m http.server 8000
```

## 6. Publish on GitHub Pages

1. Sign in to GitHub and click **New repository**.
2. Name it, for example `portfolio` (or `your-username.github.io` for a main site address). Set it to **Public** and click **Create repository**.
3. Click **uploading an existing file**, then drag in the **contents** of this folder (`index.html`, `css`, `js`, `assets`, `README.md`). `index.html` must be at the top level of the repository, not inside another folder.
4. Click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then click **Save**.
7. Wait 1–2 minutes. Your site appears at `https://your-username.github.io/repository-name/`. Refresh the Pages settings screen to see the link.

To update later, open a file on GitHub, click the pencil icon, edit and commit. The site refreshes in a minute or two.

## Notes

- Your phone number is shown on the Contact section. To hide it, set `phone: ""` in `js/script.js`.
- The site follows the visitor's light or dark preference and remembers their choice.
- Fonts load from Google Fonts. If they cannot load, system fonts are used.
