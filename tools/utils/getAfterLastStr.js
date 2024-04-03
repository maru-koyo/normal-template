export function getAfterLastStr(str, splitText = "/") {
  const slash = str.includes("\\") ? "\\" : splitText;
  return str.substring(str.lastIndexOf(slash) + 1);
}
