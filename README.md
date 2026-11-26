# Drop By Drop

A responsive static marketing website for Drop By Drop Trust. No dependency installation or build is required.

## Run locally

Run `npm start` and open the printed local URL. To use a different port in PowerShell, set `$env:PORT='4287'` before running the server. The site also opens directly from `dist/index.html`.

## Edit

- `dist/index.html`: page sections, services, leadership, contact details and SEO.
- `dist/styles.css`: visual design, responsive layouts and reduced-motion support.
- `dist/refresh.css`: the current cream, teal and gold design, including responsive technology cards.
- `dist/app.js`: documented project data, filters, accessible dialogs, navigation and enquiry handling.
- `dist/assets`: images extracted from the supplied PDF and the original downloadable profile.

## Content provenance

Organisation details and project photographs come from the supplied 14-page company profile, included at `dist/assets/drop-by-drop-profile.pdf`, supplemented by the client's personal story and the user's confirmation of Suchethana's role.

The rainwater filtration section uses the approved text and original product photographs from the supplied 10-page First Flush, Leaf Eater and Maelstrom PDF. Total Rain combines Leaf Eater Stream and a Carrot first-flush diverter (pages 1-2); Maelstrom filtration is described on pages 3-4; First Flush Carrot is described on pages 5-9. Product images retain their original appearance and are cropped from the rendered PDF. These are Rain Harvesting / Blue Mountain Co products; the section does not claim that Drop By Drop manufactures them. The 180-micron specification describes particulate filtration, not water disinfection.

- The user confirmed that Suchethana is both Founder and Director. His first-person story is clearly attributed, with grammar and phrasing refined while preserving the supplied personal account, rainfall figure and family experience. The client supplied the 25-year history; formal trust registration in 2014 remains a separate fact. The hero experience label uses the same 25-year figure.
- The full story expands inline using native HTML details/summary, with keyboard support and no JavaScript dependency. Background and credentials remain separate from the first-person narrative.
- The Adichunchanagiri Institute of Medical Sciences (AIMS, Bellur Cross), SJC College (Chikkaballapur), Sri Lakshmi Enclave (Jakkur) and Purva Atria Apartment (Dollars Colony) entries use separately supplied site photographs, not the profile PDF. Their text describes only what the photographs show; no completion dates, capacities or outcomes are claimed.
- The 90+ borewell recharge figure is explicitly dated to 2024.
- Victory Harmony's tanker reduction is described as a reported rainy-season result for that property, not a promise for other sites.
- Reitzel, Texport and AAMBIS details retain the design/proposal qualifications in the source.
- No current regulatory requirements or invented testimonials are included.

## Enquiries

The form validates required fields and opens WhatsApp with a prepared enquiry to +91 94823 30176. The visitor reviews and sends the message in WhatsApp. The site does not store form submissions, claim to have sent a message, or use a third-party form backend. Direct telephone and email links are also provided.

## Deployment

The static output is `dist/`. Site identity is retained in `.openai/hosting.json`. Keep the current project ID when updating this site.
