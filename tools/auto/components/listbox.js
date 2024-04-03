import { getAfterLastStr } from "../../utils/getAfterLastStr.js";

export function listBox(site, page, jsonFile, count) {
  const singleSplit = page.split("/");
  const fileName = getAfterLastStr(page);

  const listBox = [];

  for (let i = 1; i < count + 1; i++) {
    let itemUrl;
    let itemTitle;

    if (count === 1) {
      return;
    }

    switch (i) {
      case 1:
        continue;
      case 2:
        itemUrl =
          site.url +
          "/" +
          singleSplit[i - 1] +
          "/" +
          (count === 2 ? fileName : "");
        itemTitle =
          jsonFile[
            "/" + singleSplit[i - 1] + "/" + (count === 2 ? fileName : "")
          ].name;
        break;
      case 3:
        itemUrl =
          site.url +
          "/" +
          singleSplit[i - 2] +
          "/" +
          singleSplit[i - 1] +
          "/" +
          fileName;
        itemTitle =
          jsonFile[
            "/" + singleSplit[i - 2] + "/" + singleSplit[i - 1] + "/" + fileName
          ].name;
        break;
    }

    const item = {
      "@type": "ListItem",
      position: i - 1,
      name: itemTitle,
      item: itemUrl,
    };

    if (count === i) {
      delete item.item;
    }

    listBox.push(item);
  }
  return listBox;
}
