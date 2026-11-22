// Sample layout only: these are placeholders, clearly labelled, until real client reviews exist.
const Q = [
  ['We came in with a half-working Bolt prototype and left with an app in both stores two weeks later.', 'Founder, fintech startup'],
  ['They asked about our business before our features. The app we got was smaller than we planned and far better.', 'COO, travel operator'],
  ['Weekly test builds meant we never wondered where the project stood.', 'Product lead, SaaS'],
  ['Our rejection from Apple turned into an approval in three days, with a clear note on what changed.', 'Founder, wellness app'],
  ['It feels like a native app, not a website in a box. Our users noticed straight away.', 'CTO, marketplace'],
  ['Clear scope, fair price, delivered on the date they gave us on the first call.', 'Operations lead, retail'],
]

function Card({ q, role, hidden }: { q: string; role: string; hidden?: boolean }) {
  return (
    <figure className="q" style={{ margin: 0 }} aria-hidden={hidden}>
      <p>“{q}”</p>
      <figcaption className="who">
        <i>SC</i>
        <span>
          Sample client
          <small>{role}</small>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const r1 = Q
  const r2 = [...Q.slice(3), ...Q.slice(0, 3)]
  return (
    <section className="sec" id="voices">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Client voices</div>
        </div>
        <h2 className="mega rv">
          <span>What clients</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Will </span>
            <span className="v" style={{ display: 'inline' }}>say.</span>
          </span>
        </h2>
        <span className="ph-tag rv">Sample layout · real reviews replace these after launch</span>
      </div>
      <div className="tst">
        {[r1, r2].map((row, k) => (
          <div className={`tst-row${k ? ' rev' : ''}`} key={k}>
            {[...row, ...row].map(([q, role], i) => (
              <Card key={i} q={q} role={role} hidden={i >= row.length} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
