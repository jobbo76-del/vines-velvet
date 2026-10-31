const featurePillars = [
  {
    title: 'Daily connection',
    description: 'Thoughtful check-ins, prompts, and rituals that turn everyday life into deeper understanding.'
  },
  {
    title: 'Shared growth',
    description: 'Guided relationship coaching, skill-building paths, and personalized milestones to grow together.'
  },
  {
    title: 'Meaningful play',
    description: 'Lightweight games, date ideas, and warm experiences designed to reduce friction and increase fun.'
  },
  {
    title: 'Private safety',
    description: 'Boundaries, consent controls, and secure defaults built into every touchpoint of the platform.'
  }
]

const devices = [
  { name: 'Phone', desc: 'Micro-moments, check-ins, nudges, and quick conversations.', accent: 'rose' },
  { name: 'Tablet', desc: 'Shared planning surfaces for date nights and weekly recaps.', accent: 'violet' },
  { name: 'Desktop', desc: 'Long-form insights, relationship dashboards, and deeper review.', accent: 'amber' },
  { name: 'Wearables', desc: 'Gentle prompts and event reminders without overwhelming the moment.', accent: 'cyan' }
]

const roadmap = [
  'Onboarding and couple identity setup',
  'AI-assisted relationship insights and prompts',
  'Shared activities, games, and date planning',
  'Premium unlocks, subscriptions, and gifting',
  'Cross-device sync and notification orchestration'
]

const plans = [
  { name: 'Free', price: '$0', text: 'Daily check-ins and core rituals.', tone: 'muted' },
  { name: 'Together', price: '$19', text: 'Everything in Free plus guided growth and shared planning.', tone: 'primary' },
  { name: 'Unlimited', price: '$39', text: 'Premium prompts, concierge insights, and full access to a relationship ecosystem.', tone: 'accent' }
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <span>Vines Velvet</span>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#experience">Experience</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <button className="ghost-button">Get early access</button>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <span className="eyebrow">Relationship Mega Hub</span>
            <h1>Turn everyday moments into a deeper, healthier relationship.</h1>
            <p>
              A multi-device platform built for couples to connect, grow, play, and feel supported
              across the moments that matter most.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Start the journey</button>
              <button className="secondary-button">See the roadmap</button>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>4x</strong>
                <span>device coverage</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>guided support</span>
              </div>
              <div>
                <strong>1 hub</strong>
                <span>for every relationship ritual</span>
              </div>
            </div>
          </div>

          <div className="device-visual" aria-label="Multi-device product preview">
            <div className="phone card">
              <div className="mini-header" />
              <div className="mini-chart" />
              <div className="mini-list">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="tablet card">
              <div className="mini-header" />
              <div className="dashboard-grid">
                <div className="grid-box" />
                <div className="grid-box tall" />
                <div className="grid-box long" />
              </div>
            </div>
            <div className="desktop card">
              <div className="desktop-window">
                <div className="window-bar" />
                <div className="window-body" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-block">
          <div className="section-head">
            <span className="eyebrow">Core pillars</span>
            <h2>Built to support the whole relationship lifecycle</h2>
          </div>
          <div className="feature-grid">
            {featurePillars.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-badge">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-head">
            <span className="eyebrow">Cross-device experience</span>
            <h2>One relationship hub, available everywhere</h2>
          </div>
          <div className="device-grid">
            {devices.map((device) => (
              <article key={device.name} className={`device-card ${device.accent}`}>
                <div className="device-icon">●</div>
                <h3>{device.name}</h3>
                <p>{device.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section-block roadmap-panel">
          <div className="section-head narrow">
            <span className="eyebrow">Launch roadmap</span>
            <h2>From connection rituals to premium relationship intelligence</h2>
          </div>
          <ul className="roadmap-list">
            {roadmap.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="pricing" className="section-block">
          <div className="section-head">
            <span className="eyebrow">Flexible plans</span>
            <h2>Designed to grow with the relationship</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.tone}`}>
                <h3>{plan.name}</h3>
                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>/ mo</span>
                </div>
                <p>{plan.text}</p>
                <button className="ghost-button width-full">Choose plan</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
