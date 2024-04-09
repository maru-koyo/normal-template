import { htmlCommentout } from "../../utils/htmlCommentout.js";

const placeNames = ["<!doctype html>", '<script type="application/ld+json">'];

const autoInsert = [];

for (const placeName of placeNames) {
  let pos;
  pos = placeName === placeNames[0] ? "上" : "下";
  const data = {
    title: placeName,
    devide: htmlCommentout(`******************ここから${pos}には記載しないでください******************`),
  };
  autoInsert.push(data);
}

export { autoInsert };
