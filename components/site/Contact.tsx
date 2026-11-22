'use client'

import { useState, type FormEvent } from 'react'
import { Ic } from './icons'

// Formspree address, set in Vercel as NEXT_PUBLIC_FORM_ENDPOINT (see .env.example). Without it the form runs in preview mode.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT
const EMAIL = 'hello@42codinglabs.com'

type State = 'idle' | 'sending' | 'sent' | 'preview' | 'error'

export function Contact() {
  const [state, setState] = useState<State>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '')
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setMsg('Add your name and a valid email so we can reply.')
      setState('error')
      return
    }
    if (!ENDPOINT) {
      setState('preview')
      return
    }
    setState('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
    } catch {
      setMsg(`That didn't go through. Please try again, or email ${EMAIL}.`)
      setState('error')
    }
  }

  const done = state === 'sent' || state === 'preview'

  return (
    <section className="contact sec" id="contact">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Get in touch</div>
        </div>
        <div className="contact-grid">
          <div className="rv">
            <h2 className="mega">
              <span>Let&apos;s build.</span>
              <span>
                <span className="o" style={{ display: 'inline' }}>Let&apos;s </span>
                <span className="v" style={{ display: 'inline' }}>ship.</span>
              </span>
            </h2>
            <p className="lead">Tell us what you&apos;re working on. We&apos;ll reply with honest next steps and a rough plan, not a sales script.</p>
            <div className="info">
              <div><span className="ic"><Ic><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Ic></span><span><small>Email</small><b>{EMAIL}</b></span></div>
              <div><span className="ic"><Ic><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></Ic></span><span><small>Based in</small><b>Kathmandu, Nepal</b></span></div>
              <div><span className="ic"><Ic><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Ic></span><span><small>Response time</small><b>Within 1 business day</b></span></div>
            </div>
          </div>
          <div className={`form rv${done ? ' done' : ''}`} style={{ ['--d' as string]: '.1s' }}>
            <form onSubmit={onSubmit} noValidate>
              <div className="form-head">
                <div>
                  <h3>Tell us about your project</h3>
                  <p>A few details help us send a useful first reply.</p>
                </div>
                <span>About 2 min</span>
              </div>
              <div className="fgrid">
                <div><label htmlFor="f-name">Name</label><input id="f-name" name="name" required placeholder="Alex Morgan" autoComplete="name" /></div>
                <div><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></div>
                <div><label htmlFor="f-co">Company / website</label><input id="f-co" name="company" placeholder="acme.com (optional)" autoComplete="organization" /></div>
                <div>
                  <label htmlFor="f-budget">Approximate budget</label>
                  <select id="f-budget" name="budget" defaultValue="">
                    <option value="">Select a range</option>
                    <option>Under $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k – $15k</option>
                    <option>$15k+</option>
                  </select>
                </div>
                <div className="full">
                  <label htmlFor="f-need">What do you need?</label>
                  <select id="f-need" name="service" defaultValue="">
                    <option value="">Choose a service</option>
                    <option>Mobile app</option>
                    <option>Web platform</option>
                    <option>AI-built app rescue</option>
                    <option>Backend &amp; admin panel</option>
                    <option>Store publishing</option>
                  </select>
                </div>
                <div className="full"><label htmlFor="f-msg">Project details</label><textarea id="f-msg" name="message" placeholder="What are you building, who is it for, and when do you want it live?" /></div>
              </div>
              <button className="btn btn-primary send" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className={`fine${state === 'error' ? ' err' : ''}`} role={state === 'error' ? 'alert' : undefined}>
                {state === 'error' ? msg : 'We only use your details to reply about your project.'}
              </p>
            </form>
            <div className="sent" role="status">
              <div className="ok">
                <svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
              </div>
              {state === 'preview' ? (
                <>
                  <h3>The form isn&apos;t connected yet</h3>
                  <p>Nothing was sent. Email {EMAIL} to reach the studio.</p>
                </>
              ) : (
                <>
                  <h3>Thanks, we&apos;ve got it</h3>
                  <p>We&apos;ll reply within one business day.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
