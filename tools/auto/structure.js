import { insertStructure } from "./components/insertStructure.js";
import { listBox } from "./components/listbox.js";

/**
 * @param { jsonのsiteを取得 } site
 * @param { jsonのファイルの内容を取得 } jsonFile
 * @param { 個別ページのurlを取得 例/ "/about/" } page
 * @param { 現在の階層数を取得 例/ "/about/" = 2 } count
 * @returns { 構造化データに記載する内容 }
 */

export function structure(site, jsonFile, page, count) {
  const data = {
    "@context": "https://schema.org/",
    "@type": count === 1 ? "WebSite" : "BreadcrumbList",
    name: site.name,
    logo: site.url + site.logo,
    description: site.description,
    url: site.url + "/",
    telephone: site.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    itemListElement: listBox(site, page, jsonFile, count),
  };
  return insertStructure(data);
}
