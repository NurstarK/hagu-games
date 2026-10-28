// Hagu Games game registry.
// Each entry embeds the game's live GitHub Pages build, so games update
// automatically when their own repos ship.
const HAGU_GAMES = [
  {
    slug: "element-friends",
    title: "Element Friends",
    jp: "エレメントフレンズ",
    blurb: "A cozy alchemy of cuteness: combine element friends and discover brand-new friends.",
    tags: ["Cozy", "Merge"],
    url: "https://kodawari10.github.io/element-friends-play/",
    repo: "https://github.com/Kodawari10/element-friends-play",
    icon: "https://kodawari10.github.io/element-friends-play/icons/icon-512.png",
    maker: "Kodawari",
    accent: "peach"
  },
  {
    slug: "jewel-dress",
    title: "Jewel Dress",
    jp: "ジュエルドレス",
    blurb: "Design dresses, set real gemstones on them, and learn where each stone comes from.",
    tags: ["Dress-up", "Gems"],
    url: "https://kodawari10.github.io/jewel-dress-play/",
    repo: "https://github.com/Kodawari10/jewel-dress-play",
    icon: "https://kodawari10.github.io/jewel-dress-play/icons/icon-512.png",
    maker: "Kodawari",
    accent: "lilac"
  },
  {
    slug: "kana-arcade",
    title: "Kana Arcade",
    jp: "かなアーケード",
    blurb: "A cute arcade for learning Japanese kana, one glowing glyph at a time.",
    tags: ["Arcade", "Learn JP"],
    url: "https://kodawari10.github.io/kana-arcade-play/",
    repo: "https://github.com/Kodawari10/kana-arcade-play",
    icon: "https://kodawari10.github.io/kana-arcade-play/icons/icon-512.png",
    maker: "Kodawari",
    accent: "mint"
  },
  {
    slug: "puppy-pals",
    title: "Puppy Pals",
    jp: "パピーパルズ",
    blurb: "A kawaii gallery of 34 dog breeds to browse, quiz, match and favorite.",
    tags: ["Collection", "Dogs"],
    url: "https://kodawari10.github.io/puppy-pals-play/",
    repo: "https://github.com/Kodawari10/puppy-pals-play",
    icon: "https://kodawari10.github.io/puppy-pals-play/icons/icon-512.png",
    maker: "Kodawari",
    accent: "butter"
  },
  {
    slug: "coloring-book",
    title: "Coloring Book",
    jp: "ぬりえブック",
    blurb: "A cozy kawaii coloring book with mandalas, cute animals and relaxing sounds.",
    tags: ["Cozy", "Coloring"],
    url: "https://kodawari10.github.io/coloring-book-play/",
    repo: "https://github.com/Kodawari10/coloring-book-play",
    icon: "https://kodawari10.github.io/coloring-book-play/icons/icon-512.png",
    maker: "Kodawari",
    accent: "rose"
  },
  {
    slug: "tetropolis",
    title: "Tetropolis",
    jp: "テトロポリス",
    blurb: "Tetris where the blocks are cities: merge cities into countries, clear whole continents.",
    tags: ["Puzzle", "Geography"],
    url: "https://nurstark.github.io/tetropolis/",
    repo: "https://github.com/NurstarK/tetropolis",
    icon: null, // no icon asset; the card renders a city-tile emblem instead
    emoji: "🏙️",
    maker: "Nurstar",
    accent: "sky"
  }
];

function haguGameBySlug(slug) {
  return HAGU_GAMES.find(g => g.slug === slug) || null;
}
