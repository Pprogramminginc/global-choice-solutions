import './App.css'

// HERO IMAGE
import cleanerWoman from './assets/cleanerwoman.png'

// SERVICES IMAGES
import conference from './assets/conference.png'
import janitorial from './assets/janitorial.png'
import restroom from './assets/restroom.png'
import hallway from './assets/hallway.png'

// GALLERY IMAGES
import breakroom from './assets/breakroom.png'
import empty from './assets/empty.png'
import event from './assets/event.png'
import interior from './assets/interior.png'
import lobby from './assets/lobby.png'
import staff from './assets/staff.png'
import supplies from './assets/supplies.png'
import office from './assets/office.png'

function App() {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <img
              src="/GlobalCSlogo.png"
              alt="Global Choice Solution logo"
              className="logo-img"
            />
            <div>
              <h1>Global Choice Solution</h1>
              <p>Corporate Luxury Cleaning &amp; Custodial Services</p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#industries">Who We Serve</a>
            <a href="#gallery">Gallery</a>
            <a href="#quote">Request Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `url(${cleanerWoman})`,
          }}
        >
          <img
            src="/GlobalCSlogo.png"
            alt=""
            className="hero-logo-bg"
            aria-hidden="true"
          />

          <div className="hero-overlay"></div>

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Corporate Luxury • Commercial Cleaning</p>

              <h2>Premium Cleaning for Businesses That Expect More</h2>

              <p className="hero-text">
                Global Choice Solution delivers dependable commercial cleaning
                and custodial support for businesses across Illinois and
                Wisconsin. We help offices, shared spaces, and professional
                environments stay polished, sanitary, and ready to impress.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#quote">
                  Request a Quote
                </a>
                <a className="btn btn-secondary" href="#services">
                  Explore Services
                </a>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>Commercial Only</strong>
                  <span>Professional environments</span>
                </div>
                <div className="hero-stat">
                  <strong>IL &amp; WI</strong>
                  <span>Regional service coverage</span>
                </div>
                <div className="hero-stat">
                  <strong>Reliable Scheduling</strong>
                  <span>Consistent recurring support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container trust-items">
            <div className="trust-item">Commercial Clients Only</div>
            <div className="trust-item">Illinois &amp; Wisconsin Service Area</div>
            <div className="trust-item">Reliable • Professional • Detail-Focused</div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark-eyebrow">Our Services</p>
              <h2>Cleaning Solutions Built for Professional Spaces</h2>
              <p>
                We help commercial clients maintain clean, organized, and
                elevated environments through dependable service and flexible
                scheduling.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-image-wrap">
                  <img
                    src={conference}
                    className="service-image"
                    alt="Office and conference cleaning"
                  />
                </div>
                <div className="service-body">
                  <h3>Office &amp; Conference Cleaning</h3>
                  <p>
                    Maintain a polished environment for daily operations,
                    leadership meetings, and client-facing spaces.
                  </p>
                </div>
              </article>

              <article className="service-card">
                <div className="service-image-wrap">
                  <img
                    src={janitorial}
                    className="service-image"
                    alt="Janitorial services"
                  />
                </div>
                <div className="service-body">
                  <h3>Janitorial Services</h3>
                  <p>
                    Reliable recurring maintenance for high-traffic and
                    shared-use areas that need consistent attention.
                  </p>
                </div>
              </article>

              <article className="service-card">
                <div className="service-image-wrap">
                  <img
                    src={restroom}
                    className="service-image"
                    alt="Restroom sanitation"
                  />
                </div>
                <div className="service-body">
                  <h3>Restroom Sanitation</h3>
                  <p>
                    Thorough cleaning and sanitization designed to support
                    hygiene, presentation, and occupant comfort.
                  </p>
                </div>
              </article>

              <article className="service-card">
                <div className="service-image-wrap">
                  <img
                    src={hallway}
                    className="service-image"
                    alt="Common area cleaning"
                  />
                </div>
                <div className="service-body">
                  <h3>Common Area Cleaning</h3>
                  <p>
                    Keep lobbies, corridors, entrances, and shared spaces
                    consistently clean, welcoming, and business-ready.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="industries" className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark-eyebrow">Who We Serve</p>
              <h2>Support for the spaces your business depends on</h2>
              <p>
                We focus on commercial environments where presentation,
                consistency, and trust matter.
              </p>
            </div>

            <div className="industry-grid">
              <div className="industry-card">
                <h3>Office Suites</h3>
                <p>Clean workspaces that help teams stay focused and professional.</p>
              </div>

              <div className="industry-card">
                <h3>Corporate Buildings</h3>
                <p>Reliable upkeep for lobbies, hallways, common areas, and shared facilities.</p>
              </div>

              <div className="industry-card">
                <h3>Event Spaces</h3>
                <p>Reset and recovery support that keeps venues ready for the next experience.</p>
              </div>

              <div className="industry-card">
                <h3>Professional Interiors</h3>
                <p>Detailed cleaning for client-facing spaces where first impressions count.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow dark-eyebrow">Why Businesses Choose Us</p>
              <h2>Reliable service. Elevated standards.</h2>
              <p className="about-text">
                We focus on high-quality, dependable support for commercial
                clients who care about presentation, hygiene, and consistency.
              </p>
            </div>

            <div className="about-card">
              <div className="about-point">
                <div className="about-dot" />
                <p>Dependable scheduling and consistent service delivery</p>
              </div>

              <div className="about-point">
                <div className="about-dot" />
                <p>Professional teams with detail-focused cleaning processes</p>
              </div>

              <div className="about-point">
                <div className="about-dot" />
                <p>Flexible service solutions based on your property’s needs</p>
              </div>

              <div className="about-point">
                <div className="about-dot" />
                <p>Strong emphasis on presentation, cleanliness, and client experience</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark-eyebrow">How It Works</p>
              <h2>A simple process built for busy businesses</h2>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <span className="process-step">01</span>
                <h3>Tell us about your space</h3>
                <p>Share your property type, service needs, and preferred schedule.</p>
              </div>

              <div className="process-card">
                <span className="process-step">02</span>
                <h3>Receive a tailored plan</h3>
                <p>We recommend a service approach based on your business environment.</p>
              </div>

              <div className="process-card">
                <span className="process-step">03</span>
                <h3>Keep your space polished</h3>
                <p>Enjoy dependable recurring or one-time support with professional results.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container gallery-shell">
            <div className="gallery-copy">
              <p className="eyebrow dark-eyebrow">Gallery</p>
              <h2>Professional spaces deserve professional care</h2>
              <p>
                Explore the kinds of commercial spaces we help maintain—from
                lobbies and offices to support spaces, event resets, and
                day-to-day business environments.
              </p>
            </div>

            <div className="gallery-mosaic">
              <article className="gallery-card gallery-large">
                <img src={lobby} alt="Luxury commercial lobby" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Lobby Presentation</span>
                </div>
              </article>

              <article className="gallery-card gallery-tall">
                <img
                  src={supplies}
                  alt="Professional cleaning supplies organized"
                />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Prepared &amp; Equipped</span>
                </div>
              </article>

              <article className="gallery-card">
                <img src={breakroom} alt="Clean commercial break room" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Breakroom Refresh</span>
                </div>
              </article>

              <article className="gallery-card">
                <img src={office} alt="Clean open office workspace" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Office Maintenance</span>
                </div>
              </article>

              <article className="gallery-card">
                <img src={empty} alt="Empty office space ready after cleaning" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Move-Out Ready</span>
                </div>
              </article>

              <article className="gallery-card gallery-wide">
                <img src={event} alt="Event venue cleaned after service" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Event Reset</span>
                </div>
              </article>

              <article className="gallery-card">
                <img src={interior} alt="Professional interior corridor" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Interior Upkeep</span>
                </div>
              </article>

              <article className="gallery-card gallery-team">
                <img src={staff} alt="Global Choice Solution team members" />
                <div className="gallery-card-copy">
                  <span className="gallery-tag">Trusted Team</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section testimonial-section alt-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow dark-eyebrow">Client Experience</p>
              <h2>The kind of support businesses want to keep</h2>
            </div>

            <div className="testimonial-grid">
              <article className="testimonial-card">
                <p>
                  “Professional, dependable, and easy to work with. The space
                  always feels cleaner, sharper, and more client-ready.”
                </p>
                <span>Commercial Client</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “Their consistency matters. We need a team we can rely on,
                  and the quality of work shows every visit.”
                </p>
                <span>Office Management</span>
              </article>

              <article className="testimonial-card">
                <p>
                  “They understand presentation. Cleanliness is part of the
                  customer experience, and they help us maintain that standard.”
                </p>
                <span>Professional Workspace</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section cta-band-section">
          <div className="container cta-band">
            <div>
              <p className="eyebrow dark-eyebrow">Ready When You Are</p>
              <h2>Let your team focus on business. We’ll handle the cleaning.</h2>
            </div>

            <a className="btn btn-primary" href="#quote">
              Request Your Quote
            </a>
          </div>
        </section>

        <section id="quote" className="section quote-section">
          <div className="container quote-box">
            <div className="quote-copy">
              <p className="eyebrow dark-eyebrow">Request a Quote</p>
              <h2>Let’s build a cleaning plan for your business</h2>
              <p className="about-text">
                Tell us about your property, service priorities, and cleaning
                needs. We’ll recommend the right solution for your space.
              </p>

              <div className="quote-points">
                <div className="quote-point">Custom service plans</div>
                <div className="quote-point">Flexible scheduling</div>
                <div className="quote-point">Commercial-focused support</div>
              </div>
            </div>

            <form className="quote-form">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Business Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Office &amp; Conference Cleaning</option>
                <option>Janitorial Services</option>
                <option>Restroom Sanitation</option>
                <option>Common Area Cleaning</option>
              </select>
              <select defaultValue="">
                <option value="" disabled>
                  Select Frequency
                </option>
                <option>One-Time</option>
                <option>Weekly</option>
                <option>Bi-Weekly</option>
                <option>Monthly</option>
                <option>Custom Schedule</option>
              </select>
              <textarea
                rows="5"
                placeholder="Tell us about your property, cleaning needs, and preferred schedule"
              ></textarea>
              <button type="submit" className="btn btn-primary submit-btn">
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div>
            <h3>Global Choice Solution</h3>
            <p>Corporate Luxury Cleaning &amp; Custodial Services</p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#industries">Who We Serve</a>
            <a href="#gallery">Gallery</a>
            <a href="#quote">Request Quote</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App