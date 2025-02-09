export const SITE = {
  title: "kzk4043 knowledge base",
  description: "フロントエンドエンジニアkzk4043の知見まとめサイト",
  defaultLanguage: "ja_JP",
  twitter: "@kzk4043",
  github: "kzk4043",
  zenn: "soma3134",
  portfolio: "https://kzk4043-portfolio.netlify.app",
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
  // 全体/一般
  {
    text: "全体/一般",
    header: true,
    description: "このサイトについて、勉強法、仕事術、採用など",
    url: "/general/introduction",
    image: "/images/general.png",
  },
  { text: "Introduction", link: "/general/introduction" },
  { text: "仕事の目的", link: "/general/work" },
  { text: "身体管理", link: "/general/body" },
  { text: "メンタル管理", link: "/general/mental" },
  { text: "わかる、とは？", link: "/general/understanding" },
  { text: "人間の行動（学習）動機", link: "/general/motivation" },
  { text: "お金", link: "/general/money" },
  { text: "スプシの使い方", link: "/general/spreadsheet" },

  // プロジェクトマネジメント
  {
    text: "プロジェクトマネジメント",
    header: true,
    description: "プロジェクトの進め方",
    url: "/project-management/introduction",
    image: "/images/project-management.png",
  },
  { text: "Introduction", link: "/project-management/introduction" },
  { text: "ミーティング", link: "/project-management/meeting" },
  { text: "レビュ", link: "/project-management/review" },
  { text: "レビュ各論", link: "/project-management/review-detail" },

  // 開発基礎知識
  {
    text: "開発基礎知識",
    header: true,
    description: "http、gitなど開発関連の基礎について",
    url: "/fundamental/introduction",
    image: "/images/fundamental.png",
  },
  { text: "Introduction", link: "/fundamental/introduction" },

  // フロントエンド
  {
    text: "フロントエンド",
    header: true,
    description: "フロントエンドの環境構築、抑えておきたい技術についてなど",
    url: "/frontend/introduction",
    image: "/images/frontend.png",
  },
  { text: "Introduction", link: "/frontend/introduction" },
];
