const featurePillars = [
  {
    title: 'Daily connection',
    description: 'Warm, thoughtful prompts and rituals that help couples reconnect without friction or pressure.',
    stat: '12 min/day'
  },
  {
    title: 'Shared growth',
    description: 'Guided goals, weekly reflections, and personalized coaching paths for stronger partnerships.',
    stat: 'AI relationship coach'
  },
  {
    title: 'Meaningful play',
    description: 'Date ideas, games, and memory prompts designed to make joy feel effortless and regular.',
    stat: '2.3x more date nights'
  },
  {
    title: 'Protected intimacy',
    description: 'Consent-aware check-ins, security defaults, and private spaces designed for trust and comfort.',
    stat: 'Private by design'
  }
]

const experiencePillars = [
  { name: 'Phone', label: 'Micro-moments', accent: 'rose', copy: 'Check-ins, reminders, and affirmations that fit naturally into the day.' },
  { name: 'Tablet', label: 'Shared planning', accent: 'violet', copy: 'Weekly reviews, date planning, and conversation starters in a shared room.' },
  { name: 'Laptop', label: 'Deep dives', accent: 'amber', copy: 'Insights, long-form reflections, and milestone planning in a calm workspace.' },
  { name: 'Wearables', label: 'Gentle nudges', accent: 'cyan', copy: 'Light reminders and prompts without disrupting your real-life rhythm.' }
]

const roadmap = [
  'Couple onboarding and identity setup',
  'AI-powered relationship insights',
  'Shared rituals, games, and date planning',
  'Premium subscriptions and gifting',
  'Cross-device sync and notifications'
]

const plans = [
  { name: 'Essential', price: '$0', text: 'Daily prompts, habit tracking, and relationship basics.', tone: 'muted' },
  { name: 'Together', price: '$29', text: 'Advanced check-ins, weekly coaching, and shared relationship intelligence.', tone: 'primary' },
  { name: 'Signature', price: '$59', text: 'Full access to concierge-level insights, premium experiences, and private support.', tone: 'accent' }
]

const testimonials = [
  '“The best relationship product I’ve seen for turning everyday life into intentional connection.”',
  '“It feels premium, thoughtful, and genuinely designed around couples instead of generic wellness.”',
  '“Our quality of conversation deepened almost immediately.”'
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <span>Vines Velvet</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
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
            <span className="eyebrow">Premium relationship software</span>
            <h1>Turn everyday moments into a stronger, more joyful connection.</h1>
            <p>
              Vines Velvet is a relationship mega hub built for couples to grow together across every device,
              with rituals, insight, play, and protection woven into one premium experience.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Start the journey</button>
              <button className="secondary-button">See the roadmap</button>
            </div>

            <div className="trust-row" aria-label="Trust indicators">
              <span>Couples-first</span>
              <span>Private by design</span>
              <span>Cross-device sync</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Product preview panel">
            <div className="display-stack">
              <div className="floating-card phone-card">
                <div className="mini-topbar" />
                <div className="mini-chart chart-a" />
                <div className="mini-bars">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="floating-card tablet-card">
                <div className="mini-topbar short" />
                <div className="tablet-grid">
                  <div className="grid-panel tall" />
                  <div className="grid-panel" />
                  <div className="grid-panel wide" />
                </div>
              </div>

              <div className="floating-card desktop-card">
                <div className="desktop-window">
                  <div className="window-bar" />
                  <div className="window-data">
                    <div className="data-pill" />
                    <div className="data-line" />
                    <div className="data-line short" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <article>
            <strong>4x</strong>
            <span>device coverage</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>guided support</span>
          </article>
          <article>
            <strong>1 hub</strong>
            <span>for every ritual</span>
          </article>
          <article>
            <strong>99.9%</strong>
            <span>careful defaults</span>
          </article>
        </section>

        <section id="features" className="section-block">
          <div className="section-head">
            <span className="eyebrow">Core pillars</span>
            <h2>Built for closeness, growth, and shared joy.</h2>
          </div>

          <div className="feature-grid">
            {featurePillars.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-badge">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-stat">{feature.stat}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-head">
            <span className="eyebrow">Cross-device experience</span>
            <h2>One premium relationship layer across every touchpoint.</h2>
          </div>

          <div className="experience-grid">
            {experiencePillars.map((item) => (
              <article key={item.name} className={`experience-card ${item.accent}`}>
                <div className="device-bullet">●</div>
                <span className="device-label">{item.label}</span>
                <h3>{item.name}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block spotlight-panel">
          <div className="spotlight-copy">
            <span className="eyebrow">Why it feels premium</span>
            <h2>Every interaction is designed to feel thoughtful, warm, and intentional.</h2>
          </div>

          <div className="spotlight-points">
            <div>
              <strong>Private ritual design</strong>
              <p>Consent-aware prompts and safe defaults create emotional trust from day one.</p>
            </div>
            <div>
              <strong>Personalized insights</strong>
              <p>AI-enhanced suggestions adapt to your relationship without feeling intrusive or cold.</p>
            </div>
            <div>
              <strong>Shared joy mechanics</strong>
              <p>Gamified dates and playful experiences keep affection active, fun, and sustainable.</p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section-block roadmap-panel">
          <div className="section-head narrow">
            <span className="eyebrow">Launch roadmap</span>
            <h2>From intimate rituals to a full premium relationship ecosystem.</h2>
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

        <section className="section-block testimonial-panel">
          <div className="section-head">
            <span className="eyebrow">Loved by early adopters</span>
            <h2>Built to feel as premium as the relationship it supports.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((quote) => (
              <blockquote key={quote}>{quote}</blockquote>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-block pricing-panel">
          <div className="section-head">
            <span className="eyebrow">Powerful pricing</span>
            <h2>Premium tiers for couples at every stage of the relationship.</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.tone}`}>
                <h3>{plan.name}</h3>
                <div className="price-line">
                  <strong>{plan.price}</strong>
                  <span>/ month</span>
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
