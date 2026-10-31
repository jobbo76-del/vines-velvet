:root {
  --bg-1: #090d18;
  --bg-2: #121a2e;
  --card: rgba(15, 21, 35, 0.82);
  --card-soft: rgba(255, 255, 255, 0.03);
  --line: rgba(255, 255, 255, 0.09);
  --text: #eff4ff;
  --muted: rgba(239, 244, 255, 0.72);
  --rose: #ff8bb1;
  --rose-strong: #ff5c8a;
  --violet: #9b7dff;
  --violet-strong: #6d5ef7;
  --amber: #ffc76d;
  --cyan: #7ee7d5;
  --shadow: rgba(8, 12, 22, 0.52);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top, rgba(158, 115, 255, 0.2), transparent 25%),
    radial-gradient(circle at 80% 15%, rgba(255, 110, 150, 0.16), transparent 24%),
    linear-gradient(180deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

#root {
  width: 100%;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 96px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0 28px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--rose), var(--violet));
  box-shadow: 0 12px 28px rgba(157, 125, 255, 0.4);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--muted);
}

.ghost-button,
.primary-button,
.secondary-button {
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.ghost-button:hover,
.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 0.8rem 1.25rem;
}

.primary-button {
  border: none;
  background: linear-gradient(135deg, var(--rose-strong), var(--violet-strong));
  color: #fff;
  padding: 1rem 1.5rem;
  box-shadow: 0 18px 35px rgba(123, 91, 255, 0.35);
}

.secondary-button {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  padding: 1rem 1.5rem;
}

.section-card,
.section-block {
  border: 1px solid var(--line);
  background: rgba(11, 17, 28, 0.7);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 24px 54px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
}

.hero {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: 30px;
  padding: 42px;
  border-radius: 32px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffb5ca;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 620px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.trust-row span {
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
}

.display-stack {
  position: relative;
  width: 100%;
  height: 360px;
}

.floating-card {
  position: absolute;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(18, 29, 44, 0.9), rgba(11, 17, 28, 0.9));
  border-radius: 26px;
  box-shadow: 0 24px 42px rgba(0, 0, 0, 0.38);
}

.phone-card {
  width: 190px;
  height: 300px;
  left: 20px;
  bottom: 22px;
  padding: 16px;
}

.tablet-card {
  width: 290px;
  height: 220px;
  right: 90px;
  bottom: 110px;
  padding: 16px;
}

.desktop-card {
  width: 390px;
  height: 270px;
  right: 20px;
  bottom: 0;
  padding: 18px;
}

.mini-topbar {
  width: 48%;
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--rose), #ffc4d6);
  margin-bottom: 18px;
}

.mini-topbar.short {
  width: 36%;
}

.mini-chart {
  height: 120px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(164, 124, 255, 0.45), rgba(255, 122, 162, 0.18));
  margin-bottom: 18px;
}

.chart-a {
  background: linear-gradient(180deg, rgba(164, 124, 255, 0.45), rgba(255, 122, 162, 0.18));
}

.mini-bars {
  display: grid;
  gap: 10px;
}

.mini-bars span {
  display: block;
  height: 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.tablet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  height: 150px;
}

.grid-panel {
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(102, 163, 255, 0.28), rgba(125, 123, 255, 0.16));
}

.grid-panel.tall {
  grid-row: span 2;
}

.grid-panel.wide {
  grid-column: span 2;
  background: linear-gradient(180deg, rgba(255, 141, 177, 0.28), rgba(126, 177, 255, 0.18));
}

.desktop-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.window-bar {
  width: 28%;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 18px;
}

.window-data {
  flex: 1;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(71, 205, 181, 0.25), rgba(142, 115, 255, 0.18));
}

.data-pill {
  width: 52%;
  height: 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  margin-bottom: 18px;
}

.data-line {
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 12px;
}

.data-line.short {
  width: 72%;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 26px;
}

