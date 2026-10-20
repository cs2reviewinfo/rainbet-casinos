Rainbet Poland — static site (rainbet-casinos.pl)

Structure
  index.html, <page>/index.html   generated pages (do not edit by hand)
  styles.css, main.js             shared styles and the menu script
  images/, footer/                supplied visuals (logo.svg, game cards, crypto icons)
  build/lib.mjs                   shared data, layout (menu, footer), components, referral link, PROMO_CODE switch
  build/pages/*.mjs               content for each page
  sitemap.xml, robots.txt         generated

Rebuild after editing:  node build/build.mjs

Links use clean URLs (e.g. ../bonus/), so preview through a web server, e.g.
  python3 -m http.server 8000   →   http://localhost:8000/

Before publishing, recheck every offer, payment, licence and eligibility fact against /.
