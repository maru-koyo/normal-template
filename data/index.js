import fs from "fs";
import { glob } from "glob";
import { removeSubstring } from "./utils/removeSubstring.js";
import { head } from "./head.js";
import { structure } from "./structure.js";
import { autoInsert } from "./components/markName.js";
import { ignoreFiles } from "./ignoreHtml.js";
import { getAfterLastStr } from "./utils/getAfterLastStr.js";

const jsonFile = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

// --- 埋め込むhtmlを取得 ---
const htmls = await glob("src/**/*.html", { ignore: ignoreFiles });

// --- data.jsonからサイト全体のAPIを取得 ---
const site = jsonFile["site"];
const config = jsonFile["config"];

// --- 各ファイルごとに処理 ---
for (const html of htmls) {
  // --- 取得したファイルのルートパス取得

  let fileName = getAfterLastStr(html);

  const replaceText = fileName === "index.html" ? "" : fileName;

  let page = html.replace("src", "").replace(fileName, replaceText);

  if (page.includes("\\")) {
    page = page.split("\\").join("/");
  }

  // --- ルートパスの階層取得
  const count = page.match(/\//g).length;

  // --- data.jsonから対象のAPIを取得 ---
  const currentPage = jsonFile[page];

  if (!currentPage) {
    console.error(
      `こちらのページの情報がないのでスキップします：${site.url + page}`
    );
    continue;
  }

  let insertHead, insertStructure;
  config.head && (insertHead = head(site, currentPage, page, count, fileName));
  config.structure &&
    (insertStructure = structure(site, jsonFile, page, count));

  let existingHTML = fs.readFileSync(html, "utf-8");

  if (existingHTML.includes(autoInsert[0].title)) {
    existingHTML = removeSubstring(
      existingHTML,
      autoInsert[0].start,
      autoInsert[0].end
    );
  } else {
    config.head && (existingHTML = autoInsert[0].title + existingHTML);
  }
  if (existingHTML.includes(autoInsert[1].title)) {
    existingHTML = removeSubstring(
      existingHTML,
      autoInsert[1].start,
      autoInsert[1].end
    );
  } else {
    config.structure && (existingHTML = existingHTML + autoInsert[1].title);
  }

  config.head &&
    (existingHTML = existingHTML.replace(autoInsert[0].title, `${insertHead}`));

  config.structure &&
    (existingHTML = existingHTML.replace(
      autoInsert[1].title,
      `${insertStructure}`
    ));

  fs.writeFileSync(html, existingHTML);
}
