# Hagu Gaming 🤗

**Hagu** (ハグ) means **hug** in Japanese. This is our family arcade: a cozy
hub where all of our browser games live, playable right on the page.

**Play:** https://nurstark.github.io/hagu-gaming/

## The games

| Game | Maker | Source |
| --- | --- | --- |
| Element Friends ✨ | Kodawari | [Kodawari10/element-friends-play](https://github.com/Kodawari10/element-friends-play) |
| Jewel Dress 💎 | Kodawari | [Kodawari10/jewel-dress-play](https://github.com/Kodawari10/jewel-dress-play) |
| Kana Arcade 🎌 | Kodawari | [Kodawari10/kana-arcade-play](https://github.com/Kodawari10/kana-arcade-play) |
| Puppy Pals 🐾 | Kodawari | [Kodawari10/puppy-pals-play](https://github.com/Kodawari10/puppy-pals-play) |
| Tetropolis 🏙️ | Nurstar | [NurstarK/tetropolis](https://github.com/NurstarK/tetropolis) |

## How it works

Pure static site with no build step and no dependencies. Each game is embedded from
its own live GitHub Pages deployment, so games update here automatically
whenever their own repos ship.

- `index.html`: the lobby (game shelf)
- `play.html?g=<slug>`: full-screen player for one game
- `js/games.js`: the game registry; **add new games here**

## Adding a game

1. Ship the game to its own repo with GitHub Pages enabled.
2. Add an entry to `HAGU_GAMES` in `js/games.js` (slug, title, blurb, Pages
   URL, icon URL, accent color).
3. Done. The lobby and player pick it up automatically.