.stats-strip article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.stats-strip strong {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.stats-strip span {
  color: var(--muted);
}

.section-block {
  margin-top: 26px;
  border-radius: 28px;
  padding: 32px 28px;
}

.section-head {
  margin-bottom: 24px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  letter-spacing: -0.05em;
}

.feature-grid,
.experience-grid,
.pricing-grid,
.testimonial-grid {
  display: grid;
  gap: 22px;
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.experience-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.experience-card,
.pricing-card {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 22px;
  padding: 22px;
}

.feature-badge,
.device-bullet {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 139, 177, 0.2), rgba(123, 125, 255, 0.2));
  color: #ffe0eb;
}

.feature-card h3,
.experience-card h3,
.pricing-card h3 {
  margin: 18px 0 10px;
  font-size: 1.35rem;
}

.feature-card p,
.experience-card p,
.pricing-card p,
.spotlight-points p,
blockquote {
  margin: 0;
  color: var(--muted);
}

.feature-stat {
  display: inline-block;
  margin-top: 18px;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.82);
}

.experience-card.rose .device-bullet {
  background: linear-gradient(135deg, rgba(255, 139, 177, 0.2), rgba(255, 194, 135, 0.2));
}

.experience-card.violet .device-bullet {
  background: linear-gradient(135deg, rgba(131, 108, 255, 0.2), rgba(116, 194, 255, 0.2));
}

.experience-card.amber .device-bullet {
  background: linear-gradient(135deg, rgba(255, 199, 109, 0.2), rgba(255, 136, 136, 0.18));
}

.experience-card.cyan .device-bullet {
  background: linear-gradient(135deg, rgba(126, 231, 213, 0.2), rgba(123, 125, 255, 0.2));
}

.device-label {
  display: inline-block;
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.spotlight-panel {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  background: linear-gradient(180deg, rgba(17, 27, 45, 0.96), rgba(12, 17, 28, 0.96));
}

.spotlight-copy h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.spotlight-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.spotlight-points div {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.spotlight-points strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.roadmap-panel {
  background: linear-gradient(180deg, rgba(11, 18, 31, 0.96), rgba(17, 23, 37, 0.96));
}

.narrow {
  max-width: 700px;
}

.roadmap-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.roadmap-list li {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  align-items: center;
  padding: 18px 0;
  border-top: 1px solid var(--line);
}

.roadmap-list li:first-child {
  border-top: none;
}

.roadmap-list span {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255, 139, 177, 0.2), rgba(131, 108, 255, 0.18));
  font-weight: 700;
}

.roadmap-list p {
  margin: 0;
  font-size: 1.05rem;
  color: var(--muted);
}

.testimonial-panel {
  background: rgba(255, 255, 255, 0.015);
}

.testimonial-grid blockquote {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  font-size: 1.02rem;
  line-height: 1.7;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.price-line {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price-line strong {
  font-size: 2.5rem;
}

.price-line span {
  color: rgba(255, 255, 255, 0.7);
}

.width-full {
  width: 100%;
  margin-top: 8px;
}

.pricing-card.primary {
  border-color: rgba(146, 125, 255, 0.44);
  background: linear-gradient(180deg, rgba(120, 99, 255, 0.15), rgba(255, 255, 255, 0.02));
}

.pricing-card.accent {
  border-color: rgba(255, 142, 177, 0.5);
  background: linear-gradient(180deg, rgba(255, 97, 141, 0.13), rgba(255, 255, 255, 0.02));
}

@media (max-width: 980px) {
  .hero,
  .spotlight-panel {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .experience-grid,
  .pricing-grid,
  .testimonial-grid,
  .stats-strip,
  .spotlight-points {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .page-shell {
    padding-inline: 16px;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .nav-links {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    font-size: 0.84rem;
  }

  .hero,
  .section-block {
    padding: 22px 18px;
  }

  .feature-grid,
  .experience-grid,
  .pricing-grid,
  .testimonial-grid,
  .stats-strip,
  .spotlight-points {
    grid-template-columns: 1fr;
  }

  .display-stack {
    height: 300px;
  }

  .desktop-card {
    width: 280px;
    right: 10px;
  }

  .tablet-card {
    right: 30px;
  }

  .phone-card {
    left: 12px;
  }
}
