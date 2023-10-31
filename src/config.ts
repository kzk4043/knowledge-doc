export const SITE = {
  title: "kzk4043 knowledge base",
  description: "フロントエンドエンジニアkzk4043の知見まとめサイト",
  defaultLanguage: "ja_JP",
  twitter: "@kzk4043",
  github: "kzk4043",
  // linkedin: "linkedinUsername",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Introduction", link: "/core/introduction" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/components/buttons" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },

  // 全体/一般
  { text: "全体/一般", header: true },
  { text: "Introduction", link: "/general/introduction" },

  // プロジェクトマネジメント
  { text: "プロジェクトマネジメント", header: true },
  { text: "Buttons", link: "/project-management/introduction" },

  // フロントエンド
  { text: "フロントエンド", header: true },
  { text: "Introduction", link: "/frontend/introduction" },
];
