# AKD website

The site for Aaj Ka Dhamaka 30.0, "First in Flight", at https://aajkadhamaka.com.
It's a static site served by GitHub Pages from the `main` branch.

## Pages

- `index.html`: home (hero, applications, teams teaser, event summary, partners)
- `teams.html`: split-flap team board
- `event.html`: event details with a live countdown
- `board.html`: board committees
- `visit.html`: visitor info and food spots
- `site.css` and `site.js`: shared styles, header and footer for every page

## Updating content

Most content lives in `assets/data.js`: the show date, venue, application deadlines, board committees and food spots.
Board photos go in `assets/board/`, named to match `data.js`.

Still to fill in:

- The OneLegends and Ekta application links (the two "Apply" buttons in `index.html`)
- Showtime and ticket links once they're set
- The team lineup in late November (`teams.html` and the Teams section of `index.html`)

## Last season

The 2026 site is kept in `2026/` and is still reachable at https://aajkadhamaka.com/2026/.
