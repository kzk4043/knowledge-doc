export const SITE = {
  title: "kzk4043 knowledge base",
  description: "フロントエンドエンジニアkzk4043の知見まとめサイト",
  defaultLanguage: "ja_JP",
  twitter: "@kzk4043",
  github: "kzk4043",
  zenn: "soma3134",
};

export const OPEN_GRAPH = {
  image: {
    src: "/images/kzk4043-logo.png",
    alt: "kzk4043 logo",
  },
  twitter: "",
};

/**
 * header: true であれば、トップにカード表示される
 */
export const SIDEBAR = [
  // TODO: 余分なリンク消す
  // { text: "Core", header: true },
  // { text: "Introduction", link: "/core/introduction" },
  // { text: "Colors", link: "/core/colors" },
  // { text: "Typography", link: "/core/typography" },
  // { text: "Shadows", link: "/core/shadows" },

  // { text: "Components", header: true },
  // { text: "Buttons", link: "/components/buttons" },
  // { text: "Input", link: "/components/input" },
  // { text: "Status pills", link: "/components/status-pill" },
  // { text: "Table", link: "/components/table" },

  // { text: "Patterns", header: true },
  // { text: "Introduction", link: "/patterns/introduction" },

  // 全体/一般
  { text: "全体/一般", header: true, description: "勉強法、仕事術、採用など", url: "/general/introduction", image: "/images/general.png" },
  { text: "Introduction", link: "/general/introduction" },

  // プロジェクトマネジメント
  { text: "プロジェクトマネジメント", header: true, description: "プロジェクトの進め方", url: "/project-management/introduction", image: "/images/project-management.png" },
  { text: "Introduction", link: "/project-management/introduction" },

  // フロントエンド
  { text: "フロントエンド", header: true, description: "フロントエンドの環境構築、抑えておきたい技術についてなど", url: "/frontend/introduction", image: "/images/frontend.png" },
  { text: "Introduction", link: "/frontend/introduction" },
];
