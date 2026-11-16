/* =========================================================
   Neha Patel – Portfolio
   1) EDIT YOUR CONTENT in the PORTFOLIO object below.
   2) The rest of the file builds the page. You normally
      do not need to change it.
   Any value left as "" (empty) or written like "[PLACEHOLDER]"
   is hidden automatically, so no empty items are shown.
   ========================================================= */

const PORTFOLIO = {
  email: "patelneha9092@gmail.com",
  phone: "9651653319",          // shown on the Contact section; delete the text to hide it
  linkedin: "https://www.linkedin.com/in/neha-patel-454484359",
  github: "",                   // TODO: add your GitHub profile URL, e.g. "https://github.com/your-username"

  education: [
    {
      degree: "CITS (Craft Instructor Training Scheme) – Information Technology",
      institute: "National Skill Training Institute (NSTI), Kanpur",
      detail: "Session 2026–27 (pursuing)"
    },
    {
      degree: "Diploma in Computer Science & Engineering (CSE)",
      institute: "Government Girls Polytechnic, Meja, Prayagraj",
      detail: "Completed 2026 · 79.89%"
    },
    {
      degree: "Intermediate (Class 12)",
      institute: "Shree Mahabal Singh Inter College",
      detail: "Completed 2023 · 76.67%"
    },
    {
      degree: "High School (Class 10)",
      institute: "Shree Mahabal Singh Inter College",
      detail: "Completed 2021 · 79.7%"
    }
  ],

  skills: [
    { group: "Programming Languages", items: ["Python with Django"] },
    { group: "Web Development", items: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
    { group: "Database Management", items: ["SQL", "MySQL"] },
    { group: "AI & Emerging Technologies", items: ["Artificial Intelligence", "Generative AI", "Prompt Engineering"] },
    { group: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "ChatGPT", "Gemini", "Perplexity"] },
    { group: "Core IT Skills", items: ["Computer Fundamentals", "PC Assembling & Disassembling", "Networking", "Software Development"] },
    { group: "Computer Applications", items: ["MS Word", "MS PowerPoint", "MS Excel", "Internet"] },
    { group: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork", "Adaptability", "Decision Making", "Time Management", "Active Listening"] }
  ],

  projects: [
    {
      name: "Learning Management System (AI-based)",
      description: "A smart educational platform that uses AI to enhance the learning experience. It allows students to access courses, study material, assignments and online quizzes, and to track their progress.",
      tech: ["Python (Django)", "HTML", "CSS", "Bootstrap", "JavaScript", "SQL database"],
      contribution: "Developed the platform with a responsive, easy-to-use interface, and managed and tested the system.",
      image: "assets/images/project-lms.jpg",
      liveUrl: "",                              // TODO: add live demo link
      repoUrl: ""                               // TODO: add GitHub repository link
    },
    {
      name: "Event Management System",
      description: "A user-friendly web platform that helps event organizers submit service requirements and helps registered job seekers find relevant opportunities.",
      tech: ["Python (Django)", "HTML", "CSS", "Bootstrap", "JavaScript", "SQL database"],
      contribution: "",                         // TODO: describe your contribution to this project
      image: "assets/images/project-event.jpg", // TODO: add a screenshot with this name (a coloured block shows until then)
      liveUrl: "",                              // TODO: add live demo link
      repoUrl: ""                               // TODO: add GitHub repository link
    },
    {
      name: "School Management System",
      description: "A tool to manage student records, attendance and fee collection, and to streamline communication between faculty and parents.",
      tech: [],                                 // TODO: add the technologies you used
      contribution: "",                         // TODO: describe your contribution to this project
      image: "assets/images/project-school.jpg", // TODO: add a screenshot with this name
      liveUrl: "",                              // TODO: add live demo link
      repoUrl: ""                               // TODO: add GitHub repository link
    }
  ],

  training: {
    organization: "Techpile Technology Pvt. Ltd., Lucknow",
    role: "Intern (Summer Training)",
    duration: "45 days",
    summary: "Learned full stack development during summer training.",
    skillsLearned: ["Python (Django)", "HTML", "CSS", "Bootstrap", "JavaScript", "SQL database"]
  },

  // Newest first. "file" = the certificate image/PDF in assets/certificates/. "verifyUrl" = online verification link.
  certifications: [
    {
      name: "AI Literacy",
      org: "IBM SkillsBuild",
      year: "2026",
      detail: "Issued 30 October 2026",
      file: "assets/certificates/ibm-ai-literacy.pdf",
      verifyUrl: "https://www.credly.com/go/P5hM0zTV"
    },
    {
      name: "Cybersecurity (Lenovo LEAP NextGen Scholar Program)",
      org: "Lenovo, implemented by BharatCares",
      year: "2026",
      detail: "60+ hours · Grade A",
      file: "assets/certificates/lenovo-cybersecurity.jpg"
    },
    {
      name: "Effective Speaking and Listening Skills",
      org: "Wadhwani Foundation, with Directorate of Technical Education Uttar Pradesh",
      year: "2025",
      detail: "79 hours of training · Microcertificate",
      file: "assets/certificates/wadhwani-speaking-listening.jpg"
    },
    {
      name: "UNXT by Unnati (Soft Skill Development Program)",
      org: "Infosys Foundation, conducted by SGBS Unnati Foundation",
      year: "2025",
      detail: "165 hours · Spoken English, Employability Skills, Life Skills",
      file: "assets/certificates/unnati-unxt.jpg"
    },
    {
      name: "Python with Django (Summer Training)",
      org: "Techpile Technology Pvt. Ltd., Lucknow",
      year: "2025",
      detail: "Grade A++",
      file: "assets/certificates/techpile-summer-training.jpg"
    },
    {
      name: "Talented Coder (online competition)",
      org: "Maurya Technical Pvt. Ltd.",
      year: "2025",
      detail: "Qualified · Grade A",
      file: "assets/certificates/maurya-talented-coder.jpg"
    },
    {
      name: "Cybersecurity Awareness Webinar: Stay Safe Online",
      org: "ISEA, Ministry of Electronics and IT (MeitY), Government of India",
      year: "2025",
      detail: "Certificate of participation",
      file: "assets/certificates/isea-cybersecurity-webinar.jpg"
    },
    {
      name: "20-Day Webinar on HTML, CSS, JavaScript and Python",
      org: "Piedocx Technologies Pvt. Ltd.",
      year: "2025",
      detail: "Certificate of participation",
      file: "assets/certificates/piedocx-webinar.jpg"
    },
    {
      name: "PMKVY 4.0",
      org: "NCVT",
      year: "2024",
      detail: "",
      file: ""                                  // TODO: add the certificate to assets/certificates/ and put its path here
    }
  ]
};

/* =========================================================
   Helpers
   ========================================================= */

/** True when a value is real content (not empty and not like "[PLACEHOLDER]"). */
function isReal(value) {
  if (typeof value !== "string") return false;
  const v = value.trim();
  return v !== "" && !/^\[.*\]$/.test(v);
}

/** Small helper to build DOM elements safely. */
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, val] of Object.entries(props)) {
    if (key === "class") node.className = val;
    else if (key === "text") node.textContent = val;
    else node.setAttribute(key, val);
  }
  [].concat(children).forEach(child => { if (child) node.appendChild(child); });
  return node;
}

