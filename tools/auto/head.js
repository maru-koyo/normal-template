import { insertHead } from "../components/insertHead.js";
// ページごとに変化がなく、全ページ共通で入れるタグはSSIなどでファイル分割する方が良い->更新時にすべてのファイルをftpにアップする必要ないから

export function head(site, currentPage, page, count, fileName) {
  const isFrontPage =
    count === 1 && fileName === "index.html" ? "website" : "article";
  const data = `<html lang="ja">
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# ${isFrontPage}: https://ogp.me/ns/${isFrontPage}#">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="og:locale" content="ja_JP" />
<link rel="apple-touch-icon-precomposed" href="${
    site.url + site.appleTouchIcon
  }" />
<meta property="og:image" content="${site.url + site.ogImg}" />
<link rel="icon" href="${site.url + site.favicon}" />
<meta property="og:site_name" content="${site.name}" />
<title>${currentPage.title}</title>
<meta name="description" content="${currentPage.description}" />
<meta property="og:title" content="${currentPage.title}" />
<meta property="og:description" content="${currentPage.description}" />
<meta property="og:type" content="${isFrontPage}" />
<meta property="og:url" content="${site.url + page}" />
<link rel="canonical" href="${site.url + page}">
`;
  return insertHead(data);
}
