# SK Cafe

A responsive café website with a digital menu, cart, table booking and a Google Sheets + email booking backend. Built for the internship project **Local Business Website & Live Pitch Project**.

*Good Coffee. Great Snacks. Happy Moments.*

*LIVE WEBSITE LINK:*https://skcafe.vercel.app/#/book

## Features

- Login page, home, about, menu, cart, booking, gallery, reviews, contact and confirmation pages
- 53 menu items with photos, category filters and live search
- Add-to-cart animation, cart with quantity controls and tax
- Table booking with form validation and a mandatory ₹100 advance (demo payment)
- Gift voucher for orders above ₹500
- Google Maps location and opening hours
- Bookings saved to Google Sheets, with an email sent to the owner

## Files

```
index.html            Wrapper page. Loads the site and attaches the connector
sk-cafe.html          The café website
sk-cafe-connector.js  Sends booking data to Google Apps Script
```

`Code.gs` (the Google Apps Script backend) is not hosted here. It lives in the Google Sheet's Apps Script editor.

## How it works

```
Visitor books a table -> connector sends the data -> Google Apps Script
-> saves a row in Google Sheets -> emails the owner.
```

## Setup

**1. Google Sheet and script**
1. Create a Google Sheet, then open Extensions > Apps Script.
2. Paste in `Code.gs` and set `OWNER_EMAIL` to your email.
3. Run `testSubmission` once and allow the permissions.
4. Deploy > New deployment > Web app. Set Execute as **Me** and Who has access **Anyone**.
5. Copy the Web app URL (ends in `/exec`).

**2. Website**
1. In `sk-cafe-connector.js`, replace `YOUR_WEB_APP_URL` with your `/exec` URL.
2. Put the three files above in the root of the repo (no folders).
3. Host the repo (Vercel, GitHub Pages or Netlify) and open `index.html`.

After editing `Code.gs`, always create a new version: Deploy > Manage deployments > pencil icon > New version > Deploy.

## Test it

1. Open the site, log in with any email and a password of 4+ characters.
2. Add an item to the cart, then open Book a Table.
3. Fill in every field, enter any UPI ID, click Pay ₹100 Advance, then Confirm Booking.
4. Check the Bookings tab in your sheet and your email.

## Troubleshooting

| Problem | Fix |
|---|---|
| Nothing saves | Open the site through `index.html`, not `sk-cafe.html` |
| Opening the `/exec` URL asks you to sign in | Set Who has access to **Anyone** and redeploy |
| Sheet stays empty | Create the script from inside the sheet, or set `SPREADSHEET_ID` in `Code.gs` |
| No email | Set `OWNER_EMAIL` and run `testSubmission` to authorize |
| Page changes not showing | Hard refresh with Ctrl+Shift+R |

## Tech

HTML, CSS, vanilla JavaScript, Lucide icons, Google Fonts, Google Apps Script, Google Sheets, Vercel.

## Notes

- Payment is simulated. No real money is charged.
- Login is a demo. There are no real accounts.
- Reviews are sample testimonials.
- The address, phone and email are placeholders. Replace them with the real details before going live.
- Check the license of every photo before public use.