/** First letters of a name, used when an image file is missing. */
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

/** Build a link; external links open in a new tab safely. */
function link(text, href, external) {
  const a = el("a", { href, text });
  if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  return a;
}

/* =========================================================
   Renderers (one per section)
   ========================================================= */

function renderEducation(list) {
  const root = document.getElementById("education-list");
  list.filter(e => isReal(e.degree)).forEach(e => {
    root.appendChild(el("li", { class: "reveal" }, [
      el("h3", { text: e.degree }),
      isReal(e.institute) ? el("p", { class: "where", text: e.institute }) : null,
      isReal(e.detail) ? el("p", { class: "when", text: e.detail }) : null
    ]));
  });
}

function renderSkills(groups) {
  const root = document.getElementById("skills-list");
  groups.forEach(g => {
    const items = (g.items || []).filter(isReal);
    if (!items.length) return;
    root.appendChild(el("div", { class: "skill-group reveal" }, [
      el("h3", { text: g.group }),
      el("ul", { class: "chips" }, items.map(i => el("li", { text: i })))
    ]));
  });
}

function renderProjects(projects) {
  const root = document.getElementById("projects-list");
  projects.filter(p => isReal(p.name)).forEach(p => {
    // Image with a gradient + initials fallback if the file is missing
    const media = el("div", { class: "project-media" });
    if (isReal(p.image)) {
      const img = el("img", { src: p.image, alt: "Screenshot of " + p.name, loading: "lazy" });
      img.addEventListener("error", () => media.classList.add("no-image"));
      media.appendChild(img);
    } else {
      media.classList.add("no-image");
    }
    media.appendChild(el("span", { class: "media-fallback", "aria-hidden": "true", text: initials(p.name) }));

    const links = [];
    if (isReal(p.liveUrl)) links.push(link("Live demo", p.liveUrl, true));
    if (isReal(p.repoUrl)) links.push(link("Source code", p.repoUrl, true));

    const body = el("div", { class: "project-body" }, [
      el("h3", { text: p.name }),
      isReal(p.description) ? el("p", { text: p.description }) : null,
      isReal(p.contribution)
        ? el("p", { class: "contribution" }, [el("strong", { text: "My contribution: " }), document.createTextNode(p.contribution)])
        : null,
      (p.tech || []).length ? el("ul", { class: "chips" }, p.tech.filter(isReal).map(t => el("li", { text: t }))) : null,
      links.length ? el("div", { class: "project-links" }, links) : null
    ]);

    root.appendChild(el("article", { class: "project-card reveal" }, [media, body]));
  });
}

