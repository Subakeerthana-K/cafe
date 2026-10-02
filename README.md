# SK CAFE: Local Business Website & Live Pitch Project

*Good Coffee. Great Snacks. Happy Moments.*

A responsive café website for **SK Cafe** (Coimbatore, Tamil Nadu), built as an internship project. It is a single self-contained file, `sk-cafe.html`, with all code and photos inside.

## How to run

1. Open `sk-cafe.html` in any modern browser (Chrome, Edge, Firefox, Safari).
2. No installation or server is needed.
3. An internet connection is required for fonts, icons and the Google Map.

## Pages (hash routes)

| Page | Route |
|---|---|
| Login / Create Account | `#/login` |
| Home | `#/` |
| About Us | `#/about` |
| Menu | `#/menu` |
| Cart | `#/cart` |
| Book a Table | `#/book` |
| Gallery | `#/gallery` |
| Reviews | `#/reviews` |
| Location / Contact | `#/contact` |
| Booking Confirmation | `#/confirmation` |

## Features

- **Login page** surrounded by floating café and snack photos with quotes (demo login: any email and a password of 4+ characters).
- **Sticky navbar** that is transparent on the home hero and blurred chocolate-brown after scrolling, with a live cart count and a mobile hamburger menu.
- **Menu** with about 53 items across Coffee, Hot Beverages, Cold Beverages, Snacks, Breakfast and Desserts. It has category filters and live search, and each item shows a name, description, price and rating.
- **Add to Cart animation:** the button changes to "Added ✓", a picture flies to the cart, coffee beans pop, a toast appears and the cart count bumps.
- **Cart** with quantity +/-, remove, subtotal, 5% tax, total and an empty-cart state.
- **Table booking** with form validation and a **mandatory ₹100 advance** (demo UPI / Card / Net Banking). The booking cannot be confirmed until the advance is paid.
- **Gift voucher:** if the order total (cart subtotal + tax) is **above ₹500**, a unique ₹100 voucher code such as `SKCAFE100-X7P9` is shown. At ₹500 or below, a thank-you message is shown instead. The ₹100 advance is not counted toward the total.
- **Gallery** with category filters and a lightbox.
- **Reviews** (clearly marked as demo testimonials), **offers**, **opening hours** with an "Open Today" indicator, and a **Google Maps** embed with Get Directions.
- **Accessibility and SEO:** semantic HTML, alt text, visible focus states, `prefers-reduced-motion` support, a page title, a meta description and Open Graph tags.

## Technology

HTML5, CSS3 and vanilla JavaScript (single-page app with hash routing), Lucide icons, and Google Fonts (Playfair Display, Poppins). Colors: Dark Chocolate `#2B1710`, Chocolate `#4A2618`, Coffee `#6F432C`, Caramel `#B87945`, Cream `#FFF4E5`, Beige `#F3E1CC`.

## Where to edit

| To change | Look for |
|---|---|
| Menu items and prices | `RAW` list in the `<script>` (format: `Name\|Category\|Description\|Price\|imageKey`) |
| Photos | `IMG` object (base64 images), then set an item's `imageKey` |
| Address, phone, email | the `contact` page and footer; update the Google Maps URLs too |
| Opening hours | the `hrs()` function and the `contact` page |
| Colors | CSS variables at the top of the `<style>` block |
| Advance amount | the `₹100` text and logic on the `book` page |

## Demo limitations

- **Payment is simulated.** No real money is charged and no payment keys exist in the code.
- **Login is a demo.** There is no real account system or database.
- **Cart storage:** the cart is kept in the browser's local storage only.
- **Placeholders:** the address, phone and email are placeholders. Replace them and the map location with the real details before going live.
- **Reviews:** these are sample testimonials, not real customers.
- **Photos:** some menu items use an icon tile because no matching photo was supplied. Check the license of every photo before public use.
- **Voucher download:** "Save Voucher" may not work in every hosted or embedded context. "Copy Voucher" always works.

## Future improvements

- Real payment gateway (for example Razorpay), with keys kept in server-side environment variables.
- Backend and database for accounts, bookings and orders, plus email/SMS confirmations.
- Real-time table availability and an admin dashboard.
- Voucher redemption at checkout.
- Real customer reviews, and the final Google Maps business listing.
- Migration to React, TypeScript and Tailwind CSS for larger-scale maintenance.
