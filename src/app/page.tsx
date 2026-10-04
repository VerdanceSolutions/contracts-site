export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <div className="wordmark">Verdance</div>
        <a href="mailto:hello@verdancesolutions.net">Start a conversation</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">Trade execution for a changing world</p>
        <h1>Verdance Trade Solutions</h1>
        <p className="hero-copy">
          We help build producer-direct commercial lanes that are documented,
          commercially usable, and designed to endure.
        </p>
        <a className="button" href="mailto:hello@verdancesolutions.net">
          Start a conversation
        </a>
      </section>

      <section className="intro">
        <p className="section-label">What we do</p>
        <h2>Trade works better when the lane is built to last.</h2>
        <p className="intro-copy">
          Verdance designs, validates, and governs qualified producer-direct
          commercial lanes. We bring together commercial structure,
          documentation, operating workflows, and ongoing coordination so
          buyers and producers can move forward with greater clarity.
        </p>
      </section>

      <section className="services">
        <article>
          <span>01</span>
          <h3>Lane design</h3>
          <p>
            Shape a practical commercial pathway between qualified producers,
            buyers, and the partners needed to execute.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Readiness and documentation</h3>
          <p>
            Organize commercial readiness, provenance, traceability, and the
            information required for confident participation.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Operating governance</h3>
          <p>
            Support the workflows, records, and coordination that help a lane
            remain clear and repeatable over time.
          </p>
        </article>
      </section>

      <footer>
        <span>Verdance Trade Solutions</span>
        <a href="mailto:hello@verdancesolutions.net">
          hello@verdancesolutions.net
        </a>
      </footer>
    </main>
  );
}