function renderTraining(t) {
  const root = document.getElementById("training-content");
  if (!t || !isReal(t.organization)) return;
  const meta = [t.role, t.duration].filter(isReal).join(" · ");
  root.appendChild(el("div", { class: "training-card reveal" }, [
    el("h3", { text: t.organization }),
    meta ? el("p", { class: "training-meta", text: meta }) : null,
    isReal(t.summary) ? el("p", { text: t.summary }) : null,
    (t.skillsLearned || []).length ? el("ul", { class: "chips" }, t.skillsLearned.filter(isReal).map(s => el("li", { text: s }))) : null
  ]));
}

function renderCertifications(certs) {
  const root = document.getElementById("cert-list");
  certs.filter(c => isReal(c.name)).forEach(c => {
    const links = [];
    if (isReal(c.file)) links.push(link("View certificate", c.file, true));
    if (isReal(c.verifyUrl)) links.push(link("Verify online", c.verifyUrl, true));

    root.appendChild(el("li", { class: "reveal" }, [
      el("span", { class: "cert-name", text: c.name }),
      isReal(c.org) ? el("span", { class: "cert-org", text: c.org }) : null,
      isReal(c.detail) ? el("span", { class: "cert-detail", text: c.detail }) : null,
      links.length ? el("span", { class: "cert-links" }, links) : null,
      isReal(c.year) ? el("span", { class: "cert-year", text: c.year }) : null
    ]));
  });
}

function renderContact(data) {
  const root = document.getElementById("contact-list");
  const rows = [];
  if (isReal(data.email)) rows.push(["Email", data.email, "mailto:" + data.email, false]);
  if (isReal(data.phone)) {
    const digits = data.phone.replace(/\D/g, "");
    const tel = digits.length === 10 ? "+91" + digits : "+" + digits;   // 10-digit numbers are treated as Indian
    rows.push(["Phone", data.phone, "tel:" + tel, false]);
  }
  if (isReal(data.linkedin)) rows.push(["LinkedIn", "Neha Patel", data.linkedin, true]);
  if (isReal(data.github)) rows.push(["GitHub", data.github.replace(/^https?:\/\//, ""), data.github, true]);

  rows.forEach(([label, value, href, external]) => {
    const a = el("a", { href }, [
      el("span", { class: "c-label", text: label }),
      el("span", { class: "c-value", text: value })
    ]);
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    root.appendChild(el("li", { class: "reveal" }, [a]));
  });
}

/** Hide a section (and its menu link) when it has nothing to show. */
function hideIfEmpty(sectionId, listId) {
  const list = document.getElementById(listId);
  if (list && list.children.length) return;
  const section = document.getElementById(sectionId);
  if (section) section.hidden = true;
  const navLink = document.querySelector('#nav-list a[href="#' + sectionId + '"]');
  if (navLink) navLink.parentElement.hidden = true;
}

function buildPage() {
  renderEducation(PORTFOLIO.education);
  renderSkills(PORTFOLIO.skills);
  renderProjects(PORTFOLIO.projects);
  renderTraining(PORTFOLIO.training);
  renderCertifications(PORTFOLIO.certifications);
  renderContact(PORTFOLIO);

  hideIfEmpty("education", "education-list");
  hideIfEmpty("skills", "skills-list");
  hideIfEmpty("projects", "projects-list");
  hideIfEmpty("training", "training-content");
  hideIfEmpty("certifications", "cert-list");
  hideIfEmpty("contact", "contact-list");
}

/* =========================================================
   Behaviour: theme, menu, active link, reveal, back-to-top
   ========================================================= */

function setupTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function label() {
    const dark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  label();

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage may be blocked */ }
    label();
  });
}

function setupMenu() {
  const nav = document.getElementById("site-nav");
  const btn = document.getElementById("menu-toggle");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });   // close after choosing a link
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setOpen(false); });
}

function setupActiveLink() {
  if (!("IntersectionObserver" in window)) return;
  const links = Array.from(document.querySelectorAll("#nav-list a"));
  const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.removeAttribute("aria-current"));
      const active = byId.get(entry.target.id);
      if (active) active.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("main section[id]").forEach(s => { if (!s.hidden) observer.observe(s); });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(i => observer.observe(i));
}

function setupToTop() {
  const btn = document.getElementById("to-top");
  window.addEventListener("scroll", () => { btn.hidden = window.scrollY < 600; }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupHeroPhoto() {
  const figure = document.getElementById("hero-photo");
  const img = figure.querySelector("img");
  img.addEventListener("error", () => figure.classList.add("no-photo"));
  if (img.complete && img.naturalWidth === 0) figure.classList.add("no-photo");
}

document.addEventListener("DOMContentLoaded", () => {
  buildPage();
  setupTheme();
  setupMenu();
  setupActiveLink();
  setupReveal();
  setupToTop();
  setupHeroPhoto();
  document.getElementById("year").textContent = new Date().getFullYear();
});
