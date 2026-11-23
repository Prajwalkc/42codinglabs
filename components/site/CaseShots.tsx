/* eslint-disable @next/next/no-img-element */
import type { BrowserShot as BrowserShotData, Shot } from '@/lib/case-studies'

/** A real web screenshot inside a minimal browser frame. */
export function BrowserShot({ shot, eager = false }: { shot: BrowserShotData; eager?: boolean }) {
  return (
    <figure className="work-browser">
      <div className="work-browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{shot.url}</span>
      </div>
      <img src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </figure>
  )
}

export function PhoneShot({ shot }: { shot: Shot }) {
  return <img src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading="lazy" decoding="async" />
}
