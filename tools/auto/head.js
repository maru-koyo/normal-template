import { insertHead } from './components/insertHead.js'
// ページごとに変化がなく、全ページ共通で入れるタグはSSIなどでファイル分割する方が良い->更新時にすべてのファイルをftpにアップする必要ないから

export function head(site, currentPage, page, count, fileName) {
  const isFrontPage =
    count === 1 && fileName === 'index.html' ? 'website' : 'article'
  const data = `<html lang="ja">
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# ${isFrontPage}: https://ogp.me/ns/${isFrontPage}#">
<!--#include virtual="/common/include/header.html" -->
<meta property="og:site_name" content="${site.name}" />
<title>${currentPage.title}</title>
<meta name="description" content="${currentPage.description}" />
<meta property="og:title" content="${currentPage.title}" />
<meta property="og:description" content="${currentPage.description}" />
<meta property="og:type" content="${isFrontPage}" />
<meta property="og:url" content="${site.url + page}" />
<link rel="canonical" href="${site.url + page}">
`
  return insertHead(data)
}
