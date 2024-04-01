import { insertStructure } from "./components/insertStructure.js";
import { listBox } from "./components/listbox.js";

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
