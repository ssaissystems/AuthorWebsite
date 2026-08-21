# Shakil R. — Author Website

## Site Structure (8 pages)

| Page | File | Description |
|------|------|-------------|
| Home | index.html | Landing page with hero, featured book, series showcase, latest news |
| Author | author.html | Biography of Dr. Shakil R. |
| Books | books.html | All books across three series |
| The SENTRY Directive | sentry-directive.html | Featured book page with synopsis, characters, buy links, testimonials |
| The Circle | circle.html | Readers Circle signup form with FAQ |
| Pre-Order | preorder.html | Book pre-order form with checkout flow |
| Articles | articles.html | Research publications and opinion pieces with category filtering |
| Contact | contact.html | Contact form with newsletter signup |

## File Structure

\```
shakil-r-author-site/
├── index.html
├── author.html
├── books.html
├── sentry-directive.html
├── circle.html
├── preorder.html
├── articles.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── author-photo.svg
│       ├── sentry-directive-cover.svg
│       └── sentry-directive-cover-3d.svg
└── README.md
\```

## Tech Stack
- HTML5 (static)
- CSS3 (single shared stylesheet)
- Vanilla JavaScript (mobile nav, smooth scroll, form handling)
- Font Awesome 6.4.0 (icons via CDN)
- Google Fonts: Oswald + Open Sans

## Forms
- Contact form: Web3Forms (API key embedded)
- Readers Circle form: Formspree
- Pre-Order form: Formspree

## Deployment
This is a static site — deploy to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.).

## Notes
- Replace `shakilr.com` in robots.txt, sitemap.xml, and all meta tags with your actual domain
- Replace placeholder social links with verified accounts
- Book covers are SVG placeholders — replace with actual cover images when available
\```
