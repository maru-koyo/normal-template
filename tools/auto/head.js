import { insertHead } from "./components/insertHead.js";

/**
 * @param { jsonのsiteを取得 } site
 * @param { jsonの個別ページを取得 } currentPage
 * @param { 個別ページのurlを取得 例/ "/about/" } page
 * @param { 現在の階層数を取得 例/ "/about/" = 2 } count
 * @param { 最終階層以降のファイル名を取得 例/"sample.html" } fileName
 * @returns { headに記載する内容 }
 */

export function head(site, currentPage, page, count, fileName) {
  const isFrontPage = count === 1 && fileName === "index.html" ? "website" : "article";
  const data = `<html lang="ja">
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# ${isFrontPage}: https://ogp.me/ns/${isFrontPage}#">
<!--#include virtual="/common/includes/head.html" -->
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
