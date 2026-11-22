import type { ReactNode } from 'react'
import { Ic } from './icons'

const STEPS: { t: string; p: string; icon: ReactNode }[] = [
  { t: 'Discovery call', p: 'We learn the business goal, the users and the constraints before anyone talks about screens.', icon: <Ic><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></Ic> },
  { t: 'Scope & plan', p: 'A fixed scope, a timeline you can hold us to, and a clear list of what ships first.', icon: <Ic><path d="M4 6h10M4 12h16M4 18h7" /></Ic> },
  { t: 'Design', p: 'Flows and a visual system built for the platform, reviewed with you before code.', icon: <Ic><path d="M4 20l4-1 11-11-3-3L5 16z" /></Ic> },
  { t: 'Build', p: 'TypeScript, Expo and Node, shipped in short cycles with a test build in your hands each week.', icon: <Ic><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></Ic> },
  { t: 'QA & security', p: 'Small-phone checks, crash testing, auth and data reviewed before anything goes public.', icon: <Ic><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></Ic> },
  { t: 'Launch & care', p: 'Store submission, monitoring, and monthly updates so the product keeps getting better.', icon: <Ic><path d="M5 12h14M13 6l6 6-6 6" /></Ic> },
]

export function Process() {
  return (
    <section className="sec" id="process" style={{ background: 'radial-gradient(900px 200px at 50% 0,rgba(117,77,236,.1),transparent 70%)' }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Process</div>
        </div>
        <h2 className="mega rv">
          <span>First commit to launch</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Without the </span>
            <span className="v" style={{ display: 'inline' }}>guesswork.</span>
          </span>
        </h2>
        <div className="proc">
          {STEPS.map((s, i) => (
            <div className="step rv" key={s.t} style={{ ['--d' as string]: `${(i % 3) * 0.08}s` }}>
              <div className="k">{String(i + 1).padStart(2, '0')}</div>
              <div className="ic">{s.icon}</div>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
        <div className="proc-note rv">Six steps. One goal: ship the right product, calmly.</div>
      </div>
    </section>
  )
}
