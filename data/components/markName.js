import { htmlCommentout } from "../utils/htmlCommentout.js";

const appName = "auto";
const placeNames = ["head", "structure"];
const conection = "-";

const autoInsert = [];

for (const placeName of placeNames) {
  const data = {
    title: htmlCommentout(appName + conection + placeName),
    start: htmlCommentout(
      "**********ここから下には記載しないでください**********"
    ),
    end: htmlCommentout(
      "**********ここから上には記載しないでください**********"
    ),
  };
  autoInsert.push(data);
}

export { autoInsert };
