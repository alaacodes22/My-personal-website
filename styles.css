:root {
  --bg: #f6f1ec;
  --card: #ffffff;
  --muted: #6b4f4f;
  --accent: #7b1f2d;
  --beige: #efe7df;
  --glass: rgba(123, 31, 45, 0.04);
  --max-width: 1100px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Playfair Display', serif;
  background: var(--bg);
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}

/* Container */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 28px;
}

/* Header */
.site-header {
  background: transparent;
  border-bottom: 1px solid rgba(123, 31, 45, 0.06);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin: 0;
  font-size: 1.4rem;
  color: var(--accent);
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  margin-left: 18px;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: var(--accent);
}

/* Hero */
.hero {
  padding: 48px 0;
}

.hero-inner {
  display: flex;
  gap: 40px;
  align-items: center;
}

.hero-text {
  flex: 1;
}

.hero h2 {
  font-size: 2rem;
  margin: 0 0 8px;
  color: var(--accent);
}

.hero p {
  color: var(--muted);
  margin: 0 0 12px;
}

.hero-image {
  width: 280px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 8px 28px rgba(123, 31, 45, 0.08);
}

.cta-row {
  margin-top: 20px !important;
}

.cta {
  display: inline-block;
  background: var(--accent);
  color: var(--card);
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta:hover {
  background: #651723;
  transform: translateY(-2px);
}

.muted {
  color: var(--muted);
  margin-left: 12px;
  text-decoration: none;
}

.muted:hover {
  color: var(--accent);
}

/* About */
.about {
  padding: 20px 28px;
}

.about h3,
.projects h3,
.contact h3 {
  color: var(--accent);
  margin-bottom: 12px;
}

.about h4 {
  color: var(--accent);
  margin-top: 28px;
  margin-bottom: 8px;
}

.about p {
  margin-bottom: 12px;
}

.name {
  font-weight: 600;
  color: var(--accent);
  font-size: 1.1rem;
}

.summary {
  padding-left: 20px;
  margin: 8px 0 0;
}

.summary li {
  color: var(--muted);
  margin: 8px 0;
}

.summary li::marker {
  color: var(--accent);
}

/* Projects */
.projects {
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}

.projects .project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  position: relative;
  z-index: 1;
  background: var(--glass);
  padding: 16px;
  border-radius: 10px;
  border: 1px solid rgba(123, 31, 45, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(123, 31, 45, 0.08);
}

.project-card h4 {
  color: var(--accent);
  margin: 0 0 8px;
}

.project-card p {
  margin-bottom: 0;
}

.project-image {
  display: block;
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  object-fit: cover;
  max-height: 260px;
}

/* Decorative project background */
.projects::before {
  content: "";
  position: absolute;
  top: 10%;
  right: 0;
  width: 50%;
  height: 80%;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(123, 31, 45, 0.08),
      transparent 20%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(239, 231, 223, 0.12),
      transparent 25%
    );
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

.project-card * {
  position: relative;
  z-index: 1;
}

/* Contact */
.contact {
  padding: 30px 28px;
}

.contact a {
  color: var(--accent);
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

/* Footer */
.site-footer {
  padding: 16px 0;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid rgba(123, 31, 45, 0.04);
  margin-top: 20px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 2000;
}

.lightbox.open {
  display: flex;
}

.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(11, 7, 5, 0.35);
  backdrop-filter: blur(3px);
}

.lightbox-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  background: var(--card);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 12px 40px rgba(123, 31, 45, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  height: auto;
  border-radius: 8px;
  display: block;
}

.lightbox-close {
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: 0;
  color: var(--muted);
  font-size: 28px;
  cursor: pointer;
  z-index: 2;
}

.lightbox-caption {
  color: var(--muted);
  margin-top: 10px;
  text-align: center;
}

/* Tablet */
@media (max-width: 800px) {

  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-image {
    width: 100%;
    max-width: 420px;
  }

}

/* Mobile */
@media (max-width: 600px) {

  .container {
    padding: 22px;
  }

  .header-inner {
    flex-direction: column;
    gap: 12px;
  }

  .nav a {
    margin: 0 7px;
  }

  .hero {
    padding: 35px 0;
  }

  .hero h2 {
    font-size: 1.7rem;
  }

  .projects .project-grid {
    grid-template-columns: 1fr;
  }

  .projects::before {
    display: none;
  }

}
