# 42 Coding Labs brand and marketing kit

This folder is not part of the website build. It keeps the brand kit backed up next to the site code.

This is the print, social and sales material for 42 Coding Labs, in the approved brand: dark first, Poppins type, violet glow behind things and the teal cursor.
The tagline is **Think. Code. Ship** and ends in the teal cursor instead of a full stop. In plain text, write "Think. Code. Ship." "The answer is good code." stays as a secondary line because it explains the 42.
Wherever it appears, the tagline is set the same way as on the business card: spaced capitals, THINK. CODE. SHIP (Medium 500, +14% tracking), then the teal cursor (0.46 × 0.56 em) after a word-space gap. In HTML use `<span class="tagline">Think. Code. Ship<span class="tcur"></span></span>` with `shared/brand.css`.

Violet text in **[brackets]** is a placeholder. Replace it before printing or sending.

## What each file is for

| Folder | File | Use it for |
|---|---|---|
| `brand-guidelines/` | `42-coding-labs-brand-guidelines.pdf` | One-page A4 reference: logo, clear space, minimum sizes, colours (HEX/RGB/CMYK), type, voice, do and don't. Give it to anyone who designs for us. |
| `business-card/` | `business-card-prajwal-kc-print-cropmarks.pdf` | **Prajwal KC's card (CTO, Co-founder). Ready to print.** There are also `-print-bleed.pdf` and `-print-cropmarks-flat-front.pdf` versions, and the source `business-card-prajwal-kc.html`. |
| | `business-card-print-cropmarks.pdf` | **Send this one to the printer.** 85×55 mm, 3 mm bleed, crop marks. Page 1 is the front (dark), page 2 the back (light). |
| | `business-card-print-cropmarks-flat-front.pdf` | Backup with a plain near-black front and no violet glow. Use it if the glow bands or looks muddy on the printer's proof. |
| | `business-card-print-bleed.pdf` | The same card with bleed but no crop marks, for printers who add their own. |
| | `business-card.html` | Source. Edit the name, title and phone, then re-export (see below). One file per person. |
| `email-signature/` | `email-signature-prajwal-kc.html` | Prajwal's signature, filled in and ready to copy. |
| | `email-signature.html` | Open it in a browser, replace the placeholders, then copy the boxed signature into Gmail or Apple Mail. The logo loads from www.42codinglabs.com. |
| `capabilities/` | `42-coding-labs-capabilities-A4.pdf` | One-page capabilities sheet to attach to emails and proposals. Every claim on it comes from the live site. |
| `social/export/` | `linkedin-company-cover-1128x191.png` | Cover image for the LinkedIn company page. |
| | `linkedin-personal-banner-1584x396.png` | Banner for team members' personal LinkedIn profiles. |
| | `linkedin-post-1/2/3-…-1080x1350.png` | Post templates: statement, service spotlight (AI-built app rescue) and process. |
| | `gig-1…4-…-fiverr-1280x769.png` | Fiverr gig images: mobile app, AI app rescue, store publishing, app + backend + admin panel. |
| | `gig-1…4-…-upwork-1600x1200.png` | The same four gigs sized for Upwork projects. |
| `social/` | `social.html` | Source for every social and gig image. Copy a frame to make a new post. |
| `templates/` | `42-coding-labs-letterhead-template.pdf` | Letterhead. |
| | `42-coding-labs-proposal-template.pdf` | Proposal: cover, summary, goals, scope, process, timeline, investment, terms, sign-off. |
| | `42-coding-labs-invoice-template.pdf` | Invoice in USD with bank details. |
| | `letterhead.html`, `proposal.html`, `invoice.html` | Editable sources. Open one in Chrome, click any text to edit it, then Print > Save as PDF (A4, Background graphics on). The footer and page numbers are added in print. |
| `deck/project/` | `deck.json`, `deck.css`, `slides/*.html` | Backup copy of the credentials deck. The live deck is a private Slides artifact: https://claude.ai/artifact/8LcH39vjvjqEvTgiQMSvaf. Download it from there as PDF or PPTX. Share it from the artifact page before sending the link to anyone. Slide 8 ("Selected work") is a placeholder: fill it in or hide it. |
| `print-logos/` | `*.pdf` | Vector logo PDFs with all text converted to outlines, for printers who ask for PDF. "On-dark" versions include the near-black background. |
| `shared/` | `brand.css`, `fonts/`, `logo/` | Tokens, Poppins files and the outlined logo SVGs that every piece uses. |
| `tools/` | `*.mjs` | Scripts that export the PDFs and PNGs (below). |

All logo SVGs with the text converted to outlines are in `logo-outlined/`. `shared/logo/` holds the copies the pieces use.

## Printing notes

- **Business card:** ask for matte stock, 350 gsm or heavier, and **a printed proof before the full run**. The back is the brand's cool off-white (#F6F6FA), not cream, beige or grey. Print it on smooth, bright white uncoated stock. If the light tint comes out blotchy on the proof, use a natural or soft white paper and print no colour on the back. Check the dark front for banding in the violet glow and check that the 7 pt text on the back is crisp.
- The PDFs are RGB. A local shop will convert them to CMYK. The guidelines list approximate CMYK values, and near-black should print as rich black (C60 M40 Y40 K100). Teal and violet sit near the edge of what CMYK can print, so judge them on the proof, not on screen.
- All logo text is outlined, so the printer doesn't need Poppins.

## Re-exporting after an edit

```bash
cd brand-kit/tools && npm install
```

```bash
node render.mjs ../business-card/business-card.html "../business-card/business-card-print-cropmarks.pdf"
```

The crop-mark version needs `#marks` at the end of the input path (`business-card.html#marks`). Without it you get the bleed-only version. Add `-flat` (`#marks-flat`) for the backup front without the glow. Other exports work the same way:

- `node render.mjs <file>.html <out>.pdf` for A4 pieces
- `node render-frames.mjs ../social/social.html ../social/export` for all social and gig images
- `node outline-logos.mjs` to re-outline logos after the brand SVGs change
- `node logo-pdfs.mjs` to rebuild the print logo PDFs

The scripts use the installed Google Chrome.

## Still to fill in

- Prajwal KC's card and signature are done. Other team members need their own copies, and the letterhead and proposal still need a name filled in each time.
- Registered business name, PAN and address, plus bank details, on the invoice.
- Real projects, with client permission, for slide 8 of the deck.
- Before printing cards, do a quick web and trademark search on "Think. Code. Ship". Similar three-verb lines are common.
